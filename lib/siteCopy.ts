import { Lang } from "@/lib/i18n";

export type NavCopy = {
  solutions: string;
  caseStudies: string;
  labs: string;
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
      caseStudies: "Projects",
      labs: "Labs",
      skills: "Skills",
      resume: "Resume",
      contact: "Contact"
    },
    footer: {
      name: "Higor Monteiro",
      blurb: "Senior DevOps / Platform Engineer — AWS architecture, EKS, Terraform, GitLab CI/CD, and advanced cloud networking."
    }
  },
  "pt-br": {
    nav: {
      solutions: "Solucoes",
      caseStudies: "Projetos",
      labs: "Labs",
      skills: "Skills",
      resume: "Curriculo",
      contact: "Contato"
    },
    footer: {
      name: "Higor Monteiro",
      blurb: "Senior DevOps / Platform Engineer — arquitetura AWS, EKS, Terraform, GitLab CI/CD e networking cloud avancado."
    }
  }
};

export function getSiteCopy(lang: Lang) {
  return copy[lang];
}
