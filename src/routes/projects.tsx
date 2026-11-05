import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { GallerySection } from "@/components/site/GallerySection";
import { FacebookSection } from "@/components/site/FacebookSection";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/lib/site-data";

const title = "Staircase Projects & Portfolio | Element Home Remodeling";
const description =
  "Recent staircase and railing projects — oak stairs, wood stairs, glass railings, metal railings and full staircase renovations — in Ocala, Orlando, Gainesville and Tampa, FL.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ehrremodeling.com/projects" },
    ],
    links: [{ rel: "canonical", href: "https://ehrremodeling.com/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://ehrremodeling.com/projects#page",
              url: "https://ehrremodeling.com/projects",
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
                  name: "Projects",
                  item: "https://ehrremodeling.com/projects",
                },
              ],
            },
            {
              "@type": "ItemList",
              name: "Selected staircase and railing projects",
              itemListElement: projects.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "CreativeWork",
                  name: p.title,
                  description: p.description,
                  genre: p.category,
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Projects"
          title="Recent Work"
          intro="Real staircases, railings and remodeling transformations from homes across Central Florida."
          image={projects[5]!.image}
        />
        <FeaturedProjects />
        <BeforeAfter />
        <GallerySection />
        <FacebookSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
