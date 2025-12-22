"use client";
import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";
import { ModalProvider } from "../context/ModalContext";
import JoinModal from "../components/JoinModal";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

// Mock images reused from existing assets and new uploads
const galleryImages = [
    { src: "/assets/images/gallery/gallery-1.png", alt: "Tabletop System" },
    { src: "/assets/images/gallery/gallery-2.png", alt: "Wall System" },
    { src: "/assets/images/gallery/gallery-3.png", alt: "Floor System" },
    { src: "/assets/images/gallery/gallery-4.jpg", alt: "Custom System" },
    { src: "/assets/images/gallery/gallery-5.jpg", alt: "Living Space" },
    // New Tabletop Images
    { src: "/assets/images/gallery/tabletop-1.png", alt: "Tabletop Garden with Herbs" },
    { src: "/assets/images/gallery/tabletop-2.png", alt: "Modern White Tabletop System" },
    { src: "/assets/images/gallery/tabletop-3.png", alt: "Microgreens Tray" },
    { src: "/assets/images/gallery/tabletop-4.png", alt: "Smart Tabletop Garden" },
    // New Wall Images
    { src: "/assets/images/gallery/wall-1.png", alt: "Vertical Hydroponic Wall" },
    { src: "/assets/images/gallery/wall-2.png", alt: "Living Wall Greenery" },
    { src: "/assets/images/gallery/wall-3.png", alt: "Mounted Pipe Garden" },
    // New Floor Images
    { src: "/assets/images/gallery/floor-1.png", alt: "Freestanding Vertical Tower" },
    { src: "/assets/images/gallery/floor-2.png", alt: "Tall Hydroponic Column" },
    { src: "/assets/images/gallery/floor-3.png", alt: "Multi-Tier Grow Rack" },
    { src: "/assets/images/gallery/floor-4.png", alt: "Mobile Green Rack" },
    { src: "/assets/images/gallery/floor-5.png", alt: "Large Capacity Hydroponic Spinner" },
    // Restored Original JPEGs
    { src: "/assets/images/gallery/gallery-3.jpg", alt: "Spiral Garden Variation" },
];

const sections = [
    {
        id: "custom",
        category: "CUSTOM",
        title: "Artisan Crafted",
        description: "Elevate your grow system with handcrafted artisan shells designed to match your unique aesthetic. Choose from tabletop, wall, or floor systems, then collaborate with skilled artisans to create a one-of-a-kind piece that seamlessly integrates with your interior design.",
        badge: "Bespoke Design",
        features: ["Personalized consultation", "Artisan-crafted shells", "Match your living style"],
        images: [galleryImages[3], galleryImages[4], galleryImages[17], galleryImages[0], galleryImages[1]]
    },
    {
        id: "tabletop",
        category: "TABLETOP",
        title: "Compact & Ready",
        description: "Perfect for kitchens, apartments, and small spaces. Grow fresh herbs and greens right on your countertop with zero hassle. Plug in, add water, and watch your garden flourish.",
        badge: "Shop Online",
        features: ["Ideal for herbs and leafy greens", "Fits any kitchen counter", "Low maintenance design"],
        images: [galleryImages[5], galleryImages[6], galleryImages[7], galleryImages[8]]
    },
    {
        id: "wall",
        category: "WALL",
        title: "Vertical Living Art",
        description: "Transform empty walls into vibrant living gardens. Ideal for creating stunning focal points in dining rooms, offices, or modern living spaces while maximizing floor space.",
        badge: "Shop Online",
        features: ["Space-saving vertical design", "Creates visual impact", "Perfect for urban homes"],
        images: [galleryImages[9], galleryImages[10], galleryImages[11]]
    },
    {
        id: "floor",
        category: "FLOOR",
        title: "Maximum Capacity",
        description: "For serious growers and plant enthusiasts. Freestanding systems that offer the largest growing capacity. Perfect for corners, alongside windows, or as a standalone garden feature.",
        badge: "Shop Online",
        features: ["Highest plant capacity", "Stable freestanding design", "Grow full-sized vegetables"],
        images: [galleryImages[12], galleryImages[13], galleryImages[14], galleryImages[15], galleryImages[16]]
    }
];


