"use client";

import { useEffect, useRef, useState } from "react";

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
    const impacts = [
        {
            icon: "🌍",
            stat: <Counter end={80} suffix="%" />,
            label: "Less CO₂",
            description: "vs traditional supply chain",
            color: "sage-green",
        },
        {
            icon: "♻️",
            stat: <Counter end={100} suffix="%" />,
            label: "Recycled",
            description: "Materials in grow systems",
            color: "soft-teal",
        },
        {
            icon: "💧",
            stat: <Counter end={60} suffix="%" />,
            label: "Water Saved",
            description: "vs conventional farming",
            color: "sky-blue",
        },
        {
            icon: "📦",
            stat: <Counter end={0} />,
            label: "Food Miles",
            description: "For home-grown produce",
            color: "warm-gold",
        },
        {
            icon: "🌱",
            stat: <Counter end={365} />,
            label: "Days Growing",
            description: "Year-round local production",
            color: "coral",
        },
    ];

    return (
        <section className="bg-brand-light py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl text-brand-dark mb-4 uppercase leading-[0.9]">
                        Building Climate<br />Resilience
                    </h2>
                    <p className="text-brand-dark/70 text-xl font-serif max-w-2xl mx-auto">
                        Every local purchase, every plant grown, makes our community stronger
                    </p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">
                    {impacts.map((impact, index) => (
                        <div key={index} className="bg-warm-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-5xl mb-4">{impact.icon}</div>
                            <div className={`text-${impact.color} mb-2`}>
                                {impact.stat}
                            </div>
                            <p className="font-display text-xl uppercase text-brand-dark mb-1">
                                {impact.label}
                            </p>
                            <p className="text-sm text-dark-gray/60">
                                {impact.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Benefits Grid */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="font-display text-3xl uppercase text-brand-dark text-center mb-8">
                        Why Local Food Systems Matter
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
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
                                description: "Circular economy transforms waste into productive resources",
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
                        ].map((benefit, i) => (
                            <div key={i} className="flex gap-4 bg-warm-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-sage-green/10 rounded-xl flex items-center justify-center shrink-0 text-sage-green">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 className="font-sans font-bold text-dark-gray mb-2">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-dark-gray/70 text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
