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

// Web3Forms (web3forms.com) — free forever, no backend needed. This is the
// form's public access key (safe to expose client-side, same as an API key
// scoped only to receiving this one form's submissions). Notifications
// currently go to camarguinhocap@gmail.com; swap the recipient in the
// Web3Forms dashboard (Element Home Remodeling — Estimate Form → Settings)
// once Léo verifies leonardohaluche@gmail.com there.
const WEB3FORMS_ACCESS_KEY = "8397f17d-5bc1-446d-a7ae-f2cbbd382997";

// Cloudinary (cloudinary.com) — free plan, used only to host photos the
// visitor attaches to the estimate form. Web3Forms' free plan can't forward
// file attachments (that's a paid feature), so instead we upload each photo
// straight from the browser to Cloudinary (unsigned upload preset — safe to
// expose client-side, it can only create new assets in the
// "estimate-form-photos" folder, not read/delete anything) and send the
// resulting links as text in the notification email.
const CLOUDINARY_CLOUD_NAME = "bwxfwi5s";
const CLOUDINARY_UPLOAD_PRESET = "ehr_estimate_form";

async function uploadPhotosToCloudinary(files: File[]): Promise<string[]> {
  const uploads = files.map(async (file) => {
    const body = new FormData();
    body.append("file", file);
    body.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body },
    );
    const result = await response.json();
    if (!response.ok) throw new Error(result?.error?.message ?? "Photo upload failed");
    return result.secure_url as string;
  });

  return Promise.all(uploads);
}

export function ContactSection({
  defaultProjectType,
}: {
  /** Preselect a project type — used on the /stairs landing page. */
  defaultProjectType?: string;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);

    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", "New Estimate Request — Element Home Remodeling");
      formData.append("from_name", "Element Home Remodeling — Website");

      if (files.length > 0) {
        const photoUrls = await uploadPhotosToCloudinary(files);
        formData.append("photos", photoUrls.map((url, i) => `Photo ${i + 1}: ${url}`).join("\n"));
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (!result.success) throw new Error(result.message ?? "Submission failed");

      toast.success("Thank you — your request has been sent.", {
        description: `Our team will follow up shortly. For an immediate response, call ${contacts[0]!.phone}.`,
      });
      form.reset();
      setFiles([]);
      trackEvent("form_submit");
      navigate({ to: "/thank-you" });
    } catch {
      toast.error("Something went wrong sending your request.", {
        description: `Please try again, or call us directly at ${contacts[0]!.phone}.`,
      });
    } finally {
      setSubmitting(false);
    }
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
              <button
                type="submit"
                disabled={submitting}
                className="btn-base btn-solid w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending…" : "Get My Free Estimate"}
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
            <li>
              <p className="eyebrow">Office</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {business.address.full}
              </p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
