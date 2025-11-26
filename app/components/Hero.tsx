"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [particles, setParticles] = useState<Array<{ width: string; height: string; left: string; top: string; delay: string; duration: string }>>([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        setParticles([...Array(10)].map(() => ({
            width: Math.random() * 10 + 5 + "px",
            height: Math.random() * 10 + 5 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            delay: Math.random() * 5 + "s",
            duration: Math.random() * 10 + 10 + "s",
        })));

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2560&auto=format&fit=crop')", // Placeholder: Bali rice terrace
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
            >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-brand-dark/20 to-brand-dark/90"></div>
            </div>

            {/* Floating Particles (CSS Animation) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-brand-earth/30 blur-sm animate-float"
                        style={{
                            width: p.width,
                            height: p.height,
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    ></div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-light mb-6 leading-tight animate-fade-in-up">
                    Growing Communities, <br /> Not Just Food
                </h1>

                <p className="font-sans text-lg md:text-xl text-brand-light/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Pioneer the future of climate-resilient food systems through impact finance, blockchain technology, and community empowerment.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link href="#join" className="bg-brand-earth text-brand-dark px-8 py-4 rounded-full font-sans font-semibold text-lg hover:shadow-[0_0_20px_rgba(196,164,132,0.6)] transition-all duration-300 transform hover:-translate-y-1 animate-pulse-glow">
                        Join Waitlist
                    </Link>
                    <Link href="#partners" className="group relative px-8 py-4 border-2 border-brand-light text-brand-light rounded-full font-sans font-bold overflow-hidden transition-all duration-500 hover:border-brand-earth hover:text-brand-dark">
                        <span className="absolute inset-0 bg-brand-earth transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                        <span className="relative z-10">Explore Partnerships</span>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg
                    className="w-8 h-8 text-brand-earth"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
