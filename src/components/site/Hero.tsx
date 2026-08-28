import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { business, contacts, images } from "@/lib/site-data";
import heroVideo from "@/assets/hero-staircase.mp4.asset.json";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 900) * 0.18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    const attempt = el.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <video
          ref={videoRef}
          src={heroVideo.url}
          poster={images.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          aria-label="Cinematic footage of a custom floating staircase with white oak treads, black steel structure and glass railing"
          className="h-[112%] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink/85" />

      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-24 sm:px-10 sm:pb-28">
        <p className="eyebrow-light">Serving {business.cities.join(", ")}, FL</p>
        <h1 className="display mt-6 max-w-4xl text-ink-foreground">
          Oak Wood Staircases
          <br />
          &amp; Home Remodeling, Done Right.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted">
          From custom oak staircases to kitchens, bathrooms and full home remodeling — organized job
          sites, quality materials, and {business.insurance}. Free, no-pressure estimates.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/stairs" className="btn-base btn-outline-light">
            See Our Stair Work
          </Link>
          <Link to="/contact" className="btn-base btn-solid">
            Get a Free Estimate
          </Link>
          <a href={`tel:${contacts[0]!.tel}`} className="btn-base btn-outline-light">
            Call {contacts[0]!.phone}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-[9px] tracking-[0.3em] text-ink-muted uppercase">Scroll</span>
        <span className="h-14 w-px overflow-hidden bg-ink-muted/30">
          <span className="block h-6 w-px animate-[scrollLine_2.4s_ease-in-out_infinite] bg-bronze" />
        </span>
      </div>

      <style>{`@keyframes scrollLine{0%{transform:translateY(-100%)}100%{transform:translateY(240%)}}`}</style>
    </section>
  );
}
