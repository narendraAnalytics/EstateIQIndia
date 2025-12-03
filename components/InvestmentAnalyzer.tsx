'use client';

import React, { useState } from 'react';
import { Search, MapPin, Navigation, Info, ExternalLink, TrendingUp, AlertTriangle, Building } from 'lucide-react';
import { getPropertyValuation } from '../services/geminiService';
import { ValuationResult } from '../types';
import ReactMarkdown from 'react-markdown';
import MapVisualization from './MapVisualization';

const InvestmentAnalyzer: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValuationResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) return;

    setLoading(true);
    setResult(null);

    try {
      // Get current location if possible, but don't block
      let lat, lng;
      try {
        if (navigator.geolocation) {
           const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
             navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
           });
           lat = pos.coords.latitude;
           lng = pos.coords.longitude;
        }
      } catch (err) {
        console.warn("Geolocation failed or denied, proceeding without it.");
      }

      const data = await getPropertyValuation(location, propertyType, details, lat, lng);
      setResult(data);
    } catch (err) {
      console.error(err);
      alert("Failed to analyze. Please check your API Key or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Smart Price Predictor</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Leverage Gemini AI with live Google Maps data to estimate property value based on real-time surroundings, amenities, and market trends.
        </p>
      </div>

      <form onSubmit={handleAnalyze} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Target Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
              <input 
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Whitefield, Bangalore"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Property Type</label>
            <select 
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option>Apartment</option>
              <option>Villa / Independent House</option>
              <option>Plot / Land</option>
              <option>Commercial Office</option>
              <option>Retail Shop</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2 mb-8">
          <label className="text-sm font-medium text-slate-300">Specific Details (Optional)</label>
          <textarea 
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="e.g., 2000 sqft, 3 BHK, Gated community, Park view, 5 years old"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 px-4 text-white h-24 resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-4 rounded-xl transition-all transform active:scale-95 flex justify-center items-center shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
              Analyzing Market & Surroundings...
            </>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2" />
              Predict Price & Analyze ROI
            </>
          )}
        </button>
      </form>

      {result && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-500">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <Building className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400 uppercase">Price Range</span>
              </div>
              <p className="text-2xl font-bold text-white">{result.estimatedPriceRange}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <Info className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-medium text-blue-400 uppercase">Confidence</span>
              </div>
              <p className="text-2xl font-bold text-white">{result.confidenceScore}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-medium text-purple-400 uppercase">Location Data</span>
              </div>
              <p className="text-2xl font-bold text-white">
                {result.groundingChunks?.filter(c => c.maps).length || 0} Places
              </p>
            </div>
          </div>

          {/* Main Analysis */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
             <div className="flex items-center space-x-2 mb-6">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Info className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Detailed Analysis</h3>
             </div>

             <div className="prose prose-invert prose-emerald max-w-none">
                <ReactMarkdown>{result.locationAnalysis}</ReactMarkdown>
             </div>
          </div>

          {/* Additional Insights */}
          {(result.growthFactors.length > 0 || result.riskFactors.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.growthFactors.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                    Growth Factors
                  </h4>
                  <ul className="space-y-2">
                    {result.growthFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <span className="text-emerald-400 mr-2">✓</span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.riskFactors.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                    Risk Factors
                  </h4>
                  <ul className="space-y-2">
                    {result.riskFactors.map((risk, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <span className="text-yellow-400 mr-2">!</span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Map Visualization */}
          {result.groundingChunks && result.groundingChunks.length > 0 && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
              <MapVisualization groundingChunks={result.groundingChunks} />

              {/* Web Sources */}
              {result.groundingChunks.filter(c => c.web).length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Web References
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {result.groundingChunks.filter(c => c.web).map((chunk, idx) => (
                      <a
                        key={idx}
                        href={chunk.web?.uri || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 mr-3 shrink-0" />
                        <span className="text-sm text-slate-300 truncate">{chunk.web?.title || 'Web Source'}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InvestmentAnalyzer;