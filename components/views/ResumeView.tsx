import Container from "@/components/Container";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import BulletList from "@/components/BulletList";
import { Lang, langBase } from "@/lib/i18n";

type Role = {
  title: string;
  company: string;
  period: string;
  items: string[];
};

export type ResumeCopy = {
  title: string;
  summaryBody: string;
  download: string;
  contact: string;
  certsTitle: string;
  certs: string[];
  educationTitle: string;
  education: { degree: string; school: string; period: string }[];
  languagesTitle: string;
  languages: string[];
  recentTitle: string;
  earlierTitle: string;
  recentRoles: Role[];
  earlierRoles: Role[];
};

function RoleList({ roles, compact = false }: { roles: Role[]; compact?: boolean }) {
  return (
    <ol className="divide-y divide-zinc-800">
      {roles.map((role) => (
        <li
          key={`${role.company}-${role.title}`}
          className="grid gap-x-8 gap-y-2 py-6 first:pt-0 sm:grid-cols-[10rem_1fr]"
        >
          <p className="text-sm text-zinc-400 sm:pt-0.5">{role.period}</p>
          <div>
            <h3 className="font-semibold text-zinc-100">
              {role.title} <span className="font-normal text-zinc-400">· {role.company}</span>
            </h3>
            <BulletList items={role.items} className={`mt-3 ${compact ? "text-sm" : ""}`} />
          </div>
        </li>
      ))}
    </ol>
  );
}

// "AWS Certified ... (2025–2028)" → name + validity, so dates can align in their own column.
function splitCert(cert: string) {
  const match = cert.match(/^(.*?)\s*\(([^)]+)\)$/);
  return match ? { name: match[1], years: match[2] } : { name: cert, years: "" };
}

export default function ResumeView({ lang, copy: t }: { lang: Lang; copy: ResumeCopy }) {
  return (
    <main>
      <Container>
        <section className="pt-14">
          <PageHeader title={t.title} />

          <div className="mt-8 max-w-3xl">
            <p className="leading-7 text-zinc-300">{t.summaryBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/resume.pdf" variant="primary" download="Higor_Monteiro_Resume.pdf">{t.download}</Button>
              <Button href={`${langBase(lang)}/contact`} variant="secondary">{t.contact}</Button>
            </div>
          </div>

          <div className="mt-14 space-y-14">
            <Section title={t.recentTitle}>
              <RoleList roles={t.recentRoles} />
            </Section>

            <Section title={t.earlierTitle}>
              <RoleList roles={t.earlierRoles} compact />
            </Section>

            <Section title={t.certsTitle}>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {t.certs.map(splitCert).map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-baseline justify-between gap-4 border-b border-zinc-800/70 py-2.5 text-sm"
                  >
                    <span className="text-zinc-200">{cert.name}</span>
                    <span className="shrink-0 text-zinc-400">{cert.years}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <div className="grid gap-14 sm:grid-cols-[2fr_1fr]">
              <Section title={t.educationTitle}>
                <ul className="space-y-4">
                  {t.education.map((item) => (
                    <li key={item.degree}>
                      <p className="text-zinc-200">{item.degree}</p>
                      <p className="mt-0.5 text-sm text-zinc-400">
                        {item.school} · {item.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title={t.languagesTitle}>
                <ul className="space-y-1.5 text-zinc-300">
                  {t.languages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
