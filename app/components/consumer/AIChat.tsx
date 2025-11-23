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
                    {/* Mobile View Mockup */}
                    <div className="max-w-sm w-full h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-dark-gray/20 flex flex-col">
                        {/* Phone Header */}
                        <div className="bg-sage-green px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-white font-bold text-lg">Fresh Produce</h4>
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Produce List */}
                        <div className="p-4 space-y-3 bg-warm-white h-full flex flex-col justify-center">
                            {[
                                { name: "Organic Tomatoes", distance: "0.8 km", price: "$2.50", vendor: "PadangFarm" },
                                { name: "Fresh Spinach", distance: "1.2 km", price: "$1.80", vendor: "Ubud Gardens" },
                                { name: "Local Carrots", distance: "1.5 km", price: "$2.00", vendor: "Bali Harvest" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-sage-green/20 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h5 className="font-bold text-dark-gray">{item.name}</h5>
                                            <p className="text-xs text-dark-gray/60">{item.vendor}</p>
                                        </div>
                                        <span className="font-bold text-sage-green">{item.price}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-dark-gray/60">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{item.distance} away</span>
                                        <span className="ml-auto text-green-600">● Available</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                    {/* Mobile View Mockup */}
                    <div className="max-w-sm w-full h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-dark-gray/20 flex flex-col">
                        {/* Phone Header */}
                        <div className="bg-sage-green px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-white font-bold text-lg">Grow Systems</h4>
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-warm-white h-full p-4 flex flex-col justify-center">
                            <div className="bg-white rounded-xl p-4 shadow-sm border border-sage-green/20">
                                {/* System Image Placeholder */}
                                <div className="aspect-square bg-gradient-to-br from-sage-green/30 to-soft-teal/30 rounded-2xl mb-4 flex items-center justify-center relative">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 text-sage-green/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <p className="text-dark-gray/50 font-mono text-xs mt-2">Vertical Tower Garden</p>
                                    </div>
                                    <div className="absolute top-2 right-2 bg-sage-green text-white px-2 py-1 rounded-full text-xs font-bold">
                                        Available
                                    </div>
                                </div>

                                {/* System Details */}
                                <h4 className="font-bold text-xl text-dark-gray mb-2">Urban Tower System</h4>
                                <p className="text-dark-gray/60 text-xs mb-3">Perfect for balconies. Grows 20+ plants vertically.</p>

                                <div className="bg-sage-green/10 rounded-xl p-3 mb-3">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-dark-gray/70 text-xs">Price</span>
                                        <span className="text-xl font-bold text-sage-green">$280</span>
                                    </div>
                                    <div className="space-y-1 text-xs">
                                        <div className="flex items-center gap-2 text-dark-gray/70">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            100% recycled materials
                                        </div>
                                        <div className="flex items-center gap-2 text-dark-gray/70">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Low water usage
                                        </div>
                                    </div>
                                </div>

                                {/* Artisans */}
                                <div className="border-t border-sage-green/20 pt-3">
                                    <p className="text-xs text-dark-gray/60 mb-2">Local artisans:</p>
                                    <div className="flex gap-1 flex-wrap">
                                        <div className="px-2 py-1 bg-sage-green/10 rounded-full text-xs text-dark-gray">
                                            Pablo Luna
                                        </div>
                                        <div className="px-2 py-1 bg-sage-green/10 rounded-full text-xs text-dark-gray">
                                            Bali Craft
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Track Your Impact",
            description: "See real-time data on CO₂ saved, water conserved, and food produced from your growing system",
            color: "sky-blue",
            content: (
                <div className="bg-gradient-to-br from-sky-blue/20 to-soft-teal/20 rounded-none p-6 h-full flex items-center justify-center border border-dark-gray/10">
                    {/* Mobile View Mockup */}
                    <div className="max-w-sm w-full h-[450px] bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-dark-gray/20 flex flex-col">
                        {/* Phone Header */}
                        <div className="bg-sky-blue px-6 py-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-white font-bold text-lg">Impact Tracker</h4>
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                        </div>
                        <div className="bg-dark-gray/90 h-full p-4 relative flex flex-col justify-center">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-soft-teal to-transparent opacity-50"></div>

                            <div className="flex justify-between items-center mb-6">
                                <span className="font-mono text-warm-gold text-xs tracking-wider border border-warm-gold/30 px-2 py-1 rounded bg-warm-gold/10">DIGITAL TWIN</span>
                                <span className="font-mono text-soft-teal text-xs">ID: #00042</span>
                            </div>

                            <h4 className="text-xl font-bold text-warm-white mb-6">Your Urban Tower System</h4>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p className="text-gray-400 text-xs mb-1">CO₂ Offset</p>
                                    <p className="font-mono text-soft-teal text-2xl font-bold">2.5kg</p>
                                </div>
                                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p className="text-gray-400 text-xs mb-1">Water Saved</p>
                                    <p className="font-mono text-soft-teal text-2xl font-bold">145L</p>
                                </div>
                                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p className="text-gray-400 text-xs mb-1">Food Grown</p>
                                    <p className="font-mono text-soft-teal text-2xl font-bold">8.2kg</p>
                                </div>
                                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                                    <p className="text-gray-400 text-xs mb-1">Status</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <p className="font-mono text-green-400 text-sm">Active</p>
                                    </div>
                                </div>
                            </div>

                            {/* Mini Graph */}
                            <div className="h-20 w-full bg-black/20 rounded border border-white/5 flex items-end px-2 pb-2 gap-1">
                                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-soft-teal/30 hover:bg-soft-teal/50 transition-colors rounded-t-sm"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                ))}
                            </div>

                            <p className="text-gray-400 text-xs mt-4 text-center">Live productivity tracking</p>
                        </div>
                    </div>
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

