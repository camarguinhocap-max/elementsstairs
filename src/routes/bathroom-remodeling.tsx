import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { TrustSection } from "@/components/site/TrustSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { business, serviceCitiesLabel } from "@/lib/site-data";
import serviceBathroom from "@/assets/service-bathroom.jpg";

const title = `Bathroom Remodeling in Central Florida | ${business.name}`;
const description = `Bathroom renovations from a full gut to a refresh of fixtures, tile and finishes for homeowners in ${business.cities.join(", ")}, FL. Free estimates.`;
const pageUrl = `${business.siteUrl}/bathroom-remodeling`;

export const Route = createFileRoute("/bathroom-remodeling")({
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
              name: "Bathroom Remodeling",
              serviceType: "Bathroom Remodeling",
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
                { "@type": "ListItem", position: 2, name: "Bathroom Remodeling", item: pageUrl },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BathroomRemodelingPage,
});

function BathroomRemodelingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Bathroom Remodeling"
          title="Bathroom Remodeling, Done Right."
          tagline={`Bathroom remodeling in ${serviceCitiesLabel}`}
          intro="Organized job sites and quality materials. Free, no-pressure estimates."
          image={serviceBathroom}
          showCtas
        />

        <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <p className="eyebrow">Serving {business.cities.join(", ")}, FL</p>
            <h2 className="display-sm mt-6">From a Full Gut to a Refresh</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-[1.9] text-muted-foreground">
              <p>Bathroom renovations from a full gut to a refresh of fixtures, tile and finishes.</p>
              <p>
                We serve homeowners across {business.cities.join(", ")} and the surrounding areas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={serviceBathroom}
              alt="Bathroom remodeling by Element Home Remodeling"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </section>

        <div id="estimate">
          <ContactSection defaultProjectType="Bathroom Remodeling" />
        </div>

        <TrustSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
