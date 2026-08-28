import { Link } from "@tanstack/react-router";
import { business, contacts, instagramHandle, instagramUrl, logo, services } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-20 sm:px-10 sm:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo.icon} alt="" className="h-10 w-10 shrink-0 rounded bg-white p-1" />
              <div>
                <p className="font-serif text-lg tracking-[0.04em] uppercase">{business.name}</p>
                <p className="mt-1 text-[10px] tracking-[0.26em] text-ink-muted uppercase">
                  Stairs &amp; Home Remodeling
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
              Oak wood staircases and general home remodeling for {business.cities.join(", ")}, FL.{" "}
              {business.insurance}.
            </p>
            <p className="mt-4 text-sm text-ink-muted">{business.hours}</p>
          </div>

          <div>
            <p className="eyebrow-light">Navigation</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-muted">
              {[
                ["Home", "/"],
                ["Stairs", "/stairs"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["About", "/about"],
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
              {services
                .filter((s) => s.flagship || s.group === "stairs")
                .slice(0, 5)
                .map((s) => (
                  <li key={s.title}>
                    <Link to="/services" className="transition-colors hover:text-bronze">
                      {s.title}
                    </Link>
                  </li>
                ))}
              <li>
                <Link to="/services" className="transition-colors hover:text-bronze">
                  General Remodeling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Contact</p>
            <ul className="mt-6 space-y-4 text-sm text-ink-muted">
              {contacts.map((c) => (
                <li key={c.tel}>
                  <span className="block text-ink-foreground">
                    {c.name} — {c.role}
                  </span>
                  <a
                    href={`tel:${c.tel}`}
                    onClick={() => trackEvent("phone_click")}
                    className="transition-colors hover:text-bronze"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="transition-colors hover:text-bronze"
                >
                  {business.email}
                </a>
              </li>
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
          <p>© 2026 {business.name}. All Rights Reserved.</p>
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
