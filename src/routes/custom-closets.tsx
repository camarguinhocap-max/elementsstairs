import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { TrustSection } from "@/components/site/TrustSection";
import { ContactSection } from "@/components/site/ContactSection";
import { PhotoGallery } from "@/components/site/PhotoGallery";
import { Reveal } from "@/components/site/Reveal";
import { ServiceDetails } from "@/components/site/ServiceDetails";
import { FaqSection } from "@/components/site/FaqSection";
import { business } from "@/lib/site-data";
import { closetContent, faqPageSchema } from "@/lib/service-page-content";
import { heroImages, heroPreloadLink } from "@/lib/hero-images";
import closet01 from "@/assets/gallery/closet-01.jpg";
import closet02 from "@/assets/gallery/closet-02.jpg";

const title = `Custom Closets in Central Florida | ${business.name}`;
const description = `Custom closet built-ins — shelving, drawers and hanging space — for homeowners in ${business.cities.join(", ")}, FL. Free estimates.`;
const pageUrl = `${business.siteUrl}/custom-closets`;

const galleryImages = [
  {
    src: closet01,
    alt: "Custom walk-in closet with built-in shelves and drawers by Element Home Remodeling",
  },
  {
    src: closet02,
    alt: "Custom walk-in closet with lit shelving, hanging space and glass-front cabinets by Element Home Remodeling",
  },
];

export const Route = createFileRoute("/custom-closets")({
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
    links: [{ rel: "canonical", href: pageUrl }, heroPreloadLink(heroImages.closet)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              name: "Custom Closets",
              serviceType: "Custom Closets",
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
                { "@type": "ListItem", position: 2, name: "Custom Closets", item: pageUrl },
              ],
            },
            faqPageSchema(closetContent.faq),
          ],
        }),
      },
    ],
  }),
  component: CustomClosetsPage,
});

function CustomClosetsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Custom Closets"
          title="Custom Closets in Central Florida"
          tagline="Custom Closets, Built to Fit."
          intro="Organized job sites and quality materials. Free, no-pressure estimates."
          image={heroImages.closet}
          showCtas
        />

        <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-24">
          <Reveal>
            <p className="eyebrow">Serving {business.cities.join(", ")}, FL</p>
            <h2 className="display-sm mt-6">Designed Around Your Home</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-[1.9] text-muted-foreground">
              <p>
                Custom closet built-ins &mdash; shelving, drawers and hanging space, designed around
                your home.
              </p>
              <p>
                We serve homeowners across {business.cities.join(", ")} and the surrounding areas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={closet01}
              alt="Custom closet built-ins by Element Home Remodeling"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
        </section>

        <div id="estimate">
          <ContactSection defaultProjectType="Custom Closets" />
        </div>

        <PhotoGallery title="Recent Closet Projects" images={galleryImages} />

        <ServiceDetails content={closetContent} currentPage="/custom-closets" />

        <TrustSection />

        <FaqSection items={closetContent.faq} title={closetContent.faqTitle} />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
