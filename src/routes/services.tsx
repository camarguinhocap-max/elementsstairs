import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { MaterialDetails } from "@/components/site/MaterialDetails";
import { ProcessSection } from "@/components/site/ProcessSection";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/lib/site-data";

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
