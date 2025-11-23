"use client";

export default function AIShoppingFlow() {
    return (
        <section className="w-full bg-brand-light text-brand-black py-12 px-4 md:px-8 border-t border-brand-dark/10">
            <div className="w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Header */}
                    <div className="lg:w-1/3">
                        <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.9] text-brand-dark mb-4">
                            AI SHOPS<br />FOR YOU
                        </h2>
                        <p className="font-serif text-xl text-brand-dark/70 max-w-md">
                            Your personal produce concierge.
                        </p>
                    </div>

                    {/* Steps Compact */}
                    <div className="lg:w-2/3 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                            {/* Step 1 */}
                            <div className="bg-white p-6 border border-brand-dark/10 hover:border-brand-dark transition-colors">
                                <div className="text-4xl mb-4">🗣️</div>
                                <h3 className="font-display text-2xl uppercase text-brand-dark mb-2">1. Tell AI</h3>
                                <p className="font-sans text-sm text-brand-dark/60 mb-3">Input produce, location, budget, time & preferences.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-6 border border-brand-dark/10 hover:border-brand-dark transition-colors">
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="font-display text-2xl uppercase text-brand-dark mb-2">2. Search</h3>
                                <p className="font-sans text-sm text-brand-dark/60 mb-3">AI scans database for products in your area.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-6 border border-brand-dark/10 hover:border-brand-dark transition-colors">
                                <div className="text-4xl mb-4">📦</div>
                                <h3 className="font-display text-2xl uppercase text-brand-dark mb-2">3. Optimize</h3>
                                <p className="font-sans text-sm text-brand-dark/60 mb-3">Generates package based on proximity & budget.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-brand-dark p-6 text-brand-light relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">💳</div>
                                    <h3 className="font-display text-2xl uppercase text-brand-earth mb-2">4. Pay</h3>
                                    <p className="font-sans text-sm text-brand-light/70 mb-3">Select package and submit payment.</p>
                                </div>
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-earth/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-brand-earth/20 transition-colors"></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
