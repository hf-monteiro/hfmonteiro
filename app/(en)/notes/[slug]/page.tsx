import { NoteView, NoteCopy } from "@/components/views/NotesViews";
import { getNote, getNotes } from "@/lib/notes";
import { ogImageUrl } from "@/lib/ogImage";

export function generateStaticParams() {
  return getNotes("en").map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const note = getNote("en", params.slug);
  if (!note) return {};

  const title = `${note.title} | Higor Monteiro`;
  return {
    title,
    description: note.excerpt,
    openGraph: {
      title,
      description: note.excerpt,
      url: `https://hfmonteiro.dev/notes/${note.slug}`,
      siteName: "hfmonteiro.dev",
      type: "article",
      images: [ogImageUrl("en")]
    }
  };
}

const copy: NoteCopy = {
  notFound: "Note not found",
  backToList: "Back to Notes",
  meta: { published: "published", readTime: "read time", words: "words", sections: "sections" },
  min: "min",
  toc: "on this page",
  topics: "topics"
};

export default function NoteDetail({ params }: { params: { slug: string } }) {
  return <NoteView lang="en" note={getNote("en", params.slug)} copy={copy} />;
}
