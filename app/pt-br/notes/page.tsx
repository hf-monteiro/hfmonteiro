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
  panel: "docs · notas",
  tiles: { docs: "docs", readTime: "tempo de leitura", latest: "mais recente", topics: "tópicos" },
  columns: { doc: "doc", topics: "tópicos", published: "publicado", read: "leitura" },
  min: "min"
};

export default function NotesPage() {
  return <NotesListView lang="pt-br" copy={copy} />;
}
