import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { stackServerApp } from '@/lib/stack/server';
import { db } from '@/lib/db';
import { searchHistory, analysisResults } from '@/lib/db/schema';
import { and, eq, gt, isNull } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { location, propertyType, details, userLat, userLng } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY || '';

    console.log('🏠 Property valuation requested for:', location);
    console.log('🔑 API Key Status:', apiKey ? `Loaded (length: ${apiKey.length})` : '❌ EMPTY');

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API Key missing' },
        { status: 500 }
      );
    }

    if (!location || !propertyType) {
      return NextResponse.json(
        { error: 'Location and property type are required' },
        { status: 400 }
      );
    }

    // Get authenticated user (if logged in)
    let userId: string | null = null;
    try {
      const user = await stackServerApp.getUser();
      userId = user?.id || null;
      if (userId) {
        console.log('✅ User authenticated:', userId);
      } else {
        console.log('ℹ️ Anonymous user - proceeding without database saves');
      }
    } catch (error) {
      console.log('ℹ️ User not authenticated - proceeding without database saves');
    }

    // Check for cached property valuation (if user is logged in)
    if (userId) {
      try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        // Extract city/state from location string (e.g., "Whitefield, Bangalore" -> "Bangalore")
        const locationParts = location.split(',').map((s: string) => s.trim());
        const cityName = locationParts.length > 1 ? locationParts[locationParts.length - 1] : location;

        const cachedAnalysis = await db
          .select()
          .from(analysisResults)
          .where(
            and(
              eq(analysisResults.userId, userId),
              eq(analysisResults.analysisType, 'property_valuation'),
              gt(analysisResults.createdAt, sevenDaysAgo),
              gt(analysisResults.expiresAt, new Date())
            )
          )
          .limit(1);

        // Check if cached result matches location and property type
        if (cachedAnalysis.length > 0) {
          const cached = cachedAnalysis[0].analysisData as any;
          if (cached && cached.location === location && cached.propertyType === propertyType) {
            console.log('🎯 Returning cached property valuation for:', location);
            return NextResponse.json(cached);
          }
        }

        console.log('📊 No cache found, fetching fresh valuation from Gemini');
      } catch (dbError) {
        console.error('⚠️ Database cache check failed (continuing with API call):', dbError);
      }
    }

    // Initialize GoogleGenAI inside the function
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
      Analyze real estate investment for a ${propertyType} in ${location}, India.
      ${details ? `Property details: ${details}` : ''}

      Provide a comprehensive analysis including:

      ## Price Estimation
      - Current market price range (₹ per sq.ft or total price)
      - Comparison with nearby areas
      - Recent price trends in the location

      ## Location Analysis
      Using Google Search, identify:
      - Nearby schools, colleges, and educational institutions
      - Healthcare facilities (hospitals, clinics)
      - Public transport connectivity (metro, bus, railway)
      - Shopping centers, malls, markets
      - Parks, recreational facilities
      - Distance from major landmarks/IT hubs

      ## Investment Potential
      - Growth factors (upcoming infrastructure, IT parks, metro lines)
      - Rental yield potential
      - Capital appreciation forecast (3-5 years)
      - Risk factors to consider

      ## Confidence Score
      Rate your analysis confidence: Low/Medium/High

      Use Google Search for latest price trends and location amenities data.
      Format the response in clear markdown with sections.
    `;

    const config = {
      tools: [{ googleSearch: {} }],
    };

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config,
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    // Clean markdown formatting symbols
    const cleanMarkdown = (text: string): string => {
      return text
        .replace(/\*\*/g, '')        // Remove bold markers (**)
        .replace(/\*/g, '')          // Remove italic markers (*)
        .replace(/^#{1,6}\s+/gm, '') // Remove heading markers (# ## ###)
        .replace(/`/g, '')           // Remove code markers (`)
        .trim();
    };

    const cleanedText = cleanMarkdown(text);

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Enhanced extraction functions
    const extractSection = (text: string, keyword: string): string[] => {
      const lines = text.split('\n');
      const items: string[] = [];
      let inSection = false;

      for (const line of lines) {
        const trimmedLine = line.trim();

        // Check if this line contains the keyword (case-insensitive, handle markdown headers)
        if (trimmedLine.toLowerCase().includes(keyword.toLowerCase())) {
          inSection = true;
          continue;
        }

        // If in section, extract bullet points
        if (inSection) {
          // Check for bullet points (-, *, •)
          if (trimmedLine.startsWith('-') || trimmedLine.startsWith('*') || trimmedLine.startsWith('•')) {
            const cleaned = trimmedLine.substring(1).trim();
            if (cleaned) items.push(cleaned);
          }
          // Stop at next section header
          else if (trimmedLine.startsWith('#') || (trimmedLine.startsWith('##') && !trimmedLine.toLowerCase().includes(keyword.toLowerCase()))) {
            break;
          }
        }
      }
      return items;
    };

    // Extract sections
    const nearbyAmenities = extractSection(text, 'location analysis');
    const growthFactors = extractSection(text, 'growth factor');
    const riskFactors = extractSection(text, 'risk factor');

    // Extract categorized location data
    const schools = extractSection(text, 'school') || extractSection(text, 'education');
    const hospitals = extractSection(text, 'hospital') || extractSection(text, 'healthcare');
    const transport = extractSection(text, 'transport') || extractSection(text, 'connectivity');
    const shopping = extractSection(text, 'shopping') || extractSection(text, 'mall');
    const parks = extractSection(text, 'park') || extractSection(text, 'recreation');

    // Extract price range if mentioned
    const priceMatch = text.match(/₹[\d,]+-?[\d,]*/g);
    const estimatedPriceRange = priceMatch ? priceMatch[0] : "See detailed analysis";

    // Extract confidence score
    let confidenceScore = "Medium";
    if (text.toLowerCase().includes('high confidence') || text.toLowerCase().includes('confidence: high')) {
      confidenceScore = "High";
    } else if (text.toLowerCase().includes('low confidence') || text.toLowerCase().includes('confidence: low')) {
      confidenceScore = "Low";
    }

    const resultData = {
      location,
      propertyType,
      estimatedPriceRange,
      confidenceScore,
      locationAnalysis: cleanedText,
      nearbyAmenities,
      growthFactors,
      riskFactors,
      categorizedAmenities: {
        schools,
        hospitals,
        transport,
        shopping,
        parks
      },
      groundingChunks
    };

    // Save to database (if user is logged in)
    if (userId) {
      try {
        // Extract city/state from location string
        const locationParts = location.split(',').map((s: string) => s.trim());
        const cityName = locationParts.length > 1 ? locationParts[locationParts.length - 1] : location;
        const stateName = locationParts.length > 2 ? locationParts[locationParts.length - 2] : cityName;

        // Save search history
        await db.insert(searchHistory).values({
          userId,
          stateName,
          cityName,
          searchType: 'property_valuation',
        });

        // Calculate expiration date (7 days from now)
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        // Save property valuation result for caching
        await db.insert(analysisResults).values({
          userId,
          stateName,
          cityName,
          analysisType: 'property_valuation',
          analysisData: resultData,
          expiresAt,
        });

        console.log('💾 Saved property valuation to database for user:', userId);
      } catch (dbError) {
        console.error('⚠️ Failed to save to database (non-critical):', dbError);
        // Don't fail the request if database save fails
      }
    }

    return NextResponse.json(resultData);
  } catch (error: any) {
    console.error("Valuation Error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze property' },
      { status: 500 }
    );
  }
}
