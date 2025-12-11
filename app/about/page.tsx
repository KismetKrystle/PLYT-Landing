"use client";
import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";
import { ModalProvider } from "../context/ModalContext";
import JoinModal from "../components/JoinModal";
import { Timeline } from "@/components/ui/timeline";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { Gallery } from "@/components/ui/gallery";

import { timelineData, MediaItem } from "./data";

// --- Components ---



export default function AboutPage() {
    const [lightboxState, setLightboxState] = useState<{
        media: MediaItem[];
        index: number;
    } | null>(null);

    // ...

    // Transform data for Timeline component
    const formattedData = timelineData.map((item, index) => ({
        title: item.title,
        content: (
            <div key={index}>
                <p className="text-neutral-950 text-xs md:text-sm font-medium mb-8">
                    {item.description}
                </p>

                <Gallery
                    media={item.media}
                    onOpenLightbox={(idx: number) => setLightboxState({ media: item.media, index: idx })}
                />
            </div>
        )
    }));

    const handleNext = React.useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxState(prev => {
            if (!prev) return null;
            return { ...prev, index: (prev.index + 1) % prev.media.length };
        });
    }, []);

    const handlePrev = React.useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setLightboxState(prev => {
            if (!prev) return null;
            return {
                ...prev,
                index: (prev.index - 1 + prev.media.length) % prev.media.length
            };
        });
    }, []);

    const handleClose = React.useCallback(() => {
        setLightboxState(null);
    }, []);

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxState) return;

            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxState, handleNext, handlePrev, handleClose]);

    const currentMedia = lightboxState ? lightboxState.media[lightboxState.index] : null;

    return (
        <ModalProvider>
            <main className="min-h-screen bg-white flex flex-col relative">
                <ConsumerNavbar className="!bg-white" />

                <div className="flex-grow w-full">
                    <Timeline data={formattedData} />
                </div>

                <ConsumerFooter />
                <JoinModal />

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {currentMedia && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClose}
                            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                        >
                            {/* Navigation Buttons - Desktop */}
                            <button
                                onClick={handlePrev}
                                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                            </button>

                            <button
                                onClick={handleNext}
                                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </button>

                            <motion.div
                                key={currentMedia.src} // Add key to trigger animation on change
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center p-8"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors cursor-pointer"
                                >
                                    <X size={32} />
                                </button>

                                {currentMedia.type === 'image' ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={currentMedia.src}
                                            alt={currentMedia.alt}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                ) : (
                                    <video
                                        src={currentMedia.src}
                                        controls
                                        autoPlay
                                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                                    />
                                )}
                            </motion.div>

                            {/* Mobile Tap Navigation Areas */}
                            <div className="md:hidden absolute left-0 top-0 bottom-0 w-1/4 z-[205]" onClick={handlePrev} />
                            <div className="md:hidden absolute right-0 top-0 bottom-0 w-1/4 z-[205]" onClick={handleNext} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </ModalProvider>
    );
}
