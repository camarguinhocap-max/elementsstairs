import { Reveal } from "./Reveal";

const pillars = [
  { title: "Custom Design", copy: "Built around your space." },
  {
    title: "Quality Materials",
    copy: "Wood, metal and glass selected for durability and beauty.",
  },
  {
    title: "Expert Craftsmanship",
    copy: "Precision from fabrication through final installation.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-ink py-24 text-ink-foreground sm:py-36">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10">
        <Reveal className="max-w-4xl">
          <h2 className="display-sm">
            Built With Precision.
            <br />
            Designed to Last.
          </h2>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.9] text-ink-muted">
            Every project reflects our commitment to craftsmanship, quality materials and attention
            to detail.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-ink-muted/15 pt-14 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
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
