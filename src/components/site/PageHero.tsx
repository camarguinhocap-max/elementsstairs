export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/85" />
      <div className="relative mx-auto max-w-[1600px] px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <p className="eyebrow-light">{eyebrow}</p>
        <h1 className="display-sm mt-6 max-w-3xl text-ink-foreground">{title}</h1>
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-muted">{intro}</p>
      </div>
    </section>
  );
}
