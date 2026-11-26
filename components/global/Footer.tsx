"use client";

import { ArrowUpRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { WavyBrandBanner } from "@/components/ui/WavyBrandBanner";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full overflow-hidden bg-white px-4 pt-16 pb-8 text-[#212121] sm:px-6 sm:pt-20 sm:pb-10 md:pt-24 lg:px-8 lg:pt-32 lg:pb-14"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Contact Heading */}
        <div className="grid grid-cols-1 items-end gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-8">
            <ScrollReveal direction="down">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]/60 sm:text-sm">
                Contact Us
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#212121] min-[400px]:text-5xl sm:mt-7 sm:text-5xl sm:leading-[0.95] md:text-6xl lg:text-6xl xl:text-6xl">
                Ready to Put Your Brand in the Spotlight?
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-7 sm:mt-9">
                <Button
                  href="mailto:"
                  variant="primary"
                  className="gap-3 px-5 py-3 text-sm sm:px-6 sm:py-3.5"
                >
                  Contact Screen Ads
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Description */}
          <div className="min-w-0 lg:col-span-4">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="max-w-xl text-base font-normal leading-7 text-[#212121]/80 sm:text-lg sm:leading-8 lg:ml-auto">
                Let's create advertising that gets noticed, builds recognition
                and brings your brand closer to its audience.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Brand Box */}
        <div className="mt-14 w-full sm:mt-16 md:mt-20 lg:mt-24">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="w-full">
              <WavyBrandBanner text="Screen Ads" />
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-black/10 pt-7 sm:mt-12 sm:pt-8 lg:mt-14">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex flex-col items-center justify-between gap-7 lg:flex-row lg:gap-6">
              {/* Social Icons */}
              <div className="flex items-center justify-center gap-6 sm:gap-7">
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

              {/* Navigation Links */}
              <nav className="flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs sm:gap-x-7 sm:text-sm lg:gap-x-6">
                <a
                  href="/contact"
                  className="font-medium text-[#212121]/80 transition-colors hover:text-black"
                >
                  Contact
                </a>

                <a
                  href="/services"
                  className="font-medium text-[#212121]/80 transition-colors hover:text-black"
                >
                  Services
                </a>

                <a
                  href="/terms"
                  className="font-medium text-[#212121]/80 transition-colors hover:text-black"
                >
                  Terms and Services
                </a>

                <a
                  href="/privacy"
                  className="font-medium text-[#212121]/80 transition-colors hover:text-black"
                >
                  Privacy Policy
                </a>
              </nav>

              {/* Copyright */}
              <div className="max-w-full text-center text-xs leading-relaxed text-[#212121]/60 lg:text-right">
                <p>All Rights Reserved, All Wrongs Reversed. Screen Ads</p>

                <p className="mt-1">
                  <a
                    href="https://www.techsoftweb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal underline-offset-4 transition-colors hover:text-black hover:underline"
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
