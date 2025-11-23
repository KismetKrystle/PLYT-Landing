"use client";

import { useEffect, useState } from "react";

export default function SocialProof() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "Plyant&apos;s model has completely transformed how we finance our regenerative transition. The immediate liquidity is a game-changer.",
            author: "Wayan S.",
            role: "Organic Rice Farmer, Ubud"
        },
        {
            quote: "Finally, a platform that connects urban consumers directly with the source of their food while rewarding climate action.",
            author: "Sarah J.",
            role: "Community Member, Canggu"
        },
        {
            quote: "The transparency of the blockchain integration gives us total confidence in where our investment is going.",
            author: "Michael T.",
            role: "Impact Investor, Singapore"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="bg-white py-24 border-t border-soft-gray">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-4xl md:text-5xl text-forest-green text-center mb-16">
                    Our Growing Network
                </h2>

                {/* Partner Logos */}
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-soft-gray py-12">
                    <div className="text-center">
                        <p className="font-mono text-4xl md:text-5xl font-bold text-bamboo-gold mb-2">3</p>
                        <p className="font-sans text-gray-500 uppercase tracking-wider text-sm">Hackathon Wins</p>
                    </div>
                    <div className="text-center">
                        <p className="font-mono text-4xl md:text-5xl font-bold text-bamboo-gold mb-2">5</p>
                        <p className="font-sans text-gray-500 uppercase tracking-wider text-sm">Years Experience</p>
                    </div>
                    <div className="text-center">
                        <p className="font-mono text-4xl md:text-5xl font-bold text-bamboo-gold mb-2">20+</p>
                        <p className="font-sans text-gray-500 uppercase tracking-wider text-sm">Partners</p>
                    </div>
                    <div className="text-center">
                        <p className="font-mono text-4xl md:text-5xl font-bold text-bamboo-gold mb-2">Q2</p>
                        <p className="font-sans text-gray-500 uppercase tracking-wider text-sm">2026 Launch</p>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto text-center relative min-h-[200px]">
                    <div className="text-6xl text-bamboo-gold font-serif absolute top-0 left-0 opacity-20">&quot;</div>

                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center ${index === activeTestimonial
                                ? "opacity-100 transform translate-x-0"
                                : "opacity-0 transform translate-x-8 pointer-events-none"
                                }`}
                        >
                            <p className="font-serif text-2xl md:text-3xl text-forest-green mb-8 italic leading-relaxed">
                                {testimonial.quote}
                            </p>
                            <div>
                                <p className="font-sans font-bold text-forest-green">{testimonial.author}</p>
                                <p className="font-sans text-digital-teal text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}

                    {/* Dots Navigation */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? "bg-digital-teal w-8" : "bg-gray-300 hover:bg-digital-teal/50"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
