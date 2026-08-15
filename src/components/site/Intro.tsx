import { images } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">The Art of Craftsmanship</p>
          <h2 className="display-sm mt-8 max-w-2xl">
            More Than Stairs.
            <br />A Statement in Your Home.
          </h2>
          <div className="mt-10 max-w-xl space-y-6 text-[15px] leading-[1.9] text-muted-foreground">
            <p>
              At Element Stairs &amp; Railings, we believe a staircase should be more than a
              functional structure. It should become part of the architecture, character and
              identity of your home.
            </p>
            <p>
              From traditional craftsmanship to contemporary floating stairs and glass railings,
              every project is designed and built with attention to proportion, materials and
              detail.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden">
            <img
              src={images.intro}
              alt="Curved custom staircase with wood treads and a slim metal handrail"
              width={1024}
              height={1440}
              loading="lazy"
              className="h-[70vh] min-h-[420px] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
