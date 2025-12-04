'use client';

import React, { useState, useEffect } from 'react';
import { Home, Layers, BarChart, Send, Grid3x3, UserPlus, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state for auth
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'features', icon: Layers, label: 'Features' },
        { id: 'analytics', icon: BarChart, label: 'Analytics' },
        { id: 'about', icon: Send, label: 'About' },
        { id: 'contact', icon: Grid3x3, label: 'Contact' },
    ];

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleAnalyticsClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleNavClick = (item: typeof navItems[0]) => {
        if (item.id === 'analytics') {
            handleAnalyticsClick();
        } else {
            scrollToSection(item.id);
        }
    };

    const handleAuthClick = () => {
        // Mock toggle - functionality to be added later
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="w-full flex items-center justify-center">
            {/* Main Navigation */}
            <nav
                className={`
                    ${isSticky ? 'fixed top-6' : 'absolute top-12'}
                    left-1/2 -translate-x-1/2 z-50
                    transition-all duration-500 ease-out
                    ${isSticky ? 'animate-slideDown' : 'animate-fadeIn'}
                `}
            >
                {/* Glassmorphic Container */}
                <div className="
                relative
                backdrop-blur-xl bg-gradient-to-r from-orange-200/20 via-amber-200/20 to-yellow-200/20
                rounded-full
                px-8 py-4
                shadow-[0_8px_32px_0_rgba(251,146,60,0.15)]
                hover:shadow-[0_8px_48px_0_rgba(251,146,60,0.25)]
                transition-all duration-300
                border-0
            ">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300/10 via-transparent to-yellow-300/10 blur-sm"></div>

                {/* Navigation Items */}
                <div className="relative flex items-center gap-8">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;
                        const isAnalytics = item.id === 'analytics';
                        const shouldHide = isCollapsed && !isAnalytics;

                        return (
                            <motion.button
                                key={item.id}
                                onClick={() => handleNavClick(item)}
                                initial={{
                                    scale: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    scale: shouldHide ? 0 : (isAnalytics && isCollapsed ? 1.1 : 1),
                                    opacity: shouldHide ? 0 : 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: shouldHide ? 300 : 200,
                                        damping: shouldHide ? 25 : 20,
                                        bounce: shouldHide ? 0 : 0.3
                                    }
                                }}
                                className={`
                                    group relative
                                    p-3 rounded-2xl
                                    transition-all duration-300 ease-out
                                    hover:scale-110
                                    ${isActive
                                        ? 'bg-gradient-to-br from-orange-400/30 to-amber-400/30'
                                        : 'hover:bg-gradient-to-br hover:from-orange-300/20 hover:to-amber-300/20'
                                    }
                                    ${!isCollapsed ? 'animate-fadeInScale' : ''}
                                    ${shouldHide ? 'pointer-events-none' : ''}
                                `}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    visibility: shouldHide ? 'hidden' : 'visible'
                                }}
                                aria-label={item.label}
                                whileHover={!shouldHide ? { scale: 1.15 } : {}}
                                whileTap={!shouldHide ? { scale: 0.95 } : {}}
                            >
                                <Icon
                                    className={`
                                        w-6 h-6
                                        transition-all duration-300
                                        ${isActive
                                            ? 'text-orange-600 drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]'
                                            : 'text-orange-500/70 group-hover:text-orange-600'
                                        }
                                        group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.6)]
                                    `}
                                />

                                {/* Active indicator dot */}
                                {isActive && !shouldHide && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="
                                            absolute -bottom-1 left-1/2 -translate-x-1/2
                                            w-1.5 h-1.5 rounded-full
                                            bg-gradient-to-r from-orange-500 to-amber-500
                                            shadow-[0_0_8px_rgba(251,146,60,0.8)]
                                            animate-pulse
                                        "
                                    />
                                )}

                                {/* Hover tooltip */}
                                {!shouldHide && (
                                    <div className="
                                        absolute -bottom-12 left-1/2 -translate-x-1/2
                                        px-3 py-1.5 rounded-lg
                                        bg-gradient-to-r from-orange-500 to-amber-500
                                        text-white text-xs font-medium
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300
                                        pointer-events-none
                                        whitespace-nowrap
                                        shadow-lg
                                    ">
                                        {item.label}
                                    </div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </nav>

            {/* Auth Button - Floating Right */}
            <button
                onClick={handleAuthClick}
                className={`
                    ${isSticky ? 'fixed top-6 right-8' : 'absolute top-12 right-8'}
                    z-50
                    group
                    backdrop-blur-xl bg-gradient-to-r from-orange-200/20 via-amber-200/20 to-yellow-200/20
                    rounded-full
                    px-6 py-4
                    shadow-[0_8px_32px_0_rgba(251,146,60,0.15)]
                    hover:shadow-[0_8px_48px_0_rgba(251,146,60,0.3)]
                    hover:scale-105
                    transition-all duration-500 ease-out
                    border-0
                    ${isSticky ? 'animate-slideDown' : 'animate-fadeIn'}
                `}
                style={{ animationDelay: '300ms' }}
            >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300/10 via-transparent to-yellow-300/10 blur-sm"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                    {isLoggedIn ? (
                        <>
                            <LogOut className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                            <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                                Sign Out
                            </span>
                        </>
                    ) : (
                        <>
                            <UserPlus className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                            <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                                Sign Up
                            </span>
                        </>
                    )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/20 group-hover:to-amber-400/20 transition-all duration-300"></div>
            </button>
        </div>
    );
};

export default LandingNavbar;
