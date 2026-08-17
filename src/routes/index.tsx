import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ServicesSection } from "@/components/site/ServicesSection";
import { MaterialDetails } from "@/components/site/MaterialDetails";
import { ProcessSection } from "@/components/site/ProcessSection";
import { TrustSection } from "@/components/site/TrustSection";
import { Testimonials } from "@/components/site/Testimonials";
import { GallerySection } from "@/components/site/GallerySection";
import { InstagramSection } from "@/components/site/InstagramSection";
import { FinalCta } from "@/components/site/FinalCta";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Custom Stairs & Railings in South Florida | Element Stairs & Railings";
const description =
  "Element Stairs & Railings designs and builds custom staircases, stair remodeling, wood stairs, glass and metal railings for homes in Fort Lauderdale and South Florida.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elementsstairs.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://elementsstairs.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader overlay />
      <main>
        <Hero />
        <Intro />
        <FeaturedProjects />
        <BeforeAfter />
        <ServicesSection />
        <MaterialDetails />
        <ProcessSection />
        <TrustSection />
        <Testimonials />
        <GallerySection />
        <InstagramSection />
        <FinalCta />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileContactBar />
    </>
  );
}
