"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function IntroSection() {
  return (
    <section id="intro" className="bg-white text-[#212121]">
      <div className="bg-brand-tint px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            {/* Left Vertical Image */}
            <div className="lg:col-span-4">
              <ScrollReveal direction="up" className="h-full">
                <div className="relative aspect-[2/3] max-h-[560px] w-full overflow-hidden bg-black/5 lg:aspect-auto lg:h-full lg:max-h-none lg:min-h-[560px]">
                  <Image
                    src="/content/intro.jpg"
                    alt="Screen Ads creative advertising"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8">
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="font-display max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#212121] sm:text-5xl md:text-6xl xl:text-7xl">
                  We Make Advertising Work for Your Brand.
                </h2>
              </ScrollReveal>

              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-12 lg:gap-10">
                <ScrollReveal direction="up" delay={0.2}>
                  <div className="space-y-7 text-lg font-normal leading-8 text-[#212121]">
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
                  <div className="space-y-7 text-lg font-normal leading-8 text-[#212121]">
                    <p>
                      Combining creative thinking, strategic planning and modern
                      advertising platforms, we develop marketing solutions that
                      make brands more visible and memorable.
                    </p>

                    <p>
                      Whether you are launching a new business, strengthening an
                      existing brand or looking to reach more customers, Screen
                      Ads offers the right mix of creativity and communication to
                      support your goals.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="up" delay={0.35}>
                <div className="mt-10 bg-white/70 p-8 text-[#212121] backdrop-blur-md md:p-10 lg:mt-12 xl:p-12">
                  <p className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#212121] md:text-4xl xl:text-5xl">
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

