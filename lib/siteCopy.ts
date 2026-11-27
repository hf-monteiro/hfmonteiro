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
  builtWith: string;
  source: string;
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
      builtWith: "Built with Next.js · checked by GitHub Actions · deployed on Cloudflare Pages",
      source: "Source"
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
      builtWith: "Feito com Next.js · validado com GitHub Actions · publicado no Cloudflare Pages",
      source: "Código-fonte"
    }
  }
};

export function getSiteCopy(lang: Lang) {
  return copy[lang];
}
