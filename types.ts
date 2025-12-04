export interface CityData {
  name: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  growthPotential: 'High' | 'Moderate' | 'Stable';
  avgPriceSqFt: string;
  description: string;
}

export interface FastGrowingCity {
  name: string;
  growthRate: string;
  reason: string;
}

export interface ExecutiveSummary {
  overview: string;
  politicalFactors: string;
  economicFactors: string;
  marketOutlook: string;
}

export interface NewsArticle {
  headline: string;
  date: string;
  summary: string;
  source: string;
}

export interface StateAnalysis {
  stateName: string;
  investmentScore: number; // 1-100
  summary: string;
  executiveSummary?: ExecutiveSummary;
  latestNews?: NewsArticle[];
  topCities: CityData[];
  fastestGrowingCities?: FastGrowingCity[];
  marketTrends: string[];
  infrastructureProjects: string[];
}

export interface GroundingChunk {
  web?: any;
  maps?: any;
}

export interface ValuationResult {
  estimatedPriceRange: string;
  confidenceScore: string;
  locationAnalysis: string;
  nearbyAmenities: string[];
  growthFactors: string[];
  riskFactors: string[];
  categorizedAmenities?: {
    schools: string[];
    hospitals: string[];
    transport: string[];
    shopping: string[];
    parks: string[];
  };
  groundingChunks?: GroundingChunk[];
}

export enum AppView {
  HEATMAP = 'HEATMAP',
  STATE_DETAIL = 'STATE_DETAIL',
  VALUATION = 'VALUATION'
}

export interface MapPathProps {
  id: string;
  name: string;
  d: string;
  investmentRating?: number; // 1-5 for color coding default
}