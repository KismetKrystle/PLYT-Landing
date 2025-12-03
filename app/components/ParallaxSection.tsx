"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  backgroundImage: string;
  height?: string;
  children?: React.ReactNode;
  speed?: number;
  className?: string;
  overlayOpacity?: number;
}

export default function ParallaxSection({
  backgroundImage,
  height = "50vh",
  children,
  speed = 0.5,
  className,
  overlayOpacity = 0.2,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden w-full", className)}
      style={{ height }}
    >
      <motion.div
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
        style={{
          y,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div 
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
