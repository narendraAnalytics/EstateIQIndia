'use client';

import React from 'react';
import { ArrowLeft, Building, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { StateAnalysis } from '../types';

interface StateDetailProps {
  analysis: StateAnalysis;
  isLoading: boolean;
  onBack: () => void;
}

const StateDetail: React.FC<StateDetailProps> = ({ analysis, isLoading, onBack }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 w-full">
        <div className="relative">
          <div className="h-16 w-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="absolute inset-0 h-16 w-16 border-4 border-yellow-500/30 rounded-full animate-ping"></div>
        </div>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500 text-lg font-medium animate-pulse">Gathering real-time market intelligence...</p>
        <p className="text-slate-400 text-sm mt-2">Connecting to Gemini Pro & Google Search</p>
      </div>
    );
  }

  // SVG Circular Progress Chart for Investment Score
  const CircularProgress = ({ score }: { score: number }) => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const progress = (score / 100) * circumference;
    const remaining = circumference - progress;

    return (
      <div className="relative w-32 h-32 animate-scaleIn">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          {/* Background Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="rgba(71, 85, 105, 0.3)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="url(#scoreGradient)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${progress} ${remaining}`}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.6))'
            }}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
        {/* Score Text */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-yellow-500">
            {score}
          </span>
          <span className="text-xs text-slate-400 font-medium">/ 100</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fadeInUp">
      <button
        onClick={onBack}
        className="flex items-center text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-yellow-500 transition-all duration-300 mb-2 group"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-[-4px] transition-transform" /> Back to Map
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Header Card */}
        <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-emerald-500/20 shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] hover:shadow-[0_12px_48px_0_rgba(217,119,6,0.25)] transition-all duration-500 hover:scale-[1.01] animate-scaleIn">
          <div className="flex justify-between items-start mb-4 gap-4">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600">
                  {analysis.stateName}
                </span>
              </h2>
              <p className="text-white leading-relaxed">{analysis.summary}</p>
            </div>
            <CircularProgress score={analysis.investmentScore} />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">Market Trends</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysis.marketTrends.map((trend, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-800/50 backdrop-blur-sm border border-emerald-500/20 rounded-full text-sm text-white hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:scale-105 transition-all duration-300 cursor-default shadow-lg"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {trend}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Card */}
        <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-yellow-500/20 shadow-[0_8px_32px_0_rgba(217,119,6,0.15)] hover:shadow-[0_12px_48px_0_rgba(16,185,129,0.25)] transition-all duration-500 hover:scale-[1.01] animate-scaleIn animation-delay-200">
           <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Building className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400">Infrastructure</span>
          </h3>
          <ul className="space-y-3">
            {analysis.infrastructureProjects.map((proj, i) => (
              <li key={i} className="flex items-start group hover:translate-x-1 transition-transform duration-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-1 shrink-0 group-hover:text-emerald-400 transition-colors" />
                <span className="text-sm text-white">{proj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fastest Growing Cities - Ranking Cards */}
      {analysis.fastestGrowingCities && analysis.fastestGrowingCities.length > 0 && (
        <div className="mt-6 bg-gradient-to-br from-emerald-900/30 via-yellow-900/10 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] animate-fadeInUp animation-delay-300">
          <h3 className="text-lg font-semibold mb-6 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-emerald-400 animate-float" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">Fastest Growing Cities</span>
          </h3>

          {/* Ranking Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analysis.fastestGrowingCities.map((city, idx) => {
              const growthPercent = parseFloat(city.growthRate.replace(/[^0-9.]/g, '')) || 0;
              const maxGrowth = 40;
              const barWidth = Math.min((growthPercent / maxGrowth) * 100, 100);

              // Ranking colors and icons
              const rankings = [
                {
                  icon: '🏆',
                  label: '1st Place',
                  borderColor: 'border-yellow-500/50',
                  shadowColor: 'shadow-[0_8px_32px_0_rgba(234,179,8,0.3)]',
                  hoverShadow: 'hover:shadow-[0_12px_48px_0_rgba(234,179,8,0.5)]',
                  badgeBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
                  scale: 'md:scale-105'
                },
                {
                  icon: '🥈',
                  label: '2nd Place',
                  borderColor: 'border-slate-400/40',
                  shadowColor: 'shadow-[0_8px_32px_0_rgba(148,163,184,0.2)]',
                  hoverShadow: 'hover:shadow-[0_12px_48px_0_rgba(148,163,184,0.4)]',
                  badgeBg: 'bg-gradient-to-br from-slate-400 to-slate-500',
                  scale: ''
                },
                {
                  icon: '🥉',
                  label: '3rd Place',
                  borderColor: 'border-orange-600/40',
                  shadowColor: 'shadow-[0_8px_32px_0_rgba(234,88,12,0.2)]',
                  hoverShadow: 'hover:shadow-[0_12px_48px_0_rgba(234,88,12,0.4)]',
                  badgeBg: 'bg-gradient-to-br from-orange-600 to-orange-700',
                  scale: ''
                }
              ];

              const rank = rankings[idx] || rankings[2];

              return (
                <div
                  key={idx}
                  className={`relative bg-slate-950/60 backdrop-blur-xl border-2 ${rank.borderColor} rounded-2xl p-6 ${rank.shadowColor} ${rank.hoverShadow} hover:scale-105 hover:-translate-y-2 transition-all duration-500 group animate-scaleIn ${rank.scale}`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  {/* Ranking Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center">
                    <div className={`absolute inset-0 ${rank.badgeBg} rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-300`}></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="text-2xl">{rank.icon}</span>
                    </div>
                  </div>

                  {/* Ranking Number */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-yellow-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                    <span className="relative z-10 text-white font-bold text-xl">#{idx + 1}</span>
                  </div>

                  {/* City Name */}
                  <div className="mt-6 mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-yellow-500 transition-all duration-300 mb-2">
                      {city.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{rank.label}</span>
                  </div>

                  {/* Growth Rate Display */}
                  <div className="mb-4">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">
                        {city.growthRate}
                      </span>
                      <span className="text-sm text-slate-400 ml-2">growth</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-3 bg-slate-800/60 rounded-full overflow-hidden border border-slate-700/50">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-yellow-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all duration-1000 ease-out"
                        style={{ width: `${barWidth}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20"></div>
                      </div>
                      {/* Percentage marker */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-1 h-5 bg-white shadow-lg transition-all duration-1000"
                        style={{ left: `${barWidth}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Growth Reason */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {city.reason}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500 to-transparent rounded-tl-full"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Top Investment Hotspots - Hexagonal Cards */}
      <h3 className="text-xl font-bold mt-8 mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600">
          Top Investment Hotspots
        </span>
      </h3>

      {/* Hexagonal Grid Container */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {analysis.topCities.map((city, idx) => (
            <div
              key={idx}
              className={`relative mx-auto w-full max-w-xs aspect-square group animate-scaleIn ${
                idx % 2 === 1 ? 'md:mt-12' : ''
              }`}
              style={{
                animationDelay: `${idx * 150}ms`
              }}
            >
              {/* Hexagon Container */}
              <div
                className="absolute inset-0 transition-all duration-500 hover:scale-110 hover:rotate-2"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                {/* Background with gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Inner content area */}
                <div
                  className="absolute inset-[3px] bg-slate-900/95 backdrop-blur-xl"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    {/* Tier Badge */}
                    <div className="mb-3">
                      <span className={`text-xs px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm ${
                        city.tier === 'Tier 1' ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/30' :
                        city.tier === 'Tier 2' ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50 shadow-lg shadow-blue-500/30' :
                        'bg-slate-700/50 text-slate-300 border border-slate-600/50'
                      }`}>
                        {city.tier}
                      </span>
                    </div>

                    {/* City Name */}
                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-yellow-500 transition-all duration-300">
                      {city.name}
                    </h4>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500 mb-1">
                        {city.avgPriceSqFt}
                      </div>
                      <div className="text-xs text-slate-400">per sq.ft average</div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 mb-4 line-clamp-3 leading-relaxed px-2">
                      {city.description}
                    </p>

                    {/* Growth Potential */}
                    <div className="flex items-center text-xs font-medium text-white">
                      <div className={`h-2.5 w-2.5 rounded-full mr-2 ${
                        city.growthPotential === 'High' ? 'bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/70' :
                        'bg-yellow-500 animate-pulse shadow-lg shadow-yellow-500/70'
                      }`}></div>
                      {city.growthPotential} Growth
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-br from-emerald-500/30 via-yellow-500/30 to-emerald-600/30"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                ></div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-full h-full border-t-2 border-l-2 border-emerald-400 transform rotate-45 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateDetail;