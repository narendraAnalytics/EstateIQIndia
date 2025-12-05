'use client';

import React from 'react';
import Link from 'next/link';
import { Map, Building2, TrendingUp, Menu, Home, History } from 'lucide-react';
import { AppView } from '../types';
import { useUser } from '@stackframe/stack';

interface HeaderProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const user = useUser({ or: 'redirect' });
  const isLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => setView(AppView.HEATMAP)}>
            <div className="bg-gradient-to-br from-emerald-500/20 to-yellow-500/10 p-2 rounded-lg mr-3 border border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
              <TrendingUp className="h-6 w-6 text-emerald-400 group-hover:text-yellow-400 transition-colors" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-500 to-emerald-600">
                  EstateIQ India
                </span>
              </h1>
              <p className="text-xs text-white font-medium">AI-Powered Investment Heatmap</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setView(AppView.HEATMAP)}
              className={`flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                currentView === AppView.HEATMAP
                  ? 'bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:scale-105'
                  : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-yellow-500/20 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105'
              }`}
            >
              <Map className="w-4 h-4 mr-2" />
              Heatmap
            </button>
            <button
              onClick={() => setView(AppView.VALUATION)}
              className={`flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                currentView === AppView.VALUATION
                  ? 'bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:scale-105'
                  : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-yellow-500/20 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105'
              }`}
            >
              <Building2 className="w-4 h-4 mr-2" />
              Price Predictor
            </button>

            {/* Search History Button - Only show if logged in */}
            {isLoggedIn && (
              <button
                onClick={() => setView(AppView.HISTORY)}
                className={`flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  currentView === AppView.HISTORY
                    ? 'bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] hover:scale-105'
                    : 'text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-yellow-500/20 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105'
                }`}
              >
                <History className="w-4 h-4 mr-2" />
                History
              </button>
            )}

            {/* Home Button */}
            <Link href="/">
              <button
                className="group flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500/20 to-yellow-500/20 backdrop-blur-sm border border-emerald-500/30 hover:bg-gradient-to-r hover:from-emerald-500 hover:via-yellow-500 hover:to-emerald-600 hover:border-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-110"
                aria-label="Back to Home"
              >
                <Home className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
              </button>
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Home Button */}
            <Link href="/">
              <button
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-yellow-500/20 backdrop-blur-sm border border-emerald-500/30 hover:bg-gradient-to-r hover:from-emerald-500 hover:via-yellow-500 hover:to-emerald-600 hover:border-transparent transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-110"
                aria-label="Back to Home"
              >
                <Home className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors duration-300" />
              </button>
            </Link>

            <button className="text-slate-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-400 hover:to-yellow-500 transition-all">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;