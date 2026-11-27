import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Panel from "@/components/Panel";
import BulletList from "@/components/BulletList";
import LocalTime from "@/components/LocalTime";
import CopyButton from "@/components/CopyButton";
import ContactRequest, { RequestCopy } from "@/components/ContactRequest";

// Contact styled as a service desk: a ticket-style request form (opens the
// visitor's email client), real contact endpoints, and facts that help
// scheduling. No availability or response-time claims.
export type ContactCopy = {
  title: string;
  tiles: { localTime: string; timezone: string; channel: string; languages: string };
  tileValues: { timezone: string; channel: string; languages: string };
  requestTitle: string;
  request: RequestCopy;
  endpointsTitle: string;
  copy: string;
  copied: string;
  email: string;
  fitTitle: string;
  fit: string[];
};

const link = "text-accent hover:text-accent-hover";

export default function ContactView({ copy: t }: { copy: ContactCopy }) {
  const tiles = [
    { label: t.tiles.localTime, value: <LocalTime timeZone="America/Sao_Paulo" /> },
    { label: t.tiles.timezone, value: t.tileValues.timezone },
    { label: t.tiles.channel, value: t.tileValues.channel },
    { label: t.tiles.languages, value: t.tileValues.languages }
  ];

  const endpoints = [
    { label: "linkedin", value: "in/higorfm", href: "https://www.linkedin.com/in/higorfm/" },
    { label: "github", value: "hf-monteiro", href: "https://github.com/hf-monteiro" },
    { label: "resume", value: "resume.pdf", href: "/resume.pdf" }
  ];

  return (
    <main>
      <Container>
        <section className="pt-12">
          <PageHeader path="hfmonteiro / contact" title={t.title} />

          <div className="mt-8 grid gap-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {tiles.map((tile) => (
                <Panel key={tile.label} title={tile.label}>
                  <p className="font-mono text-2xl font-semibold tracking-tight text-highlight">{tile.value}</p>
                </Panel>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
              <Panel title={t.requestTitle}>
                <ContactRequest email={t.email} copy={t.request} />
              </Panel>

              <div className="grid content-start gap-4">
                <Panel title={t.endpointsTitle}>
                  <dl className="-my-1 divide-y divide-night-800 font-mono text-sm">
                    <div className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 py-2.5">
                      <dt className="text-night-400">email</dt>
                      <dd className="min-w-0 break-all">
                        <a className={link} href={`mailto:${t.email}`}>
                          {t.email}
                        </a>
                      </dd>
                      <dd>
                        <CopyButton text={t.email} label={t.copy} done={t.copied} />
                      </dd>
                    </div>
                    {endpoints.map((e) => (
                      <div key={e.label} className="grid grid-cols-[4.5rem_1fr] gap-3 py-2.5">
                        <dt className="text-night-400">{e.label}</dt>
                        <dd className="min-w-0 truncate">
                          <a
                            className={link}
                            href={e.href}
                            {...(e.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                          >
                            {e.value}
                          </a>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Panel>

                <Panel title={t.fitTitle}>
                  <BulletList items={t.fit} className="text-sm" />
                </Panel>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
