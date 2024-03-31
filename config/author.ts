export interface AuthorProps {
  name: string;
  href?: string;
  sup?: string;
}

export const authorList = [
  {
    name: "Pengfei Xie",
    sup: "1*",
  },
  {
    name: "Wenqiang Xu",
    sup: "2*",
  },
  {
    name: "Tutian Tang",
    sup: "2",
  },
  {
    name: "Zhenjun Yu",
    sup: "2",
  },
  {
    name: "Cewu Lu",
    sup: "2",
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
