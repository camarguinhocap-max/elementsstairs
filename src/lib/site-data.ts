import heroStaircase from "@/assets/hero-staircase.jpg";
import introStaircase from "@/assets/intro-staircase.jpg";
import projectModern from "@/assets/project-modern.jpg";
import projectWood from "@/assets/project-wood.jpg";
import projectGlass from "@/assets/project-glass.jpg";
import projectMetal from "@/assets/project-metal.jpg";
import projectRemodel from "@/assets/project-remodel.jpg";
import projectCustom from "@/assets/project-custom.jpg";
import detailWood from "@/assets/detail-wood.jpg";
import detailSteel from "@/assets/detail-steel.jpg";
import detailGlass from "@/assets/detail-glass.jpg";
import detailCraft from "@/assets/detail-craft.jpg";
import ba1Before from "@/assets/ba1-before.jpg";
import ba1After from "@/assets/ba1-after.jpg";
import ba2Before from "@/assets/ba2-before.jpg";
import ba2After from "@/assets/ba2-after.jpg";
import ba3Before from "@/assets/ba3-before.jpg";
import ba3After from "@/assets/ba3-after.jpg";
import ctaStaircase from "@/assets/cta-staircase.jpg";

export const images = {
  hero: heroStaircase,
  intro: introStaircase,
  cta: ctaStaircase,
};

// ---------------------------------------------------------------------------
// Business identity
// NOTE: "name" is a placeholder pending final confirmation from the client —
// the launch checklist has this marked as "not confirmed yet". The domain and
// logo mood board point to the EHR short form, so that is used as the primary
// display name for now. Update in one place here once confirmed.
// ---------------------------------------------------------------------------
export const business = {
  name: "Element Home Remodeling",
  shortName: "EHR Remodeling",
  domain: "ehrremodeling.com",
  siteUrl: "https://ehrremodeling.com",
  flagshipService: "Oak Wood Staircase",
  hours: "Monday–Saturday, 8:00 AM – 5:00 PM",
  insurance: "$1,000,000 general liability insured",
  differentiators: [
    {
      title: "Organized Job Sites",
      copy: "Clear scheduling and a clean, organized site from day one to walkthrough.",
    },
    {
      title: "Quality Materials",
      copy: "Real hardwood, steel and glass selected for durability and finish.",
    },
    {
      title: "On-Time, Every Time",
      copy: "Realistic timelines we commit to, so your home isn't a job site longer than it has to be.",
    },
  ],
  // TODO: confirm street address — still open on the launch checklist.
  address: null as string | null,
  cities: ["Ocala", "Orlando", "Gainesville", "Tampa"],
  state: "FL",
};

// TODO: confirm the real Instagram handle before launch — this is a placeholder.
export const instagramHandle = "@ehrremodeling";
export const instagramUrl = "https://instagram.com/ehrremodeling";

export const contacts = [
  { name: "Bia", role: "Estimates & Scheduling", phone: "(954) 696-4859", tel: "+19546964859" },
  { name: "Léo", role: "Owner", phone: "(954) 826-5786", tel: "+19548265786" },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  place: string;
  image: string;
  tags: string[];
  description: string;
};

export const projects: Project[] = [
  {
    id: "modern-stair-transformation",
    title: "Modern Stair Transformation",
    category: "Modern Stairs",
    place: "Residential Project",
    image: projectModern,
    tags: ["stairs", "wood", "metal"],
    description:
      "Open-riser staircase with white oak treads carried on a slim blackened steel structure, opening the entry to light and sightlines.",
  },
  {
    id: "walnut-stair-and-handrail",
    title: "Walnut Stair & Handrail",
    category: "Wood Stairs",
    place: "Residential Project",
    image: projectWood,
    tags: ["stairs", "wood"],
    description:
      "Solid walnut treads, paneled skirt detailing and a hand-shaped continuous handrail finished on site.",
  },
  {
    id: "frameless-glass-railing",
    title: "Frameless Glass Railing",
    category: "Glass Railings",
    place: "Residential Project",
    image: projectGlass,
    tags: ["railings", "glass"],
    description:
      "Low-iron tempered glass panels set on minimal stainless standoffs along the stair run and mezzanine edge.",
  },
  {
    id: "blackened-metal-railing",
    title: "Blackened Metal Railing",
    category: "Metal Railings",
    place: "Residential Project",
    image: projectMetal,
    tags: ["railings", "metal"],
    description:
      "Fabricated steel balustrade with fine vertical pickets and a shaped oak cap rail, powder coated matte black.",
  },
  {
    id: "entry-stair-remodel",
    title: "Entry Stair Remodel",
    category: "Stair Remodeling",
    place: "Residential Project",
    image: projectRemodel,
    tags: ["remodeling", "stairs", "wood"],
    description:
      "Carpet removed, new oak treads and risers installed, and the original balustrade replaced with slim iron.",
  },
  {
    id: "oak-staircase-rebuild",
    title: "Oak Staircase Rebuild",
    category: "Oak Wood Staircase",
    place: "Residential Project",
    image: projectCustom,
    tags: ["stairs", "wood", "flagship"],
    description:
      "A full oak staircase rebuild — new stringers, solid oak treads and a hand-finished newel and handrail.",
  },
];

