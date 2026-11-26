import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Lightbulb,
  Megaphone,
  TrendingUp,
  BusFront,
  Palette,
  Share2,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "branding-advertising",
    number: "1",
    title: "Branding & Advertising",
    tagline: "Create a Brand That People Recognise and Remember.",
    description:
      "A strong brand is the foundation of successful business communication.",
    details:
      "We help businesses develop a distinctive identity and communicate their message through creative and professional advertising solutions. From the initial concept to the final creative, our focus is on making your brand visually appealing, consistent and memorable.",
    image: "/services/branding.png",
    icon: Palette,
    features: [
      "Brand identity development",
      "Logo and visual identity concepts",
      "Advertising campaign concepts",
      "Creative poster and banner designs",
      "Promotional advertisements",
      "Marketing communication materials",
      "Business and product promotions",
      "Festival and seasonal advertising campaigns",
    ],
    goal: "To create a distinctive brand presence that helps your business stand apart from the competition.",
  },
  {
    id: "transit-advertising",
    number: "2",
    title: "Transit Advertising – Digital Bus Screen Advertising",
    tagline: "Take Your Brand on the Move!",
    description:
      "Advertising doesn't have to remain confined to billboards, newspapers or social media.",
    details:
      "With Screen Ads' Digital Bus Screen Advertising, your brand gets an opportunity to reach audiences through digital screens installed inside private fair stage buses. As buses travel through their regular routes, your advertisement becomes part of the passenger journey, creating an innovative medium for brand communication.",
    image: "/services/Transit-Advertising.png",
    icon: BusFront,
    features: [
      "On-the-Go Visibility: Take your brand message across different locations through bus routes.",
      "Passenger Engagement: Showcase your advertisements to passengers during their journey.",
      "Digital Presentation: Present your brand through dynamic digital screen content.",
      "Promotional Flexibility: Advertise products, services, special offers and upcoming events.",
      "Local Brand Exposure: Connect with audiences in the areas covered by participating buses.",
    ],
    idealFor: [
      "Educational institutions and admission campaigns",
      "Hospitals and healthcare services",
      "Jewellery and retail outlets",
      "Real estate promotions",
      "Shopping centres and supermarkets",
      "Restaurants and hospitality businesses",
      "Local events and product launches",
    ],
    closingLine: "Your Advertisement. Their Journey. Your Brand's Opportunity.",
    goal: "To provide businesses with an innovative opportunity for local brand exposure through digital bus screens.",
  },
  {
    id: "digital-marketing",
    number: "3",
    title: "Digital Marketing",
    tagline: "Make Your Business Visible in the Digital World.",
    description: "Your customers are online. Your brand should be there too.",
    details:
      "Our digital marketing solutions help businesses strengthen their online presence, promote their products and services, and reach potential customers through effective digital platforms. We focus on creating campaigns that align with your business goals and target audience.",
    image: "/services/digital-marketting.png",
    icon: TrendingUp,
    features: [
      "Online advertising campaign planning",
      "Paid digital advertising",
      "Audience targeting and campaign strategy",
      "Lead generation campaigns",
      "Promotional campaign management",
      "Online brand awareness campaigns",
      "Digital campaign performance monitoring",
    ],
    goal: "To help your business reach the right audience and make your online presence more effective.",
  },
  {
    id: "social-media-marketing",
    number: "4",
    title: "Social Media Marketing",
    tagline: "Turn Social Media into a Powerful Business Platform.",
    description:
      "Social media is more than a communication channel. It is an opportunity to build relationships, showcase your brand and attract potential customers.",
    details:
      "At Screen Ads, we help businesses create an engaging social media presence through creative content and strategic marketing.",
    image: "/services/socialmedia-marketting.png",
    icon: Share2,
    features: [
      "Facebook and Instagram marketing",
      "Social media page management",
      "Creative social media post designs",
      "Promotional graphics and campaign creatives",
      "Social media advertising campaigns",
      "Product and service promotions",
      "Festival and occasion-based creatives",
      "Content planning and campaign coordination",
      "Brand awareness and engagement campaigns",
    ],
    goal: "To help your brand stay active, relevant and connected with its audience.",
  },
];

