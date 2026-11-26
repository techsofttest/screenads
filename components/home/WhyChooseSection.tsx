"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const advantages = [
  {
    title: "Creative Approach",
    description:
      "Fresh ideas and engaging advertising concepts tailored to your brand.",
  },
  {
    title: "Multiple Advertising Platforms",
    description:
      "A combination of traditional, transit and digital advertising solutions.",
  },
  {
    title: "Brand-Focused Strategies",
    description:
      "Marketing solutions designed around your business objectives.",
  },
  {
    title: "Audience Connectivity",
    description:
      "Advertising opportunities that help your brand reach potential customers.",
  },
  {
    title: "Professional Execution",
    description:
      "Attention to creativity, presentation and consistent brand communication.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-white text-[#212121]">
      <div className="bg-brand-tint px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" className="h-full">
                <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[540px]">
                  <Image
                    src="/content/strategy.jpg"
                    alt="Creative advertising strategy"
                    fill
                    className="object-contain object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7">
              {/* Heading */}
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#212121] sm:text-4xl sm:leading-[0.98] md:text-5xl lg:text-6xl xl:text-7xl">
                  Creative Ideas.
                  <br />
                  Strategic Execution.
                  <br />
                  Meaningful Visibility.
                </h2>
              </ScrollReveal>

              {/* Advantages List */}
              <div className="mt-7 sm:mt-9 lg:mt-12">
                {advantages.map((advantage, index) => (
                  <ScrollReveal
                    key={advantage.title}
                    direction="up"
                    delay={0.1 + index * 0.08}
                  >
                    <div className="flex flex-col gap-1.5 border-t border-[#212121]/20 py-4 sm:gap-2 sm:py-5 md:py-6">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#212121] sm:text-2xl">
                        {advantage.title}
                      </h3>

                      <p className="text-sm font-normal leading-6 text-[#212121]/85 sm:text-base sm:leading-7">
                        {advantage.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
