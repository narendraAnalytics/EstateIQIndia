import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

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
      Using Google Maps data, identify:
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

      Use Google Search for latest price trends and Google Maps for precise location amenities.
      Format the response in clear markdown with sections.
    `;

    const config: any = {
      tools: [{ googleSearch: {} }, { googleMaps: {} }],
    };

    if (userLat && userLng) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: userLat,
            longitude: userLng
          }
        }
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config,
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    // Extract key information from the response text
    const extractSection = (text: string, keyword: string): string[] => {
      const lines = text.split('\n');
      const items: string[] = [];
      let inSection = false;

      for (const line of lines) {
        if (line.toLowerCase().includes(keyword.toLowerCase())) {
          inSection = true;
          continue;
        }
        if (inSection && line.trim().startsWith('-')) {
          items.push(line.trim().substring(1).trim());
        } else if (inSection && line.startsWith('#')) {
          break;
        }
      }
      return items;
    };

    const nearbyAmenities = extractSection(text, 'location analysis');
    const growthFactors = extractSection(text, 'growth factors');
    const riskFactors = extractSection(text, 'risk factors');

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

    return NextResponse.json({
      estimatedPriceRange,
      confidenceScore,
      locationAnalysis: text,
      nearbyAmenities,
      growthFactors,
      riskFactors,
      groundingChunks
    });
  } catch (error: any) {
    console.error("Valuation Error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze property' },
      { status: 500 }
    );
  }
}
