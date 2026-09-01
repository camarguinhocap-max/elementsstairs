import { galleryItems, facebookHandle, facebookUrl } from "@/lib/site-data";
import { Reveal } from "./Reveal";

const feed = galleryItems.slice(2, 8);

export function FacebookSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="eyebrow">Follow Our Work</p>
          <h2 className="display-sm mt-6">See What We&rsquo;re Building.</h2>
        </div>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-base btn-outline-dark"
        >
          Follow on Facebook
        </a>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {feed.map((item, i) => (
          <Reveal key={item.id} delay={i * 60} className="group">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden"
            >
              <img
                src={item.image}
                alt={`${item.title} on Facebook ${facebookHandle}`}
                loading="lazy"
                className="aspect-square w-full object-cover grayscale-[0.15] transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
        {facebookHandle}
      </p>
    </section>
  );
}
