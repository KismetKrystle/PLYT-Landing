"use client";

export default function ImpactFinance() {
    return (
        <section className="bg-brand-dark py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#C4A484 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-display text-4xl md:text-5xl text-brand-light text-center mb-16 uppercase tracking-wider">
                    Financial Innovation for <br /> Regenerative Systems
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {/* Card 1 */}
                    <div className="bg-brand-light/5 p-8 rounded-none border border-brand-earth/20 hover:border-brand-earth hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-2 h-2 bg-brand-earth rounded-full animate-ping"></div>
                        </div>
                        <div className="w-16 h-16 bg-brand-earth/10 flex items-center justify-center mb-6 group-hover:bg-brand-earth/20 transition-colors rounded-none">
                            <svg className="w-8 h-8 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl font-bold text-brand-light mb-3 uppercase tracking-wide">Micro-Savings Accounts</h3>
                        <p className="text-brand-light/60 leading-relaxed font-serif">
                            Enable unbanked farmers to save securely with high-yield accounts backed by real-world assets.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-brand-light/5 p-8 rounded-none border border-brand-earth/20 hover:border-brand-earth hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-2 h-2 bg-brand-earth rounded-full animate-ping"></div>
                        </div>
                        <div className="w-16 h-16 bg-brand-earth/10 flex items-center justify-center mb-6 group-hover:bg-brand-earth/20 transition-colors rounded-none">
                            <svg className="w-8 h-8 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl font-bold text-brand-light mb-3 uppercase tracking-wide">Impact Dividends</h3>
                        <p className="text-brand-light/60 leading-relaxed font-serif">
                            Earn passive income from the ecological services your farm provides, verified by blockchain.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-brand-light/5 p-8 rounded-none border border-brand-earth/20 hover:border-brand-earth hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-2 h-2 bg-brand-earth rounded-full animate-ping"></div>
                        </div>
                        <div className="w-16 h-16 bg-brand-earth/10 flex items-center justify-center mb-6 group-hover:bg-brand-earth/20 transition-colors rounded-none">
                            <svg className="w-8 h-8 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl font-bold text-brand-light mb-3 uppercase tracking-wide">Asset Tokenization</h3>
                        <p className="text-brand-light/60 leading-relaxed font-serif">
                            Fractionalize ownership of expensive equipment and infrastructure to lower barriers to entry.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-brand-light/5 p-8 rounded-none border border-brand-earth/20 hover:border-brand-earth hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-2 h-2 bg-brand-earth rounded-full animate-ping"></div>
                        </div>
                        <div className="w-16 h-16 bg-brand-earth/10 flex items-center justify-center mb-6 group-hover:bg-brand-earth/20 transition-colors rounded-none">
                            <svg className="w-8 h-8 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl font-bold text-brand-light mb-3 uppercase tracking-wide">Climate Finance Access</h3>
                        <p className="text-brand-light/60 leading-relaxed font-serif">
                            Direct connection to global climate funds and carbon markets for smallholder farmers.
                        </p>
                    </div>
                </div>

                {/* Live Demo Widget */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-brand-light/5 rounded-none p-1 border border-brand-earth/30">
                        <div className="bg-brand-black/40 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                            <div className="flex flex-col items-center md:items-start group cursor-pointer">
                                <span className="text-xs text-brand-light/40 mb-2 uppercase tracking-wider">Step 1</span>
                                <div className="bg-brand-earth/10 px-4 py-2 rounded-none border border-brand-earth/20 group-hover:border-brand-earth/50 transition-colors">
                                    <span className="font-mono text-brand-earth font-bold">Deposit $100</span>
                                </div>
                            </div>

                            <div className="hidden md:block text-brand-earth animate-pulse">→</div>
                            <div className="md:hidden text-brand-earth animate-bounce">↓</div>

                            <div className="flex flex-col items-center md:items-start group cursor-pointer">
                                <span className="text-xs text-brand-light/40 mb-2 uppercase tracking-wider">Step 2</span>
                                <div className="bg-brand-earth/10 px-4 py-2 rounded-none border border-brand-earth/20 group-hover:border-brand-earth/50 transition-colors">
                                    <span className="font-mono text-brand-earth font-bold">Buy $60 Food</span>
                                </div>
                            </div>

                            <div className="hidden md:block text-brand-earth animate-pulse">→</div>
                            <div className="md:hidden text-brand-earth animate-bounce">↓</div>

                            <div className="flex flex-col items-center md:items-start group cursor-pointer">
                                <span className="text-xs text-brand-light/40 mb-2 uppercase tracking-wider">Step 3</span>
                                <div className="bg-brand-earth/10 px-4 py-2 rounded-none border border-brand-earth/20 group-hover:border-brand-earth/50 transition-colors">
                                    <span className="font-mono text-brand-earth font-bold">$40 Earns 5%</span>
                                </div>
                            </div>

                            <div className="hidden md:block text-brand-earth animate-pulse">→</div>
                            <div className="md:hidden text-brand-earth animate-bounce">↓</div>

                            <div className="flex flex-col items-center md:items-start group cursor-pointer">
                                <span className="text-xs text-brand-light/40 mb-2 uppercase tracking-wider">Result</span>
                                <div className="bg-brand-earth/20 px-4 py-2 rounded-none border border-brand-earth/40 group-hover:border-brand-earth transition-colors">
                                    <span className="font-mono text-brand-earth font-bold">+$2/yr Passive</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
