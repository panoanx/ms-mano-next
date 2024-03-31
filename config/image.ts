export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export const bannerImages = [
  { src: "/mesh.webp", alt: "Mano model", caption: "MANO" },
  {
    src: "/skeleton.webp",
    alt: "Musculoskeletal Structure",
    caption: "Muscle & Skeleton",
  },
  { src: "/msmano.webp", alt: "MS-MANO", caption: "MS-MANO" },
];