const approach = [
  {
    number: "1",
    title: "Understand Your Business",
    description:
      "We learn about your business, products, services and marketing objectives.",
    icon: Lightbulb,
  },
  {
    number: "2",
    title: "Identify Your Audience",
    description:
      "We identify the audience you want to reach and the most suitable communication platforms.",
    icon: Target,
  },
  {
    number: "3",
    title: "Develop Creative Strategies",
    description:
      "We plan advertising concepts and marketing activities that suit your brand.",
    icon: Megaphone,
  },
  {
    number: "4",
    title: "Execute the Campaign",
    description:
      "We coordinate advertising and marketing activities across the selected platforms.",
    icon: CheckCircle2,
  },
  {
    number: "5",
    title: "Strengthen Brand Visibility",
    description:
      "We aim to create consistent brand exposure and meaningful audience connections.",
    icon: TrendingUp,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-brand-tint">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:px-10 lg:pt-24 lg:pb-32">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#212121]/60">
              Our Services
            </p>

            <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Complete Advertising Solutions.
              <span className="block text-[#212121]/70">
                One Creative Partner.
              </span>
            </h1>

            <p className="mt-9 max-w-3xl text-lg leading-8 text-[#212121]/80 md:text-xl">
              At Screen Ads, we offer a range of advertising and marketing
              services designed to help businesses establish their identity,
              increase visibility and connect with their target audiences.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#212121]/70">
              Our approach combines creative communication with the right
              advertising platforms to deliver meaningful brand exposure.
              Explore our services and discover how we can help your business
              grow.
            </p>

            <Link
              href="#service-list"
              className="group mt-10 inline-flex items-center gap-4 bg-[#212121] px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-orange"
            >
              Explore Our Services
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES NAVIGATION */}
      <section
        id="service-list"
        className="mx-auto max-w-7xl px-6 pt-20 pb-2 lg:px-10"
      >
        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="rounded-full border border-[#212121]/20 px-5 py-3 text-sm font-medium transition hover:border-[#212121] hover:bg-brand-tint hover:text-[#212121]"
            >
              {service.number}. {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* INDIVIDUAL SERVICE SECTIONS */}
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-20 ${
              index % 2 === 0 ? "bg-white" : "bg-brand-tint"
            } py-16 lg:py-24`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              {/* SERVICE NUMBER */}
              <div className="mb-10 flex items-center gap-4">
                <span className="text-sm font-bold tracking-[0.2em] text-[#212121]/60">
                  SERVICE {service.number}
                </span>
                <div className="h-px flex-1 bg-[#212121]/20" />
              </div>

              {/* FULL WIDTH SERVICE IMAGE */}
              <div className="relative mb-12 aspect-[16/7] min-h-[240px] w-full overflow-hidden bg-white shadow-xl sm:min-h-[320px] lg:min-h-[420px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 1280px"
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center bg-brand-tint text-[#212121] sm:bottom-8 sm:left-8 sm:h-16 sm:w-16">
                  <Icon size={30} />
                </div>
              </div>

              {/* SERVICE CONTENT BELOW IMAGE */}
              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                  {service.title}
                </h2>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-[#212121]/75 md:text-2xl">
                  {service.tagline}
                </h3>

                <p className="mt-7 text-lg font-medium leading-8 text-[#212121]/85">
                  {service.description}
                </p>

                <p className="mt-4 text-base leading-8 text-[#212121]/70">
                  {service.details}
                </p>

                {/* SERVICE FEATURES */}
                <div className="mt-10">
                  <h4 className="mb-5 text-lg font-semibold">
                    {index === 1
                      ? "Why Digital Bus Screen Advertising?"
                      : "Our solutions include:"}
                  </h4>

                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-7 text-[#212121]/80"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#212121]/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IDEAL FOR - TRANSIT ADVERTISING */}
                {"idealFor" in service && service.idealFor && (
                  <div className="mt-10">
                    <h4 className="mb-5 text-lg font-semibold">Ideal for:</h4>

                    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {service.idealFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-7 text-[#212121]/80"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#212121]/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CLOSING LINE - TRANSIT ADVERTISING */}
                {"closingLine" in service && service.closingLine && (
                  <p className="mt-10 text-xl font-bold text-[#212121]/75">
                    {service.closingLine}
                  </p>
                )}

                {/* OUR GOAL */}
                <div className="mt-10 border-l-4 border-[#212121] bg-white/70 px-6 py-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#212121]/70">
                    Our Goal
                  </p>

                  <p className="mt-2 text-base leading-7 text-[#212121]/80">
                    {service.goal}
                  </p>
                </div>

                {/* TRANSIT ADVERTISING CTA */}
                {index === 1 && (
                  <Link
                    href="/contact#contact-form"
                    className="group mt-8 inline-flex items-center gap-3 bg-[#212121] px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-orange"
                  >
                    Book Your Bus Screen Advertisement
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* OUR APPROACH */}
      <section className="bg-brand-tint px-6 pt-10 pb-10 lg:px-10 lg:pt-10 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#212121]/60">
              How We Work
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Our Approach to Every Campaign
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#212121]/75">
              Every successful campaign starts with a clear understanding of
              your business and the audience you want to reach.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group border border-[#212121]/15 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#212121]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#212121]/60">
                      {step.number}
                    </span>

                    <Icon
                      size={27}
                      className="text-[#212121]/70 transition-transform group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-semibold leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#212121]/70">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#212121] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
              Let's Work Together
            </p>

            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Let's Find the Right Advertising Solution for Your Business.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75">
              Whether you want to build a new brand, promote your business
              through bus screen advertising or grow your digital presence,
              Screen Ads is ready to help.
            </p>

            <p className="mt-5 text-xl font-medium text-white">
              Let's make your next advertising campaign count!
            </p>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-center gap-4 bg-white px-8 py-5 text-sm font-semibold transition hover:bg-brand-tint"
            >
              <span className="text-black">Get in Touch Today</span>
              <ArrowUpRight className="h-5 w-5 text-black transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#975bf0]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#6cc6fa]/10 blur-[100px]" />
      </section>
    </main>
  );
}
