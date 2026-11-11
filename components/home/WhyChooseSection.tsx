"use client";

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
    <section className="bg-transparent px-4 py-24 text-[#212121] sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ScrollReveal direction="down">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]">
                Why Choose Screen Ads?
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-7 font-display text-5xl font-semibold leading-[0.92] tracking-[-0.045em] text-[#212121] md:text-7xl">
                Creative Ideas.
                <br />
                Strategic Execution.
                <br />
                Meaningful Visibility.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.15}>
              <p className="max-w-3xl text-lg font-normal leading-8 text-[#212121]">
                We understand that advertising is more than just putting a
                message in front of people. It is about reaching the right
                audience with the right message through the right medium.
              </p>
            </ScrollReveal>

            <div className="mt-14">
              {advantages.map((advantage, index) => (
                <ScrollReveal
                  key={advantage.title}
                  direction="up"
                  delay={0.1 + index * 0.08}
                >
                  <div
                    className="group grid gap-5 border-t border-[#212121]/20 py-7 md:grid-cols-12"
                  >
                    <div className="font-display text-sm font-bold text-[#212121] md:col-span-1">
                      0{index + 1}
                    </div>

                    <div className="md:col-span-4">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#212121]">
                        {advantage.title}
                      </h3>
                    </div>

                    <div className="md:col-span-7">
                      <p className="text-base font-normal leading-7 text-[#212121]">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

