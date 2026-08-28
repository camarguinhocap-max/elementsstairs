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

const title = "About Element Home Remodeling | Central Florida Stairs & Remodeling";
const description =
  "Element Home Remodeling builds custom oak staircases and handles general home remodeling — kitchens, bathrooms, carpentry, painting — for homeowners across Central Florida.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ehrremodeling.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://ehrremodeling.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": "https://ehrremodeling.com/about#page",
              url: "https://ehrremodeling.com/about",
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
                  name: "About",
                  item: "https://ehrremodeling.com/about",
                },
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
          title="Stairs first. Then the rest of the home."
          intro="Element Home Remodeling started with oak wood staircases and stair remodeling, and has grown into general home remodeling — kitchens, bathrooms, carpentry and painting — for homeowners across Central Florida."
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
