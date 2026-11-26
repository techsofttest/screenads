import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Phone,
  MessageCircle,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-tint">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#212121]/60">
              Contact Us
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Have a Brand to Promote?
              <span className="block text-[#212121]/70">Let's Talk!</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#212121]/80">
              Every successful campaign begins with a conversation. Whether you
              are looking for branding solutions, digital bus screen
              advertising, digital marketing or social media promotions, we
              would love to hear about your business requirements.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-[#212121]/70">
              Get in touch with Screen Ads, and let's explore how we can help
              your brand reach more people.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#212121]/60">
            Let's Connect
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Contact Information
          </h2>

          <p className="mt-5 text-base leading-8 text-[#212121]/65">
            Have questions or planning your next campaign? Reach out to our
            team. We would be happy to discuss your requirements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* OFFICE ADDRESS */}
          <div className="rounded-3xl bg-brand-tint p-8 md:p-10">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#212121]">
              <MapPin size={27} />
            </div>

            <h3 className="mb-4 text-xl font-semibold">Our Office Address</h3>

            <p className="max-w-md text-base leading-8 text-[#212121]/70">
              XVII/279-A8, Sreebhadra Building, 130 Junction, Naz Road,
              Muvattupuzha, Ernakulam, Kerala – 686661
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=XVII%2F279-A8%2C+Sreebhadra+Building%2C+130+Junction%2C+Naz+Road%2C+Muvattupuzha%2C+Ernakulam%2C+Kerala+686661"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#212121] transition hover:gap-3"
            >
              Get Directions
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* PHONE NUMBERS */}
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-tint text-[#212121]">
              <Phone size={27} />
            </div>

            <h3 className="mb-4 text-xl font-semibold">Call Us</h3>

            <p className="mb-6 text-base leading-7 text-[#212121]/65">
              Have a project in mind? Give us a call and let's discuss how we
              can help.
            </p>

            <div className="space-y-4">
              <a
                href="tel:7736540015"
                className="flex items-center gap-3 text-lg font-semibold transition hover:text-[#212121]/60"
              >
                <Phone size={17} />
                7736540015
              </a>

              <a
                href="tel:9961246916"
                className="flex items-center gap-3 text-lg font-semibold transition hover:text-[#212121]/60"
              >
                <Phone size={17} />
                9961246916
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="bg-[#212121] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                Company
              </p>

              <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                SCREEN ADS
              </h2>

              <p className="mt-5 text-xl text-white/70">
                Advertising & Digital Marketing Agency
              </p>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-12">
              <Building2 size={38} className="mb-6 text-white" />

              <p className="text-lg leading-8 text-white/75">
                We help brands connect with more people through creative
                advertising, digital bus screen campaigns, digital marketing and
                social media promotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#212121]/60">
              Let's Connect
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Get in Touch –
              <span className="block text-[#212121]/70">
                Let's Discuss Your Requirements
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-[#212121]/70">
              Looking for an effective way to advertise your business?
            </p>

            <p className="mt-4 text-base leading-8 text-[#212121]/65">
              Tell us a little about your requirements. Our team will be happy
              to discuss suitable advertising and marketing solutions for your
              brand.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-[#212121]">
                <MessageCircle size={23} />
              </div>

              <div>
                <p className="font-semibold">Let's start a conversation</p>
                <p className="mt-1 text-sm text-[#212121]/60">
                  We would love to hear from you.
                </p>
              </div>
            </div>
          </div>

          {/* FORM UI */}
          <div className="rounded-3xl border border-[#212121]/15 bg-white p-8 shadow-[0_10px_50px_rgba(0,0,0,0.06)] md:p-10">
            <h3 className="mb-2 text-2xl font-semibold">
              Tell Us About Your Project
            </h3>

            <p className="mb-8 text-sm leading-6 text-[#212121]/60">
              Share your details and requirements with us.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#212121]/20 bg-brand-tint px-4 py-3.5 text-sm outline-none transition focus:border-[#212121] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-[#212121]/20 bg-brand-tint px-4 py-3.5 text-sm outline-none transition focus:border-[#212121] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#212121]/20 bg-brand-tint px-4 py-3.5 text-sm outline-none transition focus:border-[#212121] focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium"
                >
                  Service Interested In
                </label>

                <select
                  id="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-[#212121]/20 bg-brand-tint px-4 py-3.5 text-sm outline-none transition focus:border-[#212121] focus:bg-white"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="branding">Branding Solutions</option>
                  <option value="bus-advertising">
                    Digital Bus Screen Advertising
                  </option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="social-media">Social Media Promotions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your Requirements
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us a little about your project..."
                  className="w-full resize-none rounded-xl border border-[#212121]/20 bg-brand-tint px-4 py-3.5 text-sm outline-none transition focus:border-[#212121] focus:bg-white"
                />
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#212121] px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-orange hover:text-[#212121]"
              >
                Send Enquiry
                <ArrowUpRight size={18} />
              </button>

              <p className="text-center text-xs leading-5 text-[#212121]/50">
                We look forward to discussing your advertising requirements.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
