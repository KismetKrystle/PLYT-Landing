"use client";

export default function ConsumerCTA() {
    return (
        <section id="join" className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Side: Join Waitlist */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-sage-green to-soft-teal p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 max-w-md mx-auto lg:mx-0">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Join the Movement
                    </h2>
                    <p className="font-sans text-white/90 text-lg mb-8">
                        Be the first to access Plyant in Bali. Find fresh food, learn to grow, and earn while you impact your community.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email-join" className="sr-only">Email address</label>
                            <input
                                type="email"
                                id="email-join"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 bg-white/90 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-dark-gray placeholder-dark-gray/50 transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Location in Bali (optional)"
                                className="w-full px-6 py-4 bg-white/90 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-dark-gray placeholder-dark-gray/50 transition-all"
                            />
                        </div>
                        <button type="submit" className="w-full bg-white text-sage-green font-sans font-bold py-4 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Side: Partner */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-warm-gold to-coral p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Partner With Us
                    </h2>
                    <p className="font-sans text-white/90 text-lg mb-8">
                        Are you a grower, artisan, or community organizer? Let's build resilient food systems together.
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-6 py-4 bg-white/90 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-dark-gray placeholder-dark-gray/50 transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Organization"
                                className="w-full px-6 py-4 bg-white/90 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-dark-gray placeholder-dark-gray/50 transition-all"
                            />
                        </div>
                        <div>
                            <select defaultValue="" className="w-full px-6 py-4 bg-white/90 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-dark-gray appearance-none cursor-pointer transition-all">
                                <option value="" disabled>Select Partnership Type</option>
                                <option value="grower">Local Grower</option>
                                <option value="artisan">Artisan/Designer</option>
                                <option value="educator">Educator/NGO</option>
                                <option value="investor">Investor</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full bg-white text-warm-gold font-sans font-bold py-4 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            Get in Touch
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
