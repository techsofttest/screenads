"use client";

import Image from "next/image";
import { ArrowUpRight, BusFront } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const transitImage =
  "/banner/b3.png";

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
    <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-36 text-[#212121]">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" distance={40}>
          <div className="relative min-h-[42rem] overflow-hidden bg-[#212121] text-white">
            <Image
              src={transitImage}
              alt="Digital transit advertising"
              fill
              className="object-cover opacity-75"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="relative flex min-h-[42rem] flex-col justify-between p-7 md:p-12 lg:p-16">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-white">
                    Our Unique Advantage
                  </p>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#212121]">
                  <BusFront className="h-7 w-7" />
                </div>
              </div>

              <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <h2 className="font-display text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-white md:text-5xl lg:text-6xl">
                    Your Brand on the Move.
                    <br />
                    Your Message in Every Journey.
                  </h2>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-base font-normal leading-7 text-white md:text-lg md:leading-8">
                    Introducing an innovative way to advertise – Digital Bus
                    Screen Advertising in Private Fair Stage Buses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 py-16 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: commuter image replacing previous text */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="relative aspect-[621/768] w-full overflow-hidden bg-black/5 lg:aspect-auto lg:h-full lg:min-h-[500px]">
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

          <div className="space-y-7 lg:col-span-7">
            {/* Top Heading: "Take your business message..." replacing previous description */}
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#212121] md:text-5xl">
                Take your business message beyond traditional advertising spaces
                and bring it directly into the daily journeys of commuters.
              </h3>
            </ScrollReveal>

            <div>
              {transitFeatures.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  delay={0.1 + index * 0.07}
                >
                  <div className="flex flex-col gap-1.5 border-t border-[#212121]/20 py-5">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#212121]">
                      {item.title}
                    </h3>

                    <p className="text-base font-normal leading-7 text-[#212121]/85">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.25}>
              <p className="font-display text-3xl font-semibold leading-tight text-[#212121]">
                Make every journey an opportunity for your brand.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <Button
                href="#contact"
                variant="black"
                className="gap-4 px-6 py-5"
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

