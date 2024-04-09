export interface ImageDataProps {
  src: string;
  alt: string;
  caption?: string;
  blurDataURL?: string;
}

export const bannerImages: ImageDataProps[] = [
  {
    src: "/mesh.webp",
    alt: "Mano model",
    caption: "The parametric MANO model",
  },
  {
    src: "/skeleton.webp",
    alt: "Musculoskeletal Structure",
    caption: "Musculoskeletal structure of hands",
  },
  {
    src: "/msmano.webp",
    alt: "MS-MANO",
    caption: "The proposed MS-MANO model",
  },
];

export const resultImages: ImageDataProps[] = [
  {
    src: "/results/hand_ours_0_opt.gif",
    alt: "Results 0",
    blurDataURL: "/results/hand_ours_0_opt_blur.gif",
  },
  {
    src: "/results/hand_ours_1_opt.gif",
    alt: "Results 1",
    blurDataURL: "/results/hand_ours_1_opt_blur.gif",
  },
  {
    src: "/results/oakink_ours_0_opt.gif",
    alt: "Results 2",
    blurDataURL: "/results/oakink_ours_0_opt_blur.gif",
  },
  {
    src: "/results/oakink_ours_1_opt.gif",
    alt: "Results 3",
    blurDataURL: "/results/oakink_ours_1_opt_blur.gif",
  },
  {
    src: "/results/oakink_ours_2_opt.gif",
    alt: "Results 2",
    blurDataURL: "/results/oakink_ours_2_opt_blur.gif",
  },
  {
    src: "/results/oakink_ours_3_opt.gif",
    alt: "Results 3",
    blurDataURL: "/results/oakink_ours_3_opt_blur.gif",
  },
];
