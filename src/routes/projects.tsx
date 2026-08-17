import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { PageHero } from "@/components/site/PageHero";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { GallerySection } from "@/components/site/GallerySection";
import { InstagramSection } from "@/components/site/InstagramSection";
import { FinalCta } from "@/components/site/FinalCta";
import { projects } from "@/lib/site-data";

const title = "Luxury Staircase Projects & Portfolio | Element Stairs & Railings";
const description =
  "Selected staircase and railing projects: floating stairs, wood stairs, glass railings, metal railings and complete staircase renovations in South Florida.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elementsstairs.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://elementsstairs.lovable.app/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
          {
            "@type": "CollectionPage",
            "@id": "https://elementsstairs.lovable.app/projects#page",
            url: "https://elementsstairs.lovable.app/projects",
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
              { "@type": "ListItem", position: 2, name: "Projects", item: "https://elementsstairs.lovable.app/projects" },
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
          title="Selected Projects"
          intro="Craftsmanship designed around architecture. Explore recent staircases, railings and transformations."
          image={projects[5]!.image}
        />
        <FeaturedProjects />
        <BeforeAfter />
        <GallerySection />
        <InstagramSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
