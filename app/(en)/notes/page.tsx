import { NotesListView, NotesListCopy } from "@/components/views/NotesViews";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Notes | Higor Monteiro",
  description:
    "Technical notes on AWS networking, Kubernetes, platform engineering, Terraform, CI/CD, and reliability.",
  openGraph: {
    title: "Notes | Higor Monteiro",
    description:
      "Technical notes on AWS networking, Kubernetes, platform engineering, Terraform, CI/CD, and reliability.",
    url: "https://hfmonteiro.dev/notes",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: NotesListCopy = {
  title: "Notes",
  intro:
    "Short technical notes on AWS, Kubernetes, Terraform, and CI/CD.",
  read: "Read note →"
};

export default function NotesPage() {
  return <NotesListView lang="en" copy={copy} />;
}
