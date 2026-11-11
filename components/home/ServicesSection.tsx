"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, BusFront, Megaphone, Target, Users } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Branding & Advertising",
    description:
      "Build a powerful brand identity with creative concepts, professional designs and strategic advertising solutions that make your business stand out.",
    image: "/services/branding.png",
    accent: "bg-[#212121] text-white",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "Transit Advertising",
    description:
      "Take your brand on the move with digital bus screen advertisements in private fair stage buses. Connect with audiences through an innovative, on-the-go advertising platform.",
    image: "/services/Transit Advertising.png",
    accent: "bg-[#212121] text-white",
    icon: BusFront,
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Expand your online presence through targeted digital campaigns, strategic promotions and effective online advertising solutions.",
    image: "/services/digital-marketting.png",
    accent: "bg-[#212121] text-white",
    icon: Target,
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Turn social media into a powerful business tool with engaging content, creative campaigns and consistent brand communication.",
    image: "/services/socialmedia-marketting.png",
    accent: "bg-[#212121] text-white",
    icon: Users,
  },
];

interface CardProps {
  service: ServiceItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({
  service,
  index,
  total,
  progress,
  range,
  targetScale,
}: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

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
        className="relative flex min-h-[480px] w-full flex-col justify-between overflow-hidden bg-[#161616] p-8 text-white origin-top md:min-h-[540px] md:p-14 lg:p-16"
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
          {/* Subtle dark overlay for text contrast without strong gradient */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Top Left: Title & metadata */}
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-semibold tracking-wider text-white/80">
              {service.number}
            </span>
            <div className="h-px w-8 bg-white/40" />
            <Icon className="h-5 w-5 text-white/80" />
          </div>

          <h3 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
            {service.title}
          </h3>
        </div>

        {/* Bottom Right: Description */}
        <div className="relative z-10 mt-12 flex justify-end">
          <p className="max-w-xl text-right text-base font-normal leading-relaxed text-white/95 md:text-lg md:leading-8">
            {service.description}
          </p>
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
      className="relative bg-transparent px-4 pt-24 pb-32 text-[#212121] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ScrollReveal direction="down">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]">
                Our Core Services
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#212121] md:text-7xl">
                Creative advertising built around visibility, connection and
                growth.
              </h2>
            </ScrollReveal>

            {/* Button below header description */}
            <div className="mt-8 flex justify-start">
              <ScrollReveal direction="up" delay={0.2}>
                <Button
                  href="#contact"
                  variant="black"
                  className="gap-4 px-6 py-5"
                >
                  Discover All Our Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Stacking Track: full scroll height allowing cards to stick and pin on top of each other */}
        <div className="relative mt-12">
          {services.map((service, index) => {
            const targetScale = 1 - (services.length - index) * 0.04;
            return (
              <Card
                key={service.number}
                service={service}
                index={index}
                total={services.length}
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
