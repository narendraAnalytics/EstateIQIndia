'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, MapPin, Brain, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
    // Carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/images/bannerimagepreview.png',
        '/images/bannerimage2.png',
        '/images/bannerimage3.png'
    ];

    // Auto-rotate images every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center px-8 pt-32 pb-20">
            {/* Content Container */}
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Text Content */}
                    <div className="space-y-8 animate-fadeInUp">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/60 backdrop-blur-sm border border-orange-200/50">
                            <Brain className="w-4 h-4 text-orange-600" />
                            <span className="text-sm font-semibold text-orange-700">AI-Powered Intelligence</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 animate-shimmer bg-[length:200%_auto]">
                                Invest Smarter
                            </span>
                            <br />
                            <span className="text-orange-900">with AI-Powered</span>
                            <br />
                            <span className="text-orange-800">Real Estate Insights</span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-orange-800/80 leading-relaxed max-w-xl">
                            Discover high-growth investment opportunities across India with our advanced AI analytics.
                            Make data-driven decisions backed by real-time market intelligence.
                        </p>

                        {/* Trust Elements */}
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-orange-600" />
                                <span className="text-sm font-semibold text-orange-800">500+ Cities Analyzed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-orange-600" />
                                <span className="text-sm font-semibold text-orange-800">Real-Time Data</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4 pt-4">
                            <Link href="/dashboard">
                                <button className="
                                    group relative
                                    px-8 py-4 rounded-full
                                    bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600
                                    text-white font-semibold text-lg
                                    shadow-[0_8px_32px_0_rgba(251,146,60,0.3)]
                                    hover:shadow-[0_12px_48px_0_rgba(251,146,60,0.5)]
                                    hover:scale-105
                                    transition-all duration-300
                                    overflow-hidden
                                ">
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                                    <span className="relative flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5" />
                                        View Analytics
                                    </span>
                                </button>
                            </Link>

                            {/* Secondary link */}
                            <button className="
                                group
                                px-6 py-4 rounded-full
                                backdrop-blur-xl bg-white/40
                                text-orange-700 font-semibold text-lg
                                border-2 border-orange-300/50
                                hover:border-orange-400
                                hover:bg-white/60
                                transition-all duration-300
                            ">
                                Learn More
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center gap-8 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-orange-700">28+</div>
                                <div className="text-sm text-orange-600">States Covered</div>
                            </div>
                            <div className="w-px h-12 bg-orange-300/50"></div>
                            <div>
                                <div className="text-3xl font-bold text-orange-700">15%</div>
                                <div className="text-sm text-orange-600">Avg. ROI Increase</div>
                            </div>
                            <div className="w-px h-12 bg-orange-300/50"></div>
                            <div>
                                <div className="text-3xl font-bold text-orange-700">AI</div>
                                <div className="text-sm text-orange-600">Powered Insights</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative animate-fadeInUpDelayed">
                        {/* Decorative background elements */}
                        <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl"></div>

                        {/* Main Image Container with Carousel */}
                        <div className="relative z-10">
                            <div className="
                                relative
                                rounded-3xl overflow-hidden
                                shadow-[0_20px_80px_0_rgba(251,146,60,0.25)]
                                hover:shadow-[0_25px_100px_0_rgba(251,146,60,0.35)]
                                transition-all duration-500
                                hover:scale-[1.02]
                                border-4 border-white/50
                                h-[600px]
                            ">
                                {/* Carousel Images with Fade Transition */}
                                {images.map((image, index) => (
                                    <div
                                        key={image}
                                        className={`
                                            absolute inset-0 transition-opacity duration-1000 ease-in-out
                                            ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                                        `}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Real Estate Investment ${index + 1}`}
                                            width={600}
                                            height={600}
                                            className="w-full h-full object-cover"
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}

                                {/* Overlay gradient for better text visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent pointer-events-none"></div>
                            </div>

                            {/* Floating badge */}
                            <div className="
                                absolute -bottom-6 -left-6
                                px-6 py-4 rounded-2xl
                                backdrop-blur-xl bg-white/80
                                border border-orange-200/50
                                shadow-[0_8px_32px_0_rgba(251,146,60,0.2)]
                                animate-float
                            ">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-orange-600 font-medium">Market Growth</div>
                                        <div className="text-xl font-bold text-orange-800">+23.5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
