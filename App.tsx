'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IndiaMap from './components/IndiaMap';
import StateDetail from './components/StateDetail';
import InvestmentAnalyzer from './components/InvestmentAnalyzer';
import { AppView, StateAnalysis } from './types';
import { getStateAnalysis } from './services/geminiService';
import { INITIAL_STATE_ANALYSIS } from './constants';

const App: React.FC = () => {
  const [currentView, setView] = useState<AppView>(AppView.HEATMAP);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [stateAnalysis, setStateAnalysis] = useState<StateAnalysis>(INITIAL_STATE_ANALYSIS);
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(false);

  const handleStateSelect = async (stateName: string) => {
    setSelectedState(stateName);
    setView(AppView.STATE_DETAIL);
    setIsAnalysisLoading(true);
    
    try {
      // Simulate API delay or actual call if API Key is present
      // We start with initial data to show UI immediately then fetch
      setStateAnalysis({ ...INITIAL_STATE_ANALYSIS, stateName }); // Optimistic update
      
      const data = await getStateAnalysis(stateName);
      setStateAnalysis(data);
    } catch (error) {
      console.error("Failed to fetch state analysis", error);
      // Fallback or error state could be handled here
    } finally {
      setIsAnalysisLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-emerald-500/30">
      <Header currentView={currentView} setView={setView} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {currentView === AppView.HEATMAP && (
          <div className="space-y-8 animate-fadeInUp">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600 animate-shimmer bg-[length:200%_auto]">
                  Invest Smarter with AI Insights
                </span>
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
                Explore India's real estate potential. Hover over regions to identify high-growth zones and click to get deep-dive analytics powered by Gemini Pro.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
              <div className="w-full lg:w-1/2 flex justify-center">
                <IndiaMap onStateSelect={handleStateSelect} />
              </div>
              
              <div className="w-full lg:w-1/3 space-y-6">
                 <div className="bg-slate-900/40 backdrop-blur-xl border border-emerald-500/20 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] hover:shadow-[0_8px_48px_0_rgba(217,119,6,0.25)] transition-all duration-300 hover:scale-[1.02] animate-scaleIn">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500">Live Heatmap Legend</span>
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center group">
                        <div className="w-4 h-4 bg-emerald-500 rounded mr-3 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-shadow"></div>
                        <span className="text-white">High Growth / Top Tier (Rating 5)</span>
                      </div>
                      <div className="flex items-center group">
                        <div className="w-4 h-4 bg-emerald-600/60 rounded mr-3 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-shadow"></div>
                        <span className="text-white">Moderate Growth (Rating 4)</span>
                      </div>
                      <div className="flex items-center group">
                        <div className="w-4 h-4 bg-slate-600 rounded mr-3 group-hover:shadow-lg group-hover:shadow-slate-600/50 transition-shadow"></div>
                        <span className="text-white">Stable / Emerging (Rating 3)</span>
                      </div>
                    </div>
                 </div>

                 <div className="bg-gradient-to-br from-emerald-900/30 via-yellow-900/10 to-slate-900/40 backdrop-blur-xl border border-yellow-500/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(217,119,6,0.2)] hover:shadow-[0_8px_48px_0_rgba(217,119,6,0.35)] transition-all duration-300 hover:scale-[1.02] animate-scaleIn animation-delay-200">
                   <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-emerald-400 mb-2">💡 Pro Tip</h3>
                   <p className="text-sm text-white">
                     Tier 2 cities like Indore, Coimbatore, and Jaipur are showing 15% higher year-on-year appreciation compared to saturated Tier 1 metros.
                   </p>
                 </div>
              </div>
            </div>
          </div>
        )}

        {currentView === AppView.STATE_DETAIL && (
          <StateDetail 
            analysis={stateAnalysis} 
            isLoading={isAnalysisLoading} 
            onBack={() => setView(AppView.HEATMAP)} 
          />
        )}

        {currentView === AppView.VALUATION && (
          <InvestmentAnalyzer />
        )}
      </main>
    </div>
  );
};

export default App;