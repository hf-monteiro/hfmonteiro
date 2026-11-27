import { CaseStudyListView, CaseStudyListCopy } from "@/components/views/CaseStudyViews";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Projects | Higor Monteiro",
  description:
    "Architecture-focused case studies covering AWS platforms, private networking, EKS, GitLab CI/CD, and reliability.",
  openGraph: {
    title: "Projects | Higor Monteiro",
    description:
      "Architecture-focused case studies: AWS platforms, private networking, EKS, GitLab CI/CD, and reliability.",
    url: "https://hfmonteiro.dev/case-studies",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: CaseStudyListCopy = {
  title: "Projects",
  intro:
    "Architecture case studies: AWS platforms, private networking, Kubernetes, and CI/CD.",
  read: "View project →"
};

export default function CaseStudiesPage() {
  return <CaseStudyListView lang="en" copy={copy} />;
}
