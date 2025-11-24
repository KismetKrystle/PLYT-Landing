"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProblemSolutionToggle() {
    const [activeTab, setActiveTab] = useState<'problem' | 'solution'>('problem');

    const problems = [
        {
            icon: (
                <svg className="w-10 h-10 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Climate-Vulnerable Chains",
            description: "Global supply chains are breaking under extreme weather events, threatening food security worldwide.",
            stat: "1,500",
            label: "Avg miles food travels",
            color: "coral",
            bg: "bg-coral/10",
            text: "text-coral"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Lost Capability",
            description: "Urbanization has disconnected communities from food production, losing vital resilience skills.",
            stat: "90%",
            label: "Food imported in cities",
            color: "sky-blue",
            bg: "bg-sky-blue/10",
            text: "text-sky-blue"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Broken Economics",
            description: "Small farmers capture less value while consumers pay more for lower quality, nutrient-poor food.",
            stat: "15%",
            label: "Farmer's share of retail price",
            color: "warm-gold",
            bg: "bg-warm-gold/10",
            text: "text-warm-gold"
        }
    ];

    const solutions = [
        {
            icon: (
                <svg className="w-10 h-10 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Local Resilience",
            description: "Hyper-local food systems eliminate long supply chains, making communities climate-resilient.",
            stat: "0 - 100",
            label: "Food miles locally",
            color: "sage-green",
            bg: "bg-sage-green/10",
            text: "text-sage-green"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-soft-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Empowered Communities",
            description: "AI-powered tools and education reconnect urban populations with food production capabilities.",
            stat: "100%",
            label: "Community control",
            color: "soft-teal",
            bg: "bg-soft-teal/10",
            text: "text-soft-teal"
        },
        {
            icon: (
                <svg className="w-10 h-10 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Fair Economics",
            description: "Direct connections and blockchain payments ensure farmers earn more while consumers pay less.",
            stat: "80%",
            label: "Farmer's share of retail price",
            color: "brand-earth",
            bg: "bg-brand-earth/10",
            text: "text-brand-earth"
        }
    ];

    return (
        <section className="bg-brand-light pt-12 pb-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-earth/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="font-display text-5xl md:text-6xl text-brand-dark mb-6 uppercase leading-[0.9]">
                        From Crisis to <br />Resilience
                    </h2>

                    {/* Toggle Switch */}
                    <div className="inline-flex bg-brand-dark/5 p-1 rounded-full relative">
                        <div
                            className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out"
                            style={{
                                left: activeTab === 'problem' ? '4px' : '50%',
                                width: 'calc(50% - 4px)'
                            }}
                        ></div>
                        <button
                            onClick={() => setActiveTab('problem')}
                            className={`relative z-10 px-8 py-3 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${activeTab === 'problem' ? 'text-brand-dark' : 'text-brand-dark/50 hover:text-brand-dark/70'
                                }`}
                        >
                            The Problem
                        </button>
                        <button
                            onClick={() => setActiveTab('solution')}
                            className={`relative z-10 px-8 py-3 rounded-full font-sans font-bold text-sm uppercase tracking-wider transition-colors duration-300 ${activeTab === 'solution' ? 'text-brand-dark' : 'text-brand-dark/50 hover:text-brand-dark/70'
                                }`}
                        >
                            The Solution
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'problem' ? (
                            <motion.div
                                key="problem"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
                            >
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-dark/30 to-transparent"></div>

                                {problems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center group">
                                        <div className="w-24 h-24 rounded-full border border-brand-dark/30 bg-white flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-dark group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                        <div className={`${item.bg} rounded-lg p-4 text-center mt-auto w-full`}>
                                            <p className={`text-3xl font-mono font-bold ${item.text} mb-1`}>{item.stat}</p>
                                            <p className="text-sm text-brand-dark/70">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="solution"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
                            >
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-earth/50 to-transparent"></div>

                                {solutions.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center group">
                                        <div className="w-24 h-24 rounded-full border border-brand-earth/50 bg-white flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-earth group-hover:shadow-[0_0_20px_rgba(196,164,132,0.3)] transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                        <div className={`${item.bg} rounded-lg p-4 text-center mt-auto w-full`}>
                                            <p className={`text-3xl font-mono font-bold ${item.text} mb-1`}>{item.stat}</p>
                                            <p className="text-sm text-brand-dark/70">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-brand-dark/10"></div>
        </section>
    );
}
