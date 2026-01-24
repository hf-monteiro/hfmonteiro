import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { LANGS, normalizeLang } from "@/lib/i18n";

const copy = {
  en: {
    title: "Resume",
    intro: "Quick overview + downloadable PDF.",
    summaryTitle: "Summary",
    summaryBody:
      "Senior DevOps Engineer with 10+ years in IT, specialized in AWS/GCP, Terraform, Kubernetes, GitLab CI/CD, and observability. Experienced standardizing pipelines across teams and accelerating release cadence (1/week to 2-6/day).",
    download: "Download PDF",
    contact: "Contact",
    certsTitle: "Certifications",
    certs: [
      "AWS Certified Developer",
      "AWS Certified SysOps Administrator",
      "AWS Certified Cloud Practitioner",
      "GitLab / Microsoft certifications"
    ]
  },
  "pt-br": {
    title: "Curriculo",
    intro: "Visao rapida + PDF para download.",
    summaryTitle: "Resumo",
    summaryBody:
      "Senior DevOps Engineer com 10+ anos em TI, especializado em AWS/GCP, Terraform, Kubernetes, GitLab CI/CD e observabilidade. Experiencia em padronizar pipelines entre times e acelerar a cadencia de releases (1/semana para 2-6/dia).",
    download: "Baixar PDF",
    contact: "Contato",
    certsTitle: "Certificacoes",
    certs: [
      "AWS Certified Developer",
      "AWS Certified SysOps Administrator",
      "AWS Certified Cloud Practitioner",
      "Certificacoes GitLab / Microsoft"
    ]
  }
};

export default function ResumePage({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  const t = copy[lang];
  const base = `/${lang}`;

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{t.intro}</p>

          <div className="mt-8 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">{t.summaryTitle}</h2>
              <p className="mt-2 text-zinc-300">{t.summaryBody}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">{t.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{t.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.certsTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {t.certs.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
