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
      <div className="bg-brand-tint px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Vertical Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" className="h-full">
                <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[540px]">
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
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#212121] sm:text-5xl md:text-6xl xl:text-7xl">
                  Creative Ideas.
                  <br />
                  Strategic Execution.
                  <br />
                  Meaningful Visibility.
                </h2>
              </ScrollReveal>

              <div className="mt-10 lg:mt-12">
                {advantages.map((advantage, index) => (
                  <ScrollReveal
                    key={advantage.title}
                    direction="up"
                    delay={0.1 + index * 0.08}
                  >
                    <div className="flex flex-col gap-2 border-t border-[#212121]/20 py-6">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#212121]">
                        {advantage.title}
                      </h3>

                      <p className="text-base font-normal leading-7 text-[#212121]/85">
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

