"use client";
import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";
import { ModalProvider } from "../context/ModalContext";
import JoinModal from "../components/JoinModal";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
    {
        src: "/assets/images/gallery/gallery-1.png",
        alt: "Integrated Hydroponic Furniture Design Process",
        title: "Design Process",
    },
    {
        src: "/assets/images/gallery/gallery-2.png",
        alt: "Hydroponic System Details",
        title: "System Details",
    },
    {
        src: "/assets/images/gallery/gallery-3.png",
        alt: "Vertical Spiral Garden",
        title: "Spiral Garden",
    },
    {
        src: "/assets/images/gallery/gallery-4.jpg",
        alt: "Wooden Tower Garden",
        title: "Wooden Tower",
    },
    {
        src: "/assets/images/gallery/gallery-5.jpg",
        alt: "Indoor Garden Lifestyle",
        title: "Living Space Integration",
    },
];

export default function GalleryPage() {
    return (
        <ModalProvider>
            <main className="min-h-screen bg-white flex flex-col">
                <ConsumerNavbar className="!bg-white" />

                <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-neutral-950 mb-6 font-display tracking-tight">
                            Grow System Gallery
                        </h1>
                        <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                            Explore our innovative hydroponic designs and visualize how they
                            can transform your living space.
                        </p>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {galleryImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-md bg-neutral-100"
                            >
                                <div className="relative w-full">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={800}
                                        height={1000}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <p className="text-white font-medium text-lg drop-shadow-md">
                                            {img.title}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <ConsumerFooter />
                <JoinModal />
            </main>
        </ModalProvider>
    );
}
