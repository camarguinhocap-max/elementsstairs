import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { business, contacts, facebookUrl, ga4MeasurementId } from "@/lib/site-data";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${business.name} — Stairs & Home Remodeling in Central Florida` },
      {
        name: "description",
        content: `Oak wood staircases, stair remodeling, kitchen, bathroom and home remodeling for Ocala, Orlando, Gainesville and Tampa, FL. Free estimates, ${business.insurance}.`,
      },
      { name: "author", content: business.name },
      { property: "og:site_name", content: business.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      // Google Analytics 4 (gtag.js) — property "Element Home Remodeling".
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`,
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4MeasurementId}');`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": `${business.siteUrl}/#business`,
              name: business.name,
              description:
                "Oak wood staircases, stair remodeling, and general home remodeling (kitchens, bathrooms, carpentry, painting) for homeowners in Central Florida.",
              url: business.siteUrl,
              telephone: contacts[0]!.tel,
              email: business.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: business.address.street,
                addressLocality: business.address.city,
                addressRegion: business.address.state,
                postalCode: business.address.zip,
                addressCountry: "US",
              },
              // priceRange intentionally omitted — this business is positioned as accessible,
              // not premium/luxury; do not add "$$$" back in.
              image: `${business.siteUrl}/favicon.ico`,
              areaServed: business.cities.map((city) => ({
                "@type": "City",
                name: `${city}, Florida`,
              })),
              sameAs: [facebookUrl],
              openingHours: "Mo-Sa 08:00-17:00",
              contactPoint: contacts.map((c) => ({
                "@type": "ContactPoint",
                contactType: "sales",
                name: c.name,
                telephone: c.tel,
              })),
              makesOffer: [
                "Oak Wood Staircase",
                "Stair Remodeling",
                "Custom Stairs",
                "Metal Railings",
                "Glass Railings",
                "Custom Handrails",
                "Kitchen Remodeling",
                "Bathroom Remodeling",
                "Carpentry",
                "Interior Painting",
              ].map((name) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name, serviceType: name },
              })),
            },
            {
              "@type": "WebSite",
              "@id": `${business.siteUrl}/#website`,
              url: business.siteUrl,
              name: business.name,
              publisher: { "@id": `${business.siteUrl}/#business` },
              inLanguage: "en-US",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppButton />
      <Toaster position="bottom-center" />
    </QueryClientProvider>
  );
}
