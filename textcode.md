client.tsx

import { StackClientApp } from "@stackframe/stack";

export const stackClientApp = new StackClientApp({
  tokenStore: "nextjs-cookie",
  projectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID || "",
  publishableClientKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY || "",
  urls: {
    signIn: "/handler/sign-in",
    signUp: "/handler/sign-up",
    afterSignIn: "/",
    afterSignUp: "/",
    afterSignOut: "/",
  },
});


sever.tsx

import "server-only";

import { StackServerApp } from "@stackframe/stack";
import { stackClientApp } from "./client";

export const stackServerApp = new StackServerApp({
  inheritsFrom: stackClientApp,
});


auth baackbutton.tsx

"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/")}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(99, 102, 241, 0.6), 0 0 50px rgba(168, 85, 247, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 left-6 z-50 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 group"
    >
      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
      <span className="text-white drop-shadow-lg">Back to Home</span>
    </motion.button>
  );
}


handler/[...stack]/page.tsx

import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "@/stack/server";
import { Suspense } from "react";
import { BackButton } from "@/components/auth/BackButton";
import Image from "next/image";

export default function Handler(props: any) {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/BannerImage3.png"
          alt="Authentication Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10" id="stack-auth-wrapper">
        <BackButton />
        <Suspense fallback={<div>Loading...</div>}>
          <StackHandler fullPage app={stackServerApp} {...props} />
        </Suspense>
      </div>
    </div>
  );
}
        
layout.tsx 

import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackClientApp } from "../stack/client";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "India Trade Agent",
  description: "AI-Powered Trade Analysis Dashboard",
  icons: {
    icon: '/images/rupee.png',
  },
};

const customTheme = {
  light: {
    primary: 'hsl(24, 100%, 50%)',           // Bright orange
    primaryForeground: 'hsl(0, 0%, 100%)',   // White text on orange
    card: 'hsl(0, 0%, 100%)',                // Pure white for form
    cardForeground: 'hsl(16, 100%, 50%)',    // Bright orange-red text for headings
    background: 'hsl(0, 0%, 100%)',          // White background
    foreground: 'hsl(24, 100%, 45%)',        // Bright orange text
    secondary: 'hsl(45, 100%, 51%)',         // Bright yellow/amber
    secondaryForeground: 'hsl(0, 0%, 10%)',  // Dark text on yellow
    accent: 'hsl(33, 100%, 50%)',            // Orange accent
    accentForeground: 'hsl(0, 0%, 100%)',    // White on accent
    muted: 'hsl(0, 0%, 96%)',                // Light gray for muted elements
    mutedForeground: 'hsl(30, 100%, 45%)',   // Bright orange for muted text
    border: 'hsl(24, 60%, 60%)',             // Orange-toned border
    input: 'hsl(0, 0%, 90%)',                // Light gray for inputs
    ring: 'hsl(24, 100%, 50%)',              // Orange focus ring
  },
  dark: {
    primary: 'hsl(24, 100%, 55%)',           // Bright orange
    primaryForeground: 'hsl(0, 0%, 100%)',   // White text
    card: 'hsl(222, 47%, 15%)',              // Dark card
    cardForeground: 'hsl(0, 0%, 98%)',       // Light text
    background: 'hsl(222, 47%, 11%)',        // Dark background
    foreground: 'hsl(0, 0%, 98%)',           // Light text
    secondary: 'hsl(45, 100%, 51%)',         // Bright yellow
    secondaryForeground: 'hsl(222, 47%, 11%)', // Dark text
    accent: 'hsl(33, 100%, 50%)',            // Orange accent
    accentForeground: 'hsl(0, 0%, 100%)',    // White
    border: 'hsl(24, 40%, 40%)',             // Orange border
    input: 'hsl(24, 30%, 25%)',              // Dark orange input
    ring: 'hsl(24, 100%, 50%)',              // Orange focus ring
  },
  radius: '12px',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${roboto.variable} antialiased`}
      >
        <StackProvider app={stackClientApp}>
          <StackTheme theme={customTheme}>
            {children}
          </StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
