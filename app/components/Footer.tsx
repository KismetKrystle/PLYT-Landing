"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-charcoal border-t border-white/5 pt-20 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Left Column: Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-cream font-serif text-2xl font-semibold tracking-wide">
                            PLYANT
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs">
                            The Network of Urban Nature. Building climate-resilient food systems through blockchain and community.
                        </p>
                    </div>

                    {/* Center Column: Links */}
                    <div className="flex flex-col space-y-4 md:items-center">
                        <h4 className="text-cream font-sans font-bold mb-2">Explore</h4>
                        <div className="flex flex-col space-y-2 md:text-center">
                            {["About", "Impact Report", "Technology", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-gray-500 hover:text-digital-teal transition-colors text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact */}
                    <div className="flex flex-col space-y-4 md:items-end">
                        <h4 className="text-cream font-sans font-bold mb-2">Connect</h4>
                        <a href="mailto:krystle@plyant.com" className="font-mono text-digital-teal hover:text-digital-teal/80 transition-colors">
                            krystle@plyant.com
                        </a>
                        <div className="flex gap-4">
                            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                                <a
                                    key={social}
                                    href={social === "LinkedIn" ? "https://linkedin.com/in/YOUR_PROFILE" : "#"}
                                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 hover:border-bamboo-gold hover:text-bamboo-gold hover:bg-bamboo-gold/10 transition-all duration-300"
                                    aria-label={social}
                                >
                                    {/* Placeholder Icons */}
                                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-600 text-xs mt-4">Based in Bali, Indonesia</p>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs">
                        &copy; {new Date().getFullYear()} Plyant. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer >
    );
}
