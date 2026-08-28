import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Free Estimate",
    copy: "We visit or review your photos and give you a clear, no-pressure estimate.",
  },
  {
    n: "02",
    title: "Materials & Scope",
    copy: "Materials, timeline and scope are confirmed in writing before work starts.",
  },
  {
    n: "03",
    title: "Build",
    copy: "Each component is built and prepared with precision, on the agreed schedule.",
  },
  {
    n: "04",
    title: "Installation",
    copy: "Our team completes the installation and walks the finished job with you.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <p className="eyebrow">Our Process</p>
        <h2 className="display-sm mt-6 max-w-2xl">From Vision to Installation.</h2>
      </Reveal>

      <ol className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {steps.map((s, i) => (
          <Reveal key={s.n} as="li" delay={i * 120} className="relative">
            <span className="absolute -top-8 left-0 hidden h-px w-full origin-left bg-border lg:block">
              <span
                className="block h-px w-full origin-left scale-x-0 animate-[lineIn_1.6s_ease-out_forwards] bg-bronze"
                style={{ animationDelay: `${i * 220}ms` }}
              />
            </span>
            <span className="font-serif text-4xl text-bronze">{s.n}</span>
            <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-[1.9] text-muted-foreground">{s.copy}</p>
          </Reveal>
        ))}
      </ol>

      <style>{`@keyframes lineIn{to{transform:scaleX(1)}}`}</style>
    </section>
  );
}
