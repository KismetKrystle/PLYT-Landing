"use client";
import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";
import { ModalProvider } from "../context/ModalContext";
import JoinModal from "../components/JoinModal";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) =>
            prev === null ? null : (prev + 1) % galleryImages.length
        );
    }, []);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIndex((prev) =>
            prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
        );
    }, []);

    const handleClose = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handleNext, handlePrev, handleClose]);

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
                                className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-md bg-neutral-100 cursor-pointer"
                                onClick={() => setSelectedIndex(index)}
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
                                        <p className="text-white/80 text-sm mt-1">Click to expand</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <ConsumerFooter />
                <JoinModal />

                {/* Lightbox Overlay */}
                <AnimatePresence>
                    {selectedIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                            onClick={handleClose}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 z-[110] p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={32} />
                            </button>

                            {/* Navigation Buttons - Desktop */}
                            <button
                                onClick={handlePrev}
                                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <ChevronLeft size={40} />
                            </button>

                            <button
                                onClick={handleNext}
                                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <ChevronRight size={40} />
                            </button>

                            {/* Main Image Container */}
                            <motion.div
                                key={selectedIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full h-full flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
                            >
                                <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
                                    <Image
                                        src={galleryImages[selectedIndex].src}
                                        alt={galleryImages[selectedIndex].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Caption */}
                                <div className="absolute bottom-[-40px] left-0 right-0 text-center">
                                    <p className="text-white text-lg font-medium">
                                        {galleryImages[selectedIndex].title}
                                    </p>
                                    <p className="text-white/60 text-sm">
                                        {selectedIndex + 1} / {galleryImages.length}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mobile Tap Navigation Areas (invisible) */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-1/3 z-[105]" onClick={handlePrev} />
                            <div className="md:hidden absolute right-0 top-0 bottom-0 w-1/3 z-[105]" onClick={handleNext} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </ModalProvider>
    );
}
