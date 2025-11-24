"use client";

import { motion } from "framer-motion";

export default function SDGBanner() {
    const goals = [
        { id: 2, title: "Zero Hunger", icon: "🍲" },
        { id: 11, title: "Sustainable Cities", icon: "🏙️" },
        { id: 12, title: "Responsible Consumption", icon: "♻️" },
        { id: 13, title: "Climate Action", icon: "🌍" },
    ];

    // Duplicate the list to ensure seamless looping
    const duplicatedGoals = [...goals, ...goals, ...goals, ...goals, ...goals, ...goals];

    return (
        <section className="bg-brand-light text-brand-dark py-3 overflow-hidden border-b border-brand-dark/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    {duplicatedGoals.map((goal, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-16 h-10 rounded-full bg-brand-dark text-brand-light font-bold font-mono text-sm">
                                SDG {goal.id}
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{goal.icon}</span>
                                <span className="font-display text-xl uppercase tracking-wider font-bold">
                                    {goal.title}
                                </span>
                            </div>
                            <span className="text-brand-dark/20 text-xl ml-12">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
