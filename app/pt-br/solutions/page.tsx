import Container from "@/components/Container";

type Solution = {
  title: string;
  problem: string;
  outcome: string;
  deliverables: string[];
  stack: string[];
};

const solutions: Solution[] = [
  {
    title: "Arquitetura de Plataforma AWS Corporativa",
    problem:
      "Ambientes cloud crescem entre contas, times e produtos sem fundações consistentes, guardrails, ownership ou padrões repetíveis de infraestrutura.",
    outcome:
      "Uma plataforma AWS multi-conta segura e escalável, com módulos Terraform reutilizáveis e padrões operacionais claros.",
    deliverables: [
      "Arquitetura AWS multi-conta e estratégia de ambientes",
      "Arquitetura de módulos Terraform para networking, EKS, Route53, WAF e serviços compartilhados",
      "Padrões de acesso IAM/STS cross-account e guardrails de segurança",
      "Documentação de plataforma, handover e modelo de onboarding"
    ],
    stack: ["AWS", "Terraform", "IAM/STS", "Organizations", "WAFv2", "Route53"]
  },
  {
    title: "Networking AWS Avançado e Conectividade Privada",
    problem:
      "Sistemas corporativos precisam de acesso privado entre serviços, conectividade híbrida e roteamento cross-account sem expor workloads críticos publicamente.",
    outcome:
      "Uma arquitetura resiliente de networking privado usando conectividade, DNS e padrões de endpoints nativos da AWS.",
    deliverables: [
      "Designs com PrivateLink, Interface Endpoints e VPC Endpoint Services",
      "Transit Gateway, Direct Connect, roteamento e padrões de conectividade híbrida",
      "Arquitetura de Route53 Private Hosted Zones e estratégia de DNS privado",
      "Private EKS, MSK/Kafka, ALB/NLB e conectividade interna entre serviços"
    ],
    stack: ["PrivateLink", "TGW", "Direct Connect", "Route53 PHZ", "ALB/NLB", "AWS IPAM"]
  },
  {
    title: "Habilitação de Plataforma Kubernetes em Produção",
    problem:
      "Os clusters existem, mas acesso privado, deploys, tráfego, observabilidade e operação day-2 são dolorosos e sujeitos a erro.",
    outcome:
      "Uma plataforma Kubernetes pronta para produção com deploys previsíveis, acesso seguro e maior confiabilidade operacional.",
    deliverables: [
      "Padrões de EKS/GKE, Helm, namespaces e baseline de RBAC",
      "Istio service mesh, ingress, TLS, EnvoyFilter, ALB/NLB e roteamento interno",
      "GitLab runners em Kubernetes e workflows de promoção CI/CD",
      "Troubleshooting de cluster, observabilidade e runbooks operacionais"
    ],
    stack: ["Kubernetes", "EKS/GKE", "Helm", "Istio", "GitLab CI", "Datadog"]
  },
  {
    title: "Platform Engineering com GitLab CI/CD",
    problem:
      "Os times entregam de forma diferente entre projetos, pipelines são inconsistentes e releases demoram para evoluir com segurança.",
    outcome:
      "Uma plataforma de entrega padronizada que aumenta a frequência de deploy e reduz risco operacional.",
    deliverables: [
      "Templates CI reutilizáveis, convenções, includes e regras de pipeline",
      "Etapas de Build/Test/Scan/Deploy com quality gates",
      "Variáveis seguras, estratégia de segredos, artefatos e promoção de ambientes",
      "Onboarding de desenvolvedores e documentação da plataforma"
    ],
    stack: ["GitLab CI/CD", "Docker", "SonarQube", "Checkov", "Artifacts", "Environments"]
  },
  {
    title: "Confiabilidade, Observabilidade e Hardening",
    problem:
      "Incidentes demoram para serem detectados e diagnosticados, alertas geram ruído e controles de serviços públicos/privados são inconsistentes.",
    outcome:
      "Monitoramento acionável, incident response mais rápido, controles de serviço mais fortes e guardrails pragmáticos de segurança.",
    deliverables: [
      "Health checks, abordagem estilo SLO, dashboards e alertas acionáveis",
      "Incident response, RCA, escalação e playbooks de confiabilidade",
      "Recomendações de IAM com menor privilégio",
      "Baseline de WAF, estratégia de segredos e security scanning no CI"
    ],
    stack: ["Datadog", "CloudWatch", "New Relic/Dynatrace", "AWS WAFv2", "IAM", "Secrets Manager"]
  }
];

const copy = {
  title: "Soluções",
  intro:
    "Soluções sênior de DevOps, Platform Engineering e Cloud Architecture focadas em plataformas AWS corporativas, networking avançado, Kubernetes em produção, velocidade de entrega, confiabilidade e segurança.",
  problem: "Problema",
  outcome: "Resultado",
  deliverables: "Inclui",
  ctaTitle: "Precisa de ajuda com plataforma AWS corporativa?",
  ctaBody:
    "Envie uma breve descrição do seu setup atual e do que deseja melhorar. Eu respondo com uma abordagem sugerida e próximos passos.",
  ctaContact: "Fale comigo",
  ctaResume: "Ver currículo"
};

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--accent)] bg-[rgb(189_147_249_/_0.14)] px-2.5 py-1 text-xs text-[var(--accent-strong)]">
      {children}
    </span>
  );
}

function Card({ s }: { s: Solution }) {
  return (
    <div className="surface rounded-lg border p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-zinc-100">{s.title}</h3>

      <div className="mt-4 grid gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">{copy.outcome}</p>
          <p className="mt-1 text-sm text-zinc-200">{s.outcome}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">{copy.deliverables}</p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-200">
            {s.deliverables.slice(0, 2).map((d) => (
              <li key={d} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {s.stack.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  const base = "/pt-br";

  return (
    <main className="py-14">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold text-zinc-100">{copy.title}</h1>
          <p className="mt-3 text-zinc-300">{copy.intro}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {solutions.map((s) => (
            <Card key={s.title} s={s} />
          ))}
        </div>

        <div className="surface mt-12 rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-zinc-100">{copy.ctaTitle}</h2>
          <p className="mt-2 text-zinc-300">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${base}/contact`}
              className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#15121d] transition hover:bg-[var(--accent-strong)]"
            >
              {copy.ctaContact}
            </a>
            <a
              href={`${base}/resume`}
              className="rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-[var(--border-strong)] hover:bg-[rgb(23_20_33_/_0.78)]"
            >
              {copy.ctaResume}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
