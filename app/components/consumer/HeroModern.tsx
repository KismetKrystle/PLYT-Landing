"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroModern() {
    return (
        <section className="relative w-full min-h-screen bg-brand-light text-brand-black overflow-hidden pt-24 pb-12 px-4 md:px-8 flex flex-col">
            {/* Massive Header */}
            <div className="w-full max-w-[1800px] mx-auto mb-8">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="font-display text-[15vw] leading-[0.85] uppercase tracking-tighter text-brand-dark"
                >
                    URBAN
                    <br />
                    NATURE
                </motion.h1>
            </div>

            {/* Split Content */}
            <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left: Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="lg:col-span-8 relative aspect-[16/9] lg:aspect-[16/8] w-full overflow-hidden"
                >
                    {/* Hero Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/hero_urban_nature.png"
                            alt="Futuristic urban rooftop garden with lush greenery and vertical farming towers"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right: Content */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-brand-dark mb-8">
                            The network that connects urban spaces with regenerative agriculture.
                            Transforming concrete jungles into living, breathing ecosystems.
                        </p>

                        <div className="flex flex-col gap-4">
                            <motion.a
                                href="#ai-chat"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group w-full bg-brand-dark text-brand-light py-4 px-6 text-lg font-bold uppercase tracking-wider flex items-center justify-between border border-brand-dark hover:bg-transparent hover:text-brand-dark transition-colors"
                            >
                                Start Growing
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </motion.a>

                            <a
                                href="#technology"
                                className="w-full bg-transparent text-brand-dark py-4 px-6 text-lg font-bold uppercase tracking-wider flex items-center justify-between border border-brand-dark hover:bg-brand-dark hover:text-brand-light transition-colors"
                            >
                                Learn More | XRPL Integration
                                <span className="text-xl">+</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Stats or Extra Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 lg:mt-auto pt-8 border-t border-brand-dark/20"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="block font-display text-4xl text-brand-earth">50+</span>
                                <span className="text-sm uppercase tracking-wide font-bold">Cities</span>
                            </div>
                            <div>
                                <span className="block font-display text-4xl text-brand-earth">10k</span>
                                <span className="text-sm uppercase tracking-wide font-bold">Gardens</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
