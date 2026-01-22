"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UnifiedFlows() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 0, label: "AI Shopping" },
        { id: 1, label: "AI Growing" },
        { id: 2, label: "Money Works" },
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
            title: "AI SHOPS\nFOR YOU",
            subtitle: "Your personal produce concierge.",
            steps: [
                { icon: "🗣️", title: "1. Tell AI", desc: "Input produce, location, budget, time & preferences." },
                { icon: "🔍", title: "2. Search", desc: "AI scans database for products in your area first." },
                { icon: "📦", title: "3. Optimize", desc: "Generates search results based on proximity, health conditions & budget." },
                { icon: "💳", title: "4. Pay", desc: "Explore selected options, choose the most fitting and submit payment.", isDark: true },
            ]
        },
        {
            id: 1,
            title: "AI HELPS\nYOU PICK",
            subtitle: "Expert guidance to pick the perfect system",
            steps: [
                { icon: "🌱", title: "1. Your Goals", desc: "Tell AI what you want to grow, budget & space." },
                { icon: "🔎", title: "2. Discovery", desc: "AI finds products, builders & services." },
                { icon: "✨", title: "3. Options", desc: "AI generates tailored team & growing options." },
                { icon: "✅", title: "4. Start", desc: "Select option and submit payment.", isDark: true },
            ]
        },
        {
            id: 2,
            title: "MONEY WORKS\nFOR YOU",
            subtitle: "Deposit funds, buy local, and watch your unused balance grow automatically.",
            steps: [
                { icon: "💵", title: "1. Deposit", desc: "Add money to your wallet.", extra: <div className="font-mono text-lg font-bold text-brand-earth">$100 <span className="text-xs font-normal text-brand-dark/40">Initial</span></div> },
                { icon: "🛒", title: "2. Buy Local", desc: "Support local growers & artisans.", extra: <div className="font-mono text-lg font-bold text-brand-earth">$60 <span className="text-xs font-normal text-brand-dark/40">Spent</span></div> },
                { icon: "📈", title: "3. Earn Yield", desc: "Unused balance grows automatically.", extra: <div className="flex items-end gap-2"><div className="font-mono text-2xl font-bold text-brand-earth">+$2.80</div><div className="text-xs text-brand-light/50 mb-1">Annual Est.</div></div>, isDark: true },
            ]
        },
    ];

    return (
        <section className="w-full bg-brand-light text-brand-black py-12 px-4 md:px-8 border-t border-brand-dark/10">
            <div className="w-full max-w-[1800px] mx-auto">

                {/* Tabs Navigation */}
                <div className="flex flex-nowrap border-b border-brand-dark/10 mb-8 md:mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-2 py-3 md:px-8 md:py-4 font-display text-xs md:text-xl uppercase tracking-wider transition-all duration-300 border-t border-x ${activeTab === tab.id
                                ? "bg-brand-dark text-brand-light border-brand-dark"
                                : "bg-transparent text-brand-dark/50 border-transparent hover:text-brand-dark hover:bg-brand-dark/5"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    {/* Filler line to complete the border - hidden on mobile as tabs take full width */}
                    <div className="hidden md:block flex-grow border-b border-brand-dark/10 transform translate-y-[1px]"></div>
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
                        <div className="lg:w-1/3 text-left">
                            <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.9] text-brand-dark mb-4 whitespace-pre-line">
                                {content[activeTab].title}
                            </h2>
                            <p className="font-serif text-xl text-brand-dark/70 max-w-md">
                                {content[activeTab].subtitle}
                            </p>
                        </div>

                        {/* Steps Grid */}
                        <div className="lg:w-2/3 w-full">
                            <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-4 w-full">
                                {content[activeTab].steps.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 md:p-6 transition-colors md:flex-1 rounded-xl ${step.isDark
                                            ? "bg-brand-dark text-brand-light relative overflow-hidden group"
                                            : "bg-white border border-brand-dark/10 hover:border-brand-dark"
                                            }`}
                                    >
                                        {step.isDark ? (
                                            <>
                                                <div className="relative z-10">
                                                    <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
                                                    <h3 className="font-display text-lg md:text-2xl uppercase text-brand-earth mb-2 leading-tight">{step.title}</h3>
                                                    <p className="font-sans text-xs md:text-sm text-brand-light/70 mb-3 leading-snug">{step.desc}</p>
                                                    {step.extra}
                                                </div>
                                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-brand-earth/10 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16 blur-2xl group-hover:bg-brand-earth/20 transition-colors"></div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{step.icon}</div>
                                                <h3 className="font-display text-lg md:text-2xl uppercase text-brand-dark mb-2 leading-tight">{step.title}</h3>
                                                <p className="font-sans text-xs md:text-sm text-brand-dark/60 mb-3 leading-snug">{step.desc}</p>
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
