"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ConsumerHero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-sage-green via-warm-white to-sky-blue">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2560&auto=format&fit=crop')", // Lush green garden
                    transform: `translateY(${scrollY * 0.3}px)`,
                }}
            ></div>

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-dark-gray/20 z-0"></div>

            {/* Parallax Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%237fb069\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    transform: `translateY(${scrollY * 0.3}px)`,
                }}
            ></div>

            {/* Floating Elements */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-warm-gold/20 blur-xl animate-float"
                        style={{
                            width: Math.random() * 120 + 60 + "px",
                            height: Math.random() * 120 + 60 + "px",
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                            animationDelay: Math.random() * 5 + "s",
                            animationDuration: Math.random() * 10 + 15 + "s",
                        }}
                    ></div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-dark-gray mb-6 leading-tight animate-fade-in-up">
                    Growing Communities, <br />
                    <span className="text-sage-green">Not Just Food</span>
                </h1>

                <p className="font-sans text-xl md:text-2xl text-dark-gray/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Find fresh local food, learn to grow, and connect with your community—all powered by AI.
                </p>

                {/* Key Features */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 bg-warm-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
                        <div className="w-10 h-10 bg-sage-green rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <span className="font-sans font-semibold text-dark-gray">AI Food Assistant</span>
                    </div>

                    <div className="flex items-center gap-3 bg-warm-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
                        <div className="w-10 h-10 bg-warm-gold rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <span className="font-sans font-semibold text-dark-gray">Learn to Grow</span>
                    </div>

                    <div className="flex items-center gap-3 bg-warm-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg">
                        <div className="w-10 h-10 bg-soft-teal rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <span className="font-sans font-semibold text-dark-gray">Connect Locally</span>
                    </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link href="#join" className="bg-sage-green text-white px-10 py-4 rounded-full font-sans font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Join Waitlist
                    </Link>
                    <Link href="#how-it-works" className="bg-warm-white border-2 border-sage-green text-sage-green px-10 py-4 rounded-full font-sans font-bold text-lg hover:bg-sage-green hover:text-white transition-all duration-300">
                        See How It Works
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg
                    className="w-8 h-8 text-sage-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
