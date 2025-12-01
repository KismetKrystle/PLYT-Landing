"use client";

import { motion } from "framer-motion";

export default function SustainabilityStatement() {
    return (
        <section className="w-full bg-brand-light py-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl text-center uppercase leading-[0.9] text-brand-dark tracking-tight"
                >
                    "Self-Sufficiency
                    <br />
                    <span className="text-brand-earth">Improves</span>
                    <br />
                    Global Sustainability"
                </motion.h2>
            </div>
        </section>
    );
}
