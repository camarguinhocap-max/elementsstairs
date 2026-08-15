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
