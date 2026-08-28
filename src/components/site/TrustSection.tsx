import { business } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function TrustSection() {
  return (
    <section className="bg-ink py-24 text-ink-foreground sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal className="max-w-4xl">
          <h2 className="display-sm">
            Why Homeowners
            <br />
            Choose {business.name}.
          </h2>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-ink-muted">
            {business.insurance}. Free estimates, no pressure, and a straight answer about timeline
            and scope before we start.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-ink-muted/15 pt-14 md:grid-cols-3 md:gap-8">
          {business.differentiators.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <p className="eyebrow-light">{p.title}</p>
              <p className="mt-5 max-w-xs font-serif text-2xl leading-snug">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
