import { NoteView, NoteCopy } from "@/components/views/NotesViews";
import { getNote, getNotes } from "@/lib/notes";
import { ogImageUrl } from "@/lib/ogImage";

export function generateStaticParams() {
  return getNotes("pt-br").map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const note = getNote("pt-br", params.slug);
  if (!note) return {};

  const title = `${note.title} | Higor Monteiro`;
  return {
    title,
    description: note.excerpt,
    openGraph: {
      title,
      description: note.excerpt,
      url: `https://hfmonteiro.dev/pt-br/notes/${note.slug}`,
      siteName: "hfmonteiro.dev",
      type: "article",
      images: [ogImageUrl("pt-br")]
    }
  };
}

const copy: NoteCopy = {
  notFound: "Nota não encontrada",
  backToList: "Voltar para notas",
  meta: { published: "publicado", readTime: "leitura", words: "palavras", sections: "seções" },
  min: "min",
  toc: "nesta página",
  topics: "tópicos"
};

export default function NoteDetail({ params }: { params: { slug: string } }) {
  return <NoteView lang="pt-br" note={getNote("pt-br", params.slug)} copy={copy} />;
}
