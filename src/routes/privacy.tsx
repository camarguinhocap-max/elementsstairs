import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { contacts } from "@/lib/site-data";

const title = "Privacy Policy | Element Stairs & Railings";
const description =
  "How Element Stairs & Railings collects, uses and protects the information you share when requesting a staircase or railing quote.";

export const Route = createFileRoute("/privacy")({
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
            email, city, project details and any photos you upload — so we can respond to your
            request and prepare an accurate quote.
          </p>
          <p>
            We do not sell or rent your information. Project photos you send are used to understand
            your space and may be shared internally with our design and fabrication team.
          </p>
          <p>
            You may request that we delete your information at any time by calling{" "}
            <a href={`tel:${contacts[2]!.tel}`} className="text-foreground hover:text-bronze">
              {contacts[2]!.phone}
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
