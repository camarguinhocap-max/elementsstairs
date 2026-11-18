import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import type { ServicePageContent } from "@/lib/service-page-content";
import { Reveal } from "./Reveal";

const relatedPages = [
  { to: "/kitchen-remodeling", label: "kitchen remodeling" },
  { to: "/bathroom-remodeling", label: "bathroom remodeling" },
  { to: "/custom-closets", label: "custom closets" },
  { to: "/stairs", label: "oak staircases and stair remodeling" },
] as const;

export function ServiceDetails({
  content,
  currentPage,
}: {
  content: ServicePageContent;
  currentPage: (typeof relatedPages)[number]["to"];
}) {
  const related = relatedPages.filter((page) => page.to !== currentPage);

  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-24 sm:px-10 sm:pb-32">
      <Reveal className="max-w-3xl">
        <h2 className="display-sm">{content.heading}</h2>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
        {content.blocks.map((block) => (
          <Reveal key={block.title} className="border-t border-border pt-8">
            <h3 className="font-serif text-2xl">{block.title}</h3>
            <div className="mt-5 max-w-2xl space-y-5 text-[15px] leading-[1.9] text-muted-foreground">
              {block.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {block.items && (
                <ul className="list-disc space-y-3 pl-5">
                  {block.items.map((item) => (
                    <li key={item.label}>
                      <span className="text-foreground">{item.label}:</span> {item.text}
                    </li>
                  ))}
                </ul>
              )}
              {block.outro?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 max-w-3xl border-t border-border pt-8">
        <p className="text-[15px] leading-[1.9] text-muted-foreground">
          Planning more than one project? We also handle{" "}
          {related.map((page, i) => (
            <Fragment key={page.to}>
              {i > 0 && (i === related.length - 1 ? ", and " : ", ")}
              <Link
                to={page.to}
                className="text-foreground underline underline-offset-4 transition-colors hover:text-bronze"
              >
                {page.label}
              </Link>
            </Fragment>
          ))}
          .
        </p>
      </Reveal>
    </section>
  );
}
