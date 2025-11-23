import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-brand-light flex flex-col">
            <ConsumerNavbar className="!bg-brand-light" />

            <div className="flex-grow flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="font-display text-6xl md:text-8xl text-brand-dark mb-6 uppercase tracking-tighter">
                        About Us
                    </h1>
                    <div className="w-24 h-1 bg-brand-earth mx-auto mb-8"></div>
                    <p className="font-serif text-2xl text-brand-dark/60 italic">
                        Coming Soon
                    </p>
                </div>
            </div>

            <ConsumerFooter />
        </main>
    );
}
