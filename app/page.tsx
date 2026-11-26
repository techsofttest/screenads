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

  // Background color transitions throughout the homepage
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#975bf0", "#6cc6fa", "#75f8b0", "#fa6565", "#fac562", "#fc5889"],
  );

  return (
    <motion.main
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative min-h-screen w-full overflow-x-clip text-[#212121] transition-colors duration-700 ease-out"
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
