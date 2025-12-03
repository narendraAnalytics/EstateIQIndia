import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

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

    // Initialize GoogleGenAI inside the function
    const ai = new GoogleGenAI({ apiKey });

    const prompt = `You are an expert India real estate investment advisor. Analyze the investment potential for ${stateName} state.

IMPORTANT: Use PLAIN TEXT ONLY. Do NOT use markdown formatting symbols like **, *, #, or other markup. Write clean, readable text without any formatting characters.

**USE GOOGLE SEARCH** for the latest Q4 2024 / Q1 2025 data on:
- Property price trends and YoY appreciation rates (2023-2025)
- Recent infrastructure project announcements
- IT parks, SEZ, and business hub developments
- RERA compliance status and state regulations
- Stamp duty rates and circle rates
- Government housing schemes (PMAY, Smart Cities, AMRUT)
- Fastest growing cities by price appreciation

**USE GOOGLE MAPS** to identify:
- Metro/railway connectivity for major cities
- Proximity to IT hubs, airports, business districts
- Upcoming metro lines and infrastructure corridors

**Analysis Requirements:**

1. **Investment Score (1-100):** Based on infrastructure, economic growth, property appreciation, rental yields, and regulatory environment.

2. **Market Summary:** 2-3 sentences covering current market conditions, recent price trends, and growth drivers.

3. **Top Cities (3-5):** Select cities with best overall investment potential. For EACH city provide:
   - Name
   - Tier classification (Tier 1/2/3) with justification
   - Growth potential (High/Moderate/Stable) based on upcoming projects
   - Average price per sq.ft (₹) - mention area type (e.g., "₹5,500 in prime localities")
   - Description: Why invest? Include proximity to IT hubs, metro stations, rental yield potential, infrastructure access

4. **Fastest Growing Cities (Top 3):** Cities with highest price appreciation in ${stateName}:
   - City name
   - YoY growth rate (%) for 2023-2024
   - Reason for rapid growth (new metro, IT park, airport expansion, smart city status, etc.)

5. **Market Trends (3-5 key trends):**
   - Overall state price appreciation % (YoY 2023-2025)
   - Emerging micro-markets and localities
   - Demand shifts (residential vs commercial)
   - Impact of new infrastructure projects
   - Rental yield trends and investment preferences

6. **Infrastructure Projects (3-5 major projects):**
   - Include project name, timeline/completion year, and investment impact
   - Focus on: metro lines, expressways, airports, IT parks, smart city initiatives, industrial corridors

**CRITICAL:**
1. Return ONLY a valid JSON object. No explanatory text before or after.
2. All text in descriptions, trends, and reasons must be PLAIN TEXT without markdown symbols (**, *, #, etc.)

JSON Format:
{
  "stateName": "${stateName}",
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
      "growthRate": "<XX% YoY 2023-2024>",
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
      console.log('✅ Successfully parsed state analysis for:', stateName);
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
