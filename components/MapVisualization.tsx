'use client';

import React from 'react';
import { MapPin, Star, Navigation2, Phone, Globe } from 'lucide-react';
import { GroundingChunk } from '../types';

interface MapVisualizationProps {
  groundingChunks: GroundingChunk[];
}

const MapVisualization: React.FC<MapVisualizationProps> = ({ groundingChunks }) => {
  const mapChunks = groundingChunks.filter(chunk => chunk.maps);

  if (mapChunks.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 pt-6 border-t border-slate-800">
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
        <MapPin className="w-5 h-5 text-blue-400 mr-2" />
        Nearby Places from Google Maps
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mapChunks.map((chunk, idx) => {
          if (!chunk.maps) return null;

          const place = chunk.maps;
          const reviews = place?.placeAnswerSources?.[0]?.reviewSnippets || [];

          return (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <a
                    href={place?.uri || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2"
                  >
                    {place?.title || 'Location'}
                  </a>
                </div>
                <Navigation2 className="w-4 h-4 text-blue-400 ml-2 shrink-0" />
              </div>

              {reviews.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-800">
                  <div className="flex items-center mb-2">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="text-xs text-slate-400">User Review</span>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-3">
                    {reviews[0]?.content}
                  </p>
                </div>
              )}

              <div className="mt-3">
                <a
                  href={place?.uri || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Globe className="w-3 h-3 mr-1" />
                  View on Maps
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapVisualization;
