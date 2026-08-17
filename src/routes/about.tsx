import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { Intro } from "@/components/site/Intro";
import { MaterialDetails } from "@/components/site/MaterialDetails";
import { TrustSection } from "@/components/site/TrustSection";
import { FinalCta } from "@/components/site/FinalCta";
import { images } from "@/lib/site-data";

const title = "About Element Stairs & Railings | South Florida Staircase Craftsmen";
const description =
  "A South Florida workshop specializing in custom staircases, railings and stair remodeling, combining woodworking, metalwork and glass with architectural design.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elementsstairs.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://elementsstairs.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
          {
            "@type": "AboutPage",
            "@id": "https://elementsstairs.lovable.app/about#page",
            url: "https://elementsstairs.lovable.app/about",
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://elementsstairs.lovable.app/about" },
            ],
          },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About"
          title="Craftsmanship that elevates your home."
          intro="Element Stairs & Railings is a South Florida studio and workshop building custom stairs, railings and handrails in wood, metal and glass."
          image={images.intro}
        />
        <Intro />
        <MaterialDetails />
        <TrustSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
