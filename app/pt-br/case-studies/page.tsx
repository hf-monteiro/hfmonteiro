import { CaseStudyListView, CaseStudyListCopy } from "@/components/views/CaseStudyViews";

export const metadata = {
  title: "Projetos | Higor Monteiro",
  description:
    "Case studies de arquitetura cobrindo plataformas AWS, networking privado, EKS, GitLab CI/CD e confiabilidade."
};

const copy: CaseStudyListCopy = {
  title: "Projetos",
  intro:
    "Case studies de arquitetura: plataformas AWS, networking privado, Kubernetes e CI/CD.",
  panel: "serviços · projetos",
  health: "healthy",
  env: "prod"
};

export default function CaseStudiesPage() {
  return <CaseStudyListView lang="pt-br" copy={copy} />;
}
