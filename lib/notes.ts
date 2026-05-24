import { Lang } from "@/lib/i18n";

export type Note = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  sections: {
    heading?: string;
    body: string[];
  }[];
};

const notes: Record<Lang, Note[]> = {
  en: [
    {
      slug: "private-eks-access-patterns",
      title: "Private EKS Access Patterns for Platform Teams",
      excerpt:
        "Notes on private cluster access, GitLab runners inside Kubernetes, IAM role assumption, and operational boundaries for production EKS environments.",
      date: "2026-05-24",
      readingTime: "5 min read",
      tags: ["EKS", "AWS", "IAM", "GitLab CI/CD"],
      sections: [
        {
          body: [
            "Private EKS access is less about hiding a Kubernetes API endpoint and more about defining a clean operating model. The important question is who can reach the cluster, from where, through which identity path, and with what audit trail.",
            "For platform teams, the pattern usually works best when CI/CD execution happens close to the cluster. GitLab runners inside Kubernetes can deploy through private network paths while engineers keep human access controlled through role assumption, short-lived credentials, and explicit break-glass workflows."
          ]
        },
        {
          heading: "Design Notes",
          body: [
            "Keep cluster access private by default, isolate runner permissions per environment, and avoid reusing broad administrative roles for delivery automation.",
            "Use IAM and STS boundaries to make access understandable. If a deployment needs cross-account permissions, make that trust path visible in Terraform and monitor every assumption path."
          ]
        },
        {
          heading: "Operational Takeaway",
          body: [
            "A private EKS architecture is only successful when teams can still ship safely. The goal is not maximum restriction; it is controlled delivery with enough observability to debug production without turning every incident into a networking investigation."
          ]
        }
      ]
    },
    {
      slug: "privatelink-saas-networking",
      title: "Using PrivateLink for Enterprise SaaS Connectivity",
      excerpt:
        "How VPC Endpoint Services, private DNS, and cross-account networking help expose internal services to enterprise customers without opening public paths.",
      date: "2026-05-24",
      readingTime: "4 min read",
      tags: ["PrivateLink", "AWS Networking", "SaaS", "Route53"],
      sections: [
        {
          body: [
            "PrivateLink is one of the most useful AWS patterns for enterprise SaaS because it separates service exposure from public internet exposure. Customers can consume a service through interface endpoints while the provider keeps workloads behind private load balancers.",
            "The architecture becomes especially powerful in multi-account environments, where networking, DNS, security review, and service ownership need clear boundaries."
          ]
        },
        {
          heading: "Where It Gets Tricky",
          body: [
            "The hard parts are rarely the endpoint itself. Most complexity shows up around DNS naming, endpoint acceptance workflows, account boundaries, observability, and how teams document the contract between provider and consumer VPCs.",
            "Route53 Private Hosted Zones should be treated as architecture, not an afterthought. Naming determines how easy the service is to consume and how painful migrations become later."
          ]
        },
        {
          heading: "Practical Rule",
          body: [
            "Design the connectivity pattern as a product interface. A clean PrivateLink implementation gives consumers a stable DNS name, clear onboarding steps, and a provider-side operational model that can scale beyond one customer."
          ]
        }
      ]
    }
  ],
  "pt-br": [
    {
      slug: "private-eks-access-patterns",
      title: "Padrões de Acesso Privado ao EKS para Times de Plataforma",
      excerpt:
        "Notas sobre acesso privado ao cluster, GitLab runners dentro do Kubernetes, assume role com IAM e limites operacionais para ambientes EKS em produção.",
      date: "2026-05-24",
      readingTime: "5 min de leitura",
      tags: ["EKS", "AWS", "IAM", "GitLab CI/CD"],
      sections: [
        {
          body: [
            "Acesso privado ao EKS não é apenas esconder o endpoint da API do Kubernetes. O ponto principal é definir um modelo operacional claro: quem acessa o cluster, a partir de onde, por qual caminho de identidade e com qual trilha de auditoria.",
            "Para times de plataforma, o padrão costuma funcionar melhor quando a execução de CI/CD fica próxima ao cluster. GitLab runners dentro do Kubernetes conseguem fazer deploy por caminhos privados, enquanto o acesso humano permanece controlado por assume role, credenciais temporárias e fluxos explícitos de break-glass."
          ]
        },
        {
          heading: "Notas de Arquitetura",
          body: [
            "Mantenha o acesso ao cluster privado por padrão, isole permissões dos runners por ambiente e evite reutilizar roles administrativas amplas para automação de entrega.",
            "Use IAM e STS para deixar o caminho de acesso compreensível. Se um deploy precisa de permissões cross-account, essa relação de trust deve estar clara no Terraform e monitorada em cada assume role."
          ]
        },
        {
          heading: "Conclusão Operacional",
          body: [
            "Uma arquitetura de EKS privado só funciona quando os times continuam conseguindo entregar com segurança. O objetivo não é restringir ao máximo; é ter entrega controlada, com observabilidade suficiente para depurar produção sem transformar todo incidente em uma investigação de networking."
          ]
        }
      ]
    },
    {
      slug: "privatelink-saas-networking",
      title: "Usando PrivateLink para Conectividade em SaaS Enterprise",
      excerpt:
        "Como VPC Endpoint Services, DNS privado e networking cross-account ajudam a expor serviços internos para clientes enterprise sem abrir caminhos públicos.",
      date: "2026-05-24",
      readingTime: "4 min de leitura",
      tags: ["PrivateLink", "AWS Networking", "SaaS", "Route53"],
      sections: [
        {
          body: [
            "PrivateLink é um dos padrões mais úteis da AWS para SaaS enterprise porque separa exposição de serviço de exposição pública à internet. Clientes consomem o serviço por interface endpoints enquanto o provedor mantém workloads atrás de load balancers privados.",
            "A arquitetura fica ainda mais valiosa em ambientes multi-conta, onde networking, DNS, revisão de segurança e ownership do serviço precisam ter fronteiras claras."
          ]
        },
        {
          heading: "Onde Fica Difícil",
          body: [
            "As partes difíceis raramente estão no endpoint em si. A maior complexidade aparece em DNS, fluxo de aceite dos endpoints, fronteiras entre contas, observabilidade e documentação do contrato entre VPCs provedoras e consumidoras.",
            "Route53 Private Hosted Zones devem ser tratadas como arquitetura, não como detalhe final. A estratégia de nomes define se o serviço será fácil de consumir e se futuras migrações serão simples ou dolorosas."
          ]
        },
        {
          heading: "Regra Prática",
          body: [
            "Projete o padrão de conectividade como uma interface de produto. Uma boa implementação de PrivateLink entrega um nome DNS estável, passos claros de onboarding e um modelo operacional do lado provedor que escala além de um único cliente."
          ]
        }
      ]
    }
  ]
};

export function getNotes(lang: Lang) {
  return notes[lang];
}

export function getNote(lang: Lang, slug: string) {
  return notes[lang].find((note) => note.slug === slug);
}
