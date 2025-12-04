'use client';

import React, { useState, useEffect } from 'react';
import { Map, AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import { MapPin, GraduationCap, Heart, Bus, ShoppingBag, Trees } from 'lucide-react';

interface AmenityMarker {
  id: string;
  position: { lat: number; lng: number };
  title: string;
  category: 'school' | 'hospital' | 'transport' | 'shopping' | 'park';
  details?: string;
}

interface PropertyLocationMapProps {
  center: { lat: number; lng: number };
  amenities?: {
    schools?: string[];
    hospitals?: string[];
    transport?: string[];
    shopping?: string[];
    parks?: string[];
  };
}

const PropertyLocationMap: React.FC<PropertyLocationMapProps> = ({ center, amenities }) => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [markers, setMarkers] = useState<AmenityMarker[]>([]);

  useEffect(() => {
    // Generate markers for amenities with simulated positions around the center
    // In a real implementation, you would geocode the amenity addresses
    const generatedMarkers: AmenityMarker[] = [];
    let idCounter = 0;

    const addMarkersForCategory = (
      items: string[] | undefined,
      category: 'school' | 'hospital' | 'transport' | 'shopping' | 'park',
      offsetMultiplier: number
    ) => {
      if (!items || items.length === 0) return;

      items.forEach((item, index) => {
        // Generate positions in a circle around the center
        const angle = (index / items.length) * 2 * Math.PI;
        const radius = 0.01 * offsetMultiplier; // ~1km radius

        generatedMarkers.push({
          id: `${category}-${idCounter++}`,
          position: {
            lat: center.lat + radius * Math.cos(angle),
            lng: center.lng + radius * Math.sin(angle),
          },
          title: item,
          category,
        });
      });
    };

    addMarkersForCategory(amenities?.schools, 'school', 1);
    addMarkersForCategory(amenities?.hospitals, 'hospital', 1.2);
    addMarkersForCategory(amenities?.transport, 'transport', 0.8);
    addMarkersForCategory(amenities?.shopping, 'shopping', 1.5);
    addMarkersForCategory(amenities?.parks, 'park', 1.3);

    setMarkers(generatedMarkers);
  }, [center, amenities]);

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'school':
        return '#3b82f6'; // blue
      case 'hospital':
        return '#ef4444'; // red
      case 'transport':
        return '#eab308'; // yellow
      case 'shopping':
        return '#a855f7'; // purple
      case 'park':
        return '#10b981'; // emerald
      default:
        return '#64748b'; // slate
    }
  };

  const getCategoryIcon = (category: string) => {
    const iconProps = { className: 'w-4 h-4' };
    switch (category) {
      case 'school':
        return <GraduationCap {...iconProps} />;
      case 'hospital':
        return <Heart {...iconProps} />;
      case 'transport':
        return <Bus {...iconProps} />;
      case 'shopping':
        return <ShoppingBag {...iconProps} />;
      case 'park':
        return <Trees {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  const getCategoryLabel = (category: string): string => {
    switch (category) {
      case 'school':
        return 'Education';
      case 'hospital':
        return 'Healthcare';
      case 'transport':
        return 'Transport';
      case 'shopping':
        return 'Shopping';
      case 'park':
        return 'Recreation';
      default:
        return 'Location';
    }
  };

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
      <Map
        defaultCenter={center}
        defaultZoom={13}
        mapId="estateiq_map"
        gestureHandling="greedy"
        disableDefaultUI={false}
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
        {/* Property Location Marker */}
        <AdvancedMarker
          position={center}
          onClick={() => setSelectedMarker('property')}
        >
          <Pin
            background="#10b981"
            borderColor="#064e3b"
            glyphColor="#ffffff"
            scale={1.4}
          />
        </AdvancedMarker>

        {selectedMarker === 'property' && (
          <InfoWindow
            position={center}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="p-2 bg-slate-900 rounded-lg">
              <h3 className="font-semibold text-white mb-1">Property Location</h3>
              <p className="text-xs text-slate-300">Target investment area</p>
            </div>
          </InfoWindow>
        )}

        {/* Amenity Markers */}
        {markers.map((marker) => (
          <React.Fragment key={marker.id}>
            <AdvancedMarker
              position={marker.position}
              onClick={() => setSelectedMarker(marker.id)}
            >
              <Pin
                background={getCategoryColor(marker.category)}
                borderColor="#1e293b"
                glyphColor="#ffffff"
                scale={1}
              />
            </AdvancedMarker>

            {selectedMarker === marker.id && (
              <InfoWindow
                position={marker.position}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className="p-3 bg-slate-900 rounded-lg min-w-[200px]">
                  <div className="flex items-center space-x-2 mb-2">
                    <div
                      className="p-1.5 rounded-lg"
                      style={{ backgroundColor: `${getCategoryColor(marker.category)}20` }}
                    >
                      <div style={{ color: getCategoryColor(marker.category) }}>
                        {getCategoryIcon(marker.category)}
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold uppercase"
                      style={{ color: getCategoryColor(marker.category) }}
                    >
                      {getCategoryLabel(marker.category)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{marker.title}</h3>
                  {marker.details && (
                    <p className="text-xs text-slate-300 mt-2">{marker.details}</p>
                  )}
                </div>
              </InfoWindow>
            )}
          </React.Fragment>
        ))}
      </Map>
    </div>
  );
};

export default PropertyLocationMap;
