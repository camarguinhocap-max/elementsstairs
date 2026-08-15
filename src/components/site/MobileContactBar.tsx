import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageSquare, FileText, Plus, X } from "lucide-react";
import { contacts } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function MobileContactBar() {
  const [open, setOpen] = useState(false);
  const office = contacts[2]!;

  return (
    <div className="fixed right-5 bottom-5 z-60 flex flex-col items-end gap-3 lg:hidden">
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-500 ease-out",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <a
          href={`tel:${office.tel}`}
          className="flex items-center gap-3 bg-background px-4 py-3 text-[10px] tracking-[0.2em] uppercase shadow-lg"
        >
          <Phone className="size-4" strokeWidth={1.25} /> Call
        </a>
        <a
          href={`sms:${office.tel}`}
          className="flex items-center gap-3 bg-background px-4 py-3 text-[10px] tracking-[0.2em] uppercase shadow-lg"
        >
          <MessageSquare className="size-4" strokeWidth={1.25} /> Message
        </a>
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 bg-background px-4 py-3 text-[10px] tracking-[0.2em] uppercase shadow-lg"
        >
          <FileText className="size-4" strokeWidth={1.25} /> Request Quote
        </Link>
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="flex size-13 items-center justify-center bg-ink text-ink-foreground shadow-xl transition-colors duration-500 hover:bg-bronze hover:text-ink"
      >
        {open ? <X className="size-5" strokeWidth={1.25} /> : <Plus className="size-5" strokeWidth={1.25} />}
      </button>
    </div>
  );
}
