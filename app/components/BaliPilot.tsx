"use client";

export default function BaliPilot() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2560&auto=format&fit=crop')", // Placeholder: Bali landscape
                }}
            >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-forest-green/50 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-serif text-4xl md:text-6xl text-cream text-center mb-12 drop-shadow-lg">
                    Launching in Bali: <br /> Where Innovation Meets Tradition
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel rounded-2xl p-8 md:p-12 border-cream/20 bg-cream/10 backdrop-blur-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Why Bali List */}
                            <div>
                                <h3 className="font-sans text-2xl font-bold text-bamboo-gold mb-6">Why Bali?</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-bamboo-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-bamboo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-cream text-lg">Global Impact Hub</h4>
                                            <p className="text-cream/80 text-sm mt-1">Home to a vibrant community of changemakers and regenerative projects.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-bamboo-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-bamboo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-cream text-lg">Ancient Wisdom</h4>
                                            <p className="text-cream/80 text-sm mt-1">Integrating the Subak water management system philosophy.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-bamboo-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-bamboo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-cream text-lg">Rapid Adoption</h4>
                                            <p className="text-cream/80 text-sm mt-1">High crypto adoption and mobile connectivity rates.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Timeline Visual */}
                            <div className="relative flex flex-col justify-center">
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-digital-teal/30"></div>

                                <div className="relative pl-12 py-4 group">
                                    <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-digital-teal rounded-full border-2 border-forest-green group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                                    <span className="font-mono text-bamboo-gold text-sm block mb-1">Q2 2025</span>
                                    <h4 className="font-sans font-bold text-cream">Pilot Launch</h4>
                                    <p className="text-cream/60 text-xs">5 Urban Farms</p>
                                </div>

                                <div className="relative pl-12 py-4 group">
                                    <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-digital-teal rounded-full border-2 border-forest-green group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                                    <span className="font-mono text-bamboo-gold text-sm block mb-1">Q4 2025</span>
                                    <h4 className="font-sans font-bold text-cream">Token Generation</h4>
                                    <p className="text-cream/60 text-xs">Community Sale</p>
                                </div>

                                <div className="relative pl-12 py-4 group">
                                    <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-digital-teal rounded-full border-2 border-forest-green group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                                    <span className="font-mono text-bamboo-gold text-sm block mb-1">Q2 2026</span>
                                    <h4 className="font-sans font-bold text-cream">Global Expansion</h4>
                                    <p className="text-cream/60 text-xs">Network Scaling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
