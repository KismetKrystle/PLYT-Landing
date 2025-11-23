"use client";

export default function FinancialFlow() {
    return (
        <section className="w-full bg-brand-light text-brand-black py-12 px-4 md:px-8 border-t border-brand-dark/10">
            <div className="w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Header */}
                    <div className="lg:w-1/3">
                        <h2 className="font-display text-5xl md:text-6xl uppercase leading-[0.9] text-brand-dark mb-4">
                            MONEY WORKS<br />FOR YOU
                        </h2>
                        <p className="font-serif text-xl text-brand-dark/70 max-w-md">
                            Deposit funds, buy local, and watch your unused balance grow automatically.
                        </p>
                    </div>

                    {/* Steps Compact */}
                    <div className="lg:w-2/3 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Step 1 */}
                            <div className="bg-white p-6 border border-brand-dark/10 hover:border-brand-dark transition-colors">
                                <div className="text-4xl mb-4">💵</div>
                                <h3 className="font-display text-2xl uppercase text-brand-dark mb-2">1. Deposit</h3>
                                <p className="font-sans text-sm text-brand-dark/60 mb-3">Add money to your Plyant wallet.</p>
                                <div className="font-mono text-lg font-bold text-brand-earth">$100 <span className="text-xs font-normal text-brand-dark/40">Initial</span></div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-6 border border-brand-dark/10 hover:border-brand-dark transition-colors">
                                <div className="text-4xl mb-4">🛒</div>
                                <h3 className="font-display text-2xl uppercase text-brand-dark mb-2">2. Buy Local</h3>
                                <p className="font-sans text-sm text-brand-dark/60 mb-3">Support local growers & artisans.</p>
                                <div className="font-mono text-lg font-bold text-brand-earth">$60 <span className="text-xs font-normal text-brand-dark/40">Spent</span></div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-brand-dark p-6 text-brand-light relative overflow-hidden group">
                                <div className="relative z-10">
                                    <div className="text-4xl mb-4">📈</div>
                                    <h3 className="font-display text-2xl uppercase text-brand-earth mb-2">3. Earn Yield</h3>
                                    <p className="font-sans text-sm text-brand-light/70 mb-3">Unused balance grows automatically.</p>
                                    <div className="flex items-end gap-2">
                                        <div className="font-mono text-2xl font-bold text-brand-earth">+$2.80</div>
                                        <div className="text-xs text-brand-light/50 mb-1">Annual Est.</div>
                                    </div>
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
