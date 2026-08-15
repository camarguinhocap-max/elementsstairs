import { Link } from "@tanstack/react-router";
import { contacts, images } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const office = contacts[2]!;

  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={images.cta}
        alt="Sculptural dark staircase in a luxury living space at dusk"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/70" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-32 sm:px-10 sm:py-48">
        <Reveal className="max-w-3xl">
          <h2 className="display-sm text-ink-foreground">
            Your Staircase Can Transform
            <br />
            The Entire Space.
          </h2>
          <p className="mt-8 text-[15px] leading-relaxed text-ink-muted">
            Let&rsquo;s create something exceptional for your home.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-base btn-solid">
              Request a Quote
            </Link>
            <a href={`tel:${office.tel}`} className="btn-base btn-outline-light">
              Call Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
