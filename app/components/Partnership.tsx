"use client";

import { useState } from "react";
import { MapPin, Sprout, TrendingUp, Utensils, Building2, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Partnership() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const partners = [
        {
            title: "Landowners",
            icon: <MapPin className="w-6 h-6" />,
            benefits: ["Monetize underutilized space", "Increase property value", "Tax incentives", "Community engagement"],
        },
        {
            title: "Urban Farmers",
            icon: <Sprout className="w-6 h-6" />,
            benefits: ["Access to capital", "Guaranteed market", "Technical support", "Shared infrastructure"],
        },
        {
            title: "Investors",
            icon: <TrendingUp className="w-6 h-6" />,
            benefits: ["Sustainable ROI", "Impact reporting", "Asset-backed security", "Portfolio diversification"],
        },
        {
            title: "Restaurants",
            icon: <Utensils className="w-6 h-6" />,
            benefits: ["Hyper-local sourcing", "Supply chain transparency", "Marketing story", "Price stability"],
        },
        {
            title: "Local Government",
            icon: <Building2 className="w-6 h-6" />,
            benefits: ["Food security", "Job creation", "Climate resilience", "Data-driven policy"],
        },
    ];

    return (
        <section id="partners" className="bg-cream py-24">
            <div className="container mx-auto px-6">
                <h2 className="font-serif text-4xl md:text-5xl text-forest-green text-center mb-16">
                    Build Climate-Resilient <br /> Food Systems Together
                </h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white rounded-xl overflow-hidden transition-all duration-500 border",
                                expandedIndex === index
                                    ? "border-bamboo-gold shadow-lg"
                                    : "border-soft-gray hover:border-bamboo-gold/50"
                            )}
                        >
                            <button
                                className={cn(
                                    "w-full flex items-center justify-between p-6 text-left transition-colors",
                                    expandedIndex === index ? "bg-forest-green/5" : ""
                                )}
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "p-2 rounded-lg transition-colors",
                                        expandedIndex === index ? "bg-bamboo-gold text-forest-green" : "bg-forest-green/5 text-forest-green"
                                    )}>
                                        {partner.icon}
                                    </div>
                                    <span className="font-sans text-xl font-bold text-forest-green">{partner.title}</span>
                                </div>
                                <div className={cn(
                                    "transform transition-transform duration-300",
                                    expandedIndex === index ? "rotate-180" : ""
                                )}>
                                    <ChevronDown className="w-6 h-6 text-forest-green" />
                                </div>
                            </button>

                            <div
                                className={cn(
                                    "transition-all duration-500 ease-in-out overflow-hidden",
                                    expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="p-6 pt-0 border-t border-gray-100">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-4">
                                        {partner.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-digital-teal shrink-0" />
                                                <span className="text-gray-600 text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full md:w-auto px-6 py-3 border border-forest-green text-forest-green rounded-full font-medium hover:bg-digital-teal hover:border-digital-teal hover:text-forest-green transition-all duration-300">
                                        Explore Partnership
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

