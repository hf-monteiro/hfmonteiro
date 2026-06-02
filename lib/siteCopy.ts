import { Lang } from "@/lib/i18n";

export type NavCopy = {
  caseStudies: string;
  labs: string;
  notes: string;
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
      caseStudies: "Projects",
      labs: "Labs",
      notes: "Notes",
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
      caseStudies: "Projetos",
      labs: "Labs",
      notes: "Notes",
      resume: "Currículo",
      contact: "Contato"
    },
    footer: {
      name: "Higor Monteiro",
      blurb: "Senior DevOps / Platform Engineer — arquitetura AWS, EKS, Terraform, GitLab CI/CD e networking cloud avançado."
    }
  }
};

export function getSiteCopy(lang: Lang) {
  return copy[lang];
}
