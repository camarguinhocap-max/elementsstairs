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

const title = "Our Process — From Estimate to Installation | Element Home Remodeling";
const description =
  "How Element Home Remodeling plans and builds a stair or remodeling project: estimate, design, materials, and on-site installation.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ehrremodeling.com/process" },
    ],
    links: [{ rel: "canonical", href: "https://ehrremodeling.com/process" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://ehrremodeling.com/process#page",
              url: "https://ehrremodeling.com/process",
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
                  name: "Process",
                  item: "https://ehrremodeling.com/process",
                },
              ],
            },
          ],
        }),
      },
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
          title="From Free Estimate to Final Walkthrough."
          intro="A clear process, start to finish — so you know the timeline and scope before we ever start work."
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
