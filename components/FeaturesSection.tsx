'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    Brain,
    TrendingUp,
    MapPin,
    BarChart3,
    Target,
    Sparkles
} from 'lucide-react';

const FeaturesSection = () => {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Analytics',
            description: 'Advanced machine learning algorithms analyze market trends and predict future growth opportunities with unprecedented accuracy.',
            gradient: 'from-orange-400 to-amber-500',
            delay: 0
        },
        {
            icon: TrendingUp,
            title: 'Real-Time Market Data',
            description: 'Access live market updates, price movements, and investment opportunities across 500+ cities in India.',
            gradient: 'from-amber-400 to-yellow-500',
            delay: 100
        },
        {
            icon: Target,
            title: 'Smart Investment Insights',
            description: 'Get personalized investment recommendations based on your budget, risk profile, and long-term goals.',
            gradient: 'from-orange-500 to-amber-600',
            delay: 200
        },
        {
            icon: Sparkles,
            title: 'Predictive Analysis',
            description: 'Forecast property values and rental yields using AI-driven predictive models trained on historical data.',
            gradient: 'from-amber-500 to-orange-500',
            delay: 300
        },
        {
            icon: MapPin,
            title: 'Location Intelligence',
            description: 'Discover high-growth micro-markets with our comprehensive location scoring and neighborhood analytics.',
            gradient: 'from-yellow-500 to-amber-500',
            delay: 400
        },
        {
            icon: BarChart3,
            title: 'Portfolio Tracking',
            description: 'Monitor your investments, track ROI, and receive alerts on market changes affecting your portfolio.',
            gradient: 'from-orange-600 to-amber-600',
            delay: 500
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger staggered animations
                        features.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => [...new Set([...prev, index])]);
                            }, index * 150);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen flex items-center justify-center px-8 py-20"
        >
            {/* Decorative background blurs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl"></div>

            {/* Content Container */}
            <div className="max-w-7xl w-full mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/60 backdrop-blur-sm border border-orange-200/50 animate-fadeInUp">
                        <Sparkles className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-semibold text-orange-700">Powerful Features</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 animate-shimmer bg-[length:200%_auto]">
                            Everything You Need
                        </span>
                        <br />
                        <span className="text-orange-900">to Invest Smarter</span>
                    </h2>

                    {/* Supporting Text */}
                    <p className="text-lg md:text-xl text-orange-800/80 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        Leverage cutting-edge AI technology and comprehensive market data to make informed real estate investment decisions
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isVisible = visibleCards.includes(index);

                        return (
                            <div
                                key={index}
                                className={`
                                    group relative
                                    backdrop-blur-xl bg-gradient-to-br from-orange-100/40 via-amber-100/30 to-yellow-100/40
                                    rounded-3xl p-8
                                    border border-orange-200/30
                                    shadow-[0_8px_32px_0_rgba(251,146,60,0.15)]
                                    hover:shadow-[0_12px_48px_0_rgba(251,146,60,0.3)]
                                    hover:scale-105
                                    transition-all duration-500 ease-out
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                                style={{
                                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transitionDelay: isVisible ? `${feature.delay}ms` : '0ms'
                                }}
                            >
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-300/0 to-amber-300/0 group-hover:from-orange-300/20 group-hover:to-amber-300/20 transition-all duration-500"></div>

                                {/* Inner Content */}
                                <div className="relative space-y-6">
                                    {/* Icon Container */}
                                    <div className="relative">
                                        <div className={`
                                            w-16 h-16 rounded-2xl
                                            bg-gradient-to-br ${feature.gradient}
                                            flex items-center justify-center
                                            shadow-[0_8px_24px_0_rgba(251,146,60,0.3)]
                                            group-hover:shadow-[0_12px_32px_0_rgba(251,146,60,0.5)]
                                            group-hover:scale-110 group-hover:rotate-6
                                            transition-all duration-500
                                        `}>
                                            <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                                        </div>

                                        {/* Floating Particles Effect */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-orange-900 group-hover:text-orange-700 transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-orange-800/80 leading-relaxed group-hover:text-orange-900 transition-colors duration-300">
                                        {feature.description}
                                    </p>

                                    {/* Decorative Bottom Line */}
                                    <div className="pt-4">
                                        <div className={`
                                            h-1 rounded-full
                                            bg-gradient-to-r ${feature.gradient}
                                            w-0 group-hover:w-full
                                            transition-all duration-700
                                            shadow-[0_0_12px_0_rgba(251,146,60,0.6)]
                                        `}></div>
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white font-semibold shadow-[0_8px_32px_0_rgba(251,146,60,0.3)] hover:shadow-[0_12px_48px_0_rgba(251,146,60,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group">
                        <span>Explore All Features</span>
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
