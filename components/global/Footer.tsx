"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { WavyBrandBanner } from "@/components/ui/WavyBrandBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  return (
    <footer id="contact" className="bg-white px-4 pt-24 pb-12 text-[#212121] sm:px-6 lg:px-8 lg:pt-36 lg:pb-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <ScrollReveal direction="down">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]/60">
                Contact Us
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-7 font-display text-6xl font-semibold leading-[0.88] tracking-[-0.055em] text-[#212121] md:text-5xl lg:text-6xl">
                Ready to Put Your Brand in the Spotlight?
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-8">
                <Button
                  href="mailto:"
                  variant="primary"
                  className="gap-3 px-6 py-3.5 text-sm"
                >
                  Contact Screen Ads
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-4">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg font-normal leading-8 text-[#212121]/80">
                Let's create advertising that gets noticed, builds recognition
                and brings your brand closer to its audience.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Brand Box with Interactive Wavy Letters */}
        <div className="mt-20">
          <ScrollReveal direction="up" delay={0.15}>
            <WavyBrandBanner text="Screen Ads" />
          </ScrollReveal>
        </div>

        {/* Centered Brand Logo */}
        {/* <div className="mt-16 flex justify-center">
          <ScrollReveal direction="up" delay={0.2}>
            <Image
              src="/logo/logo-v3.png"
              alt="Screen Ads Logo"
              width={180}
              height={60}
              className="h-auto w-36 sm:w-44 md:w-52 object-contain"
            />
          </ScrollReveal>
        </div> */}

        {/* Bottom Bar matching reference image design */}
        <div className="mt-12 border-t border-black/10 pt-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* Left Social Icons */}
              <div className="flex items-center gap-5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[#212121]/70 transition-colors hover:text-black"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-[#212121]/70 transition-colors hover:text-black"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-[#212121]/70 transition-colors hover:text-black"
                >
                  <FaYoutube className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-[#212121]/70 transition-colors hover:text-black"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
              </div>

              {/* Center Navigation Links */}
              <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:gap-8 sm:text-sm">
                <a
                  href="#contact"
                  className="font-medium text-[#212121]/80 transition-colors hover:text-black"
                >
                  Contact
                </a>
                <a
                  href="#services"
                  className="font-medium text-[#212121]/80 transition-colors hover:text-black"
                >
                  Services
                </a>
              </nav>

              {/* Right Copyright & Tagline */}
              <div className="text-center text-xs leading-relaxed text-[#212121]/60 md:text-right">
                <p className="mt-1">All Rights Reserved, All Wrongs Reversed. Screen Ads</p>
                <p className="mt-1">
                  <a
                    href="https://www.techsoftweb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal transition-colors hover:text-black hover:underline underline-offset-4"
                  >
                    Web Design Company in Kochi Techsoft
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
