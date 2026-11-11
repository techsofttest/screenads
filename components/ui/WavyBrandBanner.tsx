"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WavyBrandBannerProps {
  text?: string;
  className?: string;
}

export function WavyBrandBanner({
  text = "Screen Ads",
  className = "",
}: WavyBrandBannerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const letters = Array.from(text);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full bg-[#181818] px-4 py-8 sm:py-4 md:py-6 overflow-hidden select-none cursor-pointer flex items-center justify-center ${className}`}
    >
      {/* SVG Grain filter specifically referenced by text */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="letter-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.45 0"
            result="coloredNoise"
          />
          <feComposite in="SourceGraphic" in2="coloredNoise" operator="in" />
        </filter>
      </svg>

      <h1
        style={{ filter: "url(#letter-grain)" }}
        className="font-display text-[16vw] max-w-full font-bold leading-none tracking-[-0.04em] text-white text-center whitespace-nowrap flex items-center justify-center relative z-10"
      >
        {letters.map((char, index) => {
          if (char === " ") {
            return (
              <span key={index} className="inline-block w-[4vw]">
                &nbsp;
              </span>
            );
          }

          return (
            <motion.span
              key={index}
              animate={
                isHovered
                  ? {
                    y: [0, -32, 18, -12, 0],
                    rotate: [0, -6, 6, -2, 0],
                  }
                  : { y: 0, rotate: 0 }
              }
              transition={{
                duration: 0.9,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
              className="inline-block will-change-transform"
            >
              {char}
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
}
