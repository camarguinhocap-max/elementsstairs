import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { TrustSection } from "@/components/site/TrustSection";
import { ContactSection } from "@/components/site/ContactSection";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { Reveal } from "@/components/site/Reveal";
import { business, serviceCitiesLabel } from "@/lib/site-data";
import serviceBathroom from "@/assets/service-bathroom.jpg";
import bathroom01 from "@/assets/gallery/bathroom-01.jpg";
import bathroom02 from "@/assets/gallery/bathroom-02.jpg";
import bathroom03 from "@/assets/gallery/bathroom-03.jpg";
import bathroom04 from "@/assets/gallery/bathroom-04.jpg";
import bathroom05 from "@/assets/gallery/bathroom-05.jpg";
import bathroom06 from "@/assets/gallery/bathroom-06.jpg";
import bathroom07 from "@/assets/gallery/bathroom-07.jpg";
import bathroom08 from "@/assets/gallery/bathroom-08.jpg";

const title = `Bathroom Remodeling in Central Florida | ${business.name}`;
const description = `Bathroom renovations from a full gut to a refresh of fixtures, tile and finishes for homeowners in ${business.cities.join(", ")}, FL. Free estimates.`;
const pageUrl = `${business.siteUrl}/bathroom-remodeling`;

const galleryImages = [
  {
    src: bathroom01,
    alt: "Bathroom with double vanity, black countertops, backlit mirror and marble-look tile by Element Home Remodeling",
  },
  {
    src: bathroom02,
    alt: "Bathroom with agate-look wall tile, wood vanity and backlit mirror by Element Home Remodeling",
  },
  {
    src: bathroom03,
    alt: "Bathroom with white double vanity, gold hardware and mosaic accent wall by Element Home Remodeling",
  },
  {
    src: bathroom04,
    alt: "Walk-in shower with marble-look walls, glass enclosure and built-in bench by Element Home Remodeling",
  },
  {
    src: bathroom05,
    alt: "Glass walk-in shower with gradient mosaic tile wall by Element Home Remodeling",
  },
  {
    src: bathroom06,
    alt: "Arched shower with white stone tile, brass fixtures and glass door by Element Home Remodeling",
  },
  {
    src: bathroom07,
    alt: "Bathroom with gray tile glass shower, white vanity and wavy mirror by Element Home Remodeling",
  },
  {
    src: bathroom08,
    alt: "Freestanding tub in front of a black and gold mosaic accent wall by Element Home Remodeling",
  },
];

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

        <PhotoGallery title="Recent Bathroom Projects" images={galleryImages} />

        <TrustSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