export type ServiceGroup = "stairs" | "remodeling";

export type Service = {
  title: string;
  copy: string;
  image?: string;
  group: ServiceGroup;
  flagship?: boolean;
};

export const services: Service[] = [
  // Stairs & railings — the priority line of business.
  {
    title: "Oak Wood Staircase",
    copy: "Our signature service: solid oak stairs, built and finished on site. This is the project most homeowners call us for first.",
    image: projectCustom,
    group: "stairs",
    flagship: true,
  },
  {
    title: "Stair Remodeling",
    copy: "Transform outdated staircases with new treads, risers, railings and architectural details.",
    image: projectRemodel,
    group: "stairs",
  },
  {
    title: "Custom Stairs",
    copy: "Custom staircase builds in wood, glass, metal or cable, designed around the architecture of your home.",
    image: projectModern,
    group: "stairs",
  },
  {
    title: "Metal Railings",
    copy: "Modern and traditional metal railing systems built for durability, safety and design.",
    image: projectMetal,
    group: "stairs",
  },
  {
    title: "Glass Railings",
    copy: "Minimal glass railing systems that create open, contemporary spaces.",
    image: projectGlass,
    group: "stairs",
  },
  {
    title: "Custom Handrails",
    copy: "Custom-designed wood and metal handrails built to complement the staircase and interior.",
    image: detailCraft,
    group: "stairs",
  },
  // General remodeling — real services offered, photos to be added once available.
  {
    title: "Kitchen Remodeling",
    copy: "Full and partial kitchen remodels — cabinetry, counters, finishes and layout changes.",
    group: "remodeling",
  },
  {
    title: "Bathroom Remodeling",
    copy: "Bathroom renovations from a full gut to a refresh of fixtures, tile and finishes.",
    group: "remodeling",
  },
  {
    title: "Carpentry",
    copy: "Custom carpentry and trim work built and finished to match the rest of your home.",
    group: "remodeling",
  },
  {
    title: "Interior Painting",
    copy: "Interior painting and stain work, prepped and finished to a clean, lasting result.",
    group: "remodeling",
  },
];

export const materials = [
  { label: "Wood", image: detailWood },
  { label: "Steel", image: detailSteel },
  { label: "Glass", image: detailGlass },
  { label: "Craftsmanship", image: detailCraft },
];

export const transformations = [
  {
    title: "Carpet to Solid Oak",
    place: "Residential Project",
    before: ba1Before,
    after: ba1After,
  },
  {
    title: "Closed Entry to Open Glass",
    place: "Residential Project",
    before: ba2Before,
    after: ba2After,
  },
  {
    title: "Dated Balustrade Rebuilt",
    place: "Residential Project",
    before: ba3Before,
    after: ba3After,
  },
];

export const galleryFilters = [
  { label: "All", value: "all" },
  { label: "Stairs", value: "stairs" },
  { label: "Railings", value: "railings" },
  { label: "Glass", value: "glass" },
  { label: "Wood", value: "wood" },
  { label: "Metal", value: "metal" },
  { label: "Remodeling", value: "remodeling" },
];

export const galleryItems = [
  ...projects,
  {
    id: "oak-tread-detail",
    title: "Oak Tread Detail",
    category: "Wood Stairs",
    place: "Material Study",
    image: detailWood,
    tags: ["wood", "stairs"],
    description: "Solid oak tread with a shaped nosing and hand-finished edge.",
  },
  {
    id: "steel-stringer-detail",
    title: "Steel Stringer Detail",
    category: "Metal Railings",
    place: "Material Study",
    image: detailSteel,
    tags: ["metal", "stairs"],
    description: "Welded and dressed steel stringer, finished in matte black powder coat.",
  },
  {
    id: "glass-standoff-detail",
    title: "Glass Standoff Detail",
    category: "Glass Railings",
    place: "Material Study",
    image: detailGlass,
    tags: ["glass", "railings"],
    description: "Point-fixed glass panel on machined stainless hardware.",
  },
  {
    id: "handrail-in-progress",
    title: "Handrail in the Shop",
    category: "Custom Handrails",
    place: "In the Workshop",
    image: detailCraft,
    tags: ["wood", "railings"],
    description: "A curved handrail sanded and shaped by hand before installation.",
  },
];
