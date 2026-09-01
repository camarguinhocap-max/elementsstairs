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
import logoFull from "@/assets/logo.png";
import logoIcon from "@/assets/logo-icon.png";

export const images = {
  hero: heroStaircase,
  intro: introStaircase,
  cta: ctaStaircase,
};

export const logo = {
  full: logoFull,
  icon: logoIcon,
};

// ---------------------------------------------------------------------------
// Business identity — confirmed: "Element Home Remodeling" is the official
// display name; "EHR Remodeling" remains available as a short form for tight
// spaces (e.g. mobile nav) if ever needed.
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
  // Confirmed by the client (physical/mailing address — this is where the
  // business is based, not a service area; the service cities below are a
  // separate list of where jobs actually happen, in Central Florida).
  address: {
    street: "3721 NE 13th Terr",
    city: "Pompano Beach",
    state: "FL",
    zip: "33064",
    get full() {
      return `${this.street}, ${this.city}, ${this.state} ${this.zip}`;
    },
  },
  cities: ["Ocala", "Orlando", "Gainesville", "Tampa"],
  state: "FL",
  email: "contact@ehrremodeling.com",
};

// Google Analytics 4 — property "Element Home Remodeling" (separate GA4 account,
// same access model as Search Console: Camarguinho manages day-to-day, Leonardo has
// Administrator access too).
export const ga4MeasurementId = "G-8JZN7FTGMS";

// WhatsApp isn't heavily used by US customers, but the client wants a small
// floating button available anyway. Pre-fills the chat with an English
// message when clicked. Uses Leonardo's number for now (owner) — can switch to
// Bianca's or another number later if needed.
export const whatsapp = {
  tel: "19548265786",
  message: "Hi! I found you through your website and I'd like to get a free estimate.",
  get url() {
    return `https://wa.me/${this.tel}?text=${encodeURIComponent(this.message)}`;
  },
};

// Client decided to use Facebook instead of Instagram — confirmed handle.
export const facebookHandle = "@ehrremodeling";
export const facebookUrl = "https://facebook.com/ehrremodeling";

export const contacts = [
  {
    name: "Bianca Moreira",
    role: "Estimates & Scheduling",
    phone: "(954) 696-4859",
    tel: "+19546964859",
  },
  { name: "Leonardo Haluche", role: "Owner", phone: "(954) 826-5786", tel: "+19548265786" },
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
  // General remodeling — real services offered; using existing project photography
  // until dedicated kitchen/bath/carpentry/painting photos are available.
  {
    title: "Kitchen Remodeling",
    copy: "Full and partial kitchen remodels — cabinetry, counters, finishes and layout changes.",
    image: detailWood,
    group: "remodeling",
  },
  {
    title: "Bathroom Remodeling",
    copy: "Bathroom renovations from a full gut to a refresh of fixtures, tile and finishes.",
    image: projectGlass,
    group: "remodeling",
  },
  {
    title: "Carpentry",
    copy: "Custom carpentry and trim work built and finished to match the rest of your home.",
    image: detailCraft,
    group: "remodeling",
  },
  {
    title: "Interior Painting",
    copy: "Interior painting and stain work, prepped and finished to a clean, lasting result.",
    image: projectModern,
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

export const stairsFaq = [
  {
    question: "Do you build custom staircases in Ocala, FL?",
    answer:
      "Yes — Ocala is one of our core service areas, alongside Orlando, Gainesville and Tampa. We build oak wood staircases, remodel existing stairs, and install glass, metal or cable railings for homeowners throughout Central Florida.",
  },
  {
    question: "How long does a stair remodel usually take?",
    answer:
      "Most stair remodels (new treads, risers and railings on an existing staircase) run 1–2 weeks once materials are ready. A full custom oak staircase built from the subfloor up takes longer. We give you a specific timeline with your free, no-pressure estimate.",
  },
  {
    question: "What materials can I choose for my stair railing?",
    answer:
      "Solid oak, frameless glass, powder-coated black metal, or cable railing — we build around your home's existing layout and trim, so the staircase matches the rest of the house rather than looking bolted on.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes — we carry ${business.insurance}. Ask us for proof of coverage when you request your free estimate.`,
  },
  {
    question: "Can you remodel a staircase that currently has carpet?",
    answer:
      "Absolutely — replacing worn carpet with solid oak treads and risers, and updating a dated balustrade at the same time, is one of our most requested projects.",
  },
  {
    question: "How much does a new staircase cost?",
    answer:
      "It depends on the size of the staircase, the materials you choose (oak, glass, metal or cable) and whether it's a full rebuild or a remodel of what's already there. We keep estimates free and honest — get in touch with a few photos of your current stairs for the most accurate number.",
  },
];
