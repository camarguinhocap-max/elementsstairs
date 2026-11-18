// Responsive PageHero images (src/assets/hero/{name}-{width}.{webp,jpg}). The
// preload link and the <picture> in PageHero must use the same srcset and sizes,
// otherwise the browser downloads the image twice.
const files = import.meta.glob<string>("../assets/hero/*.{jpg,webp}", {
  eager: true,
  import: "default",
});

const widths = [640, 828, 1200];

export const heroImageSizes = "100vw";

export type HeroImage = {
  src: string;
  webpSrcSet: string;
  jpgSrcSet: string;
};

function heroImage(name: string): HeroImage {
  const url = (width: number, ext: string) => files[`../assets/hero/${name}-${width}.${ext}`]!;
  const srcSet = (ext: string) => widths.map((w) => `${url(w, ext)} ${w}w`).join(", ");
  return { src: url(828, "jpg"), webpSrcSet: srcSet("webp"), jpgSrcSet: srcSet("jpg") };
}

export const heroImages = {
  kitchen: heroImage("kitchen"),
  bathroom: heroImage("bathroom"),
  closet: heroImage("closet"),
  stairs: heroImage("stairs"),
};

export function heroPreloadLink(hero: HeroImage) {
  return {
    rel: "preload",
    as: "image",
    type: "image/webp",
    imageSrcSet: hero.webpSrcSet,
    imageSizes: heroImageSizes,
    fetchPriority: "high",
  } as const;
}
