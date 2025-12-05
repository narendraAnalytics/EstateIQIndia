import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MapsProvider } from "./providers";
import { StackProvider } from "@stackframe/stack";
import { stackClientApp } from "@/lib/stack/client";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "EstateIQ India",
    description: "Real Estate Intelligence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StackProvider app={stackClientApp}>
                    <TooltipProvider>
                        <MapsProvider>
                            {children}
                        </MapsProvider>
                    </TooltipProvider>
                </StackProvider>
            </body>
        </html>
    );
}
