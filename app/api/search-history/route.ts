import { NextRequest, NextResponse } from 'next/server';
import { stackServerApp } from '@/lib/stack/server';
import { db } from '@/lib/db';
import { searchHistory, analysisResults } from '@/lib/db/schema';
import { desc, eq } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    // Get authenticated user
    const user = await stackServerApp.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized - Please log in to view search history' },
        { status: 401 }
      );
    }

    const userId = user.id;
    console.log('📜 Fetching search history for user:', userId);

    // Fetch all search history for this user
    const searches = await db
      .select()
      .from(searchHistory)
      .where(eq(searchHistory.userId, userId))
      .orderBy(desc(searchHistory.searchedAt))
      .limit(100); // Limit to last 100 searches

    // Group searches by type
    const stateSearches = searches
      .filter(s => s.searchType === 'state_analysis')
      .map(s => ({
        id: s.id,
        stateName: s.stateName,
        searchedAt: s.searchedAt,
        searchType: s.searchType,
      }));

    const propertySearches = searches
      .filter(s => s.searchType === 'property_valuation')
      .map(s => ({
        id: s.id,
        stateName: s.stateName,
        cityName: s.cityName,
        location: s.cityName ? `${s.cityName}, ${s.stateName}` : s.stateName,
        searchedAt: s.searchedAt,
        searchType: s.searchType,
      }));

    console.log(`✅ Found ${searches.length} searches (${stateSearches.length} state, ${propertySearches.length} property)`);

    return NextResponse.json({
      stateSearches,
      propertySearches,
      totalSearches: searches.length,
    });
  } catch (error: any) {
    console.error('❌ Search history error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch search history' },
      { status: 500 }
    );
  }
}
