import type { FaqItem } from "@/components/site/FaqSection";
import { business } from "@/lib/site-data";

export type ServiceDetailBlock = {
  title: string;
  intro: string[];
  items?: { label: string; text: string }[];
  outro?: string[];
};

export type ServicePageContent = {
  heading: string;
  blocks: ServiceDetailBlock[];
  faqTitle: string;
  faq: FaqItem[];
};

const cities = business.cities.join(", ");

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export const kitchenContent: ServicePageContent = {
  heading: "What to Expect From Your Kitchen Remodel",
  blocks: [
    {
      title: "What's Included",
      intro: [
        "A kitchen remodel can be as focused as new countertops and updated cabinets, or as complete as a new layout from the walls in. We start with how you actually use the room: where you cook, where things pile up, what feels cramped, and what you would keep if you could. The scope is then built around those answers, so the work goes where it will make a real difference.",
        "Depending on your project, the work can include:",
      ],
      items: [
        {
          label: "Cabinetry",
          text: "new cabinets or updates to the ones you have, with storage planned around the way you cook.",
        },
        {
          label: "Countertops and islands",
          text: "new work surfaces, with islands and peninsulas sized to suit the room.",
        },
        {
          label: "Backsplash and tile",
          text: "wall and floor tile selected to work with your counters and cabinets.",
        },
        {
          label: "Layout changes",
          text: "opening up or rearranging the room to improve flow, with any plumbing or electrical changes accounted for in the scope from the start.",
        },
        {
          label: "Finishes",
          text: "paint, trim, hardware, fixtures and lighting that tie the whole room together.",
        },
      ],
      outro: [
        "Partial remodels are just as welcome as full ones. If your cabinets are solid and only the counters and finishes feel dated, we will say so instead of recommending that you replace everything.",
      ],
    },
    {
      title: "How the Process Works",
      intro: ["Every kitchen follows the same four steps, so you always know what comes next."],
      items: [
        {
          label: "Free estimate",
          text: "we visit your home or review your photos, talk through what you want to change, and give you a clear, no-pressure estimate.",
        },
        {
          label: "Project planning",
          text: "together we settle the layout, materials and finishes. Materials, timeline and scope are confirmed in writing before work starts.",
        },
        {
          label: "Construction",
          text: "our team removes what is being replaced and builds out the new kitchen, keeping the job site clean and organized along the way.",
        },
        {
          label: "Final walkthrough",
          text: "when the work is finished, we walk the kitchen with you so you can review the details and raise anything you would like us to look at.",
        },
      ],
      outro: [
        "Remodeling can uncover surprises once old cabinets and finishes come out. If that happens, we explain what we found and talk through your options before moving forward.",
        "To make the first visit productive, it helps to save a few photos of kitchens you like, note what frustrates you about the current room, and think about which appliances you plan to keep. You do not need a finished plan. Many projects begin with nothing more than a list of what is not working, and the details come together as we talk through the options.",
      ],
    },
    {
      title: "Materials and Finishes",
      intro: [
        "Material choices shape how a kitchen looks and how much care it needs over the years. These are some of the options homeowners most often compare:",
      ],
      items: [
        {
          label: "Cabinets",
          text: "natural wood, painted finishes and wood-grain surfaces, in flat-panel or more traditional door styles.",
        },
        {
          label: "Countertops",
          text: "natural and engineered stone, each with its own look and level of upkeep.",
        },
        {
          label: "Backsplashes",
          text: "porcelain or ceramic tile, mosaics, or a stone slab that continues up from the counter.",
        },
        {
          label: "Flooring",
          text: "tile and wood floors chosen to handle everyday kitchen traffic.",
        },
        {
          label: "Hardware and lighting",
          text: "faucets, pulls, pendant lights and under-cabinet lighting, the details you notice every day.",
        },
      ],
      outro: [
        "The right choice depends on your style, your budget and how hard your kitchen works. We can walk you through the trade-offs so you can decide with confidence.",
      ],
    },
    {
      title: "Serving Central Florida",
      intro: [
        `We remodel kitchens for homeowners in ${cities} and the surrounding Central Florida communities. Homes across the region vary widely, from older houses with closed-off kitchens to newer builds that simply need a more personal finish, so each project is planned around the home it is in.`,
        "Florida's humidity and the daily traffic of a busy household are worth keeping in mind when choosing finishes, so we factor the way your home is used into the recommendations we make.",
        "All of the work happens at your home. If you are not sure whether your address is in our service area, ask when you request your free estimate and we will let you know.",
      ],
    },
  ],
  faqTitle: "Kitchen Remodeling — Frequently Asked Questions",
  faq: [
    {
      question: "How long does a kitchen remodel take?",
      answer:
        "It depends on the size of the kitchen, the scope of the work and when your materials are available. Updating counters and finishes generally moves faster than a full remodel with layout changes. We give you a timeline for your specific project and confirm it in writing before work starts.",
    },
    {
      question: "Do I need a permit to remodel my kitchen?",
      answer:
        "It depends on the work. Changes to plumbing, electrical, gas lines or walls commonly require a permit, while cosmetic updates often do not. Requirements vary by city and county, so we go over what your project is likely to need before work begins.",
    },
    {
      question: "Can I use my kitchen during the remodel?",
      answer:
        "With a smaller update, you may be able to keep partial use of the room. With a full remodel, plan on the kitchen being out of service for much of the project. We will talk through what to expect so you can set up a temporary space elsewhere in your home.",
    },
    {
      question: "Do you help choose materials and finishes?",
      answer:
        "Yes. You can bring your own ideas or start from scratch. We will talk through cabinets, counters, tile and finishes with you, and explain how each option fits your style, your budget and the way you use your kitchen.",
    },
    {
      question: "What cities do you serve?",
      answer: `We serve homeowners in ${cities} and the surrounding areas of Central Florida. If you live nearby and are not sure whether we cover your address, contact us and we will let you know.`,
    },
  ],
};

