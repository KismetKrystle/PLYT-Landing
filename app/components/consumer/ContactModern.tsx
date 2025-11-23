"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactModern() {
    return (
        <section className="w-full bg-brand-dark text-brand-light pt-24 pb-12 px-4 md:px-8 overflow-hidden">
            <div className="w-full max-w-[1800px] mx-auto flex flex-col">

                {/* Massive Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-[12vw] leading-[0.8] uppercase tracking-tighter text-brand-light mb-12 text-center lg:text-left"
                >
                    CONTACT US NOW
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Image/Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative aspect-[3/4] w-full bg-brand-earth/20 overflow-hidden"
                    >
                        {/* Placeholder for Contact Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-light/5">
                            <span className="font-display text-brand-light/20 text-4xl">CONTACT IMAGE</span>
                        </div>
                    </motion.div>

                    {/* Right: Links & Info */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="font-bold uppercase tracking-widest mb-6 text-brand-earth">Visit</h3>
                                <p className="text-xl font-serif leading-relaxed mb-4">
                                    123 Urban Garden Way<br />
                                    New York, NY 10012
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 text-brand-light hover:text-brand-earth transition-colors">
                                    Get Directions <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="font-bold uppercase tracking-widest mb-6 text-brand-earth">Connect</h3>
                                <ul className="space-y-4 text-xl font-serif">
                                    <li>
                                        <a href="mailto:hello@plyant.com" className="hover:text-brand-earth transition-colors">hello@plyant.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:+15550000000" className="hover:text-brand-earth transition-colors">+1 (555) 000-0000</a>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Social / Footer Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="border-t border-brand-light/20 pt-8"
                        >
                            <div className="flex flex-wrap gap-8 justify-between items-end">
                                <div className="flex gap-8">
                                    {['Instagram', 'Twitter', 'LinkedIn', 'Discord'].map((social) => (
                                        <a key={social} href="#" className="text-sm font-bold uppercase tracking-widest hover:text-brand-earth transition-colors">
                                            {social}
                                        </a>
                                    ))}
                                </div>

                                <div className="text-sm text-brand-light/50">
                                    © 2025 Plyant. All rights reserved.
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Big Brand Footer */}
                <div className="mt-24 text-center">
                    <h1 className="font-display text-[15vw] leading-none text-brand-light/5 uppercase tracking-tighter select-none">
                        PLYANT
                    </h1>
                </div>

            </div>
        </section>
    );
}
