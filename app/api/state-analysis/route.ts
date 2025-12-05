import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";
import { stackServerApp } from '@/lib/stack/server';
import { db } from '@/lib/db';
import { searchHistory, analysisResults } from '@/lib/db/schema';
import { and, eq, gt, isNull } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { stateName } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY || '';

    console.log('📍 State analysis requested for:', stateName);
    console.log('🔑 API Key Status:', apiKey ? `Loaded (length: ${apiKey.length})` : '❌ EMPTY');

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API Key missing' },
        { status: 500 }
      );
    }

    if (!stateName) {
      return NextResponse.json(
        { error: 'State name is required' },
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

    // Check for cached analysis (if user is logged in)
    if (userId) {
      try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const cachedAnalysis = await db
          .select()
          .from(analysisResults)
          .where(
            and(
              eq(analysisResults.userId, userId),
              eq(analysisResults.stateName, stateName),
              eq(analysisResults.analysisType, 'state_overview'),
              gt(analysisResults.createdAt, sevenDaysAgo),
              isNull(analysisResults.expiresAt)
            )
          )
          .limit(1);

        if (cachedAnalysis.length > 0) {
          console.log('🎯 Returning cached analysis for:', stateName);
          return NextResponse.json(cachedAnalysis[0].analysisData);
        } else {
          console.log('📊 No cache found, fetching fresh analysis from Gemini');
        }
      } catch (dbError) {
        console.error('⚠️ Database cache check failed (continuing with API call):', dbError);
      }
    }

    // Initialize GoogleGenAI inside the function
    const ai = new GoogleGenAI({ apiKey });

    // Calculate current date and 6 months ago dynamically
    const currentDate = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    // Format dates for the prompt
    const currentDateStr = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const sixMonthsAgoStr = sixMonthsAgo.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const currentYear = currentDate.getFullYear();

    const prompt = `You are an expert India real estate investment advisor. Analyze the investment potential for ${stateName} state.

IMPORTANT - TODAY'S DATE: ${currentDateStr}
Current Year: ${currentYear}

IMPORTANT: Use PLAIN TEXT ONLY. Do NOT use markdown formatting symbols like **, *, #, or other markup. Write clean, readable text without any formatting characters.

**USE GOOGLE SEARCH** for the latest data on:
- Property price trends and YoY appreciation rates (${currentYear} - CURRENT YEAR DATA ONLY)
- Recent infrastructure project announcements
- IT parks, SEZ, and business hub developments
- RERA compliance status and state regulations
- Stamp duty rates and circle rates
- Government housing schemes (PMAY, Smart Cities, AMRUT)
- Fastest growing cities by price appreciation
- Latest real estate news and market developments (from ${sixMonthsAgoStr} to ${currentDateStr} ONLY)
- Political factors affecting real estate (policies, regulations, government initiatives)
- Economic indicators (GDP growth, employment rates, major industries)

**USE GOOGLE MAPS** to identify:
- Metro/railway connectivity for major cities
- Proximity to IT hubs, airports, business districts
- Upcoming metro lines and infrastructure corridors

**Analysis Requirements:**

1. **Executive Summary:** Provide a comprehensive overview covering:
   - Overview: 2-3 sentences about the overall real estate landscape
   - Political Factors: Government policies, regulatory changes, upcoming elections impact, housing schemes
   - Economic Factors: State GDP growth, employment trends, major industries, investment climate
   - Market Outlook: Future projections, emerging opportunities, risk factors

2. **Latest Real Estate News (5-7 recent articles):** Search for latest news about ${stateName} real estate from ${sixMonthsAgoStr} to ${currentDateStr}:
   - MUST be published between ${sixMonthsAgoStr} and ${currentDateStr} (NO older articles from previous years)
   - Headline
   - Date (format: "DD MMM YYYY")
   - Summary (1-2 sentences)
   - Source name

3. **Investment Score (1-100):** Based on infrastructure, economic growth, property appreciation, rental yields, and regulatory environment.

4. **Market Summary:** 2-3 sentences covering current market conditions, recent price trends, and growth drivers.

5. **Top Cities (3-5):** Select cities with best overall investment potential. For EACH city provide:
   - Name
   - Tier classification (Tier 1/2/3) with justification
   - Growth potential (High/Moderate/Stable) based on upcoming projects
   - Average price per sq.ft (₹) - mention area type (e.g., "₹5,500 in prime localities")
   - Description: Why invest? Include proximity to IT hubs, metro stations, rental yield potential, infrastructure access

6. **Fastest Growing Cities (Top 3):** Cities with highest price appreciation in ${stateName}:
   - City name
   - YoY growth rate (%) for ${currentYear-1}-${currentYear} (USE CURRENT YEAR DATA)
   - Reason for rapid growth (new metro, IT park, airport expansion, smart city status, etc.)

7. **Market Trends (3-5 key trends):**
   - Overall state price appreciation % (YoY ${currentYear-1}-${currentYear} - CURRENT YEAR ONLY)
   - Emerging micro-markets and localities
   - Demand shifts (residential vs commercial)
   - Impact of new infrastructure projects
   - Rental yield trends and investment preferences

8. **Infrastructure Projects (3-5 major projects):**
   - Include project name, timeline/completion year, and investment impact
   - Focus on: metro lines, expressways, airports, IT parks, smart city initiatives, industrial corridors

**CRITICAL:**
1. Return ONLY a valid JSON object. No explanatory text before or after.
2. All text in descriptions, trends, and reasons must be PLAIN TEXT without markdown symbols (**, *, #, etc.)
3. For growth rates, use LATEST ${currentYear-1}-${currentYear} data from Google Search
4. For news, fetch REAL recent articles published between ${sixMonthsAgoStr} and ${currentDateStr} ONLY - reject any older articles

JSON Format:
{
  "stateName": "${stateName}",
  "executiveSummary": {
    "overview": "<2-3 sentences about overall real estate landscape>",
    "politicalFactors": "<government policies, regulations, elections impact, housing schemes>",
    "economicFactors": "<GDP growth, employment, industries, investment climate>",
    "marketOutlook": "<future projections, opportunities, risks>"
  },
  "latestNews": [
    {
      "headline": "<news headline>",
      "date": "<DD MMM YYYY>",
      "summary": "<1-2 sentence summary>",
      "source": "<source name>"
    }
  ],
  "investmentScore": <number 1-100>,
  "summary": "<comprehensive 2-3 sentence market overview>",
  "topCities": [
    {
      "name": "<city name>",
      "tier": "Tier 1" | "Tier 2" | "Tier 3",
      "growthPotential": "High" | "Moderate" | "Stable",
      "avgPriceSqFt": "₹XXXX in <area type>",
      "description": "<investment rationale with specific factors>"
    }
  ],
  "fastestGrowingCities": [
    {
      "name": "<city name>",
      "growthRate": "<XX% YoY ${currentYear-1}-${currentYear}>",
      "reason": "<why it's growing fast>"
    }
  ],
  "marketTrends": ["<specific trend with data/percentages>", "..."],
  "infrastructureProjects": ["<project name with timeline and impact>", "..."]
}

Return ONLY the JSON object, nothing else.`;

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

    // Enhanced JSON extraction - handles text before/after JSON and markdown blocks
    let jsonText = text.trim();

    // Remove all markdown code blocks (```json or ``` anywhere in the text)
    jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '');

    // Find the actual JSON object by locating the first { and last }
    const firstBrace = jsonText.indexOf('{');
    const lastBrace = jsonText.lastIndexOf('}');

    if (firstBrace === -1 || lastBrace === -1 || firstBrace >= lastBrace) {
      console.error('❌ No valid JSON object found in response');
      console.error('Full response (first 500 chars):', text.substring(0, 500));
      throw new Error('AI returned invalid JSON format - no JSON object found');
    }

    // Extract just the JSON object
    jsonText = jsonText.substring(firstBrace, lastBrace + 1).trim();

    try {
      const data = JSON.parse(jsonText);

      // Validate and transform arrays to ensure they contain only strings
      if (data.marketTrends && Array.isArray(data.marketTrends)) {
        data.marketTrends = data.marketTrends.map((item: any) => {
          if (typeof item === 'string') return item;
          if (typeof item === 'object' && item !== null) {
            // If it's an object, concatenate its values
            return Object.values(item).join(' - ');
          }
          return String(item);
        });
      }

      if (data.infrastructureProjects && Array.isArray(data.infrastructureProjects)) {
        data.infrastructureProjects = data.infrastructureProjects.map((item: any) => {
          if (typeof item === 'string') return item;
          if (typeof item === 'object' && item !== null) {
            // If it's an object, concatenate its values
            return Object.values(item).join(' - ');
          }
          return String(item);
        });
      }

      console.log('✅ Successfully parsed state analysis for:', stateName);

      // Save to database (if user is logged in)
      if (userId) {
        try {
          // Save search history
          await db.insert(searchHistory).values({
            userId,
            stateName,
            searchType: 'state_analysis',
          });

          // Calculate expiration date (7 days from now)
          const expiresAt = new Date();
          expiresAt.setDate(expiresAt.getDate() + 7);

          // Save analysis result for caching
          await db.insert(analysisResults).values({
            userId,
            stateName,
            analysisType: 'state_overview',
            analysisData: data,
            investmentRating: data.investmentScore || null,
            expiresAt,
          });

          console.log('💾 Saved analysis to database for user:', userId);
        } catch (dbError) {
          console.error('⚠️ Failed to save to database (non-critical):', dbError);
          // Don't fail the request if database save fails
        }
      }

      return NextResponse.json(data);
    } catch (parseError) {
      console.error('❌ Failed to parse JSON');
      console.error('Extracted JSON (first 500 chars):', jsonText.substring(0, 500));
      console.error('Full AI response (first 500 chars):', text.substring(0, 500));
      console.error('Parse error:', parseError);
      throw new Error('AI returned invalid JSON format - parse failed');
    }
  } catch (error: any) {
    console.error("State Analysis Error:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze state' },
      { status: 500 }
    );
  }
}
