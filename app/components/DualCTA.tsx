"use client";

export default function DualCTA() {
    return (
        <section id="join" className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side: Join the Movement */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-cream to-bamboo-gold/20 p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 max-w-md mx-auto lg:mx-0">
                    <h2 className="font-serif text-4xl md:text-5xl text-forest-green mb-6">
                        Join the Movement
                    </h2>
                    <p className="font-sans text-forest-green/80 text-lg mb-8">
                        Be the first to access our platform. Early adopters get exclusive NFT rewards and governance rights.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email-join" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="email-join"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 bg-white border border-forest-green/20 rounded-lg focus:outline-none focus:border-forest-green focus:ring-1 focus:ring-forest-green text-forest-green placeholder-forest-green/40 transition-all"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="relative flex items-center">
                                <input type="checkbox" id="newsletter" className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-forest-green/30 checked:bg-digital-teal checked:border-digital-teal transition-all" />
                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <label htmlFor="newsletter" className="text-sm text-forest-green/70 cursor-pointer select-none">
                                Subscribe to our weekly impact report
                            </label>
                        </div>
                        <button type="submit" className="w-full bg-forest-green text-cream font-sans font-bold py-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider (Desktop) */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-bamboo-gold via-digital-teal to-bamboo-gold relative z-20"></div>

            {/* Right Side: Partner With Us */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-forest-green to-charcoal p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 max-w-md mx-auto lg:mx-0 lg:ml-auto text-right lg:text-left">
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
                        Partner With Us
                    </h2>
                    <p className="font-sans text-cream/80 text-lg mb-8">
                        Scale your impact. We're looking for landowners, urban farmers, and strategic investors.
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-6 py-4 bg-transparent border border-cream/20 rounded-lg focus:outline-none focus:border-digital-teal focus:ring-1 focus:ring-digital-teal text-cream placeholder-cream/40 transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Organization"
                                className="w-full px-6 py-4 bg-transparent border border-cream/20 rounded-lg focus:outline-none focus:border-digital-teal focus:ring-1 focus:ring-digital-teal text-cream placeholder-cream/40 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <select defaultValue="" className="w-full px-6 py-4 bg-transparent border border-cream/20 rounded-lg focus:outline-none focus:border-digital-teal focus:ring-1 focus:ring-digital-teal text-cream appearance-none cursor-pointer transition-all">
                                <option value="" disabled className="bg-charcoal text-gray-400">Select Partnership Type</option>
                                <option value="landowner" className="bg-charcoal">Landowner</option>
                                <option value="farmer" className="bg-charcoal">Urban Farmer</option>
                                <option value="investor" className="bg-charcoal">Investor</option>
                                <option value="other" className="bg-charcoal">Other</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-digital-teal text-forest-green font-sans font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:-translate-y-1 transition-all duration-300">
                            Get in Touch
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
