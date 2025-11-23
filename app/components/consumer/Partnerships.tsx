"use client";

import { useState } from "react";

export default function Partnerships() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const partners = [
        {
            emoji: "🌾",
            title: "Local Growers",
            tagline: "Reach customers directly, receive instant low-fee payments, teach the next generation",
            benefits: [
                "Sell directly to your community",
                "Receive payments instantly with low fees",
                "Share your knowledge with new growers",
                "Build lasting customer relationships",
            ],
        },
        {
            emoji: "🎨",
            title: "Artisans & Designers",
            tagline: "Create beautiful systems, earn automated royalties, build sustainable income",
            benefits: [
                "Design custom food-growing systems",
                "Use recycled and local materials",
                "Earn automated royalties from your work",
                "Build sustainable income streams",
            ],
        },
        {
            emoji: "♻️",
            title: "Material Suppliers",
            tagline: "Transform waste into assets, create new revenue streams, measure impact",
            benefits: [
                "Turn recycled materials into revenue",
                "Support circular economy initiatives",
                "Create new market opportunities",
                "Track environmental impact data",
            ],
        },
        {
            emoji: "🏫",
            title: "NGOs & Educators",
            tagline: "Access tools, measure outcomes, secure climate finance, scale impact",
            benefits: [
                "Access tools for teaching and programs",
                "Measure and report program outcomes",
                "Connect students with real opportunities",
                "Scale your reach and impact",
            ],
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                        Partner With Us
                    </h2>
                    <p className="text-dark-gray/70 text-lg max-w-2xl mx-auto">
                        Join our network of growers, artisans, and changemakers building resilient food systems
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={`bg-light-gray rounded-2xl overflow-hidden transition-all duration-500 border-2 ${expandedIndex === index
                                    ? "border-sage-green shadow-lg"
                                    : "border-transparent hover:border-sage-green/30"
                                }`}
                        >
                            <button
                                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${expandedIndex === index ? "bg-sage-green/5" : ""
                                    }`}
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="text-4xl shrink-0">{partner.emoji}</div>
                                    <div className="flex-1">
                                        <h3 className="font-sans text-xl font-bold text-dark-gray mb-1">
                                            {partner.title}
                                        </h3>
                                        <p className="text-sm text-dark-gray/60">
                                            {partner.tagline}
                                        </p>
                                    </div>
                                </div>
                                <svg
                                    className={`w-6 h-6 text-sage-green transform transition-transform duration-300 shrink-0 ml-4 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0">
                                    <ul className="grid md:grid-cols-2 gap-4 mb-6">
                                        {partner.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-5 h-5 bg-sage-green/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                                    <svg className="w-3 h-3 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-dark-gray/70 text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#join" className="inline-block px-6 py-3 border-2 border-sage-green text-sage-green rounded-full font-medium hover:bg-sage-green hover:text-white transition-all duration-300">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <p className="text-dark-gray/70 mb-4">
                        Don't see your role? We'd love to hear from you.
                    </p>
                    <a href="#join" className="inline-block bg-sage-green text-white px-10 py-4 rounded-full font-sans font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
