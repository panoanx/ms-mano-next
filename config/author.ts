export interface AuthorProps {
  name: string;
  href?: string;
  sup?: string;
}

export const authorList = [
  {
    name: "Pengfei Xie",
    sup: "1*",
    href: "https://panoanx.github.io/",
  },
  {
    name: "Wenqiang Xu",
    sup: "2*",
    href: "https://wenqiangx.github.io/",
  },
  {
    name: "Tutian Tang",
    sup: "2",
  },
  {
    name: "Zhenjun Yu",
    sup: "2",
    href: "",
  },
  {
    name: "Cewu Lu",
    sup: "2",
    href: "http://mvig.org/",
  },
] as AuthorProps[];

export interface InstitutionProps {
  id: number;
  name: string;
  href?: string;
}

export const institutionList = [
  {
    id: 1,
    name: "Southeast University",
  },
  {
    id: 2,
    name: "Shanghai Jiao Tong University",
  },
  {
    id: "",
    name: "*Equal Contribution",
  },
];