export const bathroomContent: ServicePageContent = {
  heading: "What to Expect From Your Bathroom Remodel",
  blocks: [
    {
      title: "What's Included",
      intro: [
        "Bathroom projects range from a simple refresh to a complete gut renovation. Some homeowners want new fixtures and a cleaner look. Others want to rethink the whole room, replacing a dated tub with a walk-in shower or making better use of a tight floor plan. We start by understanding what is not working today, then shape the scope around what will improve your daily routine.",
        "Depending on your project, the work can include:",
      ],
      items: [
        {
          label: "Showers and tubs",
          text: "new walk-in showers, glass enclosures, built-in benches and niches, or a tub that suits the room.",
        },
        {
          label: "Tile",
          text: "floors, shower walls and accent walls, laid out to fit the proportions of the space.",
        },
        {
          label: "Vanities and storage",
          text: "single or double vanities, countertops and storage that keep everyday items within reach.",
        },
        {
          label: "Fixtures",
          text: "faucets, shower heads, toilets and sinks selected to work together.",
        },
        {
          label: "Lighting and finishes",
          text: "mirrors, lighting, paint, trim and hardware that complete the room.",
        },
      ],
      outro: [
        "A full gut is not always necessary. If the layout works and the room only needs updated fixtures, tile or finishes, a refresh may be the better fit, and we will tell you that up front.",
      ],
    },
    {
      title: "How the Process Works",
      intro: ["Every bathroom follows the same four steps, so you always know what comes next."],
      items: [
        {
          label: "Free estimate",
          text: "we visit your home or review your photos, talk through your goals, and give you a clear, no-pressure estimate.",
        },
        {
          label: "Project planning",
          text: "together we settle the layout, fixtures, tile and finishes. Materials, timeline and scope are confirmed in writing before work starts.",
        },
        {
          label: "Construction",
          text: "our team removes what is being replaced, prepares the room and installs the new bathroom, keeping the job site clean and organized along the way.",
        },
        {
          label: "Final walkthrough",
          text: "when the work is finished, we walk the bathroom with you so you can review the details and raise anything you would like us to look at.",
        },
      ],
      outro: [
        "Older bathrooms can hide surprises behind walls and floors. If we find something unexpected during demolition, we explain what we found and talk through your options before moving forward.",
        "To make the first visit productive, it helps to save a few photos of bathrooms you like, note what frustrates you about the current room, and think about who uses it each day. You do not need a finished plan. Many projects begin with nothing more than a list of what is not working, and the details come together as we talk through the options.",
      ],
    },
    {
      title: "Materials and Finishes",
      intro: [
        "A bathroom has to handle water and humidity every day, so materials need to look good and hold up well. These are some of the options homeowners most often compare:",
      ],
      items: [
        {
          label: "Wall and floor tile",
          text: "porcelain and ceramic tile, including large-format, stone-look and marble-look styles.",
        },
        {
          label: "Accent tile",
          text: "mosaics and patterned tile for a shower wall, a niche or a feature behind the tub.",
        },
        {
          label: "Vanity tops",
          text: "natural and engineered stone in light or dark tones.",
        },
        {
          label: "Cabinet finishes",
          text: "painted, natural wood and wood-grain vanities, freestanding or wall-mounted.",
        },
        {
          label: "Fixtures and glass",
          text: "chrome, brushed, black or brass finishes, paired with clear glass shower enclosures.",
        },
      ],
      outro: [
        "The right mix depends on your style, your budget and how the room is used. A busy family bathroom and a quiet primary suite often call for different choices, and we can walk you through the trade-offs.",
      ],
    },
    {
      title: "Serving Central Florida",
      intro: [
        `We remodel bathrooms for homeowners in ${cities} and the surrounding Central Florida communities. From compact guest baths to larger primary suites, each project is planned around the home it is in and the people who use it.`,
        "Florida's humidity makes ventilation and moisture-friendly materials worth discussing early, so we factor those conditions into the recommendations we make for your bathroom.",
        "All of the work happens at your home. If you are not sure whether your address is in our service area, ask when you request your free estimate and we will let you know.",
      ],
    },
  ],
  faqTitle: "Bathroom Remodeling — Frequently Asked Questions",
  faq: [
    {
      question: "How long does a bathroom remodel take?",
      answer:
        "It depends on the size of the room, the scope of the work and when your materials are available. A refresh of fixtures and finishes generally moves faster than a full gut renovation. We give you a timeline for your specific project and confirm it in writing before work starts.",
    },
    {
      question: "Do I need a permit to remodel my bathroom?",
      answer:
        "It depends on the work. Moving plumbing, changing electrical or altering walls commonly requires a permit, while cosmetic updates often do not. Requirements vary by city and county, so we go over what your project is likely to need before work begins.",
    },
    {
      question: "Can I use my bathroom during the remodel?",
      answer:
        "In most remodels, plan on the bathroom being out of service while the main work is underway. If it is the only bathroom in your home, tell us at the estimate so we can talk through the schedule and how to reduce the disruption.",
    },
    {
      question: "Do you help choose tile, fixtures and finishes?",
      answer:
        "Yes. You can bring your own ideas or start from scratch. We will talk through tile, vanities, fixtures and finishes with you, and explain how each option fits your style, your budget and the way you use the room.",
    },
    {
      question: "What cities do you serve?",
      answer: `We serve homeowners in ${cities} and the surrounding areas of Central Florida. If you live nearby and are not sure whether we cover your address, contact us and we will let you know.`,
    },
  ],
};

