"use client";

import Image from "next/image";
import { ArrowUpRight, BusFront } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const transitImage = "/banner/b3.png";

const transitFeatures = [
  {
    title: "Daily Commuter Reach",
    description: "Reach passengers during their daily journeys.",
  },
  {
    title: "Digital Screen Impact",
    description: "Present your advertisements through digital screens.",
  },
  {
    title: "Beyond Conventional Media",
    description: "Make your brand visible beyond conventional media.",
  },
  {
    title: "Versatile Campaign Promotion",
    description: "Promote products, services, offers and events.",
  },
  {
    title: "Repeated Brand Exposure",
    description: "Create repeated brand exposure through regular bus journeys.",
  },
];

export function TransitSection() {
  return (
    <section className="bg-white px-4 py-14 text-[#212121] sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Transit Advertising Banner */}
        <ScrollReveal direction="up" distance={40}>
          <div className="relative min-h-[36rem] overflow-hidden bg-[#212121] text-white sm:min-h-[38rem] lg:min-h-[42rem]">
            <Image
              src={transitImage}
              alt="Digital transit advertising"
              fill
              className="object-cover opacity-75"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative flex min-h-[36rem] flex-col justify-between p-5 sm:min-h-[38rem] sm:p-8 md:p-12 lg:min-h-[42rem] lg:p-16">
              {/* Banner Top */}
              <div className="flex items-start justify-between gap-4 sm:gap-6">
                <p className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs sm:tracking-widest">
                  Our Unique Advantage
                </p>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#212121] sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <BusFront className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </div>
              </div>

              {/* Banner Content */}
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                    Your Brand on the Move.
                    <br />
                    Your Message in Every Journey.
                  </h2>
                </div>

                <div className="lg:col-span-4">
                  <p className="max-w-lg text-sm font-normal leading-6 text-white sm:text-base sm:leading-7 md:text-lg md:leading-8">
                    Introducing an innovative way to advertise – Digital Bus
                    Screen Advertising in Private Fair Stage Buses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Transit Details */}
        <div className="grid gap-8 py-10 sm:gap-10 sm:py-14 md:py-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: Commuter Image */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden bg-black/5 sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[500px]">
                <Image
                  src="/content/commuterbus.png"
                  alt="Daily journeys of commuters"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 sm:space-y-7 lg:col-span-7">
            {/* Heading */}
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#212121] sm:text-3xl md:text-4xl lg:text-5xl">
                Take your business message beyond traditional advertising spaces
                and bring it directly into the daily journeys of commuters.
              </h3>
            </ScrollReveal>

            {/* Features */}
            <div>
              {transitFeatures.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  delay={0.1 + index * 0.07}
                >
                  <div className="flex flex-col gap-1.5 border-t border-[#212121]/20 py-4 sm:py-5">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[#212121] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="text-sm font-normal leading-6 text-[#212121]/85 sm:text-base sm:leading-7">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Closing Statement */}
            <ScrollReveal direction="up" delay={0.25}>
              <p className="font-display text-2xl font-semibold leading-tight text-[#212121] sm:text-3xl">
                Make every journey an opportunity for your brand.
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal direction="up" delay={0.3}>
              <Button
                href="#contact"
                variant="black"
                className="gap-3 px-5 py-4 text-sm sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
              >
                Advertise on Bus Screens
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
