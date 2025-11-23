"use client";

import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <span ref={ref} className="font-mono text-bamboo-gold text-2xl font-bold">
            {Math.floor(count).toLocaleString()}
            {suffix}
        </span>
    );
};

export default function Problem() {
    return (
        <section id="about" className="bg-charcoal py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%2300F0FF\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-cream text-center mb-16">
                    The Climate & Food Security Crisis
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-digital-teal/30 to-transparent"></div>

                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full border border-digital-teal/30 bg-charcoal flex items-center justify-center mb-6 relative z-10 group-hover:border-digital-teal group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                            <svg className="w-10 h-10 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-sans text-xl font-medium text-digital-teal mb-4">Climate-Vulnerable Chains</h3>
                        <p className="text-soft-gray/80 mb-6 leading-relaxed">
                            Global supply chains are breaking under extreme weather events, threatening food security worldwide.
                        </p>
                        <div className="mt-auto">
                            <Counter end={1500} suffix=" avg miles" />
                            <p className="text-xs text-gray-500 mt-1 font-mono">FOOD TRAVEL DISTANCE</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full border border-digital-teal/30 bg-charcoal flex items-center justify-center mb-6 relative z-10 group-hover:border-digital-teal group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                            <svg className="w-10 h-10 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-sans text-xl font-medium text-digital-teal mb-4">Lost Capability</h3>
                        <p className="text-soft-gray/80 mb-6 leading-relaxed">
                            Urbanization has disconnected communities from food production, losing vital resilience skills.
                        </p>
                        <div className="mt-auto">
                            <Counter end={90} suffix="%" />
                            <p className="text-xs text-gray-500 mt-1 font-mono">FOOD IMPORTED IN CITIES</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full border border-digital-teal/30 bg-charcoal flex items-center justify-center mb-6 relative z-10 group-hover:border-digital-teal group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300">
                            <svg className="w-10 h-10 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-sans text-xl font-medium text-digital-teal mb-4">Broken Economics</h3>
                        <p className="text-soft-gray/80 mb-6 leading-relaxed">
                            Small farmers capture less value while consumers pay more for lower quality, nutrient-poor food.
                        </p>
                        <div className="mt-auto">
                            <Counter end={2.5} suffix="kg" />
                            <p className="text-xs text-gray-500 mt-1 font-mono">CO2 PER PURCHASE</p>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}
