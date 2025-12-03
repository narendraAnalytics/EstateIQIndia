'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';

interface IndiaMapProps {
  onStateSelect: (stateName: string) => void;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ onStateSelect }) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // GeoJSON URL - complete India state-level map data
  const INDIA_GEOJSON_URL = '/data/india-states.geojson';

  // Union Territories list for color coding
  const UNION_TERRITORIES = [
    'Andaman and Nicobar', 'Chandigarh', 'Dadra and Nagar Haveli',
    'Daman and Diu', 'Delhi', 'Lakshadweep', 'Puducherry', 'Ladakh'
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full" style={{ perspective: '1200px' }}>
      <div
        className="relative w-full max-w-2xl aspect-[4/5] md:aspect-auto md:h-[700px] flex items-center justify-center backdrop-blur-xl rounded-3xl border border-emerald-500/40 transition-all duration-700 p-8 hover:scale-[1.02]"
        style={{
          background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(5deg) rotateY(-2deg)',
          boxShadow: `
            0 20px 60px rgba(16, 185, 129, 0.3),
            0 40px 100px rgba(217, 119, 6, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3)
          `
        }}
      >
        {/* Top Shine Layer (3D Light Reflection) */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 25%)',
          transform: 'translateZ(10px)'
        }}></div>

        {/* Subtle Vignette for Depth */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.2) 100%)'
        }}></div>

        {/* State Info Sidebar (Right Side) */}
        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 p-4 rounded-xl shadow-[0_8px_32px_0_rgba(16,185,129,0.3)] z-20 pointer-events-none transition-all duration-300 min-w-[180px] ${hoveredState ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95'}`}
        >
          <h3 className="text-lg font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">
              {hoveredState || 'India'}
            </span>
          </h3>
          {hoveredState ? (
             <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mt-1">Click to analyze</p>
          ) : (
             <p className="text-white text-xs mt-1">Hover over a region</p>
          )}
        </div>

        {/* Interactive Map using react-simple-maps */}
        <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1050,
              center: [82, 23]
            }}
            width={600}
            height={600}
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {/* Render States First (Lower z-index) */}
            <Geographies geography={INDIA_GEOJSON_URL}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => {
                    const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                    return !UNION_TERRITORIES.includes(stateName);
                  })
                  .map((geo) => {
                    const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                    const isHovered = hoveredState === stateName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setHoveredState(stateName);
                        }}
                        onMouseLeave={() => {
                          setHoveredState(null);
                        }}
                        onClick={() => {
                          onStateSelect(stateName);
                        }}
                        style={{
                          default: {
                            fill: isHovered ? 'url(#hoverGradient)' : 'rgba(16, 185, 129, 0.35)',
                            stroke: isHovered ? '#fbbf24' : 'rgba(52, 211, 153, 0.4)',
                            strokeWidth: isHovered ? 2.5 : 0.8,
                            outline: 'none',
                            cursor: 'pointer',
                            pointerEvents: 'all',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            transformOrigin: 'center',
                            filter: isHovered ? 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))' : 'none',
                          },
                          hover: {
                            fill: 'url(#hoverGradient)',
                            stroke: '#fbbf24',
                            strokeWidth: 2.5,
                            outline: 'none',
                            cursor: 'pointer',
                            pointerEvents: 'all',
                            transition: 'all 0.3s ease',
                            transform: 'scale(1.05)',
                            transformOrigin: 'center',
                            filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))',
                          },
                          pressed: {
                            fill: 'rgba(16, 185, 129, 0.7)',
                            stroke: '#10b981',
                            strokeWidth: 2.5,
                            outline: 'none',
                            pointerEvents: 'all',
                            filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))',
                          },
                        }}
                      />
                    );
                  })
              }
            </Geographies>

            {/* Render Union Territories Second (Higher z-index, Priority Hover) */}
            <Geographies geography={INDIA_GEOJSON_URL}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => {
                    const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                    return UNION_TERRITORIES.includes(stateName);
                  })
                  .map((geo) => {
                    const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                    const isHovered = hoveredState === stateName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setHoveredState(stateName);
                        }}
                        onMouseLeave={() => {
                          setHoveredState(null);
                        }}
                        onClick={() => {
                          onStateSelect(stateName);
                        }}
                        style={{
                          default: {
                            fill: isHovered ? 'url(#hoverGradient)' : 'rgba(251, 191, 36, 0.4)',
                            stroke: isHovered ? '#fbbf24' : 'rgba(251, 191, 36, 0.5)',
                            strokeWidth: isHovered ? 2.5 : 1.2,
                            outline: 'none',
                            cursor: 'pointer',
                            pointerEvents: 'all',
                            transition: 'all 0.3s ease',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            transformOrigin: 'center',
                            filter: isHovered ? 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))' : 'none',
                          },
                          hover: {
                            fill: 'url(#hoverGradient)',
                            stroke: '#fbbf24',
                            strokeWidth: 2.5,
                            outline: 'none',
                            cursor: 'pointer',
                            pointerEvents: 'all',
                            transition: 'all 0.3s ease',
                            transform: 'scale(1.05)',
                            transformOrigin: 'center',
                            filter: 'drop-shadow(0 0 15px rgba(251, 191, 36, 0.6))',
                          },
                          pressed: {
                            fill: 'rgba(251, 191, 36, 0.7)',
                            stroke: '#fbbf24',
                            strokeWidth: 2.5,
                            outline: 'none',
                            pointerEvents: 'all',
                            filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.8))',
                          },
                        }}
                      />
                    );
                  })
              }
            </Geographies>

            {/* Data Point Markers for States & UTs */}
            <Geographies geography={INDIA_GEOJSON_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const stateName = geo.properties.NAME_1 || geo.properties.name || 'Unknown';
                  const centroid = geoCentroid(geo);
                  const isUT = UNION_TERRITORIES.includes(stateName);

                  return (
                    <Marker key={`marker-${geo.rsmKey}`} coordinates={centroid}>
                      <circle
                        r={isUT ? 6.5 : 5}
                        fill={isUT ? '#fbbf24' : '#10b981'}
                        stroke="#fff"
                        strokeWidth={isUT ? 2 : 1.5}
                        opacity={0.95}
                        style={{
                          pointerEvents: 'none',
                          filter: isUT
                            ? 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.7))'
                            : 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))'
                        }}
                      />
                    </Marker>
                  );
                })
              }
            </Geographies>

            {/* SVG Gradients & Filters */}
            <defs>
              {/* Hover Gradient: Emerald to Yellow */}
              <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.7 }} />
                <stop offset="50%" style={{ stopColor: '#fbbf24', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0.7 }} />
              </linearGradient>

              {/* Radial Glow for Emerald States */}
              <radialGradient id="emeraldGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#34d399', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 0.3 }} />
              </radialGradient>

              {/* Glow Filter */}
              <filter id="stateGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </ComposableMap>
        </div>
      </div>

      <div className="mt-6 text-xs text-white text-center max-w-md bg-slate-900/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-emerald-500/10">
        <span className="text-emerald-400">*</span> Interactive stylised map. Boundaries are approximate representation for investment zones.
      </div>

      {/* Legend for data points */}
      <div className="mt-3 flex items-center justify-center gap-6 text-xs text-white">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 border border-white"></div>
          <span>States (28)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-white"></div>
          <span>Union Territories (8)</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaMap;
