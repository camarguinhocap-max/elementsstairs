import { useCallback, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MoveHorizontal } from "lucide-react";
import { transformations } from "@/lib/site-data";
import { Reveal } from "./Reveal";

function Slider({
  before,
  after,
  title,
  place,
}: {
  before: string;
  after: string;
  title: string;
  place: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, next)));
  }, []);

  return (
    <figure>
      <div
        ref={ref}
        className="relative h-[52vh] min-h-[320px] w-full cursor-ew-resize touch-none overflow-hidden select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as Element).setPointerCapture?.(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${title} — after`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img
            src={before}
            alt={`${title} — before`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <span className="absolute top-5 left-5 bg-ink/70 px-3 py-1.5 text-[10px] tracking-[0.24em] text-ink-foreground uppercase">
          Before
        </span>
        <span className="absolute top-5 right-5 bg-ink/70 px-3 py-1.5 text-[10px] tracking-[0.24em] text-ink-foreground uppercase">
          After
        </span>

        <div className="absolute inset-y-0 w-px bg-background/90" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-foreground shadow-lg">
            <MoveHorizontal className="size-4" strokeWidth={1.25} />
          </span>
        </div>

        <input
          type="range"
          min={2}
          max={98}
          value={pos}
          aria-label={`Reveal before and after for ${title}`}
          onChange={(e) => setPos(Number(e.target.value))}
          className="sr-only"
        />
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between gap-4">
        <span className="font-serif text-xl">{title}</span>
        <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">{place}</span>
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Before &amp; After</p>
        <h2 className="display-sm mt-6">Transforming the Heart of the Home.</h2>
        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          Sometimes the structure already exists. It simply needs a new vision.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        {transformations.map((t, i) => (
          <Reveal key={t.title} delay={i * 80} className={i === 0 ? "lg:col-span-2" : undefined}>
            <Slider {...t} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <Link to="/contact" className="btn-base btn-outline-dark">
          Start Your Transformation
        </Link>
      </Reveal>
    </section>
  );
}
