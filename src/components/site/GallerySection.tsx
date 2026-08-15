import { useMemo, useState } from "react";
import { galleryFilters, galleryItems } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [filter, setFilter] = useState("all");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((g) => g.tags.includes(filter))),
    [filter],
  );

  return (
    <section id="gallery" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal>
          <p className="eyebrow">Gallery</p>
          <h2 className="display-sm mt-6">A Closer Look.</h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-6">
          {galleryFilters.map((f) => (
            <button
              key={f.value}
              onClick={() => {
                setFilter(f.value);
                setIndex(null);
              }}
              className={cn(
                "text-[11px] tracking-[0.22em] uppercase transition-colors duration-500",
                filter === f.value ? "text-foreground" : "text-muted-foreground hover:text-bronze",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 70} className="group break-inside-avoid">
              <button onClick={() => setIndex(i)} className="relative block w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/45" />
                <span className="absolute bottom-0 left-0 p-6 text-left opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <span className="eyebrow-light block">{item.category}</span>
                  <span className="mt-2 block font-serif text-xl text-ink-foreground">
                    {item.title}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onIndexChange={setIndex} />
    </section>
  );
}
