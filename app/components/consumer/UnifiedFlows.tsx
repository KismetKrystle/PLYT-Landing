"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UnifiedFlows() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: "Money Works" },
        { id: 1, label: "AI Shopping" },
        { id: 2, label: "AI Growing" },
    ];

    interface Step {
        icon: string;
        title: string;
        desc: string;
        extra?: React.ReactNode;
        isDark?: boolean;
    }

    const content: { id: number; title: string; subtitle: string; steps: Step[] }[] = [
        {
            id: 0,
            title: "MONEY WORKS\nFOR YOU",
            subtitle: "Deposit funds, buy local, and watch your unused balance grow automatically.",
            steps: [
                { icon: "💵", title: "1. Deposit", desc: "Add money to your Plyant wallet.", extra: <div className="font-mono text-lg font-bold text-brand-earth">$100 <span className="text-xs font-normal text-brand-dark/40">Initial</span></div> },
                { icon: "🛒", title: "2. Buy Local", desc: "Support local growers & artisans.", extra: <div className="font-mono text-lg font-bold text-brand-earth">$60 <span className="text-xs font-normal text-brand-dark/40">Spent</span></div> },
                { icon: "📈", title: "3. Earn Yield", desc: "Unused balance grows automatically.", extra: <div className="flex items-end gap-2"><div className="font-mono text-2xl font-bold text-brand-earth">+$2.80</div><div className="text-xs text-brand-light/50 mb-1">Annual Est.</div></div>, isDark: true },
            ]
        },
        {
            id: 1,
            title: "AI SHOPS\nFOR YOU",
            subtitle: "Your personal produce concierge.",
            steps: [
                { icon: "🗣️", title: "1. Tell AI", desc: "Input produce, location, budget, time & preferences." },
                { icon: "🔍", title: "2. Search", desc: "AI scans database for products in your area." },
                { icon: "📦", title: "3. Optimize", desc: "Generates package based on proximity & budget." },
                { icon: "💳", title: "4. Pay", desc: "Select package and submit payment.", isDark: true },
            ]
        },
        {
            id: 2,
            title: "AI HELPS\nYOU PICK",
            subtitle: "Expert guidance to pick the perfect system",
            steps: [
                { icon: "🌱", title: "1. Your Goals", desc: "Tell AI what you want to grow, budget & space." },
                { icon: "🔎", title: "2. Discovery", desc: "AI finds products, builders & services." },
                { icon: "✨", title: "3. Options", desc: "AI generates tailored growing solutions." },
                { icon: "✅", title: "4. Start", desc: "Select option and submit payment.", isDark: true },
            ]
        },
    ];

    return (
        <section className="w-full bg-brand-light text-brand-black py-12 px-4 md:px-8 border-t border-brand-dark/10">
            <div className="w-full max-w-[1800px] mx-auto">

                {/* Tabs Navigation */}
                <div className="flex flex-wrap border-b border-brand-dark/10 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-4 font-display text-xl uppercase tracking-wider transition-all duration-300 border-t border-x ${activeTab === tab.id
                                ? "bg-brand-dark text-brand-light border-brand-dark"
                                : "bg-transparent text-brand-dark/50 border-transparent hover:text-brand-dark hover:bg-brand-dark/5"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    {/* Filler line to complete the border */}
                    <div className="flex-grow border-b border-brand-dark/10 transform translate-y-[1px]"></div>
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col lg:flex-row items-center justify-between gap-12"
                    >
                        {/* Header */}
                        <div className="lg:w-1/3">
                            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.9] text-brand-dark mb-4 whitespace-pre-line">
                                {content[activeTab].title}
                            </h2>
                            <p className="font-serif text-xl text-brand-dark/70 max-w-md">
                                {content[activeTab].subtitle}
                            </p>
                        </div>

                        {/* Steps Grid */}
                        <div className="lg:w-2/3 w-full">
                            <div className={`grid grid-cols-1 md:grid-cols-${content[activeTab].steps.length > 3 ? '4' : '3'} gap-6`}>
                                {content[activeTab].steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`p-6 transition-colors ${step.isDark
                                            ? "bg-brand-dark text-brand-light relative overflow-hidden group"
                                            : "bg-white border border-brand-dark/10 hover:border-brand-dark"
                                            }`}
                                    >
                                        {step.isDark ? (
                                            <>
                                                <div className="relative z-10">
                                                    <div className="text-4xl mb-4">{step.icon}</div>
                                                    <h3 className="font-display text-2xl uppercase text-brand-earth mb-2">{step.title}</h3>
                                                    <p className="font-sans text-sm text-brand-light/70 mb-3">{step.desc}</p>
                                                    {step.extra}
                                                </div>
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-earth/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-earth/20 transition-colors"></div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-4xl mb-4">{step.icon}</div>
                                                <h3 className="font-display text-2xl uppercase text-brand-dark mb-2">{step.title}</h3>
                                                <p className="font-sans text-sm text-brand-dark/60 mb-3">{step.desc}</p>
                                                {step.extra}
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
