import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { ProcessSection } from "@/components/site/ProcessSection";
import { MaterialDetails } from "@/components/site/MaterialDetails";
import { TrustSection } from "@/components/site/TrustSection";
import { FinalCta } from "@/components/site/FinalCta";
import { materials } from "@/lib/site-data";

const title = "Our Process — From Vision to Installation | Element Stairs & Railings";
const description =
  "Consultation, design, craftsmanship and installation: how Element Stairs & Railings plans and builds a custom staircase or railing project.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Process"
          title="From Vision to Installation."
          intro="A clear, considered process — from the first conversation about your space to the final detail on site."
          image={materials[3]!.image}
        />
        <ProcessSection />
        <MaterialDetails />
        <TrustSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
