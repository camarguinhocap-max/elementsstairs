import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { MaterialDetails } from "@/components/site/MaterialDetails";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustSection } from "@/components/site/TrustSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { business, images, stairsFaq } from "@/lib/site-data";

const title = `Oak Wood Staircase & Stair Remodeling | ${business.name}`;
const description = `Custom oak wood staircases, stair remodeling, and metal or glass railings for homeowners in ${business.cities.join(", ")}, FL. Free estimates, ${business.insurance}.`;

export const Route = createFileRoute("/stairs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${business.siteUrl}/stairs` },
    ],
    links: [{ rel: "canonical", href: `${business.siteUrl}/stairs` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${business.siteUrl}/stairs#service`,
              name: "Oak Wood Staircase & Stair Remodeling",
              serviceType: "Stair Remodeling",
              description,
              provider: { "@id": `${business.siteUrl}/#business` },
              areaServed: business.cities.map((city) => ({
                "@type": "City",
                name: `${city}, Florida`,
              })),
              url: `${business.siteUrl}/stairs`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${business.siteUrl}/` },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Stairs",
                  item: `${business.siteUrl}/stairs`,
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: stairsFaq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: StairsPage,
});

function StairsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Signature Service"
          title="Oak Wood Staircases, Built On Site."
          intro="A new oak staircase is the single upgrade homeowners in Central Florida ask us for most. Free estimate, honest timeline, clean job site."
          image={images.intro}
        />

        <section className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Serving {business.cities.join(", ")}, FL</p>
            <h2 className="display-sm mt-6">Stair Remodeling &amp; New Oak Staircases</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-[1.9] text-muted-foreground">
              <p>
                Whether you&rsquo;re replacing worn carpet on your stairs, updating a dated
                balustrade, or building a brand-new oak staircase from the subfloor up, this is the
                project we specialize in. We work in solid oak, with glass, metal or cable railing
                options, and we build every staircase around your home&rsquo;s existing layout and
                trim.
              </p>
              <p>
                We serve homeowners across {business.cities.join(", ")} and the surrounding areas.{" "}
                {business.insurance} — ask us for proof of coverage with your free estimate.
              </p>
            </div>
          </Reveal>
        </section>

        <FeaturedProjects />
        <BeforeAfter />
        <MaterialDetails />
        <Testimonials />
        <TrustSection />
        <FaqSection items={stairsFaq} title="Stair Remodeling — Frequently Asked Questions" />
        <ContactSection defaultProjectType="Oak Wood Staircase" />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
