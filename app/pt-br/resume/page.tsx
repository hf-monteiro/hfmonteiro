import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
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
};

export default function ResumePage() {
  const base = "/pt-br";

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{copy.intro}</p>

          <div className="mt-8 grid gap-4">
            <Card>
              <h2 className="text-lg font-semibold">{copy.summaryTitle}</h2>
              <p className="mt-2 text-zinc-300">{copy.summaryBody}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/resume.pdf" variant="primary">{copy.download}</Button>
                <Button href={`${base}/contact`} variant="secondary">{copy.contact}</Button>
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{copy.certsTitle}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                {copy.certs.map((c) => (
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
