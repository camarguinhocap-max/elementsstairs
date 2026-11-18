import { Reveal } from "./Reveal";

export function PhotoGallery({
  images,
  title,
}: {
  images: { src: string; alt: string }[];
  title?: string;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-6 pb-24 sm:px-10 sm:pb-32">
      {title && (
        <Reveal>
          <h2 className="display-sm max-w-2xl">{title}</h2>
        </Reveal>
      )}
      <div className={`grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 ${title ? "mt-12" : ""}`}>
        {images.map((image, i) => (
          <Reveal key={image.src} delay={(i % 3) * 90}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
