import { Lang } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  context: string;
  whatIDid: string[];
  outcomes: string[];
  stack: string[];
  notes?: string[];
};

const caseStudiesByLang: Record<Lang, CaseStudy[]> = {
  en: [
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "GitLab CI/CD Standardization at Scale",
      subtitle:
        "From fragmented pipelines to a standardized, scalable CI/CD platform.",
      tags: ["GitLab CI/CD", "DevOps", "Automation", "Governance"],
      context:
        "Multiple development teams were maintaining independent GitLab pipelines with inconsistent stages, naming conventions, and deployment rules. This led to slow delivery, fragile releases, and high operational overhead for DevOps support.",
      whatIDid: [
        "Designed a standardized GitLab CI/CD pipeline model with clear stages, naming conventions, and reusable patterns.",
        "Created shared pipeline templates to eliminate copy/paste across repositories.",
        "Implemented safer deployment workflows with manual production gates and environment-specific rules.",
        "Worked closely with development teams to onboard repositories incrementally without breaking existing delivery."
      ],
      outcomes: [
        "Reduced release cycle time by ~800%, moving from weekly releases to multiple releases per day.",
        "Significantly decreased pipeline maintenance effort and configuration drift.",
        "Improved developer experience by providing a clear, documented CI/CD standard."
      ],
      stack: ["GitLab CI", "Docker", "Terraform", "Kubernetes"]
    },
    {
      slug: "aws-multi-account-platform-terraform",
      title: "AWS Multi-Account Platform with Terraform",
      subtitle:
        "Reusable infrastructure patterns for consistent environments at scale.",
      tags: ["AWS", "Terraform", "Platform Engineering", "IaC"],
      context:
        "The organization required a reliable way to provision and manage multiple AWS environments while enforcing security, networking, and operational standards across accounts.",
      whatIDid: [
        "Designed modular Terraform architecture for networking, compute, and shared services.",
        "Implemented environment separation (DEV, INT, STG, PROD) using consistent patterns.",
        "Applied least-privilege IAM practices and standardized networking components.",
        "Enabled repeatable infrastructure provisioning with minimal manual intervention."
      ],
      outcomes: [
        "Faster and more predictable environment provisioning.",
        "Reduced configuration drift through Infrastructure as Code.",
        "Improved security posture and operational consistency across AWS accounts."
      ],
      stack: ["AWS", "Terraform", "VPC", "IAM", "EKS"]
    },
    {
      slug: "observability-alerting-noise-reduction",
      title: "Observability & Alerting Noise Reduction",
      subtitle:
        "Improving signal-to-noise ratio and operational response.",
      tags: ["Observability", "SRE", "Monitoring", "Alerting"],
      context:
        "Teams were experiencing alert fatigue due to excessive and poorly classified alerts, impacting on-call effectiveness and incident response quality.",
      whatIDid: [
        "Reviewed existing monitors and alerts to identify duplication and low-value signals.",
        "Defined severity levels aligned with real business and operational impact.",
        "Implemented clearer escalation paths and on-call expectations.",
        "Documented operational playbooks to standardize incident response."
      ],
      outcomes: [
        "Significant reduction in alert noise and false positives.",
        "Faster incident triage and improved on-call experience.",
        "More consistent communication during incidents."
      ],
      stack: ["Datadog", "CloudWatch", "Dynatrace", "Runbooks"]
    }
  ],
  "pt-br": [
    {
      slug: "gitlab-cicd-standardization-at-scale",
      title: "Padronizacao de CI/CD no GitLab em escala",
      subtitle:
        "De pipelines fragmentados para uma plataforma CI/CD padronizada e escalavel.",
      tags: ["GitLab CI/CD", "DevOps", "Automacao", "Governanca"],
      context:
        "Varios times de desenvolvimento mantinham pipelines independentes no GitLab com estagios, convencoes de nomes e regras de deploy inconsistentes. Isso gerava entregas lentas, releases frageis e alto custo operacional para o suporte de DevOps.",
      whatIDid: [
        "Desenhei um modelo padronizado de pipeline do GitLab CI/CD com estagios claros, convencoes de nomes e padroes reutilizaveis.",
        "Criei templates compartilhados para eliminar copy/paste entre repositorios.",
        "Implementei fluxos de deploy mais seguros com gates manuais em producao e regras por ambiente.",
        "Trabalhei de perto com os times de desenvolvimento para migrar repositorios de forma incremental, sem quebrar a entrega existente."
      ],
      outcomes: [
        "Reduzi o ciclo de release em ~800%, saindo de releases semanais para multiplos por dia.",
        "Diminui significativamente o esforco de manutencao de pipelines e o drift de configuracao.",
        "Melhorei a experiencia do desenvolvedor com um padrao de CI/CD claro e documentado."
      ],
      stack: ["GitLab CI", "Docker", "Terraform", "Kubernetes"]
    },
    {
      slug: "aws-multi-account-platform-terraform",
      title: "Plataforma multi-conta AWS com Terraform",
      subtitle:
        "Padroes de infraestrutura reutilizaveis para ambientes consistentes em escala.",
      tags: ["AWS", "Terraform", "Engenharia de Plataforma", "IaC"],
      context:
        "A organizacao precisava de uma forma confiavel de provisionar e gerenciar multiplos ambientes AWS, garantindo padroes de seguranca, rede e operacao entre contas.",
      whatIDid: [
        "Desenhei uma arquitetura modular em Terraform para rede, computacao e servicos compartilhados.",
        "Implementei separacao de ambientes (DEV, INT, STG, PROD) com padroes consistentes.",
        "Apliquei praticas de IAM com menor privilegio e padronizei componentes de rede.",
        "Habilitei provisionamento repetivel com minima intervencao manual."
      ],
      outcomes: [
        "Provisionamento de ambientes mais rapido e previsivel.",
        "Reducao de drift de configuracao por meio de Infrastructure as Code.",
        "Melhoria da postura de seguranca e da consistencia operacional entre contas AWS."
      ],
      stack: ["AWS", "Terraform", "VPC", "IAM", "EKS"]
    },
    {
      slug: "observability-alerting-noise-reduction",
      title: "Observabilidade e reducao de ruido de alertas",
      subtitle:
        "Melhorando a relacao sinal-ruido e a resposta operacional.",
      tags: ["Observabilidade", "SRE", "Monitoramento", "Alertas"],
      context:
        "Os times sofriam com fadiga de alertas por excesso de notificacoes mal classificadas, prejudicando a eficacia do plantao e a qualidade da resposta a incidentes.",
      whatIDid: [
        "Revisei monitores e alertas existentes para identificar duplicidade e sinais de baixo valor.",
        "Defini niveis de severidade alinhados ao impacto real do negocio e da operacao.",
        "Implementei caminhos de escalacao mais claros e expectativas para o plantao.",
        "Documentei playbooks operacionais para padronizar a resposta a incidentes."
      ],
      outcomes: [
        "Reducao significativa de ruido e falsos positivos.",
        "Triagem de incidentes mais rapida e melhor experiencia de plantao.",
        "Comunicacao mais consistente durante incidentes."
      ],
      stack: ["Datadog", "CloudWatch", "Dynatrace", "Runbooks"]
    }
  ]
};

export function getCaseStudies(lang: Lang) {
  return caseStudiesByLang[lang];
}

export function getCaseStudy(lang: Lang, slug: string) {
  return caseStudiesByLang[lang].find((c) => c.slug === slug);
}
