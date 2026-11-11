"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function IntroSection() {
  return (
    <section id="intro" className="bg-transparent px-4 py-24 sm:px-6 lg:px-8 lg:py-36 text-[#212121]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <ScrollReveal direction="down">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]">
                Introduction
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-9">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-display max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#212121] md:text-7xl">
                We Make Advertising Work for Your Brand.
              </h2>
            </ScrollReveal>

            <div className="mt-14 grid gap-10 md:grid-cols-2">
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
              <div className="mt-14 bg-white/70 backdrop-blur-md p-8 text-[#212121] md:p-12">
                <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl text-[#212121]">
                  We don't just advertise. We create opportunities for brands
                  to connect, engage and grow.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

