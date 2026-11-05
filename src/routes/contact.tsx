import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/ContactSection";
import { images } from "@/lib/site-data";

const title = "Get a Free Estimate — Stairs & Home Remodeling | Element Home Remodeling";
const description =
  "Tell us about your stair or remodeling project and upload photos. Serving Ocala, Orlando, Gainesville and Tampa, FL.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ehrremodeling.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://ehrremodeling.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": "https://ehrremodeling.com/contact#page",
              url: "https://ehrremodeling.com/contact",
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
                  name: "Contact",
                  item: "https://ehrremodeling.com/contact",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Get a Free Estimate."
          intro="Tell us about your project and timeline — photos help us respond with a clearer estimate."
          image={images.cta}
        />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
