"use client";

import { motion } from "framer-motion";

export default function PartnersBanner() {
    const partners = [
        "Future Food Systems",
        "Buyamia",
        "Local Farmers",
        "Local Artisans",
        "4-UN SDG Goals",
        "Regenerative Local Food Economies"
    ];

    // Duplicate the list to ensure seamless looping
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="bg-brand-dark text-brand-light py-3 mt-6 overflow-hidden border-y border-brand-light/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="font-display text-2xl uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity cursor-default">
                                {partner}
                            </span>
                            <span className="text-brand-earth text-xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
