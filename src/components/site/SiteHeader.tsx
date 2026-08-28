import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { business } from "@/lib/site-data";

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

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out",
        solid ? "bg-ink/95 py-4 backdrop-blur-md" : "bg-transparent py-7",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <Link to="/" className="group" onClick={() => setOpen(false)}>
          <span className="block font-serif text-base leading-none tracking-[0.1em] text-ink-foreground uppercase sm:text-lg">
            {business.shortName}
          </span>
          <span className="mt-1 block text-[9px] leading-none tracking-[0.28em] text-ink-muted uppercase">
            Stairs &amp; Home Remodeling
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
