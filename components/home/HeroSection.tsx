"use client";

import { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Play, Pause } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { RainbowWaves } from "@/components/ui/RainbowWaves";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: videoWrapperRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.02]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative isolate w-full overflow-hidden bg-white pt-14 pb-10 text-[#212121] sm:pt-20 sm:pb-14 md:pt-24 md:pb-16 lg:pt-24 lg:pb-24"
    >
      {/* Rainbow Background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[550px] overflow-hidden sm:h-[650px] lg:h-[750px]">
        <RainbowWaves />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="relative grid grid-cols-1 items-end gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Heading and Buttons */}
          <div className="min-w-0 lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl font-display text-3xl font-semibold leading-[1] tracking-[-0.05em] text-[#212121] min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl"
            >
              <span className="block lg:whitespace-nowrap">
                Make Your Brand Seen.
              </span>

              <span className="block text-[#212121]/70 lg:whitespace-nowrap">
                Make Your Business Grow.
              </span>
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 flex flex-col items-stretch gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-8 lg:mt-10"
            >
              <Button href="#services" variant="black">
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button href="#contact" variant="stroke-black">
                Let's Talk About Your Brand
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Description */}
          <div className="min-w-0 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1 lg:gap-7"
            >
              <p className="text-sm font-medium leading-5 text-[#212121] sm:text-base sm:leading-6 md:text-lg md:leading-7">
                At Screen Ads, we bring brands closer to people through creative
                advertising, innovative branding solutions and powerful digital
                marketing strategies.
              </p>

              <p className="text-sm font-medium leading-5 text-[#212121] sm:text-base sm:leading-6 md:text-lg md:leading-7">
                From building a distinctive brand identity to taking your
                message across the streets and into the digital world, we help
                your business get noticed, remembered and preferred.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Expanding Video */}
        <div
          ref={videoWrapperRef}
          className="relative z-10 mt-10 w-full overflow-hidden sm:mt-14 md:mt-16 lg:mt-20"
        >
          <motion.div
            style={{ scale }}
            className="group relative aspect-[4/3] w-full origin-center overflow-hidden bg-black min-[480px]:aspect-[16/9] md:aspect-[21/9]"
          >
            <video
              ref={videoRef}
              src="/hero-sec/Screen Ads.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play / Pause Button */}
            <button
              onClick={togglePlay}
              type="button"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#212121]/80 text-white backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:bg-[#212121] sm:bottom-4 sm:right-4 sm:h-11 sm:w-11 md:bottom-6 md:right-6 md:h-12 md:w-12"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
              ) : (
                <Play className="h-4 w-4 translate-x-0.5 fill-current sm:h-5 sm:w-5" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
