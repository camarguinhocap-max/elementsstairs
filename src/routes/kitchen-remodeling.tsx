import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { TrustSection } from "@/components/site/TrustSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { business, serviceCitiesLabel } from "@/lib/site-data";
import serviceKitchen from "@/assets/service-kitchen.jpg";

const title = `Kitchen Remodeling in Central Florida | ${business.name}`;
const description = `Full and partial kitchen remodels for homeowners in ${business.cities.join(", ")}, FL. Free estimates.`;
const pageUrl = `${business.siteUrl}/kitchen-remodeling`;

export const Route = createFileRoute("/kitchen-remodeling")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: pageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              name: "Kitchen Remodeling",
              serviceType: "Kitchen Remodeling",
              description,
              provider: { "@id": `${business.siteUrl}/#business` },
              areaServed: business.cities.map((city) => ({
                "@type": "City",
                name: `${city}, Florida`,
              })),
              url: pageUrl,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${business.siteUrl}/` },
                { "@type": "ListItem", position: 2, name: "Kitchen Remodeling", item: pageUrl },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: KitchenRemodelingPage,
});

function KitchenRemodelingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Kitchen Remodeling"
          title="Kitchen Remodeling, Done Right."
          tagline={`Kitchen remodeling in ${serviceCitiesLabel}`}
          intro="Organized job sites and quality materials. Free, no-pressure estimates."
          image={serviceKitchen}
          showCtas
        />

        <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <p className="eyebrow">Serving {business.cities.join(", ")}, FL</p>
            <h2 className="display-sm mt-6">Full &amp; Partial Kitchen Remodels</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-[1.9] text-muted-foreground">
              <p>
                Full and partial kitchen remodels &mdash; cabinetry, counters, finishes and layout
                changes.
              </p>
              <p>
                We serve homeowners across {business.cities.join(", ")} and the surrounding areas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={serviceKitchen}
              alt="Kitchen remodeling by Element Home Remodeling"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </section>

        <div id="estimate">
          <ContactSection defaultProjectType="Kitchen Remodeling" />
        </div>

        <TrustSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
