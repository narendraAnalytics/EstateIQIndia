import LandingNavbar from '@/components/LandingNavbar';
import HeroSection from '@/components/HeroSection';

export default function Landing() {
    return (
        <div className="min-h-screen w-full relative overflow-hidden">
            {/* Main Gradient Background - Warm Orange to Yellow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"></div>

            {/* Overlay Gradient for Depth - Top Right */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 via-transparent to-yellow-100/40"></div>

            {/* Overlay Gradient for Depth - Bottom Left */}
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-amber-100/20 to-orange-100/30"></div>

            {/* Soft Glow Effect - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-200/20 blur-3xl rounded-full"></div>

            {/* Soft Glow Effect - Bottom */}
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-yellow-200/20 blur-3xl rounded-full"></div>

            {/* Glassmorphic Navbar */}
            <LandingNavbar />

            {/* Content Container */}
            <div className="relative z-10">
                {/* Hero Section - Home */}
                <section id="home">
                    <HeroSection />
                </section>

                {/* Other sections */}
                <section id="analytics" className="min-h-screen flex items-center justify-center">
                    {/* Analytics section - to be added */}
                </section>

                <section id="features" className="min-h-screen flex items-center justify-center">
                    {/* Features section - to be added */}
                </section>

                <section id="about" className="min-h-screen flex items-center justify-center">
                    {/* About section - to be added */}
                </section>

                <section id="contact" className="min-h-screen flex items-center justify-center">
                    {/* Contact section - to be added */}
                </section>
            </div>
        </div>
    );
}
