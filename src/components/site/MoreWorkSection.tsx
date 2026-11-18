import { Link } from "@tanstack/react-router";
import kitchenPhoto from "@/assets/gallery/kitchen-04.jpg";
import bathroomPhoto from "@/assets/gallery/bathroom-01.jpg";
import closetPhoto from "@/assets/gallery/closet-01.jpg";
import { Reveal } from "./Reveal";

const cards = [
  {
    title: "Kitchens",
    to: "/kitchen-remodeling",
    image: kitchenPhoto,
    alt: "Wood-grain kitchen cabinetry with stone backsplash and under-cabinet lighting by Element Home Remodeling",
  },
  {
    title: "Bathrooms",
    to: "/bathroom-remodeling",
    image: bathroomPhoto,
    alt: "Bathroom with double vanity, black countertops, backlit mirror and marble-look tile by Element Home Remodeling",
  },
  {
    title: "Closets",
    to: "/custom-closets",
    image: closetPhoto,
    alt: "Custom walk-in closet with built-in shelves and drawers by Element Home Remodeling",
  },
] as const;

export function MoreWorkSection() {
  return (
    <section className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <h2 className="display-sm max-w-2xl">More of Our Work</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.to} delay={i * 90} as="article" className="group">
              <Link to={card.to} className="block">
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <h3 className="mt-7 font-serif text-2xl">{card.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
