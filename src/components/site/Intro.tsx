import { images } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">Our Signature Project</p>
          <h2 className="display-sm mt-8 max-w-2xl">
            The Oak Wood Staircase,
            <br />
            Built to Last.
          </h2>
          <div className="mt-10 max-w-xl space-y-6 text-[15px] leading-[1.9] text-muted-foreground">
            <p>
              A solid oak staircase is one of the highest-impact upgrades you can make to a home —
              and it&rsquo;s the project we&rsquo;re asked for most. We build and finish every one
              on site, matched to your home&rsquo;s layout and existing trim.
            </p>
            <p>
              We also handle stair remodeling, metal and glass railings, and general home remodeling
              — kitchens, bathrooms, carpentry and painting — with the same clean, organized
              approach on every job.
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
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
