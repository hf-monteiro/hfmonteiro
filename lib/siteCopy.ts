import { Lang } from "@/lib/i18n";

export type NavCopy = {
  solutions: string;
  caseStudies: string;
  skills: string;
  resume: string;
  contact: string;
};

export type FooterCopy = {
  name: string;
  blurb: string;
};

type SiteCopy = {
  nav: NavCopy;
  footer: FooterCopy;
};

const copy: Record<Lang, SiteCopy> = {
  en: {
    nav: {
      solutions: "Solutions",
      caseStudies: "Case Studies",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact"
    },
    footer: {
      name: "Higor Monteiro",
      blurb: "Senior DevOps / Cloud Engineer — AWS, Terraform, GitLab CI/CD, EKS."
    }
  },
  "pt-br": {
    nav: {
      solutions: "Solucoes",
      caseStudies: "Estudos de Caso",
      skills: "Skills",
      resume: "Curriculo",
      contact: "Contato"
    },
    footer: {
      name: "Higor Monteiro",
      blurb: "Senior DevOps / Cloud Engineer — AWS, Terraform, GitLab CI/CD, EKS."
    }
  }
};

export function getSiteCopy(lang: Lang) {
  return copy[lang];
}
