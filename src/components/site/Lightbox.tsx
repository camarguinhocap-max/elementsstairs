import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = {
  id: string;
  title: string;
  category: string;
  place: string;
  image: string;
  description: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index! + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index! - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, items.length, onClose, onIndexChange]);

  if (!open) return null;
  const item = items[index!];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-100 flex flex-col bg-ink/97 px-4 py-5 backdrop-blur-sm sm:px-10 sm:py-8"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="eyebrow-light">{item.category}</p>
          <h3 className="mt-2 font-serif text-2xl text-ink-foreground sm:text-3xl">{item.title}</h3>
        </div>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="p-2 text-ink-muted transition-colors hover:text-ink-foreground"
        >
          <X className="size-6" strokeWidth={1} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center py-6">
        <img
          key={item.id}
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-ink-muted/20 pt-5">
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted">{item.description}</p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Previous project"
            onClick={() => onIndexChange((index! - 1 + items.length) % items.length)}
            className="border border-ink-muted/30 p-3 text-ink-foreground transition-colors hover:border-bronze hover:text-bronze"
          >
            <ChevronLeft className="size-4" strokeWidth={1.25} />
          </button>
          <button
            aria-label="Next project"
            onClick={() => onIndexChange((index! + 1) % items.length)}
            className="border border-ink-muted/30 p-3 text-ink-foreground transition-colors hover:border-bronze hover:text-bronze"
          >
            <ChevronRight className="size-4" strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
