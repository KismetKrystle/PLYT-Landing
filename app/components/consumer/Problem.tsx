"use client";

export default function ConsumerProblem() {
    return (
        <section className="bg-brand-light py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-earth/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-display text-5xl md:text-6xl text-brand-dark text-center mb-4 uppercase leading-[0.9]">
                    The Food System<br />is Broken
                </h2>
                <p className="text-center text-brand-dark/70 text-xl font-serif mb-16 max-w-2xl mx-auto">
                    But you can be part of the solution
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Problem 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-brand-dark/10">
                        <div className="w-16 h-16 bg-coral/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg className="w-8 h-8 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                            Food Travels Too Far
                        </h3>
                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                            Your food travels an average of <span className="font-bold text-coral">1,500 miles</span> before reaching your plate—creating fragile supply chains and massive carbon emissions.
                        </p>
                        <div className="bg-brand-earth/10 rounded-lg p-4 text-center">
                            <p className="text-3xl font-mono font-bold text-brand-earth mb-1">2.5kg</p>
                            <p className="text-sm text-brand-dark/70">CO₂ per purchase</p>
                        </div>
                    </div>

                    {/* Problem 2 */}
                    <div className="bg-warm-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-sky-blue/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg className="w-8 h-8 text-sky-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                            We've Lost Our Skills
                        </h3>
                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                            Urban communities want to grow food but lack knowledge, resources, and financial support to get started.
                        </p>
                        <div className="bg-sky-blue/10 rounded-lg p-4 text-center">
                            <p className="text-3xl font-mono font-bold text-sky-blue mb-1">90%</p>
                            <p className="text-sm text-dark-gray/70">Food imported in cities</p>
                        </div>
                    </div>

                    {/* Problem 3 */}
                    <div className="bg-warm-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-16 h-16 bg-warm-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <svg className="w-8 h-8 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl uppercase text-brand-dark mb-4 text-center">
                            Disconnected Markets
                        </h3>
                        <p className="text-dark-gray/70 text-center leading-relaxed mb-6">
                            Local growers can't reach customers easily, and consumers pay more for lower-quality, less nutritious food.
                        </p>
                        <div className="bg-warm-gold/10 rounded-lg p-4 text-center">
                            <p className="text-3xl font-mono font-bold text-warm-gold mb-1">40%</p>
                            <p className="text-sm text-dark-gray/70">Food waste globally</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
