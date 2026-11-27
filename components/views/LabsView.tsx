import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Panel from "@/components/Panel";
import LabsCatalog, { CatalogLabels, CatalogRow } from "@/components/LabsCatalog";
import { RepoStats, repoName } from "@/lib/github";

type Lab = {
  title: string;
  repo: string;
  links: { label: string; href: string }[];
  desc: string;
  kind: string;
  // Shown only when GitHub reports no language (e.g. YAML-only repos).
  language?: string;
  legacy?: boolean;
};

export type LabsCopy = {
  title: string;
  intro: string;
  note: string;
  catalogTitle: string;
  tiles: { repos: string; terraform: string; lastPush: string; lifecycle: string };
  catalog: CatalogLabels;
  sections: Lab[];
};

export default function LabsView({ copy: t, repos }: { copy: LabsCopy; repos: Record<string, RepoStats> }) {
  const rows: CatalogRow[] = t.sections.map((lab) => {
    const stats = lab.links
      .map((l) => repoName(l.href))
      .map((name) => (name ? repos[name] : undefined))
      .filter((s): s is RepoStats => Boolean(s));
    const languages = Array.from(new Set(stats.map((s) => s.language).filter((l): l is string => Boolean(l))));
    const pushed = stats.map((s) => s.pushedAt).sort().pop();
    return {
      title: lab.title,
      repo: lab.repo,
      desc: lab.desc,
      kind: lab.kind,
      links: lab.links,
      languages: languages.length ? languages : stats.length && lab.language ? [lab.language] : [],
      pushedAt: pushed?.slice(0, 10),
      legacy: Boolean(lab.legacy)
    };
  });

  const repoCount = t.sections.reduce((n, lab) => n + lab.links.length, 0);
  const hcl = rows.filter((r) => r.languages.includes("HCL")).length;
  const lastPush = rows.map((r) => r.pushedAt).filter(Boolean).sort().pop();
  const legacy = rows.filter((r) => r.legacy).length;
  const hasStats = Object.keys(repos).length > 0;

  const tiles = [
    { label: t.tiles.repos, value: String(repoCount) },
    { label: t.tiles.terraform, value: hasStats ? String(hcl) : "—" },
    { label: t.tiles.lastPush, value: lastPush ?? "—" },
    { label: t.tiles.lifecycle, value: `${rows.length - legacy} / ${legacy}` }
  ];

  return (
    <main>
      <Container>
        <section className="pt-12">
          <PageHeader
            path="hfmonteiro / labs"
            title={t.title}
            intro={
              <>
                <p>{t.intro}</p>
                <p className="mt-2 text-sm text-night-400">{t.note}</p>
              </>
            }
          />

          <div className="mt-8 grid gap-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {tiles.map((tile) => (
                <Panel key={tile.label} title={tile.label}>
                  <p className="text-2xl font-semibold tracking-tight text-highlight">{tile.value}</p>
                </Panel>
              ))}
            </div>

            <Panel title={t.catalogTitle}>
              <LabsCatalog rows={rows} labels={t.catalog} />
            </Panel>
          </div>
        </section>
      </Container>
    </main>
  );
}
