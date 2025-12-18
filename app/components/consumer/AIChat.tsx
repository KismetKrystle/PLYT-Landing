"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../context/ModalContext";

export default function AIChat() {
    const [activeCard, setActiveCard] = useState(0);
    const { openModal } = useModal();

    const cards = [
        {
            title: "Find Fresh Food Nearby",
            description: "Discover local vendors and farmers markets with fresh produce delivered straight from nearby farms",
            color: "soft-teal",
            content: (
                <div className="bg-gradient-to-br from-soft-teal/20 to-sky-blue/20 rounded-none p-6 h-full border border-dark-gray/10 flex items-center justify-center">
                    <img
                        src="/assets/images/consumer/ai-fresh-food.png"
                        alt="Find Fresh Food Nearby"
                        className="h-full w-auto object-contain rounded-3xl shadow-2xl border-8 border-dark-gray/20"
                    />
                </div>
            ),
        },
        {
            title: "Learn to Grow",
            description: "Get personalized guidance on growing food in your space with step-by-step instructions",
            color: "warm-gold",
            content: (
                <div className="bg-gradient-to-br from-warm-gold/20 to-coral/20 rounded-none p-6 h-full flex items-center justify-center border border-dark-gray/10">
                    {/* Mobile View Mockup */}
                    <div className="max-w-sm w-full h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-dark-gray/20 flex flex-col">
                        {/* Phone Header */}
                        <div className="bg-warm-gold px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-white font-bold text-lg">Learn to Grow</h4>
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-warm-white h-full p-4 flex items-center justify-center">
                            <h4 className="text-center font-bold text-dark-gray mb-6">Growing Basil at Home</h4>

                            {/* Simple Plant Visualization */}
                            <div className="relative h-80 flex items-end justify-center">
                                {/* Pot */}
                                <div className="w-40 h-32 bg-gradient-to-b from-coral/40 to-coral/60 rounded-b-3xl relative">
                                    <div className="absolute inset-x-4 top-0 h-3 bg-coral/30 rounded-t-lg"></div>
                                </div>

                                {/* Soil */}
                                <div className="absolute bottom-24 w-36 h-8 bg-amber-900/40 rounded-full"></div>

                                {/* Stem */}
                                <div className="absolute bottom-32 w-2 h-24 bg-green-700 rounded-t-full"></div>

                                {/* Leaves */}
                                <div className="absolute bottom-48 left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        {[...Array(6)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-8 h-12 bg-sage-green rounded-full"
                                                style={{
                                                    transform: `rotate(${i * 60}deg) translateY(-20px)`,
                                                    transformOrigin: 'center'
                                                }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Callouts */}
                                <div className="absolute top-4 left-8 bg-warm-white border-2 border-sage-green rounded-lg px-3 py-1 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                                        <span className="text-xs font-bold text-dark-gray">Leaves: Harvest when 6-8 inches</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-40 right-4 bg-warm-white border-2 border-green-700 rounded-lg px-3 py-1 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                                        <span className="text-xs font-bold text-dark-gray">Stem: Supports growth</span>
                                    </div>
                                </div>

                                <div className="absolute bottom-24 left-4 bg-warm-white border-2 border-amber-900 rounded-lg px-3 py-1 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
                                        <span className="text-xs font-bold text-dark-gray">Soil: Well-draining mix</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-2">
                                <p className="text-sm text-dark-gray/70 flex items-center gap-2">
                                    <span className="text-lg">☀️</span> Needs 6-8 hours of sunlight daily
                                </p>
                                <p className="text-sm text-dark-gray/70 flex items-center gap-2">
                                    <span className="text-lg">💧</span> Water when top soil feels dry
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Find Your Perfect Grow System",
            description: "Browse custom systems designed by local artisans from recycled materials",
            color: "sage-green",
            content: (
                <div className="bg-gradient-to-br from-sage-green/20 to-soft-teal/20 rounded-none p-6 h-full flex items-center justify-center border border-dark-gray/10">
                    <img
                        src="/assets/images/consumer/ai-grow-system.png"
                        alt="Find Your Perfect Grow System"
                        className="h-full w-auto object-contain rounded-3xl shadow-2xl border-8 border-dark-gray/20"
                    />
                </div>
            ),
        },
        {
            title: "Track Your Impact",
            description: "See real-time data on CO₂ saved, water conserved, and food produced from your growing system",
            color: "sky-blue",
            content: (
                <div className="bg-gradient-to-br from-sky-blue/20 to-soft-teal/20 rounded-none p-6 h-full flex items-center justify-center border border-dark-gray/10">
                    <img
                        src="/assets/images/consumer/ai-impact.png"
                        alt="Track Your Impact"
                        className="h-full w-auto object-contain rounded-3xl shadow-2xl border-8 border-dark-gray/20"
                    />
                </div>
            ),
        },
    ];

    return (
        <section id="ai-chat" className="bg-brand-light py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8 border-b border-brand-dark/10 pb-12">
                    <div className="max-w-3xl">
                        <h2 className="font-display text-5xl md:text-6xl text-brand-dark mb-6 uppercase leading-[0.9]">
                            Meet Your AI<br />Food Assistant
                        </h2>
                        <p className="text-brand-dark/70 text-xl font-serif max-w-2xl">
                            One intelligent assistant to help you find food, learn to grow, and connect with your community
                        </p>
                    </div>
                    <div className="shrink-0">
                        <button
                            onClick={() => openModal('waitlist')}
                            className="inline-block bg-brand-dark text-brand-light px-8 py-4 rounded-none font-sans font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-brand-dark"
                        >
                            Try the AI Assistant
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Navigation List */}
                        <div className="md:col-span-5 space-y-0">
                            {cards.map((card, i) => (
                                <div key={i} className="border-b border-brand-dark/10 last:border-0">
                                    <button
                                        onClick={() => setActiveCard(i)}
                                        className={`w-full text-left py-8 group transition-all duration-300 ${activeCard === i ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                                            }`}
                                    >
                                        <div className="flex items-baseline gap-6">
                                            <span className={`font-display text-4xl ${activeCard === i ? 'text-brand-dark' : 'text-brand-dark/50'
                                                }`}>
                                                0{i + 1}
                                            </span>
                                            <div className="space-y-2">
                                                <h3 className={`font-display text-2xl uppercase ${activeCard === i ? 'text-brand-dark' : 'text-brand-dark/80'
                                                    }`}>
                                                    {card.title}
                                                </h3>
                                                <AnimatePresence>
                                                    {activeCard === i && (
                                                        <motion.p
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="text-dark-gray/70 leading-relaxed overflow-hidden"
                                                        >
                                                            {card.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Right Column: Visual Content */}
                        <div className="md:col-span-7 relative">
                            <div className="sticky top-24">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCard}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-[500px] flex items-center justify-center"
                                    >
                                        {cards[activeCard].content}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

