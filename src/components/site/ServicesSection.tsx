import { services } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="display-sm mt-6 max-w-2xl">Crafted Around Your Space.</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90} as="article" className="group">
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="mt-7 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-[1.9] text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
