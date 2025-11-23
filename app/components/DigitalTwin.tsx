"use client";

export default function DigitalTwin() {
    return (
        <section id="technology" className="bg-brand-dark py-24 relative overflow-hidden">
            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-display text-4xl md:text-5xl text-brand-light text-center mb-16 uppercase tracking-wider">
                    Grow Systems as Living Assets
                </h2>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left Side: Physical Asset */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-none overflow-hidden border border-brand-earth/30 shadow-lg group-hover:shadow-xl transition-all duration-500">
                            <div className="aspect-[4/3] bg-brand-black relative">
                                {/* Placeholder for Grow System Image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-black to-black flex items-center justify-center text-brand-light/40">
                                    <span className="font-mono text-sm">Physical Asset Image</span>
                                </div>
                                {/* Overlay Label */}
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-brand-earth/50 px-3 py-1 rounded-none">
                                    <span className="font-mono text-brand-earth text-xs tracking-wider">PHYSICAL ASSET</span>
                                </div>
                            </div>
                        </div>

                        {/* Connection Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 -right-12 w-24 h-0.5 border-t-2 border-dashed border-brand-earth/50">
                            <div className="absolute top-1/2 left-0 w-2 h-2 bg-brand-earth rounded-full -translate-y-1/2 animate-ping"></div>
                        </div>
                    </div>

                    {/* Right Side: Digital Twin */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-brand-light/5 rounded-none p-8 relative overflow-hidden border border-brand-earth/20">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-earth to-transparent opacity-50"></div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="font-mono text-brand-earth text-xs tracking-wider border border-brand-earth/30 px-2 py-1 rounded-none bg-brand-earth/10">DIGITAL TWIN</span>
                                <span className="font-mono text-brand-earth text-xs">ID: #00042</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-brand-black/40 p-4 rounded-none border border-brand-light/10">
                                    <p className="text-brand-light/60 text-xs mb-1">CO2 Offset</p>
                                    <p className="font-mono text-brand-earth text-xl font-bold">2.5kg</p>
                                </div>
                                <div className="bg-brand-black/40 p-4 rounded-none border border-brand-light/10">
                                    <p className="text-brand-light/60 text-xs mb-1">Water Saved</p>
                                    <p className="font-mono text-brand-earth text-xl font-bold">145L</p>
                                </div>
                                <div className="bg-brand-black/40 p-4 rounded-none border border-brand-light/10">
                                    <p className="text-brand-light/60 text-xs mb-1">Food Produced</p>
                                    <p className="font-mono text-brand-earth text-xl font-bold">8.2kg</p>
                                </div>
                                <div className="bg-brand-black/40 p-4 rounded-none border border-brand-light/10">
                                    <p className="text-brand-light/60 text-xs mb-1">System Health</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <p className="font-mono text-green-400 text-sm">Optimal</p>
                                    </div>
                                </div>
                            </div>

                            {/* Mock Graph */}
                            <div className="h-24 w-full bg-brand-black/20 rounded-none border border-brand-light/10 flex items-end px-2 pb-2 gap-1">
                                {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-brand-earth/20 hover:bg-brand-earth/40 transition-colors rounded-t-none relative group"
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1 rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            {h}%
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Feature List */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {["Real-time impact tracking", "Automated royalties", "Climate certificates", "Fractional ownership"].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-brand-earth/10 flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-brand-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-brand-light/80 text-sm font-sans">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
