"use client";

import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const industries = [
  "Educational Institutions",
  "Retail & Jewellery Businesses",
  "Healthcare & Hospitals",
  "Real Estate & Construction",
  "Hospitality & Tourism",
  "Automobile Businesses",
  "Shopping & Lifestyle Brands",
  "Local Businesses & Startups",
];

export function IndustriesSection() {
  return (
    <section className="bg-transparent px-4 py-24 sm:px-6 lg:px-8 lg:py-36 text-[#212121]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <ScrollReveal direction="down">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]">
                Industries We Can Help
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-[#212121] md:text-7xl">
                We welcome businesses and organisations looking to strengthen
                their visibility and market presence.
              </h2>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <ScrollReveal
              key={industry}
              direction="up"
              delay={0.06 * index}
              duration={0.6}
            >
              <div
                className="group relative min-h-56 overflow-hidden bg-white/70 backdrop-blur-md p-6 text-[#212121] transition duration-300 hover:-translate-y-1 hover:bg-[#212121] hover:text-white"
              >
                <div className="flex h-full flex-col justify-between">
                  <span className="font-display text-sm font-bold text-[#212121] transition group-hover:text-white">
                    0{index + 1}
                  </span>

                  <div className="flex items-end justify-between gap-5">
                    <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em]">
                      {industry}
                    </h3>

                    <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

