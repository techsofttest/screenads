import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        {/* Page Heading */}
        <div className="mb-12">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-[#212121]/60">
            SCREEN ADS | TERMS OF SERVICE
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold tracking-tight md:text-6xl">
            Terms & Conditions
          </h1>
        </div>

        <div className="space-y-10 text-base leading-8 text-[#212121]/75">
          {/* 1. Introduction */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              1. Introduction
            </h2>

            <p>Welcome to the official website of Screen Ads.</p>

            <p className="mt-3">
              These Terms & Conditions govern your access to and use of the
              Screen Ads website and the services offered through our business.
            </p>

            <p className="mt-3">
              Screen Ads is an advertising and digital marketing agency based
              at:
            </p>

            <p className="mt-3 font-medium text-[#212121]">
              XVII/279-A8, Sreebhadra Building, 130 Junction, Naz Road,
              Muvattupuzha, Ernakulam, Kerala – 686661.
            </p>

            <p className="mt-3">
              By accessing this website, browsing its content or contacting us
              regarding our services, you acknowledge that you have read and
              understood these Terms & Conditions.
            </p>

            <p className="mt-3">
              If you do not agree with any part of these terms, please
              discontinue using this website.
            </p>
          </section>

          {/* 2. Our Services */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              2. Our Services
            </h2>

            <p>
              Screen Ads provides advertising, branding and digital marketing
              solutions, including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Branding and advertising services.</li>
              <li>
                Transit advertising through digital screens installed in private
                fair stage buses.
              </li>
              <li>Digital marketing services.</li>
              <li>Social media marketing and promotional activities.</li>
              <li>Creative advertising and promotional content.</li>
            </ul>

            <p className="mt-3">
              The availability, scope and delivery of individual services may
              vary depending on the requirements of the client, campaign
              objectives, advertising platform and mutually agreed terms.
            </p>
          </section>

          {/* 3. Service Enquiries and Bookings */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              3. Service Enquiries and Bookings
            </h2>

            <p>
              Customers and businesses may contact Screen Ads through the
              website, telephone, WhatsApp or other available communication
              channels to enquire about our services.
            </p>

            <p className="mt-3">
              All service enquiries are subject to confirmation by Screen Ads.
            </p>

            <p className="mt-3">
              A booking or advertising campaign will be considered confirmed
              only after the relevant service details, pricing, duration,
              payment arrangements and other applicable conditions have been
              mutually agreed upon.
            </p>

            <p className="mt-3">
              Submitting an enquiry through our website does not automatically
              constitute a confirmed booking or service agreement.
            </p>
          </section>

          {/* 4. Advertising Content and Client Responsibilities */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              4. Advertising Content and Client Responsibilities
            </h2>

            <p>
              Clients are responsible for ensuring that all advertising
              materials, images, videos, logos, text and other content supplied
              to Screen Ads are accurate and legally authorised for use.
            </p>

            <p className="mt-3">
              Clients must ensure that their advertising materials:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Do not violate applicable laws or regulations.</li>
              <li>
                Do not infringe copyright, trademarks or other intellectual
                property rights.
              </li>
              <li>
                Do not contain misleading, fraudulent or deceptive claims.
              </li>
              <li>
                Do not promote prohibited or unlawful products or services.
              </li>
              <li>
                Do not contain offensive, defamatory or inappropriate content.
              </li>
            </ul>

            <p className="mt-3">
              Screen Ads reserves the right to reject, modify or discontinue any
              advertising material that violates applicable laws, platform
              policies or our internal advertising standards.
            </p>
          </section>

          {/* 5. Transit Advertising */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              5. Transit Advertising – Digital Bus Screen Advertising
            </h2>

            <p>
              Screen Ads offers digital advertising opportunities through
              screens installed in participating private fair stage buses.
            </p>

            <p className="mt-3">
              The following conditions apply to transit advertising services:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Advertising placements are subject to screen availability and
                campaign scheduling.
              </li>
              <li>
                Advertisements will be displayed according to the mutually
                agreed campaign duration and specifications.
              </li>
              <li>
                Bus routes, operational schedules and screen availability may
                vary.
              </li>
              <li>
                Technical issues, vehicle maintenance, operational interruptions
                or circumstances beyond our control may affect advertisement
                display.
              </li>
              <li>
                Screen Ads will make reasonable efforts to coordinate and
                deliver the agreed advertising service.
              </li>
              <li>
                Any changes to campaign schedules, content or duration must be
                mutually agreed upon.
              </li>
            </ul>

            <p className="mt-3">
              Screen Ads does not guarantee a specific number of impressions,
              passenger views, enquiries, leads or sales unless expressly agreed
              in writing.
            </p>
          </section>

          {/* 6. Digital Marketing and Social Media Services */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              6. Digital Marketing and Social Media Services
            </h2>

            <p>
              Digital marketing and social media campaigns may involve
              third-party platforms such as Facebook, Instagram, Google and
              other online advertising services.
            </p>

            <p className="mt-3">Clients acknowledge that:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Advertising platforms operate under their own terms, conditions
                and policies.
              </li>
              <li>
                Campaign approvals are subject to the respective platform's
                review processes.
              </li>
              <li>
                Advertising reach, engagement, leads and performance may vary.
              </li>
              <li>
                Platform algorithm changes, technical issues and policy updates
                may affect campaign delivery.
              </li>
              <li>
                Screen Ads cannot guarantee specific business results, sales
                conversions or audience engagement.
              </li>
            </ul>

            <p className="mt-3">
              Any advertising budget, service fee and campaign management
              arrangements will be discussed and agreed upon separately.
            </p>
          </section>

          {/* 7. Pricing and Payments */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              7. Pricing and Payments
            </h2>

            <p>
              The pricing of services will be communicated to clients before
              confirmation of the relevant service or campaign.
            </p>

            <p className="mt-3">
              Payment terms, advance payments, balances, billing schedules and
              applicable charges will be mutually agreed upon before service
              commencement.
            </p>

            <p className="mt-3">Unless otherwise agreed in writing:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Clients are expected to make payments within the agreed time.
              </li>
              <li>
                Delays in payment may result in campaign postponement or
                suspension.
              </li>
              <li>
                Any additional services or modifications outside the agreed
                scope may involve additional charges.
              </li>
            </ul>
          </section>

          {/* 8. Cancellation and Modifications */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              8. Cancellation and Modifications
            </h2>

            <p>
              Requests for cancellation, postponement or modification of
              advertising campaigns must be communicated to Screen Ads in
              advance.
            </p>

            <p className="mt-3">
              Cancellation charges, refunds or adjustments, where applicable,
              will depend on the nature of the service, campaign progress,
              third-party commitments and mutually agreed booking terms.
            </p>

            <p className="mt-3">
              Once an advertisement has been designed, approved, scheduled or
              published, certain costs may not be refundable.
            </p>

            <p className="mt-3">
              Specific cancellation and refund conditions may be communicated
              separately for individual campaigns.
            </p>
          </section>

          {/* 9. Intellectual Property Rights */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              9. Intellectual Property Rights
            </h2>

            <p>
              All original content available on the Screen Ads website,
              including text, graphics, logos, designs, images and website
              elements, is owned by or used with permission by Screen Ads,
              unless otherwise stated.
            </p>

            <p className="mt-3">
              Visitors may not reproduce, distribute, modify, publish or
              commercially use website content without prior written permission.
            </p>

            <p className="mt-3">
              Client-supplied logos, trademarks, images and promotional
              materials remain the property of their respective owners.
            </p>

            <p className="mt-3">
              Any ownership or usage rights relating to creative materials
              developed for clients will be governed by the specific agreement
              between Screen Ads and the client.
            </p>
          </section>

          {/* 10. Third-Party Websites and Platforms */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              10. Third-Party Websites and Platforms
            </h2>

            <p>
              Our website may contain links to external websites, social media
              platforms or third-party services.
            </p>

            <p className="mt-3">
              These links are provided for convenience and informational
              purposes.
            </p>

            <p className="mt-3">
              Screen Ads does not control the content, security, privacy
              practices or policies of external websites and is not responsible
              for their activities.
            </p>

            <p className="mt-3">
              Users are encouraged to review the terms and privacy policies of
              third-party websites before using their services.
            </p>
          </section>

          {/* 11. Limitation of Liability */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              11. Limitation of Liability
            </h2>

            <p>
              Screen Ads will make reasonable efforts to provide its services
              professionally and responsibly.
            </p>

            <p className="mt-3">
              However, we shall not be held responsible for:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Temporary website interruptions or technical errors.</li>
              <li>
                Third-party platform restrictions or service interruptions.
              </li>
              <li>Changes in advertising platform policies or algorithms.</li>
              <li>
                Delays caused by circumstances beyond our reasonable control.
              </li>
              <li>
                Business losses resulting from advertising performance or market
                conditions.
              </li>
              <li>
                Indirect or consequential losses arising from the use of our
                website or services, to the extent permitted by applicable law.
              </li>
            </ul>

            <p className="mt-3">
              Nothing in these Terms & Conditions excludes liability that cannot
              legally be excluded under applicable law.
            </p>
          </section>

          {/* 12. Website Usage */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              12. Website Usage
            </h2>

            <p>Users agree not to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use this website for unlawful purposes.</li>
              <li>Attempt to access restricted areas without authorisation.</li>
              <li>Introduce malicious software or harmful code.</li>
              <li>
                Interfere with the security or functionality of the website.
              </li>
              <li>Submit false, misleading or fraudulent enquiries.</li>
            </ul>

            <p className="mt-3">
              Screen Ads reserves the right to restrict access to users who
              misuse the website.
            </p>
          </section>

          {/* 13. Changes to These Terms */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              13. Changes to These Terms
            </h2>

            <p>
              Screen Ads reserves the right to update, modify or revise these
              Terms & Conditions whenever necessary.
            </p>

            <p className="mt-3">
              Any revised terms will be published on this page along with the
              updated revision date.
            </p>

            <p className="mt-3">
              Continued use of the website after changes are published indicates
              acceptance of the revised terms, subject to applicable law.
            </p>
          </section>

          {/* 14. Governing Law and Jurisdiction */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              14. Governing Law and Jurisdiction
            </h2>

            <p>
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the laws of India.
            </p>

            <p className="mt-3">
              Any disputes arising in connection with the website or services
              offered by Screen Ads shall be subject to the jurisdiction of the
              competent courts in Ernakulam, Kerala, subject to applicable law.
            </p>
          </section>

          {/* 15. Contact Information */}
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#212121]">
              15. Contact Information
            </h2>

            <p>
              For questions, clarifications or concerns regarding these Terms &
              Conditions, please contact us:
            </p>

            <div className="mt-5 rounded-xl border border-[#212121]/10 bg-brand-tint p-6">
              <h3 className="text-lg font-bold tracking-wide text-[#212121]">
                SCREEN ADS
              </h3>

              <p className="mt-3 text-[#212121]/75">
                XVII/279-A8, Sreebhadra Building, 130 Junction, Naz Road,
                Muvattupuzha, Ernakulam, Kerala – 686661.
              </p>

              <div className="mt-4 flex flex-col gap-2 text-[#212121]/75">
                <p>
                  <span className="font-semibold text-[#212121]">Phone:</span>{" "}
                  <a
                    href="tel:7736540015"
                    className="transition-colors hover:text-[#212121] hover:underline"
                  >
                    7736540015
                  </a>
                  {" / "}
                  <a
                    href="tel:9961246916"
                    className="transition-colors hover:text-[#212121] hover:underline"
                  >
                    9961246916
                  </a>
                </p>
              </div>
            </div>

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#212121] underline underline-offset-4 transition-colors hover:text-brand-orange"
            >
              Contact Screen Ads
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
