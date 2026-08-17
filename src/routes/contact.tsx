import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/ContactSection";
import { images } from "@/lib/site-data";

const title = "Request a Quote — Custom Stairs & Railings | Fort Lauderdale, FL";
const description =
  "Tell us about your staircase project and upload photos of your existing stairs. Serving Fort Lauderdale, Broward County and South Florida.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elementsstairs.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://elementsstairs.lovable.app/contact" }],
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
          title="Let's Talk About Your Project."
          intro="Share your space, style and timeline — photos of your existing staircase help us respond with a clearer quote."
          image={images.cta}
        />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
