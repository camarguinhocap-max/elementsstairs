import { Hammer } from "lucide-react";
import { services, type Service } from "@/lib/site-data";
import { Reveal } from "./Reveal";

function ServiceCard({ s, delay }: { s: Service; delay: number }) {
  return (
    <Reveal delay={delay} as="article" className="group">
      <div className="relative overflow-hidden">
        {s.image ? (
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-dashed border-border bg-muted text-muted-foreground">
            <Hammer className="size-6" strokeWidth={1.25} />
            <span className="text-[11px] tracking-[0.14em] uppercase">Photos coming soon</span>
          </div>
        )}
        {s.flagship && (
          <span className="absolute top-3 left-3 bg-bronze px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-ink-foreground uppercase">
            Signature Service
          </span>
        )}
      </div>
      <h3 className="mt-7 font-serif text-2xl">{s.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-[1.9] text-muted-foreground">{s.copy}</p>
    </Reveal>
  );
}

export function ServicesSection() {
  const stairs = services.filter((s) => s.group === "stairs");
  const remodeling = services.filter((s) => s.group === "remodeling");

  return (
    <section id="services" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow">Stairs &amp; Railings</p>
          <h2 className="display-sm mt-6 max-w-2xl">Our Priority: Your Staircase.</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {stairs.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={(i % 3) * 90} />
          ))}
        </div>

        <Reveal className="mt-28 border-t border-border pt-16">
          <p className="eyebrow">General Remodeling</p>
          <h2 className="display-sm mt-6 max-w-2xl">Beyond Stairs, We Remodel Homes.</h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {remodeling.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={(i % 3) * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
