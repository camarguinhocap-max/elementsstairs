import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Upload, X } from "lucide-react";
import { toast } from "sonner";
import { business, contacts, instagramHandle, instagramUrl } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";
import { Reveal } from "./Reveal";

const projectTypes = [
  "Oak Wood Staircase",
  "Stair Remodeling",
  "Custom Stairs (wood/glass/metal/cable)",
  "Metal or Glass Railings",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Carpentry",
  "Interior Painting",
  "Other",
];

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus:border-bronze";

export function ContactSection({
  defaultProjectType,
}: {
  /** Preselect a project type — used on the /stairs landing page. */
  defaultProjectType?: string;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  // NOTE: this form does not send email yet — no backend/form service is wired
  // up (Fase 4 of the launch checklist). Hook this up to a real endpoint
  // (e.g. a Cloudflare Pages Function, Formspree, or similar) before launch.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    toast.success("Thank you — your request has been prepared.", {
      description: `Our team will follow up shortly. For an immediate response, call ${contacts[0]!.phone}.`,
    });
    form.reset();
    setFiles([]);
    trackEvent("form_submit");
    navigate({ to: "/thank-you" });
  }

  return (
    <section id="contact" className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="display-sm mt-6 max-w-2xl">Let&rsquo;s Talk About Your Project.</h2>
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
        <Reveal>
          <form onSubmit={onSubmit} className="grid gap-10 sm:grid-cols-2">
            <label className="block">
              <span className="eyebrow">Name</span>
              <input
                required
                name="name"
                autoComplete="name"
                className={fieldClass}
                placeholder="Full name"
              />
            </label>
            <label className="block">
              <span className="eyebrow">Phone</span>
              <input
                required
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClass}
                placeholder="(000) 000-0000"
              />
            </label>
            <label className="block">
              <span className="eyebrow">Email</span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className={fieldClass}
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="eyebrow">ZIP Code</span>
              <input
                required
                name="zip"
                inputMode="numeric"
                pattern="[0-9]{5}"
                className={fieldClass}
                placeholder="34471"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="eyebrow">Project Type</span>
              <select
                required
                name="projectType"
                defaultValue={defaultProjectType ?? ""}
                className={fieldClass}
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="eyebrow">Project Description</span>
              <textarea
                name="description"
                rows={4}
                className={`${fieldClass} resize-none`}
                placeholder="Tell us about your space, style and timeline."
              />
            </label>

            <div className="sm:col-span-2">
              <span className="eyebrow">Upload Project Photos</span>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              />
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="mt-4 flex w-full items-center justify-center gap-3 border border-dashed border-border py-8 text-[11px] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:border-bronze hover:text-bronze"
              >
                <Upload className="size-4" strokeWidth={1.25} />
                Add photos of your project
              </button>
              {files.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {files.map((f) => (
                    <li
                      key={f.name}
                      className="flex items-center justify-between gap-4 border-b border-border pb-2 text-xs text-muted-foreground"
                    >
                      <span className="truncate">{f.name}</span>
                      <button
                        type="button"
                        aria-label={`Remove ${f.name}`}
                        onClick={() => setFiles((prev) => prev.filter((p) => p.name !== f.name))}
                        className="transition-colors hover:text-foreground"
                      >
                        <X className="size-3.5" strokeWidth={1.5} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-base btn-solid w-full sm:w-auto">
                Get My Free Estimate
              </button>
            </div>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-serif text-xl tracking-[0.06em] uppercase">{business.name}</p>
          <p className="mt-1 text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
            Stairs &amp; Home Remodeling
          </p>

          <ul className="mt-12 space-y-8">
            {contacts.map((c) => (
              <li key={c.tel}>
                <p className="eyebrow">
                  {c.name} — {c.role}
                </p>
                <a
                  href={`tel:${c.tel}`}
                  onClick={() => trackEvent("phone_click")}
                  className="mt-2 block font-serif text-2xl transition-colors hover:text-bronze"
                >
                  {c.phone}
                </a>
              </li>
            ))}
            <li>
              <p className="eyebrow">Email</p>
              <a
                href={`mailto:${business.email}`}
                className="mt-2 block font-serif text-2xl transition-colors hover:text-bronze"
              >
                {business.email}
              </a>
            </li>
            <li>
              <p className="eyebrow">Instagram</p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-serif text-2xl transition-colors hover:text-bronze"
              >
                {instagramHandle}
              </a>
            </li>
            <li>
              <p className="eyebrow">Service Area</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {business.cities.join(", ")} and surrounding areas, FL.
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{business.hours}</p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
