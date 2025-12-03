import { MapPathProps } from './types';

// Simplified SVG paths for major Indian states/regions for the heatmap visual
// Note: These are stylized geometric representations for UI/UX purposes to form a recognizable India shape.
export const INDIA_MAP_PATHS: MapPathProps[] = [
  // North
  { id: 'JK', name: 'Jammu & Kashmir', d: 'M130,20 L160,10 L190,30 L170,60 L130,60 Z', investmentRating: 3 },
  { id: 'HP', name: 'Himachal Pradesh', d: 'M130,60 L170,60 L180,80 L140,90 Z', investmentRating: 4 },
  { id: 'PB', name: 'Punjab', d: 'M100,60 L130,60 L140,90 L110,100 Z', investmentRating: 4 },
  { id: 'UK', name: 'Uttarakhand', d: 'M170,60 L200,70 L190,100 L160,90 Z', investmentRating: 4 },
  { id: 'HR', name: 'Haryana', d: 'M130,90 L160,90 L155,120 L125,120 Z', investmentRating: 5 },
  { id: 'DL', name: 'Delhi', d: 'M145,105 L155,105 L155,115 L145,115 Z', investmentRating: 5 }, // Small box
  
  // West
  { id: 'RJ', name: 'Rajasthan', d: 'M70,100 L125,120 L110,180 L50,160 Z', investmentRating: 4 },
  { id: 'GJ', name: 'Gujarat', d: 'M30,160 L70,150 L110,190 L100,230 L40,210 Z', investmentRating: 5 },
  
  // Central
  { id: 'UP', name: 'Uttar Pradesh', d: 'M160,90 L230,100 L240,150 L160,150 Z', investmentRating: 4 },
  { id: 'MP', name: 'Madhya Pradesh', d: 'M110,180 L190,170 L200,220 L130,230 Z', investmentRating: 4 },
  { id: 'CG', name: 'Chhattisgarh', d: 'M190,170 L220,180 L210,240 L180,230 Z', investmentRating: 3 },
  
  // East
  { id: 'BR', name: 'Bihar', d: 'M230,100 L280,110 L270,140 L230,140 Z', investmentRating: 3 },
  { id: 'JH', name: 'Jharkhand', d: 'M230,140 L270,140 L260,180 L220,170 Z', investmentRating: 3 },
  { id: 'WB', name: 'West Bengal', d: 'M260,140 L280,130 L290,190 L260,180 Z', investmentRating: 4 },
  { id: 'OR', name: 'Odisha', d: 'M210,230 L260,220 L250,280 L200,270 Z', investmentRating: 3 },
  { id: 'SK', name: 'Sikkim', d: 'M280,110 L295,110 L290,125 L275,125 Z', investmentRating: 3 },
  
  // North East
  { id: 'NE', name: 'North East', d: 'M290,90 L360,80 L350,150 L290,130 Z', investmentRating: 3 },

  // South
  { id: 'MH', name: 'Maharashtra', d: 'M70,220 L180,220 L170,290 L90,310 Z', investmentRating: 5 },
  { id: 'TS', name: 'Telangana', d: 'M170,240 L210,230 L200,290 L160,290 Z', investmentRating: 5 },
  { id: 'GA', name: 'Goa', d: 'M90,310 L105,310 L100,325 L85,320 Z', investmentRating: 5 },
  { id: 'KA', name: 'Karnataka', d: 'M100,310 L160,290 L150,370 L110,390 Z', investmentRating: 5 },
  { id: 'AP', name: 'Andhra Pradesh', d: 'M200,290 L250,280 L230,360 L170,360 Z', investmentRating: 4 },
  { id: 'TN', name: 'Tamil Nadu', d: 'M140,380 L180,370 L170,440 L130,440 Z', investmentRating: 4 },
  { id: 'KL', name: 'Kerala', d: 'M110,390 L130,380 L140,430 L120,440 Z', investmentRating: 4 },
];

export const INITIAL_STATE_ANALYSIS = {
  stateName: "Select a State",
  investmentScore: 0,
  summary: "Hover over the map to see regions. Click a state to get detailed AI-driven investment analytics.",
  topCities: [],
  marketTrends: [],
  infrastructureProjects: []
};