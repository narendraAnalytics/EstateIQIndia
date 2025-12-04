'use client';

import React, { useState, useCallback } from 'react';
import { Map, AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps';
import { MapPin, Crosshair } from 'lucide-react';

interface LocationSelectorMapProps {
  onLocationSelect: (location: string, lat: number, lng: number) => void;
  initialCenter?: { lat: number; lng: number };
}

const LocationSelectorMap: React.FC<LocationSelectorMapProps> = ({
  onLocationSelect,
  initialCenter = { lat: 20.5937, lng: 78.9629 } // Center of India
}) => {
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [isGeocoding, setIsGeocoding] = useState(false);

  // Reverse geocode to get address from coordinates
  const reverseGeocode = async (lat: number, lng: number) => {
    setIsGeocoding(true);
    try {
      const geocoder = new google.maps.Geocoder();
      const response = await geocoder.geocode({ location: { lat, lng } });

      if (response.results && response.results.length > 0) {
        // Get the most relevant address (usually the first result)
        const result = response.results[0];

        // Try to find locality, sublocality, or administrative area
        let locationName = '';

        // Look for locality (city/town)
        const locality = result.address_components.find(
          comp => comp.types.includes('locality')
        );

        // Look for sublocality (neighborhood)
        const sublocality = result.address_components.find(
          comp => comp.types.includes('sublocality') || comp.types.includes('sublocality_level_1')
        );

        // Look for administrative area (state)
        const adminArea = result.address_components.find(
          comp => comp.types.includes('administrative_area_level_1')
        );

        if (sublocality && locality) {
          locationName = `${sublocality.long_name}, ${locality.long_name}`;
        } else if (locality) {
          locationName = locality.long_name;
        } else if (sublocality) {
          locationName = sublocality.long_name;
        } else if (adminArea) {
          locationName = adminArea.long_name;
        } else {
          locationName = result.formatted_address;
        }

        onLocationSelect(locationName, lat, lng);
      }
    } catch (error) {
      console.error('Reverse geocoding failed:', error);
      // Fallback to coordinates
      onLocationSelect(`${lat.toFixed(4)}, ${lng.toFixed(4)}`, lat, lng);
    } finally {
      setIsGeocoding(false);
    }
  };

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.detail?.latLng) {
      const lat = event.detail.latLng.lat;
      const lng = event.detail.latLng.lng;

      setMarkerPosition({ lat, lng });
      reverseGeocode(lat, lng);
    }
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-300 flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
          Or Select Location on Map
        </label>
        {isGeocoding && (
          <span className="text-xs text-emerald-400 flex items-center">
            <div className="h-3 w-3 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mr-2"></div>
            Getting location...
          </span>
        )}
      </div>

      <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-slate-700 shadow-lg group">
        <Map
          defaultCenter={initialCenter}
          defaultZoom={5}
          mapId="location_selector_map"
          gestureHandling="greedy"
          disableDefaultUI={false}
          onClick={handleMapClick}
          style={{ width: '100%', height: '100%' }}
          styles={[
            {
              elementType: 'geometry',
              stylers: [{ color: '#1e293b' }],
            },
            {
              elementType: 'labels.text.stroke',
              stylers: [{ color: '#0f172a' }],
            },
            {
              elementType: 'labels.text.fill',
              stylers: [{ color: '#94a3b8' }],
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#334155' }],
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#475569' }],
            },
          ]}
        >
          {markerPosition && (
            <AdvancedMarker
              position={markerPosition}
            >
              <Pin
                background="#10b981"
                borderColor="#064e3b"
                glyphColor="#ffffff"
                scale={1.3}
              />
            </AdvancedMarker>
          )}
        </Map>

        {/* Hint overlay */}
        {!markerPosition && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="bg-slate-900/90 backdrop-blur-sm border border-emerald-500/30 rounded-xl px-6 py-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <Crosshair className="w-6 h-6 text-emerald-400 animate-pulse" />
                <p className="text-sm text-slate-200 font-medium">
                  Click anywhere on the map to select location
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-slate-400 italic">
        Click on the map to automatically fill the location, or type manually above
      </p>
    </div>
  );
};

export default LocationSelectorMap;
