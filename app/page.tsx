"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TransitSection } from "@/components/home/TransitSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Bright, luminous, stylish rainbow pastel spectrum:
  // 0.00: Hero        -> Fresh Lilac / Lavender (#e9ddfb)
  // 0.20: Intro       -> Sky Azure / Soft Cyan (#d8f0fe)
  // 0.40: Services    -> Mint Sage / Fresh Spring (#d9fae8)
  // 0.60: Transit     -> Crisp Clean White (#ffffff)
  // 0.80: Why Choose  -> Warm Buttercup / Peach Glow (#fef0d6)
  // 1.00: Industries  -> Soft Rose Pink / Blossom (#fde2ea)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "#975bf0ff", // Soft Lilac Violet
      "#6cc6faff", // Soft Sky Cyan
      "#75f8b0ff", // Soft Mint Green
      "#fa6565ff", // Crisp White Break
      "#fac562ff", // Warm Butter Peach
      "#fc5889ff", // Soft Blossom Pink
    ]
  );

  return (
    <motion.main
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen text-[#212121] transition-colors duration-700 ease-out"
    >
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyChooseSection />
      <TransitSection />
      <IndustriesSection />
    </motion.main>
  );
}
