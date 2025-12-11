"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";

export default function ConsumerNavbar({ className = "" }: { className?: string }) {
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

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-warm-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
                } ${className}`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="font-serif text-2xl font-bold text-sage-green hover:text-soft-teal transition-colors">
                        PLYANT
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/about" className="text-dark-gray hover:text-sage-green transition-colors font-sans">
                            About
                        </Link>
                        <Link href="/gallery" className="text-dark-gray hover:text-sage-green transition-colors font-sans">
                            Gallery
                        </Link>
                        <Link href="/#ai-chat" className="text-dark-gray hover:text-sage-green transition-colors font-sans">
                            Features
                        </Link>
                        <Link href="/#how-it-works" className="text-dark-gray hover:text-sage-green transition-colors font-sans">
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
                        className="md:hidden text-dark-gray"
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

                <div className={`md:hidden absolute top-16 right-0 w-64 bg-white/60 backdrop-blur-sm p-6 flex flex-col items-end space-y-4 shadow-lg z-50 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <Link href="/about" className="block text-dark-gray hover:text-sage-green transition-colors font-sans text-right">
                        About
                    </Link>
                    <Link href="/gallery" className="block text-dark-gray hover:text-sage-green transition-colors font-sans text-right">
                        Gallery
                    </Link>
                    <Link href="/#ai-chat" className="block text-dark-gray hover:text-sage-green transition-colors font-sans text-right">
                        Features
                    </Link>
                    <Link href="/#how-it-works" className="block text-dark-gray hover:text-sage-green transition-colors font-sans text-right">
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
