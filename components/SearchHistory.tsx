'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Building2, Clock, TrendingUp, Search, Map, ArrowRight } from 'lucide-react';
import { AppView } from '../types';

interface SearchHistoryItem {
  id: string;
  stateName?: string;
  cityName?: string;
  location?: string;
  searchedAt: Date | string;
  searchType: string;
}

interface SearchHistoryProps {
  onStateClick: (stateName: string) => void;
  onValuationClick: () => void;
  onHeatmapClick: () => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({
  onStateClick,
  onValuationClick,
  onHeatmapClick,
}) => {
  const [loading, setLoading] = useState(true);
  const [stateSearches, setStateSearches] = useState<SearchHistoryItem[]>([]);
  const [propertySearches, setPropertySearches] = useState<SearchHistoryItem[]>([]);
  const [totalSearches, setTotalSearches] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const fetchSearchHistory = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/search-history');

      if (response.status === 401) {
        setError('Please log in to view your search history');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch search history');
      }

      const data = await response.json();
      setStateSearches(data.stateSearches || []);
      setPropertySearches(data.propertySearches || []);
      setTotalSearches(data.totalSearches || 0);
    } catch (err: any) {
      console.error('Failed to load search history:', err);
      setError(err.message || 'Failed to load search history');
    } finally {
      setLoading(false);
    }
  };

  const formatTimeAgo = (date: Date | string): string => {
    const now = new Date();
    const searchDate = new Date(date);
    const diffMs = now.getTime() - searchDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return searchDate.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-500 border-r-transparent"></div>
          <p className="mt-4 text-slate-400">Loading your search history...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (totalSearches === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 text-center space-y-6 animate-fadeInUp">
          <div className="flex justify-center">
            <div className="bg-slate-800/50 p-6 rounded-full">
              <Search className="w-16 h-16 text-slate-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">No Search History Yet</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Start exploring states or analyzing properties to build your search history!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={onHeatmapClick}
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/50"
            >
              <Map className="w-5 h-5 mr-2" />
              Explore Heatmap
            </button>
            <button
              onClick={onValuationClick}
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-blue-500/50"
            >
              <Building2 className="w-5 h-5 mr-2" />
              Price Predictor
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeInUp">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600">
            Your Search History
          </span>
        </h2>
        <p className="text-slate-400">
          Total Searches: <span className="text-emerald-400 font-semibold">{totalSearches}</span>
        </p>
      </div>

      {/* State Analyses Section */}
      {stateSearches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-emerald-400" />
            State Analyses ({stateSearches.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stateSearches.map((search) => (
              <div
                key={search.id}
                onClick={() => onStateClick(search.stateName!)}
                className="bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {search.stateName}
                      </h4>
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatTimeAgo(search.searchedAt)}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Property Valuations Section */}
      {propertySearches.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Building2 className="w-5 h-5 mr-2 text-blue-400" />
            Property Valuations ({propertySearches.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {propertySearches.map((search) => (
              <div
                key={search.id}
                className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {search.location || search.cityName}
                      </h4>
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatTimeAgo(search.searchedAt)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchHistory;
