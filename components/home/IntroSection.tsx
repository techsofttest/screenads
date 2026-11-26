"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function IntroSection() {
  return (
    <section id="intro" className="bg-white text-[#212121]">
      <div className="bg-brand-tint px-4 pt-12 pb-6 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-28 xl:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12 xl:gap-16">
            {/* Left Image */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="up" className="h-full">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden bg-black/5 sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[560px]">
                  <Image
                    src="/content/intro.jpg"
                    alt="Screen Ads creative advertising"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 35vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8">
              {/* Heading */}
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="font-display max-w-5xl text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#212121] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  We Make Advertising Work for Your Brand.
                </h2>
              </ScrollReveal>

              {/* Description Columns */}
              <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 lg:mt-12 lg:gap-10">
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="space-y-5 text-base font-normal leading-7 text-[#212121] sm:space-y-7 sm:text-lg sm:leading-8">
                    <p>
                      At Screen Ads, we believe every brand has a story worth
                      telling and every business deserves to be noticed.
                    </p>

                    <p>
                      We are an advertising and digital marketing agency based
                      in Muvattupuzha, Kerala, committed to helping businesses
                      communicate effectively with their target audience.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                  <div className="space-y-5 text-base font-normal leading-7 text-[#212121] sm:space-y-7 sm:text-lg sm:leading-8">
                    <p>
                      Combining creative thinking, strategic planning and modern
                      advertising platforms, we develop marketing solutions that
                      make brands more visible and memorable.
                    </p>

                    <p>
                      Whether you are launching a new business, strengthening an
                      existing brand or looking to reach more customers, Screen
                      Ads offers the right mix of creativity and communication
                      to support your goals.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Highlighted Closing Statement */}
              <ScrollReveal direction="up" delay={0.35}>
                <div className="mt-8 bg-white/70 p-5 text-[#212121] backdrop-blur-md sm:mt-10 sm:p-7 md:p-10 lg:mt-12 xl:p-12">
                  <p className="font-display text-xl font-semibold leading-tight tracking-[-0.03em] text-[#212121] sm:text-2xl md:text-3xl xl:text-5xl">
                    We don't just advertise. We create opportunities for brands
                    to connect, engage and grow.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
