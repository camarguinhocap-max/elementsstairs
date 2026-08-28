import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  { quote: "[Customer review will be inserted here.]", name: "Customer Name", city: "Ocala, FL" },
  { quote: "[Customer review will be inserted here.]", name: "Customer Name", city: "Orlando, FL" },
  {
    quote: "[Customer review will be inserted here.]",
    name: "Customer Name",
    city: "Gainesville, FL",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const item = testimonials[i]!;

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="display-sm mt-6">What Our Clients Say</h2>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous testimonial"
            onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
            className="border border-border p-3 transition-colors hover:border-bronze hover:text-bronze"
          >
            <ChevronLeft className="size-4" strokeWidth={1.25} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setI((v) => (v + 1) % testimonials.length)}
            className="border border-border p-3 transition-colors hover:border-bronze hover:text-bronze"
          >
            <ChevronRight className="size-4" strokeWidth={1.25} />
          </button>
        </div>
      </Reveal>

      <div className="mt-16 overflow-hidden border-t border-border pt-14">
        <div
          className="flex transition-transform duration-[900ms] ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <blockquote key={idx} className="w-full shrink-0 pr-8">
              <p className="max-w-4xl font-serif text-3xl leading-[1.3] sm:text-5xl">
                <span className="text-bronze">“</span>
                {t.quote}
                <span className="text-bronze">”</span>
              </p>
              <footer className="mt-10 text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
                {t.name} — {t.city}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="mt-12 text-xs text-muted-foreground">
          Placeholder reviews. Real Google and customer reviews can be inserted here.
          <span className="sr-only">
            {" "}
            Currently showing testimonial {i + 1} by {item.name}.
          </span>
        </p>
      </div>
    </section>
  );
}
