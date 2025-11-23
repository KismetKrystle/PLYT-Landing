"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-forest-green/90 backdrop-blur-md shadow-lg py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-cream font-serif text-2xl font-semibold tracking-wide z-50">
                    PLYANT
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {["About", "Technology", "Impact", "Partners"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-cream/90 hover:text-bamboo-gold transition-colors font-sans text-sm tracking-wide relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-bamboo-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link href="#join" className="bg-bamboo-gold text-forest-green px-6 py-2 rounded-full font-sans font-medium text-sm hover:shadow-[0_0_15px_rgba(232,197,71,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
                        Join Waitlist
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cream z-50 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                        <span
                            className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-forest-green z-40 flex flex-col justify-center items-center transition-all duration-500 ${isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col space-y-8 text-center">
                        {["About", "Technology", "Impact", "Partners"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-cream text-2xl font-serif hover:text-bamboo-gold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link href="#join" className="mt-8 bg-bamboo-gold text-forest-green px-8 py-3 rounded-full font-sans font-medium text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                            Join Waitlist
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
