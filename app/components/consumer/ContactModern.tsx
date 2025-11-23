"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useModal } from "../../context/ModalContext";

export default function ContactModern() {
    const { openModal } = useModal();

    return (
        <section id="join" className="bg-brand-dark text-brand-light py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-5xl md:text-6xl mb-8 uppercase leading-tight"
                        >
                            Ready to <span className="text-brand-earth">Grow</span><br />
                            With Us?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-serif text-xl text-brand-light/70 mb-12 max-w-lg"
                        >
                            Join the movement transforming urban spaces into thriving ecosystems.
                            Whether you're a grower, a consumer, or a partner, there's a place for you.
                        </motion.p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-light/10 flex items-center justify-center text-brand-earth">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-brand-light/50 uppercase tracking-wider font-bold">Email Us</p>
                                    <p className="text-lg">hello@plyant.io</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-light/10 flex items-center justify-center text-brand-earth">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-brand-light/50 uppercase tracking-wider font-bold">Visit Us</p>
                                    <p className="text-lg">Bali, Indonesia</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => openModal('waitlist')}
                                className="bg-brand-earth text-brand-dark px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                Join Waitlist
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => openModal('partnership')}
                                className="border border-brand-light/20 text-brand-light px-8 py-4 font-bold uppercase tracking-wider hover:bg-brand-light/10 transition-colors"
                            >
                                Partner With Us
                            </button>
                        </div>
                    </div>

                    {/* Minimal Graphic / Form Placeholder */}
                    <div className="relative h-full min-h-[400px] border border-brand-light/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center bg-brand-light/5 backdrop-blur-sm">
                        <div className="w-24 h-24 bg-brand-earth/20 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <h3 className="font-display text-3xl uppercase mb-4">Be Part of the Future</h3>
                        <p className="text-brand-light/60 max-w-md mb-8">
                            We are building a decentralized network of urban farms.
                            Sign up to get early access and updates.
                        </p>
                        <button
                            onClick={() => openModal('waitlist')}
                            className="text-brand-earth hover:text-white font-bold uppercase tracking-wider text-sm border-b border-brand-earth hover:border-white transition-all pb-1"
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
