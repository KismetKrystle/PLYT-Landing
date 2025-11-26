"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, Globe, Recycle, Droplets, Package, Sprout } from "lucide-react";
import SDGBanner from "./SDGBanner";

const Counter = ({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <span ref={ref} className="font-mono text-4xl md:text-5xl font-bold">
            {prefix}{Math.floor(count)}{suffix}
        </span>
    );
};

export default function CommunityImpact() {
    const impactMetrics = [
        {
            icon: Globe,
            value: <Counter end={80} suffix="%" />,
            title: "Less CO₂",
            description: "vs traditional supply chain",
            color: "sage-green",
        },
        {
            icon: Recycle,
            value: <Counter end={100} suffix="%" />,
            title: "Recycled Materials",
            description: "Circular economy",
            color: "soft-teal",
        },
        {
            icon: Droplets,
            value: <Counter end={60} suffix="%" />,
            title: "Water Savings",
            description: "Closed-loop systems",
            color: "sky-blue",
        },
        {
            icon: Package,
            value: <Counter end={50} />,
            title: "Food Miles",
            description: "For home-grown produce",
            color: "warm-gold",
        },
        {
            icon: Sprout,
            value: <Counter end={365} />,
            title: "Days Growing",
            description: "Year-round local production",
            color: "coral",
        },
    ];

    const benefits = [
        {
            title: "Survive Disruptions",
            description: "Local production continues even when global supply chains break down",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            title: "Reduce Waste",
            description: "Circular economy transforms waste into productive resources, while hyper-local production reduces waste end-to-end",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
        },
        {
            title: "Adapt to Climate",
            description: "Local systems quickly adjust to regional weather patterns",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            ),
        },
        {
            title: "Build Soil Health",
            description: "Regenerative practices restore ecosystems over time",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: "Food Sovereignty",
            description: "Empowers communities with food sovereignty and security",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            title: "Green Jobs",
            description: "Creates green jobs and educational opportunities in cities",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: "Resilient Network",
            description: "Decentralized network prevents single points of failure in food supply",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-brand-light py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl text-brand-dark mb-4 uppercase leading-[0.9]">
                        The Impact <br />
                    </h2>
                    <p className="text-brand-dark/70 text-xl font-serif max-w-2xl mx-auto">
                        Every local purchase, every plant grown, makes our community stronger
                    </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center gap-x-4 gap-y-12 md:gap-0 mb-24 border-t border-brand-dark/10 py-12">
                    {impactMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex-1 px-4 text-center relative group"
                        >
                            <div className={`w-16 h-16 mx-auto rounded-full bg-${metric.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                            </div>
                            <div className="text-4xl font-bold text-brand-earth mb-2 font-mono">{metric.value}</div>
                            <h3 className="font-display text-xl text-brand-dark mb-2 uppercase">{metric.title}</h3>
                            <p className="text-brand-dark/60 font-serif text-sm">{metric.description}</p>

                            {/* Vertical Separator (Desktop) */}
                            {index < impactMetrics.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-brand-dark/10"></div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mb-24">
                    <SDGBanner />
                </div>

                {/* Benefits Grid */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-display text-3xl uppercase text-brand-dark text-center mb-8">
                        Why Local Food Systems Matter
                    </h3>

                    {/* Carousel Container */}
                    <div className="relative group">
                        <div
                            id="benefits-carousel"
                            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                        >
                            {benefits.map((benefit, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-64 h-64 md:w-auto md:h-auto snap-center bg-warm-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-brand-dark/5 flex flex-col text-left"
                                >
                                    <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center shrink-0 text-sage-green mb-4">
                                        {benefit.icon}
                                    </div>
                                    <div className="flex-grow flex flex-col">
                                        <h4 className="font-sans font-bold text-lg text-dark-gray mb-2 min-h-[3.5rem] flex items-center">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-dark-gray/70 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
