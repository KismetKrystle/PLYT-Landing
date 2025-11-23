"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ShoppingBag, Sprout, ChevronDown, ChevronUp } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Chat & Discover",
        description: "Our AI guides you to fresh local food, growing resources, and the perfect grow system for your space.",
        icon: MessageSquare,
        details: [
            {
                title: "User Onboarding",
                text: "Sign up via website/app (Web2 methods: email/social login). Custodial XRPL wallet auto-created for easy participation."
            },
            {
                title: "Marketplace Exploration",
                text: "Browse products from home growers, local farmers, distributors, and artisans. Products: seedlings, fresh produce, prepared food, DIY plans, turnkey grow systems, and accessories. Sellers are clearly segmented by role for trust and choice."
            },
            {
                title: "Grow & Learn",
                text: "AI Grow Companion provides personalized growing guidance. Connects users to local resources, suppliers, and service providers."
            }
        ]
    },
    {
        id: 2,
        title: "Purchase & Earn",
        description: "Buy from local vendors with simple payments. Unused balance earns yield automatically while supporting your community.",
        icon: ShoppingBag,
        details: [
            {
                title: "Sell & Trade",
                text: "Users list produce, seedlings, or prepared food for sale on the marketplace. B2B clients (restaurants, stores) and community buyers can purchase directly."
            },
            {
                title: "Payments & Royalties",
                text: "User can deposit their food budget weekly, monthly or yearly. Any unused balance automatically earns yield (powered by XRPL DEX), turning your food spending into a savings account. All transactions executed directly on XRPL blockchain using Plyant Credits. Smart contracts handle payments, automated royalties for designers/creators, and staking logic for passive earnings."
            }
        ]
    },
    {
        id: 3,
        title: "Grow & Impact",
        description: "Track your environmental impact, earn rewards for sustainable choices, and help build a resilient food system.",
        icon: Sprout,
        details: [
            {
                title: "Impact Dashboard",
                text: "Community and individual impact tracked on-chain: fresh food yield, climate impact (CO2 reduction), circular economy credits. Live dashboard displays key metrics for all participants."
            },
            {
                title: "Feedback & Expansion",
                text: "Community feedback, sustainability leaderboards, and rapid onboarding for new participants. Modular structure supports easy replication and scaling to new regions."
            },
            {
                title: "XRPL Integration",
                text: "Payments, staking, royalties, and all impact metrics are handled transparently on-chain for auditability, speed, and low cost."
            }
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const } },
};

function StepCard({ step }: { step: typeof steps[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            variants={item}
            className="group relative flex flex-col h-full border-t border-brand-dark/20 pt-8 hover:border-brand-dark transition-colors duration-300"
        >
            {/* Icon & Number */}
            <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-brand-earth/10 flex items-center justify-center rounded-full group-hover:bg-brand-earth/20 transition-colors">
                    <step.icon className="w-8 h-8 text-brand-dark" />
                </div>
                <span className="font-display text-6xl text-brand-dark/10 group-hover:text-brand-dark/20 transition-colors">0{step.id}</span>
            </div>

            <h3 className="font-display text-4xl uppercase mb-4 text-brand-dark group-hover:text-brand-earth transition-colors">
                {step.title}
            </h3>
            <p className="font-sans text-lg text-brand-dark/70 leading-relaxed mb-8">
                {step.description}
            </p>

            <div className="mt-auto border-t border-brand-dark/10 pt-6">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-dark hover:text-brand-earth transition-colors mb-4"
                >
                    {isOpen ? "Read Less" : "Read More"}
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="space-y-6 pb-4">
                                {step.details.map((detail, idx) => (
                                    <div key={idx}>
                                        <h4 className="font-bold uppercase text-sm tracking-wider text-brand-dark mb-1">{detail.title}</h4>
                                        <p className="text-sm text-brand-dark/60 leading-relaxed">{detail.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </motion.div>
    );
}

export default function HowItWorksModern() {
    return (
        <section id="how-it-works" className="w-full bg-brand-light text-brand-black pt-12 pb-24 px-4 md:px-8 relative">
            <div className="w-full max-w-[1800px] mx-auto">
                {/* Header Section */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-7">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-[10vw] lg:text-[8vw] leading-[0.85] uppercase tracking-tighter text-brand-dark"
                        >
                            HOW IT
                            <br />
                            WORKS
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-5 pb-4">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-serif leading-relaxed text-brand-dark/80"
                        >
                            Three simple steps to fresh food, growing knowledge, and community connection. Powered by advanced technology, simplified for you.
                        </motion.p>
                    </div>
                </div>

                {/* Steps Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                    {steps.map((step) => (
                        <StepCard key={step.id} step={step} />
                    ))}
                </motion.div>
            </div>

            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-brand-dark/10"></div>
        </section>
    );
}
