import { Link } from "@tanstack/react-router";
import { contacts, instagramHandle, instagramUrl } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl tracking-[0.2em] uppercase">Element</p>
            <p className="mt-1 text-[10px] tracking-[0.36em] text-ink-muted uppercase">
              Stairs &amp; Railings
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
              Custom stairs, railings and staircase remodeling for homes across South Florida.
            </p>
          </div>

          <div>
            <p className="eyebrow-light">Navigation</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-muted">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Process", "/process"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to!} className="transition-colors hover:text-bronze">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Services</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-muted">
              {[
                "Custom Stairs",
                "Stair Remodeling",
                "Wood Stairs",
                "Metal Railings",
                "Glass Railings",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="transition-colors hover:text-bronze">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Contact</p>
            <ul className="mt-6 space-y-4 text-sm text-ink-muted">
              {contacts.map((c) => (
                <li key={c.tel}>
                  <span className="block text-ink-foreground">{c.name}</span>
                  <a href={`tel:${c.tel}`} className="transition-colors hover:text-bronze">
                    {c.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-bronze"
                >
                  Instagram {instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-ink-muted/15 pt-8 text-[11px] tracking-[0.14em] text-ink-muted uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Element Stairs &amp; Railings. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="transition-colors hover:text-bronze">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-bronze">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