function ImageCarousel({ images, onImageClick }: {
    images: typeof galleryImages,
    onImageClick: (index: number) => void
}) {
    const [current, setCurrent] = useState(0);

    const next = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-2xl group bg-neutral-100">
            <div className="absolute inset-0 cursor-zoom-in" onClick={() => onImageClick(current)}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={images[current].src}
                            alt={images[current].alt}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Overlays */}
            <div className="absolute inset-x-0 top-0 bottom-0 flex justify-between items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={prev}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors pointer-events-auto"
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors pointer-events-auto"
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 pointer-events-none">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === current ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function GalleryPage() {
    const [lightboxState, setLightboxState] = useState<{
        images: typeof galleryImages;
        index: number;
    } | null>(null);

    const openLightbox = useCallback((images: typeof galleryImages, index: number) => {
        setLightboxState({ images, index });
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxState(null);
    }, []);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxState(prev => {
            if (!prev) return null;
            return { ...prev, index: (prev.index + 1) % prev.images.length };
        });
    }, []);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxState(prev => {
            if (!prev) return null;
            return {
                ...prev,
                index: (prev.index - 1 + prev.images.length) % prev.images.length
            };
        });
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxState) return;

            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxState, nextImage, prevImage, closeLightbox]);

    return (
        <ModalProvider>
            <main className="min-h-screen bg-white flex flex-col">
                <ConsumerNavbar className="!bg-white" />

                {/* Hero Header */}
                <div className="w-full bg-neutral-50 border-b border-neutral-100">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-display text-neutral-950 mb-6 leading-[0.85] tracking-tighter uppercase"
                        >
                            Explore Your Future<br /><span className="text-emerald-700">Home Grow System</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-neutral-600 max-w-2xl text-lg md:text-xl leading-relaxed"
                        >
                            From compact countertop gardens to bespoke artisan designs, find the ideal indoor growing solution for your space and lifestyle.
                        </motion.p>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-24 md:space-y-32">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="w-full md:w-1/2 space-y-6"
                            >
                                <div className="space-y-2">
                                    <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase">
                                        {section.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 font-display">
                                        {section.title}
                                    </h2>
                                </div>

                                <p className="text-neutral-600 text-lg leading-relaxed">
                                    {section.description}
                                </p>

                                <div className="py-4">
                                    <h3 className="text-sm font-semibold text-neutral-900 uppercase mb-4 tracking-wide">
                                        Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-neutral-700">
                                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 text-emerald-600 shrink-0">
                                                    <Check size={14} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold tracking-wide ${section.badge === "Bespoke Design"
                                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                                        : "bg-neutral-100 text-neutral-700 border border-neutral-200"
                                        }`}>
                                        {section.badge}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Image Carousel Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="w-full md:w-1/2"
                            >
                                <div className="bg-white p-2 rounded-3xl shadow-xl border border-neutral-100">
                                    <ImageCarousel
                                        images={section.images}
                                        onImageClick={(idx) => openLightbox(section.images, idx)}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mb-20" />
                <ConsumerFooter />
                <JoinModal />

                {/* Lightbox Overlay */}
                <AnimatePresence>
                    {lightboxState && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-[210] p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <Check className="rotate-45" size={32} />
                            </button>

                            {/* Navigation Buttons - Desktop */}
                            <button
                                onClick={prevImage}
                                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <ChevronLeft size={40} />
                            </button>

                            <button
                                onClick={nextImage}
                                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <ChevronRight size={40} />
                            </button>

                            {/* Main Image Container */}
                            <motion.div
                                key={lightboxState.index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full h-full flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
                                    <Image
                                        src={lightboxState.images[lightboxState.index].src}
                                        alt={lightboxState.images[lightboxState.index].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Caption */}
                                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                                    <p className="text-white text-lg font-medium drop-shadow-md">
                                        {lightboxState.images[lightboxState.index].alt}
                                    </p>
                                    <p className="text-white/60 text-sm drop-shadow-md">
                                        {lightboxState.index + 1} / {lightboxState.images.length}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Mobile Tap Navigation Areas */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-1/4 z-[205]" onClick={prevImage} />
                            <div className="md:hidden absolute right-0 top-0 bottom-0 w-1/4 z-[205]" onClick={nextImage} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </ModalProvider>
    );
}
