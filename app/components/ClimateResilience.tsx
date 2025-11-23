"use client";

import { useEffect, useRef, useState } from "react";

const Counter = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
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
        <span ref={ref} className="font-mono text-forest-green text-4xl md:text-5xl font-bold">
            {prefix}{Math.floor(count).toLocaleString()}{suffix}
        </span>
    );
};

export default function ClimateResilience() {
    return (
        <section id="impact" className="bg-cream py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-forest-green/5 pointer-events-none"></div>

            {/* Background Illustration */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none" style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100%\\' height=\\'100%\\' viewBox=\\'0 0 100 100\\' preserveAspectRatio=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 100 C 20 0 50 0 100 100 Z\\' fill=\\'%230A3F2F\\' /%3E%3C/svg%3E')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom"
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-forest-green text-center mb-20">
                    Built for a Changing Climate
                </h2>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-24 text-center">
                    <div className="group">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <Counter end={80} suffix="%" />
                        </div>
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-bamboo-gold/20 flex items-center justify-center text-bamboo-gold">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                        </div>
                        <p className="font-sans text-gray-600 font-medium">CO2 Reduction</p>
                        <p className="font-sans text-digital-teal text-sm mt-1">vs traditional farming</p>
                    </div>

                    <div className="group">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <Counter end={100} suffix="%" />
                        </div>
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-bamboo-gold/20 flex items-center justify-center text-bamboo-gold">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <p className="font-sans text-gray-600 font-medium">Recycled Materials</p>
                        <p className="font-sans text-digital-teal text-sm mt-1">circular economy</p>
                    </div>

                    <div className="group">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <Counter end={60} suffix="%" />
                        </div>
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-bamboo-gold/20 flex items-center justify-center text-bamboo-gold">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                        </div>
                        <p className="font-sans text-gray-600 font-medium">Water Savings</p>
                        <p className="font-sans text-digital-teal text-sm mt-1">closed-loop system</p>
                    </div>

                    <div className="group">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <Counter end={0} prefix="" />
                        </div>
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-bamboo-gold/20 flex items-center justify-center text-bamboo-gold">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p className="font-sans text-gray-600 font-medium">Food Miles</p>
                        <p className="font-sans text-digital-teal text-sm mt-1">hyper-local production</p>
                    </div>

                    <div className="group">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <Counter end={365} />
                        </div>
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-bamboo-gold/20 flex items-center justify-center text-bamboo-gold">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="font-sans text-gray-600 font-medium">Days Production</p>
                        <p className="font-sans text-digital-teal text-sm mt-1">climate-controlled</p>
                    </div>
                </div>

                {/* Benefits List */}
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        "Resilient to extreme weather events through modular, protected design.",
                        "Decentralized network prevents single points of failure in food supply.",
                        "Regenerates local biodiversity by integrating with urban nature.",
                        "Reduces urban heat island effect through green infrastructure.",
                        "Empowers communities with food sovereignty and security.",
                        "Creates green jobs and educational opportunities in cities."
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                            <div className="mt-1 w-6 h-6 rounded-full bg-bamboo-gold/10 flex items-center justify-center shrink-0 group-hover:bg-bamboo-gold/30 transition-colors">
                                <svg className="w-4 h-4 text-bamboo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="font-sans text-forest-green text-lg leading-relaxed">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
