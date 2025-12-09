"use client";
import ConsumerNavbar from "../components/consumer/Navbar";
import ConsumerFooter from "../components/consumer/Footer";
import { ModalProvider } from "../context/ModalContext";
import JoinModal from "../components/JoinModal";
import { Timeline } from "@/components/ui/timeline";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const data = [
        {
            title: "2015",
            content: (
                <div>
                    <p className="text-neutral-950 text-xs md:text-sm font-medium mb-8">
                        Built the container for my first hydroponic tower, so it could grow with the proper likes and feel like furniture in my living room.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/assets/images/about/tower-full.jpg"
                            alt="Full Hydroponic Tower"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage("/assets/images/about/tower-full.jpg")}
                        />
                        <Image
                            src="/assets/images/about/tower-light.jpg"
                            alt="Tower Lighting System"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage("/assets/images/about/tower-light.jpg")}
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2017-2019",
            content: (
                <div>
                    <p className="text-neutral-950 text-xs md:text-sm font-medium mb-8">
                        Started the journey of defining the Plyant mission. This is where I operated my first vertical farm, it was a Frieght Farm located downtown Las Vegas, NV.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                        <Image
                            src="/assets/images/about/peppers-plant.jpg"
                            alt="Growing Peppers"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage("/assets/images/about/peppers-plant.jpg")}
                        />
                        <Image
                            src="/assets/images/about/peppers-hand.jpg"
                            alt="Harvesting Peppers"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage("/assets/images/about/peppers-hand.jpg")}
                        />
                        <Image
                            src="/assets/images/about/sensor-check.jpg"
                            alt="Research and Testing"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setSelectedImage("/assets/images/about/sensor-check.jpg")}
                        />
                    </div>
                </div>
            ),
        },

        {
            title: "2020-2025",
            content: (
                <div>
                    <p className="text-neutral-950 text-xs md:text-sm font-medium mb-8">
                        More updates to come.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                    </div>
                </div>
            ),
        },

    ];

    return (
        <ModalProvider>
            <main className="min-h-screen bg-white flex flex-col relative">
                <ConsumerNavbar className="!bg-white" />

                <div className="flex-grow w-full">
                    <Timeline data={data} />
                </div>

                <ConsumerFooter />
                <JoinModal />

                {/* Lightbox / Image Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Full screen view"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2 bg-black/50 rounded-full"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </ModalProvider>
    );
}
