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
                {/* Overlay Gradient - Using consumer colors */}
                <div className="absolute inset-0 bg-sage-green/50 backdrop-blur-[2px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-serif text-4xl md:text-6xl text-warm-white text-center mb-12 drop-shadow-lg">
                    Launching in Bali: <br /> Where Innovation Meets Tradition
                </h2>

                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel rounded-2xl p-8 md:p-12 border-warm-white/20 bg-warm-white/10 backdrop-blur-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Why Bali List */}
                            <div>
                                <h3 className="font-sans text-2xl font-bold text-warm-gold mb-6">Why Bali?</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-warm-white text-lg">Climate Challenges Drive Innovation</h4>
                                            <p className="text-warm-white/80 text-sm mt-1">Vulnerable to climate impacts, spurring creative solutions</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-warm-white text-lg">Strong Artisan & Farming Traditions</h4>
                                            <p className="text-warm-white/80 text-sm mt-1">Rich heritage of craftsmanship and agriculture</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-warm-white text-lg">Health-Conscious Community</h4>
                                            <p className="text-warm-white/80 text-sm mt-1">Tourist economy creates consistent demand for fresh food</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-warm-white text-lg">Abundant Recycled Materials</h4>
                                            <p className="text-warm-white/80 text-sm mt-1">Transform waste into beautiful grow systems</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center shrink-0">
                                            <svg className="w-5 h-5 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-sans font-bold text-warm-white text-lg">5 Years of Local Relationships</h4>
                                            <p className="text-warm-white/80 text-sm mt-1">Deep community insights and trusted partnerships</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Timeline Visual */}
                            <div className="relative flex flex-col justify-center">
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-soft-teal/30"></div>

                                <div className="relative pl-12 py-4 group">
                                    <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-soft-teal rounded-full border-2 border-sage-green group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(95,195,199,0.5)]"></div>
                                    <span className="font-mono text-warm-gold text-sm block mb-1">Q2 2026</span>
                                    <h4 className="font-sans font-bold text-warm-white">Launch</h4>
                                    <p className="text-warm-white/60 text-xs">20+ Local Vendors</p>
                                </div>

                                <div className="relative pl-12 py-4 group">
                                    <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-soft-teal rounded-full border-2 border-sage-green group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(95,195,199,0.5)]"></div>
                                    <span className="font-mono text-warm-gold text-sm block mb-1">Month 1</span>
                                    <h4 className="font-sans font-bold text-warm-white">Active Transactions</h4>
                                    <p className="text-warm-white/60 text-xs">50+ Purchases</p>
                                </div>

                                <div className="relative pl-12 py-4 group">
                                    <div className="absolute left-[11px] top-1/2 -translate-y-1/2 w-3 h-3 bg-soft-teal rounded-full border-2 border-sage-green group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(95,195,199,0.5)]"></div>
                                    <span className="font-mono text-warm-gold text-sm block mb-1">Month 3</span>
                                    <h4 className="font-sans font-bold text-warm-white">Measurable Impact</h4>
                                    <p className="text-warm-white/60 text-xs">Community Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
