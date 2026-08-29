import { Reveal } from "./Reveal";

export type FaqItem = { question: string; answer: string };

export function FaqSection({
  items,
  title = "Frequently Asked Questions",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 sm:px-10 sm:py-32">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="display-sm mt-6">{title}</h2>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12">
        {items.map((item, i) => (
          <Reveal key={item.question} delay={(i % 2) * 90} className="border-t border-border pt-6">
            <h3 className="font-serif text-lg text-foreground">{item.question}</h3>
            <p className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">{item.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
