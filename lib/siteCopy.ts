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

export type StatusCopy = {
  env: string;
  operational: string;
  deployed: string;
  built: string;
};

export type ThemeCopy = {
  toLight: string;
  toDark: string;
};

type SiteCopy = {
  nav: NavCopy;
  theme: ThemeCopy;
  footer: FooterCopy;
  status: StatusCopy;
};

const copy: Record<Lang, SiteCopy> = {
  en: {
    theme: { toLight: "Switch to light mode", toDark: "Switch to dark mode" },
    status: {
      env: "hfmonteiro / prod",
      operational: "All systems operational",
      deployed: "deployed",
      built: "built"
    },
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
    theme: { toLight: "Mudar para modo claro", toDark: "Mudar para modo escuro" },
    status: {
      env: "hfmonteiro / prod",
      operational: "Todos os sistemas operacionais",
      deployed: "deploy",
      built: "build"
    },
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
