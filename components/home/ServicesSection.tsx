"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    title: "Branding & Advertising",
    description:
      "Build a powerful brand identity with creative concepts, professional designs and strategic advertising solutions that make your business stand out.",
    image: "/services/branding.png",
  },
  {
    title: "Transit Advertising",
    description:
      "Take your brand on the move with digital bus screen advertisements in private fair stage buses. Connect with audiences through an innovative, on-the-go advertising platform.",
    image: "/services/Transit-Advertising.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Expand your online presence through targeted digital campaigns, strategic promotions and effective online advertising solutions.",
    image: "/services/digital-marketting.png",
  },
  {
    title: "Social Media Marketing",
    description:
      "Turn social media into a powerful business tool with engaging content, creative campaigns and consistent brand communication.",
    image: "/services/socialmedia-marketting.png",
  },
];

interface CardProps {
  service: ServiceItem;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({ service, index, progress, range, targetScale }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scale down the card smoothly as succeeding cards stack on top of it
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex h-screen items-center justify-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{
          scale,
          top: `calc(10vh + ${index * 32}px)`,
        }}
        className="relative flex min-h-[480px] w-full flex-col justify-between overflow-hidden bg-[#161616] p-6 text-white origin-top sm:p-10 md:min-h-[560px] md:p-14 lg:p-16"
      >
        {/* Background Image from public/services */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center transition duration-700 hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          {/* Subtle top vignette for clear title readability without muddying the focal image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/15 to-black/25" />
        </div>

        {/* Top Left: Bold, clear service title */}
        <div className="relative z-10 max-w-3xl">
          <h3 className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-7xl">
            {service.title}
          </h3>
        </div>

        {/* Bottom Left: Description with brand logo color overlay for high visibility */}
        <div className="relative z-10 mt-12 flex justify-start">
          <div className="max-w-xl bg-brand-orange/92 px-6 py-5 backdrop-blur-md md:px-8 md:py-6">
            <p className="text-left text-base font-medium leading-relaxed text-white md:text-lg md:leading-7">
              {service.description}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-white px-4 pt-24 pb-32 text-[#212121] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Centered Section Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#212121] md:text-7xl">
              Creative advertising built around visibility, connection and
              growth.
            </h2>
          </ScrollReveal>

          {/* Centered CTA Button */}
          <div className="mt-8 flex justify-center">
            <ScrollReveal direction="up" delay={0.2}>
              <Button
                href="/services"
                variant="black"
                className="gap-4 px-6 py-5"
              >
                Discover All Our Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollReveal>
          </div>
        </div>

        {/* Stacking Track: full scroll height allowing cards to stick and pin on top of each other */}
        <div className="relative mt-12">
          {services.map((service, index) => {
            const targetScale = 1 - (services.length - index) * 0.04;
            return (
              <Card
                key={service.title}
                service={service}
                index={index}
                progress={scrollYProgress}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
