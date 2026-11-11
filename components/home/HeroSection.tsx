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

  // Track scroll progress of the video expanding as it enters into view
  const { scrollYProgress } = useScroll({
    target: videoWrapperRef,
    offset: ["start end", "center center"],
  });

  // Slowly expand scale from boxed (scale: 0.92) to full width fill (scale: 1.1)
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1.08]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative bg-white pt-32 pb-16 lg:pt-36 lg:pb-24 text-[#212121] clip-hero"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      {/* Sticky Rainbow Waves in the background pinned strictly within the Hero section boundary */}
      <div className="pointer-events-none sticky top-0 -mt-32 h-0 w-full z-0 overflow-visible">
        <div className="relative h-screen w-screen -left-[50vw] ml-[50%] overflow-hidden">
          <RainbowWaves />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Sticky text content: stays pinned behind the expanding video */}
        <div className="sticky top-20 z-0 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8 mt-40">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl font-semibold leading-[0.92] tracking-[-0.05em] sm:text-7xl md:text-5xl lg:text-6xl text-[#212121]"
            >
              Make Your Brand Seen.
              <br />
              <span className="text-[#212121]/70">Make Your Business Grow.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 mt-12"
            >
              <Button
                href="#services"
                variant="black"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                href="#contact"
                variant="stroke-black"
              >
                Let's Talk About Your Brand
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7"
            >
              <p className="text-base leading-7 font-medium text-[#212121] md:text-lg">
                At Screen Ads, we bring brands closer to people through
                creative advertising, innovative branding solutions and
                powerful digital marketing strategies.
              </p>

              <p className="text-base leading-7 font-medium text-[#212121] md:text-lg">
                From building a distinctive brand identity to taking your
                message across the streets and into the digital world, we
                help your business get noticed, remembered and preferred.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video expanding slowly from boxed to filled full-width */}
        <div ref={videoWrapperRef} className="relative z-10 mt-24">
          <motion.div
            style={{
              scale,
            }}
            className="group relative aspect-[16/9] w-full overflow-hidden origin-center bg-black md:aspect-[21/9]"
          >
            <video
              ref={videoRef}
              src="/hero-sec/Screen Ads.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />

            {/* Clean Play/Pause Control Button */}
            <button
              onClick={togglePlay}
              type="button"
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#212121]/80 text-white backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:bg-[#212121]"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="h-5 w-5 fill-current translate-x-0.5" />
              )}
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
