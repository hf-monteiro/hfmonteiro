import Container from "@/components/Container";
import Pill from "@/components/Pill";
import { getCaseStudies } from "@/lib/caseStudies";

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
    type: "website"
  }
};

const copy = {
  title: "Projects",
  intro:
    "Architecture-focused case studies covering enterprise AWS platforms, private networking, production Kubernetes, CI/CD standardization, and reliability.",
  back: "Back to home",
  read: "View project →"
};

export default function CaseStudiesPage() {
  const t = copy;
  const cases = getCaseStudies("en");

  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/">
            ← {t.back}
          </a>
          <h1 className="mt-4 text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-300">{t.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <a
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className={`rounded-lg border border-zinc-800 bg-zinc-900/25 p-5 transition hover:border-zinc-700 hover:bg-zinc-900/45${
                  cases.length % 2 !== 0 && i === cases.length - 1
                    ? " sm:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <p className="text-sm text-zinc-500">{c.subtitle}</p>
                <h2 className="mt-2 text-lg font-semibold">{c.title}</h2>
                <p className="mt-3 text-sm text-zinc-300">{c.impact[0]}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500">{c.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.slice(0, 4).map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
                <span className="mt-4 inline-block text-sm text-zinc-400 hover:text-zinc-200">
                  {t.read}
                </span>
              </a>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
