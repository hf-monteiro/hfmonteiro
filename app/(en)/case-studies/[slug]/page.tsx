import { CaseStudyView, CaseStudyCopy } from "@/components/views/CaseStudyViews";
import { getCaseStudies, getCaseStudy } from "@/lib/caseStudies";
import { ogImageUrl } from "@/lib/ogImage";

export function generateStaticParams() {
  return getCaseStudies("en").map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy("en", params.slug);
  if (!cs) return {};

  const title = `${cs.title} | Higor Monteiro`;
  return {
    title,
    description: cs.subtitle,
    openGraph: {
      title,
      description: cs.subtitle,
      url: `https://hfmonteiro.dev/case-studies/${cs.slug}`,
      siteName: "hfmonteiro.dev",
      type: "article",
      images: [ogImageUrl("en", cs.slug)]
    }
  };
}

const copy: CaseStudyCopy = {
  notFound: "Project not found",
  backToList: "Back to Projects",
  role: "Role",
  scope: "Scope",
  focus: "Focus",
  context: "Context",
  diagram: "Architecture diagram",
  diagramHint: "Scroll sideways to see the full diagram →",
  built: "What I built",
  outcomes: "Outcomes",
  stack: "Tech stack",
  relatedLabs: "Related labs",
  notes: "Notes"
};

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  return <CaseStudyView lang="en" cs={getCaseStudy("en", params.slug)} copy={copy} />;
}
