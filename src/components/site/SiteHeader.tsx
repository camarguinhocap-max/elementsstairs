import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
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

const serviceLinks = [
  { label: "All Services", to: "/services" },
  { label: "Stairs", to: "/stairs" },
  { label: "Kitchen Remodeling", to: "/kitchen-remodeling" },
  { label: "Bathroom Remodeling", to: "/bathroom-remodeling" },
  { label: "Custom Closets", to: "/custom-closets" },
];

const desktopLinkClass =
  "text-[11px] tracking-[0.22em] text-ink-muted uppercase transition-colors duration-500 hover:text-bronze";

// Opens on mouse hover, or with the chevron button on touch screens and keyboards.
function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onPointerEnter={(e) => e.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <div className="flex items-center gap-1.5">
        <Link
          to="/services"
          className={desktopLinkClass}
          activeProps={{ className: "text-ink-foreground" }}
        >
          Services
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Show services menu"
          aria-expanded={open}
          aria-controls="services-menu"
          className="text-ink-muted transition-colors duration-500 hover:text-bronze"
        >
          <ChevronDown
            className={cn("size-3 transition-transform duration-300", open && "rotate-180")}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div
        id="services-menu"
        className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-opacity duration-300",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex w-64 flex-col gap-4 border border-ink-muted/15 bg-ink px-6 py-6">
          {serviceLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className={desktopLinkClass}
                activeProps={{ className: "text-ink-foreground" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
          <img src={logo.icon} alt="" className="h-9 w-9 shrink-0 rounded-md sm:h-11 sm:w-11" />
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
          {nav.map((item) =>
            item.to === "/services" ? (
              <ServicesDropdown key={item.to} />
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={desktopLinkClass}
                activeProps={{ className: "text-ink-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
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
          "transition-[max-height,opacity] duration-700 ease-out lg:hidden",
          open
            ? "max-h-[calc(100svh-5rem)] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 pt-10 pb-10 sm:px-10">
          {nav.map((item) => (
            <div key={item.to} className="flex flex-col gap-4">
              <Link
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-ink-foreground"
              >
                {item.label}
              </Link>
              {item.to === "/services" && (
                <div className="flex flex-col gap-2 border-l border-ink-muted/25 pl-5">
                  {serviceLinks.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      onClick={() => setOpen(false)}
                      className="py-1 text-[11px] tracking-[0.22em] text-ink-muted uppercase"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
