import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-white/10 shadow-sm">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-16">
        {/* Left Navigation Links & Request Quote CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="flex items-center gap-2 sm:gap-3">
            <a
              href="#services"
              className="rounded-full border border-white/70 px-3 sm:px-4 py-1.5 text-xs font-semibold tracking-wide text-white transition hover:border-white hover:bg-white hover:text-red-600 sm:text-sm"
            >
              Services
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/70 px-3 sm:px-4 py-1.5 text-xs font-semibold tracking-wide text-white transition hover:border-white hover:bg-white hover:text-red-600 sm:text-sm"
            >
              Contact Us
            </a>
          </nav>

          <Button
            href="#contact"
            variant="white"
            className="!px-3 sm:!px-5 !py-1.5 sm:!py-2 text-xs md:text-sm"
          >
            <span>Request a Quote</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Button>
        </div>

        {/* Right-Aligned Logo with Subtle Zoom & Glow Effect */}
        <div className="relative flex items-center justify-end">
          <a
            href="#top"
            className="group relative flex items-center justify-center py-1 will-change-transform"
            aria-label="Screen Ads Home"
          >
            {/* Logo Image with subtle breathing zoom and glow on itself */}
            <Image
              src="/logo/logo-min.png"
              alt="Screen Ads"
              width={160}
              height={137}
              className="h-9 sm:h-11 md:h-12 w-auto object-contain animate-logo-glow transition-transform duration-300"
              priority
            />
          </a>
        </div>
      </div>
    </header>
  );
}


