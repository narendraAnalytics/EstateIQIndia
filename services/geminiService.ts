import { StateAnalysis, ValuationResult } from '../types';

export const getStateAnalysis = async (stateName: string): Promise<StateAnalysis> => {
  try {
    const response = await fetch('/api/state-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stateName }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch state analysis');
    }

    const data = await response.json();
    return data as StateAnalysis;
  } catch (error) {
    console.error("State Analysis Error:", error);
    throw error;
  }
};

export const getPropertyValuation = async (
  location: string,
  propertyType: string,
  details: string,
  userLat?: number,
  userLng?: number
): Promise<ValuationResult> => {
  try {
    const response = await fetch('/api/property-valuation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location,
        propertyType,
        details,
        userLat,
        userLng
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to fetch property valuation');
    }

    const data = await response.json();
    return data as ValuationResult;
  } catch (error) {
    console.error("Valuation Error:", error);
    throw error;
  }
};
