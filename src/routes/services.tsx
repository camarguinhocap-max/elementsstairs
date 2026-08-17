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

const title = "Custom Stairs, Railings & Stair Remodeling Services | Element";
const description =
  "Custom stairs, stair remodeling, wood stairs, metal railings, glass railings and custom handrails, designed and built for South Florida homes.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elementsstairs.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://elementsstairs.lovable.app/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
          {
            "@type": "CollectionPage",
            "@id": "https://elementsstairs.lovable.app/services#page",
            url: "https://elementsstairs.lovable.app/services",
            name: title,
            description,
            isPartOf: { "@id": "https://elementsstairs.lovable.app/#website" },
            about: { "@id": "https://elementsstairs.lovable.app/#business" },
            inLanguage: "en-US",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://elementsstairs.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://elementsstairs.lovable.app/services" },
            ],
          },
          {
            "@type": "ItemList",
            name: "Staircase and railing services",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.copy,
                serviceType: s.title,
                provider: { "@id": "https://elementsstairs.lovable.app/#business" },
                areaServed: "South Florida",
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
          title="Crafted Around Your Space."
          intro="From full custom staircases to railing replacements, each project is designed around the architecture of the home."
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
