import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

const copy = {
  title: "Contato",
  intro:
    "Aberto a vagas senior remotas, conversas de consultoria e trabalhos de arquitetura de plataforma com foco em AWS, Kubernetes, Terraform, CI/CD e confiabilidade.",
  emailTitle: "Comece uma conversa",
  emailBody:
    "Email e o melhor caminho para conversas sobre vagas, consultoria, architecture reviews e apresentacoes.",
  email: "higor.fmonteiro@gmail.com",
  phoneTitle: "Telefone",
  phone: "+55 51 98107-8364",
  profilesTitle: "Perfis",
  linkedin: "LinkedIn",
  github: "GitHub",
  fitTitle: "Melhor alinhamento",
  fit: [
    "Senior DevOps / Platform Engineering",
    "Cloud Infrastructure Architecture",
    "AWS Networking e Conectividade Privada",
    "EKS / Kubernetes em Producao",
    "Padronizacao de Terraform e CI/CD"
  ],
  sendTitle: "Contexto util para enviar",
  send: [
    "O que voce esta construindo ou contratando",
    "Setup atual de AWS/Kubernetes/Terraform",
    "Principal problema de confiabilidade, entrega ou networking",
    "Timeline, expectativas de timezone e modelo de trabalho"
  ]
};

export default function ContactPage() {
  const t = copy;

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-zinc-400">{t.intro}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-lg font-semibold">{t.emailTitle}</h2>
                <p className="mt-2 text-zinc-400">{t.emailBody}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={`mailto:${t.email}`} variant="primary">Enviar email</Button>
                  <Button href="/resume.pdf" variant="secondary">PDF do curriculo</Button>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
                    <a href={`mailto:${t.email}`} className="mt-2 inline-block text-zinc-200 hover:text-zinc-100">
                      {t.email} →
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">{t.phoneTitle}</p>
                    <a href="tel:+5551981078364" className="mt-2 inline-block text-zinc-200 hover:text-zinc-100">
                      {t.phone} →
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card>
              <h2 className="text-lg font-semibold">{t.profilesTitle}</h2>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  className="text-zinc-200 hover:text-zinc-100"
                  href="https://www.linkedin.com/in/higorfm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.linkedin} →
                </a>
                <a
                  className="text-zinc-200 hover:text-zinc-100"
                  href="https://github.com/hf-monteiro"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.github} →
                </a>
              </div>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold">{t.fitTitle}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.fit.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.sendTitle}</h2>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {t.send.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
