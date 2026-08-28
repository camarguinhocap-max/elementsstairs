import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { business, contacts } from "@/lib/site-data";

const title = `Thank You | ${business.name}`;
const description = "Your estimate request was received.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      // Keep this page out of search results and off the sitemap — it only
      // matters as a conversion event, not as content to rank.
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-start justify-center px-6 pt-40 pb-24 sm:px-10 sm:pt-48">
        <p className="eyebrow">Request Received</p>
        <h1 className="display-sm mt-6">Thanks — we&rsquo;ve got your request.</h1>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {contacts[0]!.name} or {contacts[1]!.name} will follow up during business hours (
          {business.hours}). Need to talk sooner? Call or text us directly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`tel:${contacts[0]!.tel}`} className="btn-base btn-solid">
            Call {contacts[0]!.phone}
          </a>
          <Link to="/" className="btn-base btn-outline-dark">
            Back to Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
