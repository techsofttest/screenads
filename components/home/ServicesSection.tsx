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

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex min-h-0 items-start justify-center pt-2 sm:min-h-[85svh] sm:items-center sm:pt-0 lg:h-screen lg:min-h-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{
          scale,
          top: `calc(8vh + ${index * 24}px)`,
        }}
        className="relative flex min-h-[440px] w-full origin-top flex-col justify-between overflow-hidden bg-[#161616] p-5 text-white sm:min-h-[520px] sm:p-8 md:min-h-[560px] md:p-12 lg:p-16"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center transition duration-700 hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/15 to-black/25" />
        </div>

        {/* Service Title */}
        <div className="relative z-10 max-w-3xl">
          <h3 className="font-display text-3xl font-bold leading-[0.98] tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] min-[480px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {service.title}
          </h3>
        </div>

        {/* Service Description */}
        <div className="relative z-10 mt-10 flex justify-start sm:mt-12">
          <div className="w-full max-w-xl bg-brand-orange/92 px-5 py-5 backdrop-blur-md sm:px-7 sm:py-6 md:px-8">
            <p className="text-left text-sm font-medium leading-relaxed text-white sm:text-base md:text-lg md:leading-7">
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
      className="relative bg-white px-4 pt-6 pb-20 text-[#212121] sm:px-6 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 lg:px-8 lg:pt-28 lg:pb-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#212121] sm:text-4xl sm:leading-[0.98] md:text-5xl lg:text-6xl xl:text-7xl">
              Creative advertising built around visibility, connection and
              growth.
            </h2>
          </ScrollReveal>

          {/* CTA Button */}
          <div className="mt-4 flex justify-center sm:mt-6">
            <ScrollReveal direction="up" delay={0.2}>
              <Button
                href="/services"
                variant="black"
                className="gap-3 px-5 py-2 text-sm sm:gap-4 sm:px-6 sm:py-2 sm:text-base"
              >
                Discover All Our Services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollReveal>
          </div>
        </div>

        {/* Stacking Service Cards */}
        <div className="relative mt-0">
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
