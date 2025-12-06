'use client';

import React, { useState, useEffect } from 'react';
import { Home, Layers, BarChart, Send, Grid3x3, UserPlus, LogOut, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '@stackframe/stack';
import { useRouter } from 'next/navigation';

const LandingNavbar = () => {
    const user = useUser();
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
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

    const handleAuthClick = async () => {
        if (user) {
            await user.signOut();
        } else {
            router.push('/handler/sign-up');
        }
    };

    return (
        <div className="w-full flex items-center justify-center">
            {/* Logo - Floating Left */}
            <motion.div
                onClick={() => scrollToSection('home')}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`
                    ${isSticky ? 'fixed top-6 left-4' : 'absolute top-12 left-4'}
                    z-50
                    cursor-pointer group
                    backdrop-blur-xl bg-gradient-to-r from-orange-200/20 via-amber-200/20 to-yellow-200/20
                    rounded-2xl
                    px-5 py-3.5
                    shadow-[0_8px_32px_0_rgba(251,146,60,0.15)]
                    hover:shadow-[0_8px_48px_0_rgba(251,146,60,0.3)]
                    hover:scale-105
                    transition-all duration-500 ease-out
                    border-0
                    ${isSticky ? 'animate-slideDown' : 'animate-fadeIn'}
                `}
                style={{ animationDelay: '100ms' }}
            >
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-300/10 via-transparent to-yellow-300/10 blur-sm"></div>

                {/* Logo Content */}
                <div className="relative flex items-center gap-3">
                    {/* Icon with gradient background */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                        <div className="relative bg-gradient-to-br from-orange-400 to-amber-500 p-2.5 rounded-xl shadow-lg group-hover:shadow-[0_0_20px_rgba(251,146,60,0.6)] transition-all duration-300">
                            <TrendingUp className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-tight leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 group-hover:from-orange-500 group-hover:via-amber-500 group-hover:to-orange-600 transition-all duration-300">
                                EstateIQ India
                            </span>
                        </h1>
                        <p className="text-xs text-orange-600/80 font-medium group-hover:text-orange-700/90 transition-colors duration-300">
                            AI-Powered Investment Heatmap
                        </p>
                    </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/20 group-hover:to-amber-400/20 transition-all duration-300"></div>
            </motion.div>

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
                                        {item.id === 'analytics' ? 'Click here' : item.label}
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
                    ${isSticky ? 'fixed top-6 right-4' : 'absolute top-12 right-4'}
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
                <div className="relative flex flex-col items-start gap-1">
                    {user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <LogOut className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                                <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                                    Sign Out
                                </span>
                            </div>
                            <span className="text-xs text-orange-500/80 pl-7">
                                Welcome back, {user.displayName || user.primaryEmail?.split('@')[0] || 'User'}
                            </span>
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <UserPlus className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.6)]" />
                            <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                                Sign Up
                            </span>
                        </div>
                    )}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/0 to-amber-400/0 group-hover:from-orange-400/20 group-hover:to-amber-400/20 transition-all duration-300"></div>
            </button>
        </div>
    );
};

export default LandingNavbar;
