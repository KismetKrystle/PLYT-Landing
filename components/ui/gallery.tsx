"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { MediaItem } from "@/app/about/data";

interface GalleryProps {
    media: MediaItem[];
    onOpenLightbox: (index: number) => void;
}

export const Gallery = ({ media, onOpenLightbox }: GalleryProps) => {
    if (!media || media.length === 0) return null;

    return (
        <div className="w-full overflow-x-auto pb-6 md:pb-8">
            <div className="flex gap-4 min-w-min px-1">
                {media.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 h-40 md:h-48 aspect-video rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-neutral-100 border border-neutral-200"
                        onClick={() => onOpenLightbox(index)}
                    >
                        {item.type === 'image' ? (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-900 relative">
                                {item.src.includes('youtube.com') || item.src.includes('youtu.be') ? (
                                    <iframe
                                        src={item.src.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}
                                        className="w-full h-full object-cover"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={item.alt || "YouTube video"}
                                    />
                                ) : (
                                    <>
                                        <video
                                            src={item.src}
                                            className="w-full h-full object-cover opacity-70"
                                            muted
                                            playsInline
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                                                <Play className="w-6 h-6 text-white fill-white" />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
