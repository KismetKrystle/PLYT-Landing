"use client";

export default function GrowSystems() {
    const systems = [
        {
            name: "Balcony Garden",
            description: "Perfect for apartments and small spaces",
            features: ["Vertical growing", "Low water usage", "Year-round harvest"],
            image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800&auto=format&fit=crop", // Balcony plants
        },
        {
            name: "Community Plot",
            description: "Shared growing systems for neighborhoods",
            features: ["Social connection", "Shared resources", "Learning together"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop", // Community garden
        },
        {
            name: "Home System",
            description: "Beautiful food-producing infrastructure",
            features: ["Recycled materials", "Custom design", "Local artisans"],
            image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=800&auto=format&fit=crop", // Vertical garden
        },
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                        Grow Systems for Every Space
                    </h2>
                    <p className="text-dark-gray/70 text-lg max-w-2xl mx-auto">
                        Beautiful, functional systems designed by local artisans from recycled materials
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {systems.map((system, index) => (
                        <div key={index} className="group">
                            {/* Image */}
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 group-hover:shadow-xl transition-shadow">
                                <img
                                    src={system.image}
                                    alt={system.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <button className="bg-white text-sage-green px-6 py-2 rounded-full font-sans font-semibold text-sm hover:bg-sage-green hover:text-white transition-colors">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="font-sans font-bold text-2xl text-dark-gray mb-3">
                                {system.name}
                            </h3>
                            <p className="text-dark-gray/70 mb-4">
                                {system.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {system.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-dark-gray/70">
                                        <div className="w-5 h-5 bg-sage-green/20 rounded-full flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-sage-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Connect CTA */}
                <div className="text-center mt-16">
                    <p className="text-dark-gray/70 mb-6">
                        Let our AI help you find the perfect system for your space
                    </p>
                    <a href="#join" className="inline-block bg-sage-green text-white px-10 py-4 rounded-full font-sans font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Chat with AI Assistant
                    </a>
                </div>
            </div>
        </section>
    );
}
