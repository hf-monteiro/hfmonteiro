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
      "Ambientes cloud crescem entre contas, times e produtos sem fundacoes consistentes, guardrails, ownership ou padroes repetiveis de infraestrutura.",
    outcome:
      "Uma plataforma AWS multi-conta segura e escalavel, com modulos Terraform reutilizaveis e padroes operacionais claros.",
    deliverables: [
      "Arquitetura AWS multi-conta e estrategia de ambientes",
      "Arquitetura de modulos Terraform para networking, EKS, Route53, WAF e servicos compartilhados",
      "Padroes de acesso IAM/STS cross-account e guardrails de seguranca",
      "Documentacao de plataforma, handover e modelo de onboarding"
    ],
    stack: ["AWS", "Terraform", "IAM/STS", "Organizations", "WAFv2", "Route53"]
  },
  {
    title: "Networking AWS Avancado e Conectividade Privada",
    problem:
      "Sistemas corporativos precisam de acesso privado entre servicos, conectividade hibrida e roteamento cross-account sem expor workloads criticos publicamente.",
    outcome:
      "Uma arquitetura resiliente de networking privado usando conectividade, DNS e padroes de endpoints nativos da AWS.",
    deliverables: [
      "Designs com PrivateLink, Interface Endpoints e VPC Endpoint Services",
      "Transit Gateway, Direct Connect, roteamento e padroes de conectividade hibrida",
      "Arquitetura de Route53 Private Hosted Zones e estrategia de DNS privado",
      "Private EKS, MSK/Kafka, ALB/NLB e conectividade interna entre servicos"
    ],
    stack: ["PrivateLink", "TGW", "Direct Connect", "Route53 PHZ", "ALB/NLB", "AWS IPAM"]
  },
  {
    title: "Habilitacao de Plataforma Kubernetes em Producao",
    problem:
      "Os clusters existem, mas acesso privado, deploys, trafego, observabilidade e operacao day-2 sao dolorosos e sujeitos a erro.",
    outcome:
      "Uma plataforma Kubernetes pronta para producao com deploys previsiveis, acesso seguro e maior confiabilidade operacional.",
    deliverables: [
      "Padroes de EKS/GKE, Helm, namespaces e baseline de RBAC",
      "Istio service mesh, ingress, TLS, EnvoyFilter, ALB/NLB e roteamento interno",
      "GitLab runners em Kubernetes e workflows de promocao CI/CD",
      "Troubleshooting de cluster, observabilidade e runbooks operacionais"
    ],
    stack: ["Kubernetes", "EKS/GKE", "Helm", "Istio", "GitLab CI", "Datadog"]
  },
  {
    title: "Platform Engineering com GitLab CI/CD",
    problem:
      "Os times entregam de forma diferente entre projetos, pipelines sao inconsistentes e releases demoram para evoluir com seguranca.",
    outcome:
      "Uma plataforma de entrega padronizada que aumenta a frequencia de deploy e reduz risco operacional.",
    deliverables: [
      "Templates CI reutilizaveis, convencoes, includes e regras de pipeline",
      "Etapas de Build/Test/Scan/Deploy com quality gates",
      "Variaveis seguras, estrategia de segredos, artefatos e promocao de ambientes",
      "Onboarding de desenvolvedores e documentacao da plataforma"
    ],
    stack: ["GitLab CI/CD", "Docker", "SonarQube", "Checkov", "Artifacts", "Environments"]
  },
  {
    title: "Confiabilidade, Observabilidade e Hardening",
    problem:
      "Incidentes demoram para serem detectados e diagnosticados, alertas geram ruido e controles de servicos publicos/privados sao inconsistentes.",
    outcome:
      "Monitoramento acionavel, incident response mais rapido, controles de servico mais fortes e guardrails pragmaticos de seguranca.",
    deliverables: [
      "Health checks, abordagem estilo SLO, dashboards e alertas acionaveis",
      "Incident response, RCA, escalacao e playbooks de confiabilidade",
      "Recomendacoes de IAM com menor privilegio",
      "Baseline de WAF, estrategia de segredos e security scanning no CI"
    ],
    stack: ["Datadog", "CloudWatch", "New Relic/Dynatrace", "AWS WAFv2", "IAM", "Secrets Manager"]
  }
];

const copy = {
  title: "Solucoes",
  intro:
    "Solucoes senior de DevOps, Platform Engineering e Cloud Architecture focadas em plataformas AWS corporativas, networking avancado, Kubernetes em producao, velocidade de entrega, confiabilidade e seguranca.",
  problem: "Problema",
  outcome: "Resultado",
  deliverables: "Inclui",
  ctaTitle: "Precisa de ajuda com plataforma AWS corporativa?",
  ctaBody:
    "Envie uma breve descricao do seu setup atual e do que deseja melhorar. Eu respondo com uma abordagem sugerida e proximos passos.",
  ctaContact: "Fale comigo",
  ctaResume: "Ver curriculo"
};

function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function Card({ s }: { s: Solution }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 shadow-sm">
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
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
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

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-8">
          <h2 className="text-xl font-semibold text-zinc-100">{copy.ctaTitle}</h2>
          <p className="mt-2 text-zinc-300">{copy.ctaBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${base}/contact`}
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:opacity-90 transition"
            >
              {copy.ctaContact}
            </a>
            <a
              href={`${base}/resume`}
              className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/40 transition"
            >
              {copy.ctaResume}
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
