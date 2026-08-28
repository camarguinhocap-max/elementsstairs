import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-7",
  "lg:col-span-7",
];

const heights = [
  "aspect-[4/5] lg:aspect-[7/9]",
  "aspect-[16/10] lg:aspect-[16/10]",
  "aspect-[16/10] lg:aspect-[16/10]",
  "aspect-[4/5] lg:aspect-[5/7]",
  "aspect-[16/9] lg:aspect-[21/9]",
  "aspect-[16/9] lg:aspect-[21/9]",
];

export function FeaturedProjects() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="display-sm mt-6">Selected Projects</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Craftsmanship designed around architecture.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 2) * 90}
              className={cn("group", spans[i % spans.length])}
            >
              <button
                onClick={() => setIndex(i)}
                className="relative block w-full overflow-hidden text-left"
              >
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.category}`}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105",
                    heights[i % heights.length],
                  )}
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/55" />
                <span className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="block translate-y-2 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="eyebrow-light block">{p.category}</span>
                    <span className="mt-3 block font-serif text-2xl text-ink-foreground sm:text-3xl">
                      {p.title}
                    </span>
                    <span className="mt-1 block text-xs tracking-[0.16em] text-ink-muted uppercase">
                      {p.place}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-bronze uppercase">
                      View Project <ArrowRight className="size-4" strokeWidth={1.25} />
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={projects}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </section>
  );
}
