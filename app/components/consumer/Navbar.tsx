"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";

export default function ConsumerNavbar({ className = "", theme = "light" }: { className?: string, theme?: "light" | "dark" }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openModal } = useModal();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const textColorClass = theme === "dark" ? "text-white" : "text-dark-gray";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? (theme === "dark" ? "bg-brand-dark/95 backdrop-blur-lg shadow-lg" : "bg-warm-white/95 backdrop-blur-lg shadow-lg") : "bg-transparent"
                } ${className}`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50">
                        <div className="relative w-40 h-12">
                            <Image
                                src={`/assets/images/logos/company-logo-${theme === 'dark' ? 'light' : 'dark'}.png`}
                                alt="PLYANT"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className={`${textColorClass} hover:text-sage-green transition-colors font-sans`}>
                            Home
                        </Link>
                        <Link href="/about" className={`${textColorClass} hover:text-sage-green transition-colors font-sans`}>
                            About Founder
                        </Link>
                        <Link href="/gallery" className={`${textColorClass} hover:text-sage-green transition-colors font-sans`}>
                            Grow Systems
                        </Link>
                        <Link href="/#ai-chat" className={`${textColorClass} hover:text-sage-green transition-colors font-sans`}>
                            Meet Your AI
                        </Link>
                        <Link href="/#how-it-works" className={`${textColorClass} hover:text-sage-green transition-colors font-sans`}>
                            How It Works
                        </Link>
                        <button
                            onClick={() => openModal('waitlist')}
                            className="bg-sage-green text-white px-6 py-2 rounded-full font-sans font-semibold hover:bg-soft-teal hover:shadow-lg transition-all"
                        >
                            Join Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${textColorClass}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className={`md:hidden absolute top-16 right-0 w-64 ${theme === 'dark' ? 'bg-brand-dark/90' : 'bg-white/60'} backdrop-blur-sm p-6 flex flex-col items-end space-y-4 shadow-lg z-50 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <Link href="/" className={`block ${textColorClass} hover:text-sage-green transition-colors font-sans text-right`}>
                        Home
                    </Link>
                    <Link href="/about" className={`block ${textColorClass} hover:text-sage-green transition-colors font-sans text-right`}>
                        About Founder
                    </Link>
                    <Link href="/gallery" className={`block ${textColorClass} hover:text-sage-green transition-colors font-sans text-right`}>
                        Grow Systems
                    </Link>
                    <Link href="/#ai-chat" className={`block ${textColorClass} hover:text-sage-green transition-colors font-sans text-right`}>
                        Meet Your AI
                    </Link>
                    <Link href="/#how-it-works" className={`block ${textColorClass} hover:text-sage-green transition-colors font-sans text-right`}>
                        How It Works
                    </Link>
                    <button
                        onClick={() => {
                            openModal('waitlist');
                            setMobileMenuOpen(false);
                        }}
                        className="block w-full text-center bg-sage-green text-white px-6 py-2 rounded-full font-sans font-semibold hover:bg-soft-teal transition-colors"
                    >
                        Join Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
