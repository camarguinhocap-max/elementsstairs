import { whatsapp, facebookUrl } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

/** Simple inline WhatsApp glyph — lucide-react has no brand icons. */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className="size-7" aria-hidden="true">
      <path d="M16.001 3C9.006 3 3.335 8.671 3.335 15.667c0 2.36.64 4.57 1.756 6.47L3 29l7.045-2.045a12.6 12.6 0 0 0 5.956 1.512h.004c6.994 0 12.665-5.672 12.665-12.667C28.67 8.803 23.001 3 16.001 3zm0 23.028h-.003a10.5 10.5 0 0 1-5.352-1.464l-.384-.228-3.979 1.155 1.174-3.878-.25-.398a10.47 10.47 0 0 1-1.605-5.548c0-5.804 4.723-10.527 10.402-10.527 2.78 0 5.393 1.083 7.357 3.05a10.35 10.35 0 0 1 3.048 7.361c0 5.804-4.723 10.477-10.408 10.477zm5.706-7.844c-.312-.156-1.848-.912-2.134-1.016-.286-.104-.494-.156-.702.156-.208.312-.806 1.016-.988 1.224-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.55-.928-.828-1.554-1.85-1.736-2.162-.182-.312-.02-.481.137-.637.14-.14.312-.364.468-.546.156-.182.208-.312.312-.52.104-.208.052-.39-.026-.546-.078-.156-.702-1.692-.962-2.318-.254-.61-.512-.527-.702-.537l-.598-.01a1.15 1.15 0 0 0-.833.39c-.286.312-1.092 1.068-1.092 2.604s1.118 3.02 1.274 3.228c.156.208 2.2 3.36 5.33 4.71.745.322 1.325.514 1.778.658.747.238 1.427.204 1.964.124.599-.09 1.848-.756 2.108-1.486.26-.73.26-1.354.182-1.486-.078-.13-.286-.208-.598-.364z" />
    </svg>
  );
}

/** Simple inline Facebook glyph — lucide-react has no brand icons. */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className="size-6" aria-hidden="true">
      <path d="M28 16.061C28 9.404 22.627 4 16 4S4 9.404 4 16.061c0 6.017 4.388 11.006 10.125 11.911v-8.425h-3.047v-3.486h3.047v-2.657c0-3.026 1.792-4.698 4.532-4.698 1.313 0 2.686.236 2.686.236v2.973h-1.513c-1.491 0-1.957.933-1.957 1.891v2.255h3.33l-.532 3.486h-2.798v8.425C23.612 27.067 28 22.078 28 16.061z" />
    </svg>
  );
}

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 left-5 z-60 flex items-center gap-3">
      <a
        href={whatsapp.url}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => trackEvent("whatsapp_click")}
        className="flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-105"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit our Facebook page"
        onClick={() => trackEvent("facebook_click")}
        className="flex size-13 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-xl transition-transform duration-300 hover:scale-105"
      >
        <FacebookIcon />
      </a>
    </div>
  );
}
