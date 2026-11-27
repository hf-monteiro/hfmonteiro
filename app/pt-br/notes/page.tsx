import { NotesListView, NotesListCopy } from "@/components/views/NotesViews";

export const metadata = {
  title: "Engineering Notes | Higor Monteiro",
  description:
    "Notas técnicas sobre networking AWS, Kubernetes, platform engineering, Terraform, CI/CD e confiabilidade."
};

const copy: NotesListCopy = {
  title: "Engineering Notes",
  intro:
    "Notas técnicas curtas sobre AWS, Kubernetes, Terraform e CI/CD.",
  read: "Ler nota →"
};

export default function NotesPage() {
  return <NotesListView lang="pt-br" copy={copy} />;
}
