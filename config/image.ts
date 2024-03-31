export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export const bannerImages = [
  { src: "/mesh.webp", alt: "Mano model", caption: "The parametric MANO model" },
  {
    src: "/skeleton.webp",
    alt: "Musculoskeletal Structure",
    caption: "Musculoskeletal structure of hands",
  },
  { src: "/msmano.webp", alt: "MS-MANO", caption: "The proposed MS-MANO model" },
];
