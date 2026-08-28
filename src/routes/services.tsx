import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { MaterialDetails } from "@/components/site/MaterialDetails";
import { ProcessSection } from "@/components/site/ProcessSection";
import { FinalCta } from "@/components/site/FinalCta";
import { projects, services } from "@/lib/site-data";

const title = "Stairs, Railings & Home Remodeling Services | Element Home Remodeling";
const description =
  "Oak wood staircases, stair remodeling, metal and glass railings, plus kitchen, bathroom, carpentry and painting services for Central Florida homes.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ehrremodeling.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://ehrremodeling.com/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://ehrremodeling.com/services#page",
              url: "https://ehrremodeling.com/services",
              name: title,
              description,
              isPartOf: { "@id": "https://ehrremodeling.com/#website" },
              about: { "@id": "https://ehrremodeling.com/#business" },
              inLanguage: "en-US",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://ehrremodeling.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://ehrremodeling.com/services",
                },
              ],
            },
            {
              "@type": "ItemList",
              name: "Stairs, railings and home remodeling services",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Service",
                  name: s.title,
                  description: s.copy,
                  serviceType: s.title,
                  provider: { "@id": "https://ehrremodeling.com/#business" },
                  areaServed: "Central Florida",
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services"
          title="Stairs First. Then Everything Else."
          intro="Oak wood staircases and stair remodeling are our priority — plus kitchen, bathroom, carpentry and painting for the rest of the home."
          image={projects[0]!.image}
        />
        <ServicesSection />
        <MaterialDetails />
        <ProcessSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
