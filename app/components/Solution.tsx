"use client";

import { useEffect, useState } from "react";

export default function Solution() {
    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const words = ["Teaching", "Connecting", "Growing", "Earning", "Sustaining"];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section className="bg-cream py-24 relative overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center">
                <svg width="800" height="800" viewBox="0 0 100 100" fill="currentColor" className="text-forest-green transform rotate-12">
                    <path d="M50 0 C20 20 20 80 50 100 C80 80 80 20 50 0 Z" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl text-forest-green mb-6">
                        Plyant: Where Climate Action Meets <br /> Financial Empowerment
                    </h2>
                    <div className="h-8 overflow-hidden">
                        <div
                            className="transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateY(-${activeWordIndex * 100}%)` }}
                        >
                            {words.map((word, index) => (
                                <div key={index} className="h-full font-mono text-xl text-bamboo-gold font-medium">
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-soft-gray hover:border-bamboo-gold hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-digital-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-digital-teal/20 transition-colors">
                            <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="font-sans text-xl font-bold text-forest-green mb-3">LEARN & GROW</h3>
                        <p className="text-gray-600 mb-6">
                            Master regenerative agriculture through our gamified learning platform and start your own urban farm.
                        </p>
                        <a href="#" className="text-bamboo-gold font-medium flex items-center group-hover:gap-2 transition-all">
                            Learn More <span className="ml-1">→</span>
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-soft-gray hover:border-bamboo-gold hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-digital-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-digital-teal/20 transition-colors">
                            <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-sans text-xl font-bold text-forest-green mb-3">EARN WHILE YOU IMPACT</h3>
                        <p className="text-gray-600 mb-6">
                            Get paid for every kg of carbon sequestered and food produced through our blockchain-verified rewards.
                        </p>
                        <a href="#" className="text-bamboo-gold font-medium flex items-center group-hover:gap-2 transition-all">
                            Learn More <span className="ml-1">→</span>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-soft-gray hover:border-bamboo-gold hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-digital-teal/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-digital-teal/20 transition-colors">
                            <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="font-sans text-xl font-bold text-forest-green mb-3">BUILD RESILIENT SYSTEMS</h3>
                        <p className="text-gray-600 mb-6">
                            Connect with local networks to share resources, knowledge, and produce, creating a self-sustaining ecosystem.
                        </p>
                        <a href="#" className="text-bamboo-gold font-medium flex items-center group-hover:gap-2 transition-all">
                            Learn More <span className="ml-1">→</span>
                        </a>
                    </div>
                </div>

                {/* Circular Flow Diagram */}
                <div className="flex justify-center">
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 border-2 border-dashed border-digital-teal/30 rounded-full animate-spin-slow"></div>

                        {/* Nodes */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-digital-teal">
                            <span className="text-xs font-bold text-forest-green">User</span>
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-digital-teal">
                            <span className="text-xs font-bold text-forest-green">Community</span>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-digital-teal">
                            <span className="text-xs font-bold text-forest-green">Platform</span>
                        </div>
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md border border-digital-teal">
                            <span className="text-xs font-bold text-forest-green">Blockchain</span>
                        </div>

                        {/* Center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-forest-green rounded-full flex items-center justify-center text-cream font-serif font-bold text-xl shadow-lg animate-pulse">
                                PLYANT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
