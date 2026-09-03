import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { business, logo } from "@/lib/site-data";

const nav = [
  { label: "Home", to: "/" },
  { label: "Stairs", to: "/stairs" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const compact = scrolled || open;

  // The header always has a solid, opaque background (no transparent
  // "floating over the hero video" state). It used to fade in on scroll,
  // but on some real Android phones the Hero heading could render behind
  // the still-transparent header (even before any scroll), producing
  // garbled overlapping text. A permanently solid header removes that
  // failure mode entirely, regardless of the exact viewport-height quirk
  // that caused it. Only the vertical padding still animates on scroll.
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur-md transition-[padding] duration-300 ease-out",
        compact ? "py-4" : "py-7",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.icon}
            alt=""
            className="h-9 w-9 shrink-0 rounded-md sm:h-11 sm:w-11"
          />
          <span className="flex flex-col">
            <span className="block font-serif text-base leading-none tracking-[0.05em] text-ink-foreground uppercase sm:text-lg">
              {business.name}
            </span>
            <span className="mt-1 block text-[9px] leading-none tracking-[0.28em] text-ink-muted uppercase">
              Stairs &amp; Home Remodeling
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] tracking-[0.22em] text-ink-muted uppercase transition-colors duration-500 hover:text-bronze"
              activeProps={{ className: "text-ink-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-base btn-outline-light px-6 py-3">
            Free Estimate
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="p-1 text-ink-foreground lg:hidden"
        >
          {open ? (
            <X className="size-6" strokeWidth={1} />
          ) : (
            <Menu className="size-6" strokeWidth={1} />
          )}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-700 ease-out lg:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 pt-10 pb-10 sm:px-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-ink-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-base btn-outline-light mt-2 self-start"
          >
            Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
