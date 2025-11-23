"use client";

export default function SystemArchitecture() {
    const steps = [
        {
            number: "1",
            title: "User Onboarding",
            description: "Sign up via website/app with Web2 methods",
            details: "Custodial XRPL wallet auto-created",
            color: "digital-teal",
        },
        {
            number: "2",
            title: "Marketplace Exploration",
            description: "Browse from home growers, local farmers, distributors",
            details: "Seedlings, food, kits, accessories—sellers segmented by role",
            color: "bamboo-gold",
        },
        {
            number: "3",
            title: "Grow & Learn",
            description: "AI Grow Companion provides personalized guidance",
            details: "Connects to local resources, suppliers, service providers",
            color: "digital-teal",
        },
        {
            number: "4",
            title: "Sell & Trade",
            description: "List excess produce, seedlings, prepared food",
            details: "B2B clients & community buyers purchase directly",
            color: "bamboo-gold",
        },
        {
            number: "5",
            title: "Payments & Royalties",
            description: "All transactions executed on XRPL blockchain",
            details: "Smart contracts handle payments, royalties, staking",
            color: "digital-teal",
        },
        {
            number: "6",
            title: "Impact Dashboard",
            description: "Community & individual impact tracked on-chain",
            details: "Live metrics: yield, CO2 reduction, economic credits",
            color: "bamboo-gold",
        },
        {
            number: "7",
            title: "Feedback & Expansion",
            description: "Community feedback & sustainability leaderboards",
            details: "Modular structure supports regional scaling",
            color: "digital-teal",
        },
    ];

    return (
        <section className="bg-brand-light py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-brand-earth/5 rounded-full blur-3xl -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="font-mono text-brand-earth text-sm tracking-wider border border-brand-earth/30 px-3 py-1 rounded-none bg-brand-earth/10 inline-block mb-4">
                        SYSTEM ARCHITECTURE
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl text-brand-dark mb-6 uppercase tracking-tight">
                        Plyant User Flow & System Architecture
                    </h2>
                    <p className="text-brand-dark/70 text-lg max-w-3xl mx-auto font-serif">
                        End-to-end blockchain-powered ecosystem connecting growers, consumers, and impact investors
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Flowchart */}
                    <div className="space-y-0 relative pl-8 md:pl-0">
                        {/* Continuous Line (Desktop) */}
                        <div className="hidden md:block absolute left-[23px] top-6 bottom-6 w-0.5 bg-brand-dark/10"></div>

                        {steps.map((step, index) => (
                            <div key={step.number} className="relative md:pl-16 pb-8 last:pb-0 group">
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 items-center justify-center z-10">
                                    <div className="w-4 h-4 rounded-full bg-white border-4 border-brand-dark/20 group-hover:border-brand-earth transition-colors"></div>
                                </div>

                                {/* Step Card */}
                                <div className="relative bg-white rounded-none p-6 border border-brand-dark/10 hover:border-brand-earth transition-all shadow-sm hover:shadow-md">
                                    <div className="flex items-start gap-6">
                                        {/* Number Badge */}
                                        <div className={`w-12 h-12 ${step.color === 'digital-teal' ? 'bg-brand-dark text-brand-light' : 'bg-brand-earth text-brand-light'} flex items-center justify-center shrink-0 relative z-10`}>
                                            <span className="font-bold text-xl font-display">{step.number}</span>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="font-display font-bold text-2xl text-brand-dark mb-2 uppercase tracking-wide group-hover:text-brand-earth transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-brand-dark/80 mb-2 font-serif">{step.description}</p>
                                            <p className="text-brand-dark/50 text-sm font-mono">{step.details}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Summary Box */}
                    <div className="mt-12 bg-brand-dark text-brand-light rounded-none p-8 border border-brand-earth/30">
                        <h4 className="font-display font-bold text-xl text-brand-earth mb-6 uppercase tracking-wider">Key System Features</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    <span className="font-sans font-bold text-brand-light">Instant Transactions</span>
                                </div>
                                <p className="text-brand-light/60 text-sm">XRPL processes payments in 3-5 seconds</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="font-sans font-bold text-brand-light">Automated Smart Contracts</span>
                                </div>
                                <p className="text-brand-light/60 text-sm">Royalties, payments, and rewards flow automatically</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <svg className="w-5 h-5 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="font-sans font-bold text-brand-light">Transparent Impact Data</span>
                                </div>
                                <p className="text-brand-light/60 text-sm">All metrics recorded immutably on-chain</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
