"use client";

export default function ConsumerProblem() {
    return (
        <section className="bg-brand-light py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-earth/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-display text-5xl md:text-6xl text-brand-dark text-center mb-4 uppercase leading-[0.9]">
                    The Climate &<br />Food Security Crisis
                </h2>
                <p className="text-center text-brand-dark/70 text-xl font-serif mb-16 max-w-2xl mx-auto">
                    Global systems are failing. Local resilience is the answer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-dark/30 to-transparent"></div>

                    {/* Problem 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full border border-brand-dark/30 bg-white flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-dark group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                            <svg className="w-10 h-10 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                            Climate-Vulnerable Chains
                        </h3>
                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                            Global supply chains are breaking under extreme weather events, threatening food security worldwide.
                        </p>
                        <div className="bg-coral/10 rounded-lg p-4 text-center mt-auto w-full">
                            <p className="text-3xl font-mono font-bold text-coral mb-1">1,500</p>
                            <p className="text-sm text-brand-dark/70">Avg miles food travels</p>
                        </div>
                    </div>

                    {/* Problem 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full border border-brand-dark/30 bg-white flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-dark group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                            <svg className="w-10 h-10 text-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                            Lost Capability
                        </h3>
                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                            Urbanization has disconnected communities from food production, losing vital resilience skills.
                        </p>
                        <div className="bg-sky-blue/10 rounded-lg p-4 text-center mt-auto w-full">
                            <p className="text-3xl font-mono font-bold text-sky-blue mb-1">90%</p>
                            <p className="text-sm text-dark-gray/70">Food imported in cities</p>
                        </div>
                    </div>

                    {/* Problem 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="w-24 h-24 rounded-full border border-brand-dark/30 bg-white flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-dark group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                            <svg className="w-10 h-10 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                            Broken Economics
                        </h3>
                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                            Small farmers capture less value while consumers pay more for lower quality, nutrient-poor food.
                        </p>
                        <div className="bg-warm-gold/10 rounded-lg p-4 text-center mt-auto w-full">
                            <p className="text-3xl font-mono font-bold text-warm-gold mb-1">2.5kg</p>
                            <p className="text-sm text-dark-gray/70">CO₂ per purchase</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
