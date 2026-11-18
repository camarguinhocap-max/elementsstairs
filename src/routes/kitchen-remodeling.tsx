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
import serviceKitchen from "@/assets/service-kitchen.jpg";
import kitchen01 from "@/assets/gallery/kitchen-01.jpg";
import kitchen02 from "@/assets/gallery/kitchen-02.jpg";
import kitchen03 from "@/assets/gallery/kitchen-03.jpg";
import kitchen04 from "@/assets/gallery/kitchen-04.jpg";
import kitchen05 from "@/assets/gallery/kitchen-05.jpg";

const title = `Kitchen Remodeling in Central Florida | ${business.name}`;
const description = `Full and partial kitchen remodels for homeowners in ${business.cities.join(", ")}, FL. Free estimates.`;
const pageUrl = `${business.siteUrl}/kitchen-remodeling`;

const galleryImages = [
  {
    src: kitchen01,
    alt: "White kitchen with marble-look backsplash and stainless range hood by Element Home Remodeling",
  },
  {
    src: kitchen02,
    alt: "White kitchen island with wood floors and built-in pantry shelving by Element Home Remodeling",
  },
  {
    src: kitchen03,
    alt: "Open kitchen with two islands, stone countertops and globe pendant lights by Element Home Remodeling",
  },
  {
    src: kitchen04,
    alt: "Wood-grain kitchen cabinetry with stone backsplash and under-cabinet lighting by Element Home Remodeling",
  },
  {
    src: kitchen05,
    alt: "Wood-grain cabinets with stone countertop and lit floating shelf by Element Home Remodeling",
  },
];

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

        <PhotoGallery title="Recent Kitchen Projects" images={galleryImages} />

        <TrustSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
