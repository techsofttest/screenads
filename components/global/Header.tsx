import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 border-b border-white/10 shadow-sm">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-16">
        {/* Left Links with High Contrast */}
        <nav className="flex flex-1 items-center gap-3">
          <a
            href="#services"
            className="rounded-full border border-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-white transition hover:border-white hover:bg-white hover:text-red-600 sm:text-sm"
          >
            Services
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-white transition hover:border-white hover:bg-white hover:text-red-600 sm:text-sm"
          >
            Contact Us
          </a>
        </nav>

        {/* Center Logo Banner Shape Overlapping the Header */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <a
            href="#top"
            className="relative z-20 flex items-center justify-center bg-gray-900 px-6 pb-6 pt-2 transition-transform duration-300 hover:translate-y-0.5 md:px-4 md:pb-4 [clip-path:polygon(0_0,100%_0,100%_calc(100%-14px),50%_100%,0_calc(100%-14px))]"
          >
            <Image
              src="/logo/logo.png"
              alt="Screen Ads"
              width={320}
              height={180}
              className="h-20 w-auto object-contain md:h-28"
              priority
            />
          </a>
        </div>

        {/* Right CTA Edge */}
        <div className="flex flex-1 justify-end">
          <Button
            href="#contact"
            variant="white"
            className="!px-5 !py-2.5 text-xs md:text-sm"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Button>
        </div>
      </div>
    </header>
  );
}

