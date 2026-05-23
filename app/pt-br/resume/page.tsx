import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";

const copy = {
  title: "Curriculo",
  intro: "Visao rapida + PDF para download.",
  summaryTitle: "Resumo",
  summaryBody:
    "Senior DevOps / Platform Engineer com 10+ anos de experiencia desenhando e operando infraestrutura cloud-native e arquiteturas de plataforma corporativas em AWS. Especializado em Kubernetes (EKS), Terraform, GitLab CI/CD, AWS networking, PrivateLink, Direct Connect, arquiteturas multi-conta e engenharia de plataforma para ambientes SaaS regulados.",
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
  ],
  architectureTitle: "Experiencia Selecionada em Arquitetura",
  architecture: [
    "Arquiteturas SaaS AWS multi-conta",
    "AWS PrivateLink e VPC Endpoint Services",
    "Conectividade hibrida com AWS Direct Connect e Transit Gateway",
    "Ambientes Kubernetes/EKS privados com acesso controlado",
    "Padroes de IAM cross-account e federacao STS",
    "Arquiteturas de DNS corporativo com Route53 Private Hosted Zones",
    "Implementacoes de Istio service mesh e roteamento interno",
    "Platform engineering com GitLab CI/CD e GitLab runners em Kubernetes",
    "Arquiteturas de ingress altamente disponiveis com ALB/NLB",
    "Padronizacao de modulos Terraform em escala",
    "AWS WAF, DevSecOps e hardening de seguranca",
    "Networking MSK/Kafka e conectividade privada",
    "Observabilidade centralizada, incident response e melhorias de confiabilidade"
  ],
  rolesTitle: "Foco de Experiencia",
  roles: [
    {
      title: "BairesDev - DevOps / Platform Engineering",
      items: [
        "Desenhei e implementei arquiteturas de plataforma AWS multi-conta para ambientes SaaS corporativos usando Terraform e boas praticas de Infrastructure as Code.",
        "Arquiteturei networking seguro cross-account com AWS PrivateLink, Transit Gateway, Direct Connect, Route53 Private Hosted Zones, Interface Endpoints e VPC Endpoint Services.",
        "Construi e mantive plataformas EKS em producao com GitLab CI/CD, Helm, Istio, ingress privado, observabilidade e pipelines automatizados.",
        "Desenvolvi modulos Terraform reutilizaveis para networking, EKS, MSK, ingress, WAF, Route53, controles de seguranca cloud e fundacoes de plataforma.",
        "Otimizei pipelines CI/CD entre times de engenharia, aumentando a frequencia de deploy de releases semanais para multiplos deploys por dia.",
        "Atuei em incident response, root cause analysis, troubleshooting de plataforma e melhorias de confiabilidade em sistemas AWS distribuidos."
      ]
    },
    {
      title: "Banco Inter - Cloud Reliability e DevOps",
      items: [
        "Apoiei ambientes AWS de grande escala atendendo 16M+ usuarios com requisitos de alta disponibilidade, seguranca e regulacao financeira.",
        "Gerenciei servicos cloud mission-critical incluindo EKS, ECS, API Gateway, MSK, Lambda, RDS/Aurora, IAM, WAFv2, S3, ALB/NLB e ACM.",
        "Melhorei observabilidade, incident response, pipelines CI/CD e maturidade operacional para sistemas distribuidos em producao."
      ]
    },
    {
      title: "KXC Tecnologia - Cloud Architect | Jun 2020 - Sep 2021",
      items: [
        "Arquiteturei solucoes AWS usando Terraform e servicos AWS de CI/CD, incluindo CodePipeline e CodeDeploy.",
        "Automatizei workflows de deploy com AWS CodePipeline, GitHub e GitLab, reduzindo ciclos de release e melhorando a consistencia de entrega.",
        "Executei projetos de migracao cloud em larga escala e otimizei workloads corporativos para confiabilidade, escalabilidade e eficiencia operacional."
      ]
    },
    {
      title: "Gtek Solucoes Tecnologicas - Tech Lead | Sep 2017 - Jun 2019",
      items: [
        "Liderei um time tecnico responsavel por gestao de incidentes, operacao de infraestrutura e projetos de virtualizacao on-premises.",
        "Arquiteturei e executei projetos de infraestrutura de rede para clientes corporativos.",
        "Prestei consultoria de TI e conduzi operacoes de equipe, planejamento de entregas e execucao tecnica."
      ]
    },
    {
      title: "Intranetworks - Tech Lead | Sep 2014 - Aug 2017",
      items: [
        "Direcionei operacoes de equipe e gestao de incidentes enquanto entregava projetos de virtualizacao on-premises.",
        "Arquiteturei e gerenciei projetos de infraestrutura de rede em ambientes de clientes.",
        "Desenhei e implementei projetos de infraestrutura de data center, incluindo fundacoes de networking e virtualizacao.",
        "Prestei consultoria de TI e suporte a servicos enquanto gerenciava operacoes de infraestrutura de rede."
      ]
    }
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

            <Card>
              <h2 className="text-lg font-semibold">{copy.architectureTitle}</h2>
              <ul className="mt-3 grid gap-2 text-zinc-300 sm:grid-cols-2">
                {copy.architecture.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {copy.roles.map((role) => (
              <Card key={role.title}>
                <h2 className="text-lg font-semibold">{role.title}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300">
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