export const closetContent: ServicePageContent = {
  heading: "What to Expect From Your Custom Closet",
  blocks: [
    {
      title: "What's Included",
      intro: [
        "A custom closet starts with what you need to store, not with a standard kit. We look at the size and shape of the room, the clothes and belongings you keep there, and the daily habits that make a closet feel easy or frustrating. The built-ins are then designed around your home, so corners, ceiling height and awkward walls become usable space.",
        "Depending on your project, the work can include:",
      ],
      items: [
        {
          label: "Shelving",
          text: "open shelves for folded clothes, bags and items you want to see at a glance.",
        },
        {
          label: "Drawers",
          text: "built-in drawers that keep smaller items organized and out of sight.",
        },
        {
          label: "Hanging space",
          text: "long and double-hang sections planned around the clothes you actually own.",
        },
        {
          label: "Shoe and accessory storage",
          text: "dedicated shelves and compartments so everyday items have a place.",
        },
        {
          label: "Doors, mirrors and lighting",
          text: "cabinet doors, mirrors and lighting details, when your closet calls for them.",
        },
      ],
      outro: [
        "Whether you are finishing an empty walk-in or replacing wire shelving that no longer works, the goal is the same: a closet that fits your space and is simple to use every day.",
      ],
    },
    {
      title: "How the Process Works",
      intro: ["Every closet follows the same four steps, so you always know what comes next."],
      items: [
        {
          label: "Free estimate",
          text: "we visit your home or review your photos, look at the space, talk through what you need to store, and give you a clear, no-pressure estimate.",
        },
        {
          label: "Project planning",
          text: "together we settle the layout, storage mix and finishes. Materials, timeline and scope are confirmed in writing before work starts.",
        },
        {
          label: "Build and installation",
          text: "our team removes any existing shelving that is being replaced and installs the new built-ins, keeping the work area clean and organized along the way.",
        },
        {
          label: "Final walkthrough",
          text: "when the work is finished, we walk the closet with you so you can review the details and raise anything you would like us to look at.",
        },
      ],
      outro: [
        "Walls and floors in a finished home are not always perfectly straight. We take that into account during planning and installation, so the built-ins look like they belong in the room.",
        "To make the first visit productive, it helps to note what you store in the closet now, what never seems to fit, and whether more than one person shares the space. A few photos of closets you like are useful too. You do not need a finished plan. Many projects begin with nothing more than a list of what is not working, and the details come together as we talk through the options.",
      ],
    },
    {
      title: "Materials and Finishes",
      intro: [
        "The finish you choose sets the tone of the room, and the details determine how the closet works day to day. These are some of the options homeowners most often compare:",
      ],
      items: [
        {
          label: "Cabinet finishes",
          text: "light or warm wood-grain looks and clean painted styles.",
        },
        {
          label: "Drawer and door fronts",
          text: "simple flat fronts, framed doors or glass-front cabinets for display.",
        },
        {
          label: "Hardware",
          text: "pulls and handles in finishes that coordinate with the rest of your home.",
        },
        {
          label: "Mirrors",
          text: "full-length or built-in mirrors that make a smaller room feel brighter.",
        },
        {
          label: "Lighting",
          text: "lighting along shelves and hanging sections so your clothes are easy to see.",
        },
      ],
      outro: [
        "The right combination depends on your style, your budget and how much you want on display. We can walk you through the trade-offs so the closet matches the rest of your home.",
      ],
    },
    {
      title: "Serving Central Florida",
      intro: [
        `We build custom closets for homeowners in ${cities} and the surrounding Central Florida communities. From a primary walk-in to a smaller bedroom closet, each project is planned around the home it is in and the way you live.`,
        "Florida's humidity is also worth keeping in mind for closets, so airflow and the way your belongings are stored are part of the conversation when we plan your layout.",
        "All of the work happens at your home. If you are not sure whether your address is in our service area, ask when you request your free estimate and we will let you know.",
      ],
    },
  ],
  faqTitle: "Custom Closets — Frequently Asked Questions",
  faq: [
    {
      question: "How long does a custom closet project take?",
      answer:
        "It depends on the size of the closet, the design and when your materials are available. A simple layout generally moves faster than a large walk-in with many drawers and details. We give you a timeline for your specific project and confirm it in writing before work starts.",
    },
    {
      question: "Do I need a permit for a custom closet?",
      answer:
        "Built-in shelving and storage often do not need one, but moving walls or adding electrical work may. Requirements vary by city and county, so we go over what your project is likely to need before work begins.",
    },
    {
      question: "Do I need to empty my closet before installation?",
      answer:
        "Yes, the space needs to be clear so the team can work safely and keep your belongings protected. We will let you know when to have it ready, so you can plan where to keep your things during the project.",
    },
    {
      question: "Do you help choose the layout and finishes?",
      answer:
        "Yes. You can bring your own ideas or start from scratch. We will talk through shelving, drawers, hanging space and finishes with you, and explain how each option fits your style, your budget and what you need to store.",
    },
    {
      question: "What cities do you serve?",
      answer: `We serve homeowners in ${cities} and the surrounding areas of Central Florida. If you live nearby and are not sure whether we cover your address, contact us and we will let you know.`,
    },
  ],
};
