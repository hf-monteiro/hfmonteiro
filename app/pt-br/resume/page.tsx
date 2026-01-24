import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
  title: "Curriculo",
  intro: "Visao rapida + PDF para download.",
  summaryTitle: "Resumo",
  summaryBody:
    "Senior DevOps Engineer com 10+ anos em TI focado em engenharia de plataforma AWS e transformacao de CI/CD. Eu desenho fundacoes multi-conta, modulos reutilizaveis de IaC e padroes de entrega que reduzem risco e aceleram releases (1/semana para 2-6/dia). Também construo baselines de rede seguros, plataformas Kubernetes escalaveis e guardrails de observabilidade que elevam a confiabilidade e a produtividade dos times.",
  download: "Baixar PDF",
  contact: "Contato",
  certsTitle: "Certificacoes",
  certs: [
    "AWS Certified Advanced Networking – Specialty",
    "AWS Certified DevOps Engineer – Professional",
    "AWS Certified Developer – Associate",
    "AWS Certified SysOps Administrator – Associate",
    "AWS Certified Cloud Practitioner",
    "GCP Professional Cloud Architect",
    "GCP Professional Cloud Developer",
    "Certified SAFe 6 – Practitioner",
    "GitLab Certified Associate"
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
