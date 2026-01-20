import Link from "next/link";
import Image from "next/image";

export default function ConsumerFooter() {
    return (
        <footer className="bg-dark-gray py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="relative w-48 h-12 mb-4">
                            <Image
                                src="/assets/images/logos/company-logo-light.png"
                                alt="PLYANT"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-warm-white/70 mb-6 max-w-md">
                            The Network of Urban Nature. Pioneering climate-resilient, financially inclusive food systems through community empowerment.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-sans font-bold text-warm-white mb-4">Learn More</h4>
                        <ul className="space-y-2">
                            <li><a href="#how-it-works" className="text-warm-white/70 hover:text-sage-green transition-colors">How It Works</a></li>
                            <li><a href="#join" className="text-warm-white/70 hover:text-sage-green transition-colors">Join Waitlist</a></li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-sans font-bold text-warm-white mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:krystle@plyant.com" className="text-warm-white/70 hover:text-sage-green transition-colors">krystle@plyant.com</a></li>
                            <li><a href="#" className="text-warm-white/70 hover:text-sage-green transition-colors">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/krystle-r-wilson" className="text-warm-white/70 hover:text-sage-green transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-warm-white/10 text-center">
                    <p className="text-warm-white/50 text-sm">
                        © 2026 Plyant. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
