import { materials } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function MaterialDetails() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-8">
        <h2 className="display-sm max-w-lg">Every Detail Matters.</h2>
        <p className="max-w-md text-[15px] leading-[1.9] text-muted-foreground">
          Materials define the character of a staircase. We combine wood, metal and glass to create
          solutions that complement the architecture of each home.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {materials.map((m, i) => (
          <Reveal key={m.label} delay={i * 80} className="group">
            <div className="overflow-hidden">
              <img
                src={m.image}
                alt={`${m.label} detail`}
                loading="lazy"
                className="h-[34vh] min-h-[220px] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.07] lg:h-[52vh]"
              />
            </div>
            <p className="mt-4 text-[11px] tracking-[0.28em] uppercase">{m.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
