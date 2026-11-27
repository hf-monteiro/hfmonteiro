import { CaseStudyView, CaseStudyCopy } from "@/components/views/CaseStudyViews";
import { getCaseStudies, getCaseStudy } from "@/lib/caseStudies";
import { ogImageUrl } from "@/lib/ogImage";

export function generateStaticParams() {
  return getCaseStudies("pt-br").map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy("pt-br", params.slug);
  if (!cs) return {};

  const title = `${cs.title} | Higor Monteiro`;
  return {
    title,
    description: cs.subtitle,
    openGraph: {
      title,
      description: cs.subtitle,
      url: `https://hfmonteiro.dev/pt-br/case-studies/${cs.slug}`,
      siteName: "hfmonteiro.dev",
      type: "article",
      images: [ogImageUrl("pt-br", cs.slug)]
    }
  };
}

const copy: CaseStudyCopy = {
  notFound: "Projeto não encontrado",
  backToList: "Voltar para projetos",
  health: "healthy",
  env: "prod",
  role: "Papel",
  scope: "Escopo",
  focus: "Foco",
  context: "Contexto",
  diagram: "Diagrama de arquitetura",
  diagramHint: "Role para o lado para ver o diagrama completo →",
  built: "O que construí",
  outcomes: "Resultados",
  stack: "Stack",
  relatedLabs: "Labs relacionados",
  notes: "Notas"
};

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  return <CaseStudyView lang="pt-br" cs={getCaseStudy("pt-br", params.slug)} copy={copy} />;
}
