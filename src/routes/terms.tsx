import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Terms of Use | Element Stairs & Railings";
const description =
  "Terms governing the use of the Element Stairs & Railings website, project imagery and quote requests.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elementsstairs.lovable.app/terms" },
    ],
    links: [{ rel: "canonical", href: "https://elementsstairs.lovable.app/terms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://elementsstairs.lovable.app/terms#page",
            url: "https://elementsstairs.lovable.app/terms",
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
              { "@type": "ListItem", position: 2, name: "Terms", item: "https://elementsstairs.lovable.app/terms" },
            ],
          },
          ],
        }),
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-24 sm:px-10 sm:pt-48">
        <p className="eyebrow">Legal</p>
        <h1 className="display-sm mt-6">Terms</h1>
        <div className="mt-10 space-y-6 text-[15px] leading-[1.9] text-muted-foreground">
          <p>
            Content, imagery and design shown on this website are the property of Element Stairs &amp;
            Railings and may not be reproduced without permission.
          </p>
          <p>
            Project imagery is representative of the type of work we produce. Quotes provided through
            this website are estimates and are confirmed only after an on-site consultation and
            measurement.
          </p>
          <p>
            By submitting a request you agree to be contacted by phone, text or email regarding your
            project.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
