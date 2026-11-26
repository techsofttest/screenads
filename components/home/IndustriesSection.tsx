"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface IndustryItem {
  name: string;
  image: string;
}

const industries: IndustryItem[] = [
  {
    name: "Educational Institutions",
    image: "/businesses/educational.jpg",
  },
  {
    name: "Retail & Jewellery Businesses",
    image: "/businesses/jewelry.jpg",
  },
  {
    name: "Healthcare & Hospitals",
    image: "/businesses/hospital.jpg",
  },
  {
    name: "Real Estate & Construction",
    image: "/businesses/real-estate.jpg",
  },
  {
    name: "Hospitality & Tourism",
    image: "/businesses/hospitality-tourism.jpg",
  },
  {
    name: "Automobile Businesses",
    image: "/businesses/automobile.jpg",
  },
  {
    name: "Shopping & Lifestyle Brands",
    image: "/businesses/shopping.jpg",
  },
  {
    name: "Local Businesses & Startups",
    image: "/businesses/local-business.jpg",
  },
];

export function IndustriesSection() {
  return (
    <section className="bg-white text-[#212121]">
      <div className="bg-brand-tint px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          {/* Image and Heading */}
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left Image */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="up">
                <div className="relative mx-auto aspect-[5/4] w-full max-w-xl overflow-hidden bg-black/5 sm:aspect-[5/3] lg:aspect-[5/6] lg:max-h-[520px]">
                  <Image
                    src="/content/industries.jpg"
                    alt="Businesses and organisations collaborating"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 35vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Heading */}
            <div className="lg:col-span-8">
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#212121] sm:text-4xl sm:leading-[0.98] md:text-5xl lg:text-6xl xl:text-7xl">
                  We welcome businesses and organisations looking to strengthen
                  their visibility and market presence.
                </h2>
              </ScrollReveal>
            </div>
          </div>

          {/* Industry Cards */}
          <div className="mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 sm:mt-14 md:gap-4 lg:mt-20 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <ScrollReveal
                key={industry.name}
                direction="up"
                delay={0.06 * index}
                duration={0.6}
              >
                <div className="group relative min-h-[220px] overflow-hidden bg-[#161616] p-5 text-white shadow-sm transition duration-300 hover:-translate-y-1 sm:min-h-[240px] sm:p-6 md:min-h-[260px] lg:min-h-[280px]">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/55 transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/75 group-hover:to-black/60" />
                  </div>

                  {/* Foreground Content */}
                  <div className="relative z-10 flex min-h-[180px] flex-col justify-between sm:min-h-[190px] md:min-h-[210px] lg:min-h-[230px]">
                    <span className="font-display text-sm font-bold text-white/85 transition group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex items-end justify-between gap-3 pt-12">
                      <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-2xl">
                        {industry.name}
                      </h3>

                      <ArrowUpRight className="mb-1 h-5 w-5 shrink-0 text-white/90 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
