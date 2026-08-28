import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { contacts } from "@/lib/site-data";

const title = "Privacy Policy | Element Home Remodeling";
const description =
  "How Element Home Remodeling collects, uses and protects the information you share when requesting a free estimate.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ehrremodeling.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://ehrremodeling.com/privacy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://ehrremodeling.com/privacy#page",
              url: "https://ehrremodeling.com/privacy",
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
                  name: "Privacy Policy",
                  item: "https://ehrremodeling.com/privacy",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-24 sm:px-10 sm:pt-48">
        <p className="eyebrow">Legal</p>
        <h1 className="display-sm mt-6">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted-foreground">
          <p>
            We collect only the information you choose to share with us — your name, phone number,
            email, ZIP code, project details and any photos you upload — so we can respond to your
            request and prepare an accurate estimate.
          </p>
          <p>
            We do not sell or rent your information. Project photos you send are used to understand
            your space and may be shared internally with our team.
          </p>
          <p>
            You may request that we delete your information at any time by calling{" "}
            <a href={`tel:${contacts[0]!.tel}`} className="text-foreground hover:text-bronze">
              {contacts[0]!.phone}
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
