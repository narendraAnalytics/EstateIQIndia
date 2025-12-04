'use client';

import React, { useState } from 'react';
import { Search, MapPin, Navigation, Info, ExternalLink, TrendingUp, AlertTriangle, Building, GraduationCap, Heart, Bus, ShoppingBag, Trees, Home, ArrowUpRight, ArrowDownRight, Target } from 'lucide-react';
import { getPropertyValuation } from '../services/geminiService';
import { ValuationResult } from '../types';
import ReactMarkdown from 'react-markdown';
import MapVisualization from './MapVisualization';
import PropertyLocationMap from './PropertyLocationMap';
import LocationSelectorMap from './LocationSelectorMap';

const InvestmentAnalyzer: React.FC = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number } | null>(null);

  const handleLocationSelect = (locationName: string, lat: number, lng: number) => {
    setLocation(locationName);
    setMapCenter({ lat, lng });
  };

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

      // Set map center from geolocation or default to a central location in India
      if (lat && lng) {
        setMapCenter({ lat, lng });
      } else {
        // Default to approximate center for common Indian cities if geolocation fails
        // This is a fallback - in production you'd want to geocode the location string
        setMapCenter({ lat: 12.9716, lng: 77.5946 }); // Default to Bangalore
      }
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

        <div className="mb-8">
          <LocationSelectorMap
            onLocationSelect={handleLocationSelect}
            initialCenter={mapCenter || undefined}
          />
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
        <div className="space-y-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
          {/* Enhanced Price Estimation Section */}
          <div className="bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-500/20 p-3 rounded-xl">
                <Building className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Price Estimation</h3>
                <p className="text-sm text-slate-400">Market value analysis and comparison</p>
              </div>
            </div>

            {/* Featured Price Display */}
            <div className="bg-slate-950/60 border-2 border-emerald-500/30 rounded-xl p-6 mb-6">
              <div className="text-center">
                <p className="text-sm text-emerald-400 uppercase tracking-wider mb-2">Estimated Market Value</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-500 mb-2">
                  {result.estimatedPriceRange}
                </p>
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <div className={`px-4 py-2 rounded-full ${
                    result.confidenceScore === 'High' ? 'bg-emerald-500/20 border border-emerald-500/50' :
                    result.confidenceScore === 'Low' ? 'bg-red-500/20 border border-red-500/50' :
                    'bg-yellow-500/20 border border-yellow-500/50'
                  }`}>
                    <span className={`text-sm font-semibold ${
                      result.confidenceScore === 'High' ? 'text-emerald-400' :
                      result.confidenceScore === 'Low' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {result.confidenceScore} Confidence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Analysis Section */}
          {result.categorizedAmenities && (
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-500/20 p-3 rounded-xl">
                  <MapPin className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Location Analysis</h3>
                  <p className="text-sm text-slate-400">Nearby amenities and facilities</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Schools */}
                {result.categorizedAmenities.schools && result.categorizedAmenities.schools.length > 0 && (
                  <div className="bg-slate-950/60 border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Education</h4>
                    </div>
                    <ul className="space-y-2">
                      {result.categorizedAmenities.schools.slice(0, 4).map((school, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {school}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Healthcare */}
                {result.categorizedAmenities.hospitals && result.categorizedAmenities.hospitals.length > 0 && (
                  <div className="bg-slate-950/60 border border-red-500/20 rounded-xl p-5 hover:border-red-500/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-red-500/20 p-2 rounded-lg">
                        <Heart className="w-5 h-5 text-red-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Healthcare</h4>
                    </div>
                    <ul className="space-y-2">
                      {result.categorizedAmenities.hospitals.slice(0, 4).map((hospital, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-red-400 mr-2">•</span>
                          {hospital}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Transport */}
                {result.categorizedAmenities.transport && result.categorizedAmenities.transport.length > 0 && (
                  <div className="bg-slate-950/60 border border-yellow-500/20 rounded-xl p-5 hover:border-yellow-500/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-yellow-500/20 p-2 rounded-lg">
                        <Bus className="w-5 h-5 text-yellow-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Transport</h4>
                    </div>
                    <ul className="space-y-2">
                      {result.categorizedAmenities.transport.slice(0, 4).map((trans, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-yellow-400 mr-2">•</span>
                          {trans}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Shopping */}
                {result.categorizedAmenities.shopping && result.categorizedAmenities.shopping.length > 0 && (
                  <div className="bg-slate-950/60 border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-purple-500/20 p-2 rounded-lg">
                        <ShoppingBag className="w-5 h-5 text-purple-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Shopping</h4>
                    </div>
                    <ul className="space-y-2">
                      {result.categorizedAmenities.shopping.slice(0, 4).map((shop, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {shop}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Parks & Recreation */}
                {result.categorizedAmenities.parks && result.categorizedAmenities.parks.length > 0 && (
                  <div className="bg-slate-950/60 border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 transition-all">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <Trees className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">Recreation</h4>
                    </div>
                    <ul className="space-y-2">
                      {result.categorizedAmenities.parks.slice(0, 4).map((park, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          {park}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Interactive Google Map */}
              {mapCenter && (
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-emerald-500/20 p-3 rounded-xl">
                      <MapPin className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Interactive Location Map</h3>
                      <p className="text-sm text-slate-400">Explore property location and nearby amenities</p>
                    </div>
                  </div>
                  <PropertyLocationMap
                    center={mapCenter}
                    amenities={result.categorizedAmenities}
                  />
                </div>
              )}
            </div>
          )}

          {/* Investment Potential Section */}
          <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-xl">
                <Target className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Investment Potential</h3>
                <p className="text-sm text-slate-400">Growth prospects and risk analysis</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Growth Factors */}
              {result.growthFactors && result.growthFactors.length > 0 && (
                <div className="bg-slate-950/60 border border-emerald-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="bg-emerald-500/20 p-2 rounded-lg mr-3">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    Growth Factors
                  </h4>
                  <ul className="space-y-3">
                    {result.growthFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-start bg-emerald-500/5 rounded-lg p-3 hover:bg-emerald-500/10 transition-all">
                        <span className="text-emerald-400 mr-3 mt-0.5">✓</span>
                        <span className="text-sm text-slate-200">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Risk Factors */}
              {result.riskFactors && result.riskFactors.length > 0 && (
                <div className="bg-slate-950/60 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="bg-yellow-500/20 p-2 rounded-lg mr-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    </div>
                    Risk Factors
                  </h4>
                  <ul className="space-y-3">
                    {result.riskFactors.map((risk, idx) => (
                      <li key={idx} className="flex items-start bg-yellow-500/5 rounded-lg p-3 hover:bg-yellow-500/10 transition-all">
                        <span className="text-yellow-400 mr-3 mt-0.5">⚠</span>
                        <span className="text-sm text-slate-200">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Comprehensive Analysis - Structured Visual Display */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
              Comprehensive Analysis
            </h3>

            {(() => {
              // Parse the analysis text into numbered sections (1., 2., 3., 4.)
              const text = result.locationAnalysis;
              const sections: any = {};

              // Extract Executive Summary (if present before numbered sections)
              const execMatch = text.match(/Executive Summary([\s\S]*?)(?=\n1\.|$)/i);
              if (execMatch) {
                sections.executive = execMatch[1].trim();

                // Extract comparison table from executive summary
                const execComparisonMatch = sections.executive.match(/Comparison with Nearby Areas[:\s]*\|([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i);
                if (execComparisonMatch) {
                  const tableText = execComparisonMatch[0];
                  const rows = tableText.split('\n').filter(line => line.includes('|') && !line.includes('---'));

                  sections.execComparison = rows.slice(1).map(row => {
                    const cells = row.split('|').map(c => c.trim()).filter(c => c);
                    return {
                      area: cells[0] || '',
                      price: cells[1] || '',
                      demographic: cells[2] || ''
                    };
                  }).filter(row => row.area && row.area !== 'Area');

                  // Remove comparison table from executive text
                  sections.executive = sections.executive.replace(execComparisonMatch[0], '').trim();
                }
              }

              // Extract Section 1: Price Estimation
              const section1Match = text.match(/1\.\s*Price Estimation([\s\S]*?)(?=\n2\.|$)/i);
              if (section1Match) {
                sections.priceEstimation = section1Match[1].trim();

                // Parse price details
                const currentPrice = sections.priceEstimation.match(/Current Market Price[:\s]*([^\n]+)/i);
                sections.currentPrice = currentPrice ? currentPrice[1].trim() : null;

                const pricePerSqFt = sections.priceEstimation.match(/Price per Sq\.?ft[:\s]*([^\n]+)/i);
                sections.pricePerSqFt = pricePerSqFt ? pricePerSqFt[1].trim() : null;

                const ticketSize = sections.priceEstimation.match(/Total Ticket Size[:\s]*([^\n]+)/i);
                sections.ticketSize = ticketSize ? ticketSize[1].trim() : null;

                // Extract comparison table
                const comparisonMatch = sections.priceEstimation.match(/Comparison with Nearby Areas[:\s]*\|([\s\S]*?)(?=\n\n|\n[A-Z]|\n\d\.|\n##|$)/i);
                if (comparisonMatch) {
                  const tableText = comparisonMatch[0];
                  const rows = tableText.split('\n').filter(line => line.includes('|') && !line.includes('---'));

                  sections.comparisonTable = rows.slice(1).map(row => {
                    const cells = row.split('|').map(c => c.trim()).filter(c => c);
                    return {
                      area: cells[0] || '',
                      price: cells[1] || '',
                      demographic: cells[2] || ''
                    };
                  }).filter(row => row.area && row.area !== 'Area');
                }
              }

              // Extract Section 2: Location Analysis
              const section2Match = text.match(/2\.\s*Location Analysis([\s\S]*?)(?=\n3\.|$)/i);
              if (section2Match) {
                sections.locationAnalysis = section2Match[1].trim();
                const bullets = sections.locationAnalysis.match(/[-•]\s*([^\n]+)/g);
                sections.locationHighlights = bullets ? bullets.map((b: string) => b.replace(/^[-•]\s*/, '').trim()) : [];
              }

              // Extract Section 3: Investment Potential
              const section3Match = text.match(/3\.\s*Investment Potential([\s\S]*?)(?=\n4\.|$)/i);
              if (section3Match) {
                sections.investmentPotential = section3Match[1].trim();

                // Parse investment details
                const bullets = sections.investmentPotential.match(/[-•]\s*([^\n]+)/g);
                sections.investmentDetails = bullets ? bullets.map((b: string) => b.replace(/^[-•]\s*/, '').trim()) : [];

                const rentalYield = sections.investmentPotential.match(/Rental Yield[:\s]*([^\n]+)/i);
                sections.rentalYield = rentalYield ? rentalYield[1].trim() : null;

                const appreciation = sections.investmentPotential.match(/(?:Capital )?Appreciation[:\s]*([^\n]+)/i);
                sections.appreciation = appreciation ? appreciation[1].trim() : null;

                const riskFactors = sections.investmentPotential.match(/Risk Factors[:\s]*([\s\S]*?)(?=\n\n|$)/i);
                if (riskFactors) {
                  const riskBullets = riskFactors[1].match(/[-•]\s*([^\n]+)/g);
                  sections.riskDetails = riskBullets ? riskBullets.map((b: string) => b.replace(/^[-•]\s*/, '').trim()) : [];
                }
              }

              // Extract Section 4: Confidence Score
              const section4Match = text.match(/4\.\s*Confidence Score([\s\S]*?)(?=\n##|\n\d\.|$)/i);
              if (section4Match) {
                sections.confidenceSection = section4Match[1].trim();

                // Extract confidence rating
                const rating = sections.confidenceSection.match(/(?:Rating|Confidence)[:\s]*(High|Medium|Low)/i);
                sections.confidenceRating = rating ? rating[1] : null;
              }

              return (
                <>
                  {/* Executive Summary */}
                  {sections.executive && (
                    <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <Info className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Executive Summary</h4>
                      </div>
                      <p className="text-slate-200 leading-relaxed mb-6">{sections.executive}</p>

                      {/* Comparison Table in Executive Summary */}
                      {sections.execComparison && sections.execComparison.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-blue-500/20">
                          <h5 className="text-sm font-semibold text-blue-300 mb-4 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Comparison with Nearby Areas
                          </h5>
                          <div className="bg-slate-950/40 border border-slate-700/30 rounded-lg p-4 overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-slate-700">
                                  <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400">Area</th>
                                  <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400">Average Price</th>
                                  <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400">Vibe / Target Demographic</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sections.execComparison.map((row: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
                                  >
                                    <td className="py-3 px-3">
                                      <span className="text-white font-medium text-sm">{row.area}</span>
                                    </td>
                                    <td className="py-3 px-3">
                                      <span className="text-emerald-400 font-semibold text-sm">{row.price}</span>
                                    </td>
                                    <td className="py-3 px-3">
                                      <span className="text-slate-300 text-sm">{row.demographic}</span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 1. Price Estimation Section */}
                  {sections.priceEstimation && (
                    <div className="bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-slate-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(16,185,129,0.2)]">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-emerald-500/20 p-2 rounded-lg">
                          <Building className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white">1. Price Estimation</h4>
                      </div>

                      {/* Price Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {sections.currentPrice && (
                          <div className="bg-slate-950/60 border border-emerald-500/20 rounded-lg p-4">
                            <p className="text-xs text-emerald-400 uppercase mb-1">Current Market Price</p>
                            <p className="text-lg font-bold text-white">{sections.currentPrice}</p>
                          </div>
                        )}
                        {sections.pricePerSqFt && (
                          <div className="bg-slate-950/60 border border-emerald-500/20 rounded-lg p-4">
                            <p className="text-xs text-emerald-400 uppercase mb-1">Price per Sq.Ft</p>
                            <p className="text-lg font-bold text-white">{sections.pricePerSqFt}</p>
                          </div>
                        )}
                        {sections.ticketSize && (
                          <div className="bg-slate-950/60 border border-emerald-500/20 rounded-lg p-4">
                            <p className="text-xs text-emerald-400 uppercase mb-1">Total Ticket Size</p>
                            <p className="text-lg font-bold text-white">{sections.ticketSize}</p>
                          </div>
                        )}
                      </div>

                      {/* Comparison Table */}
                      {sections.comparisonTable && sections.comparisonTable.length > 0 && (
                        <div className="bg-slate-950/60 border border-slate-700/30 rounded-lg p-4">
                          <h5 className="text-sm font-semibold text-slate-300 mb-4">Comparison with Nearby Areas</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-slate-700">
                                  <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400">Area</th>
                                  <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400">Average Price</th>
                                  <th className="text-left py-2 px-3 text-xs font-semibold text-slate-400">Vibe / Target Demographic</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sections.comparisonTable.map((row: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors"
                                  >
                                    <td className="py-3 px-3">
                                      <span className="text-white font-medium text-sm">{row.area}</span>
                                    </td>
                                    <td className="py-3 px-3">
                                      <span className="text-emerald-400 font-semibold text-sm">{row.price}</span>
                                    </td>
                                    <td className="py-3 px-3">
                                      <span className="text-slate-300 text-sm">{row.demographic}</span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. Location Analysis Section */}
                  {sections.locationHighlights && sections.locationHighlights.length > 0 && (
                    <div className="bg-slate-900/60 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-purple-500/20 p-2 rounded-lg">
                          <MapPin className="w-6 h-6 text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white">2. Location Analysis</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sections.locationHighlights.map((highlight: string, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-2 bg-purple-500/5 rounded-lg p-3 hover:bg-purple-500/10 transition-all"
                          >
                            <span className="text-purple-400 mt-0.5">✦</span>
                            <span className="text-sm text-slate-200">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3. Investment Potential Section */}
                  {sections.investmentPotential && (
                    <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-slate-900/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-blue-500/20 p-2 rounded-lg">
                          <Target className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white">3. Investment Potential</h4>
                      </div>

                      {/* Investment Metrics */}
                      {(sections.rentalYield || sections.appreciation) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {sections.rentalYield && (
                            <div className="bg-slate-950/60 border border-green-500/30 rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                <p className="text-xs text-green-400 uppercase">Rental Yield</p>
                              </div>
                              <p className="text-lg font-bold text-white">{sections.rentalYield}</p>
                            </div>
                          )}

                          {sections.appreciation && (
                            <div className="bg-slate-950/60 border border-blue-500/30 rounded-lg p-4">
                              <div className="flex items-center space-x-2 mb-2">
                                <ArrowUpRight className="w-4 h-4 text-blue-400" />
                                <p className="text-xs text-blue-400 uppercase">Appreciation Forecast</p>
                              </div>
                              <p className="text-lg font-bold text-white">{sections.appreciation}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Investment Details */}
                      {sections.investmentDetails && sections.investmentDetails.length > 0 && (
                        <div className="space-y-2">
                          {sections.investmentDetails.map((detail: string, idx: number) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-2 bg-blue-500/5 rounded-lg p-3"
                            >
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span className="text-sm text-slate-200">{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Risk Factors */}
                      {sections.riskDetails && sections.riskDetails.length > 0 && (
                        <div className="mt-6 bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                          <h5 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center">
                            <AlertTriangle className="w-4 h-4 mr-2" />
                            Risk Factors
                          </h5>
                          <div className="space-y-2">
                            {sections.riskDetails.map((risk: string, idx: number) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-yellow-400 mt-0.5">⚠</span>
                                <span className="text-sm text-slate-200">{risk}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. Confidence Score Section */}
                  {sections.confidenceSection && (
                    <div className={`bg-gradient-to-br ${
                      sections.confidenceRating === 'High' ? 'from-green-900/30 to-slate-900/40 border-green-500/30' :
                      sections.confidenceRating === 'Low' ? 'from-red-900/30 to-slate-900/40 border-red-500/30' :
                      'from-yellow-900/30 to-slate-900/40 border-yellow-500/30'
                    } backdrop-blur-xl border rounded-2xl p-6 shadow-lg`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`${
                          sections.confidenceRating === 'High' ? 'bg-green-500/20' :
                          sections.confidenceRating === 'Low' ? 'bg-red-500/20' :
                          'bg-yellow-500/20'
                        } p-2 rounded-lg`}>
                          <Info className={`w-6 h-6 ${
                            sections.confidenceRating === 'High' ? 'text-green-400' :
                            sections.confidenceRating === 'Low' ? 'text-red-400' :
                            'text-yellow-400'
                          }`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">4. Confidence Score</h4>
                          {sections.confidenceRating && (
                            <p className={`text-lg font-semibold ${
                              sections.confidenceRating === 'High' ? 'text-green-400' :
                              sections.confidenceRating === 'Low' ? 'text-red-400' :
                              'text-yellow-400'
                            }`}>
                              {sections.confidenceRating}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-200 leading-relaxed">{sections.confidenceSection}</p>
                    </div>
                  )}

                  {/* Fallback: Show full analysis if parsing didn't extract numbered sections */}
                  {!sections.priceEstimation && !sections.locationAnalysis && !sections.investmentPotential && (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
                      <div className="prose prose-invert prose-emerald max-w-none">
                        <ReactMarkdown>{result.locationAnalysis}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>

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