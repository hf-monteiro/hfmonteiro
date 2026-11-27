import Container from "@/components/Container";
import Pill from "@/components/Pill";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

type Lab = {
  title: string;
  repo: string;
  links: { label: string; href: string }[];
  desc: string;
  tags: string[];
  legacy?: boolean;
};

export type LabsCopy = {
  title: string;
  intro: string;
  note: string;
  legacyTitle: string;
  sections: Lab[];
};

function RepoLinks({ links }: { links: Lab["links"] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-zinc-300 hover:text-zinc-100"
        >
          {link.label} →
        </a>
      ))}
    </div>
  );
}

export default function LabsView({ copy: t }: { copy: LabsCopy }) {
  const current = t.sections.filter((lab) => !lab.legacy);
  const legacy = t.sections.filter((lab) => lab.legacy);

  return (
    <main>
      <Container>
        <section className="pt-14">
          <PageHeader
            title={t.title}
            intro={
              <>
                <p>{t.intro}</p>
                <p className="mt-2 text-sm text-zinc-400">{t.note}</p>
              </>
            }
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {current.map((lab) => (
              <div key={lab.title} className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
                <p className="font-mono text-xs text-zinc-400">{lab.repo}</p>
                <h2 className="mt-1.5 font-semibold text-zinc-100">{lab.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{lab.desc}</p>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {lab.tags.slice(0, 4).map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                  <div className="mt-4">
                    <RepoLinks links={lab.links} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {legacy.length ? (
            <div className="mt-16">
              <Section title={t.legacyTitle}>
                <ul className="divide-y divide-zinc-800">
                  {legacy.map((lab) => (
                    <li key={lab.title} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
                      <div>
                        <h3 className="font-medium text-zinc-200">
                          {lab.title} <span className="ml-1 font-mono text-xs text-zinc-400">{lab.repo}</span>
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">{lab.desc}</p>
                      </div>
                      <RepoLinks links={lab.links} />
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          ) : null}
        </section>
      </Container>
    </main>
  );
}
