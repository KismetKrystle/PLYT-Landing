"use client";

export default function BlockchainTech() {
    return (
        <section className="bg-[#0F0F0F] py-24 relative overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                transform: "perspective(500px) rotateX(60deg) translateY(-100px) scale(2)"
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-cream text-center mb-4">
                    Powered by XRPL Blockchain
                </h2>
                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    Leveraging the speed, sustainability, and low cost of the XRP Ledger to democratize climate finance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {/* Feature 1 */}
                    <div className="border border-digital-teal/30 bg-black/40 p-6 rounded-xl hover:bg-digital-teal/10 hover:border-digital-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-digital-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="font-mono text-bamboo-gold text-xl font-bold">3-5 sec</span>
                        </div>
                        <h3 className="font-sans text-lg font-bold text-cream mb-2">Instant Settlement</h3>
                        <p className="text-gray-500 text-sm">Real-time payments for farmers, eliminating waiting periods.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="border border-digital-teal/30 bg-black/40 p-6 rounded-xl hover:bg-digital-teal/10 hover:border-digital-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-digital-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-mono text-bamboo-gold text-xl font-bold">$0.0001</span>
                        </div>
                        <h3 className="font-sans text-lg font-bold text-cream mb-2">Micropayments</h3>
                        <p className="text-gray-500 text-sm">Ultra-low transaction fees make small daily payouts viable.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="border border-digital-teal/30 bg-black/40 p-6 rounded-xl hover:bg-digital-teal/10 hover:border-digital-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-digital-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <span className="font-mono text-bamboo-gold text-xl font-bold">100%</span>
                        </div>
                        <h3 className="font-sans text-lg font-bold text-cream mb-2">Secure Escrow</h3>
                        <p className="text-gray-500 text-sm">Smart contracts ensure funds are released only when conditions are met.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="border border-digital-teal/30 bg-black/40 p-6 rounded-xl hover:bg-digital-teal/10 hover:border-digital-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-digital-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <span className="font-mono text-bamboo-gold text-xl font-bold">Auto</span>
                        </div>
                        <h3 className="font-sans text-lg font-bold text-cream mb-2">Smart Contracts</h3>
                        <p className="text-gray-500 text-sm">Automated agreements for farming inputs and harvest sales.</p>
                    </div>

                    {/* Feature 5 */}
                    <div className="border border-digital-teal/30 bg-black/40 p-6 rounded-xl hover:bg-digital-teal/10 hover:border-digital-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-digital-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-mono text-bamboo-gold text-xl font-bold">USDC</span>
                        </div>
                        <h3 className="font-sans text-lg font-bold text-cream mb-2">Stablecoins</h3>
                        <p className="text-gray-500 text-sm">Payments in stable currency to protect farmers from volatility.</p>
                    </div>

                    {/* Feature 6 */}
                    <div className="border border-digital-teal/30 bg-black/40 p-6 rounded-xl hover:bg-digital-teal/10 hover:border-digital-teal hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 rounded-lg bg-digital-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-digital-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <span className="font-mono text-bamboo-gold text-xl font-bold">DEX</span>
                        </div>
                        <h3 className="font-sans text-lg font-bold text-cream mb-2">DEX Integration</h3>
                        <p className="text-gray-500 text-sm">Seamless exchange between local currencies and crypto assets.</p>
                    </div>
                </div>

                {/* Tech Diagram */}
                <div className="flex justify-center items-center gap-4 md:gap-8 overflow-x-auto py-4">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-digital-teal shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <span className="font-bold text-forest-green">User</span>
                        </div>
                    </div>

                    <div className="flex-1 h-0.5 bg-digital-teal relative min-w-[50px]">
                        <div className="absolute top-1/2 left-0 w-2 h-2 bg-bamboo-gold rounded-full -translate-y-1/2 animate-ping"></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-forest-green flex items-center justify-center border-2 border-digital-teal shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <span className="font-bold text-cream text-xs">Platform</span>
                        </div>
                    </div>

                    <div className="flex-1 h-0.5 bg-digital-teal relative min-w-[50px]">
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-bamboo-gold rounded-full -translate-y-1/2 animate-ping" style={{ animationDelay: "0.5s" }}></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center border-2 border-bamboo-gold shadow-[0_0_20px_rgba(232,197,71,0.4)] animate-pulse">
                            <span className="font-bold text-bamboo-gold">XRPL</span>
                        </div>
                    </div>

                    <div className="flex-1 h-0.5 bg-digital-teal relative min-w-[50px]">
                        <div className="absolute top-1/2 right-0 w-2 h-2 bg-bamboo-gold rounded-full -translate-y-1/2 animate-ping" style={{ animationDelay: "1s" }}></div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-digital-teal shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <span className="font-bold text-forest-green text-xs">Services</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
