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
                    <img
                        src="/assets/images/consumer/ai-learn-to-grow.png"
                        alt="Learn to Grow"
                        className="h-full w-auto object-contain rounded-3xl shadow-2xl border-8 border-dark-gray/20"
                    />
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
                        <a
                            href="https://plyt-mvp.vercel.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-brand-dark text-brand-light px-8 py-4 rounded-none font-sans font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-brand-dark"
                        >
                            Explore the Interactive Prototype
                        </a>
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

