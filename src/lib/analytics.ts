// Small helper around gtag() for the GA4 conversion events tracked on this
// site: phone_click, whatsapp_click, estimate_click and form_submit.
// Safe to call even before gtag.js has loaded (e.g. very fast clicks) or
// during SSR — it's a no-op when `window.gtag` isn't available yet.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent = "phone_click" | "whatsapp_click" | "estimate_click" | "form_submit";

export function trackEvent(event: AnalyticsEvent, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
