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

export const contacts = [
  { name: "Leonardo Haluche", phone: "(954) 826-5786", tel: "+19548265786" },
  { name: "Jader Alencar", phone: "(954) 588-4403", tel: "+19545884403" },
  { name: "Element Office", phone: "(754) 326-3344", tel: "+17543263344" },
];

export const instagramHandle = "@element.stairs";
export const instagramUrl = "https://instagram.com/element.stairs";

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
      "Carpet removed, new hardwood treads and risers installed, and the original balustrade replaced with slim iron.",
  },
  {
    id: "sculptural-curved-stair",
    title: "Sculptural Curved Stair",
    category: "Custom Projects",
    place: "Residential Project",
    image: projectCustom,
    tags: ["stairs", "wood", "metal"],
    description:
      "A curved stair built around a double-height volume, combining a steel spine with continuous laminated hardwood.",
  },
];

export const services = [
  {
    title: "Custom Stairs",
    copy: "Custom staircase solutions designed specifically for the architecture and character of each home.",
    image: projectModern,
  },
  {
    title: "Stair Remodeling",
    copy: "Transform outdated staircases with new materials, railings, treads and architectural details.",
    image: projectRemodel,
  },
  {
    title: "Wood Stairs",
    copy: "Custom wood staircases and refinishing using premium materials and precise craftsmanship.",
    image: projectWood,
  },
  {
    title: "Metal Railings",
    copy: "Modern and traditional metal railing systems built for durability, safety and design.",
    image: projectMetal,
  },
  {
    title: "Glass Railings",
    copy: "Minimal glass railing systems that create open, contemporary spaces.",
    image: projectGlass,
  },
  {
    title: "Custom Handrails",
    copy: "Custom-designed wood and metal handrails built to complement the staircase and interior architecture.",
    image: detailCraft,
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
    title: "Carpet to White Oak",
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
    description: "Solid white oak tread with a shaped nosing and hand-finished edge.",
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
