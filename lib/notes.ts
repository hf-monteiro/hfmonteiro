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
      slug: "about-me",
      title: "About Me",
      excerpt:
        "A more personal note about my engineering background, how I think about platform work, and the outdoor things that keep me grounded.",
      date: "2026-05-24",
      readingTime: "4 min read",
      tags: ["About", "Platform Engineering", "AWS", "Outdoors"],
      sections: [
        {
          body: [
            "I am a Senior DevOps / Platform Engineer focused on AWS platform architecture, production Kubernetes, Terraform, CI/CD, and cloud networking. Most of my recent work sits at the intersection of infrastructure architecture and real operational ownership: making systems private, repeatable, observable, and usable by engineering teams.",
            "My strongest area is enterprise AWS platform and networking architecture. I have worked with multi-account environments, PrivateLink, Direct Connect, Route53 private DNS, cross-account IAM and STS patterns, EKS, Istio, GitLab CI/CD, Terraform modules, and regulated SaaS infrastructure."
          ]
        },
        {
          heading: "How I Work",
          body: [
            "I like infrastructure that is boring in production and clear in code. The best platform work, to me, gives teams strong defaults without hiding the architecture. A good Terraform module, DNS pattern, or deployment workflow should reduce cognitive load while still making the important boundaries visible.",
            "I also care a lot about reliability language. Incident response, observability, access paths, rollback plans, and operational runbooks are not side quests; they are part of the architecture."
          ]
        },
        {
          heading: "Outside the Terminal",
          body: [
            "Away from work, I like the wilder side of things: fishing, hiking, camping, and being outdoors. That kind of time helps balance the very abstract work of cloud systems with something physical, quiet, and real.",
            "There is a similar mindset in both places: read the environment, prepare well, respect constraints, and stay calm when conditions change."
          ]
        }
      ]
    },
    {
      slug: "aws-multi-account-saas-architecture",
      title: "AWS Multi-Account SaaS Architecture",
      excerpt:
        "A private, enterprise-grade SaaS architecture using AWS Organizations, Direct Connect, PrivateLink, shared services, Route53 private DNS, GitLab, and Terraform.",
      date: "2026-05-24",
      readingTime: "10 min read",
      tags: ["AWS", "PrivateLink", "Direct Connect", "Terraform", "SaaS"],
      sections: [
        {
          body: [
            "This architecture evolved into a secure multi-account AWS SaaS model designed around private-only traffic, environment isolation, centralized tooling, and scalable service exposure.",
            "The core traffic path is: client Direct Connect to an access or egress VPC, then peering to ingress VPCs, then Interface Endpoints, PrivateLink, Endpoint Services, and finally application services inside isolated App VPCs."
          ]
        },
        {
          heading: "Account Model",
          body: [
            "AWS Organizations sits at the top level and provides account lifecycle, governance, SCPs, IAM policy boundaries, and centralized control. Environment accounts are separated by lifecycle, such as production, development, training, and validation.",
            "The shared services account owns core infrastructure such as the Egress VPC and Tooling VPC. The Egress VPC acts as the Direct Connect entry point, centralized outbound internet layer, and endpoint consumer access path. The Tooling VPC hosts CI/CD and internal tooling, including GitLab runners, without exposing those tools directly to client networks.",
            "A separate shared application account hosts centralized services such as Artifactory. Artifactory is exposed through an internal NLB and VPC Endpoint Service, then consumed privately from Tooling and App VPCs through Interface Endpoints."
          ]
        },
        {
          heading: "Environment VPC Pattern",
          body: [
            "Each environment account contains an Ingress VPC and an App VPC. The Ingress VPC is the endpoint consumer and DNS entry layer. It hosts Interface Endpoints for services such as EKS, MSK, and API Gateway access patterns, plus Route53 Private Hosted Zones.",
            "The App VPC contains application workloads such as EKS, Istio, MSK, RDS, API Gateway integrations, internal Route53 zones, NLBs, and Endpoint Services. This keeps application ownership separate from the client-facing private endpoint layer."
          ]
        },
        {
          heading: "PrivateLink Design",
          body: [
            "The validated PrivateLink pattern is: consumer VPC to Interface Endpoint, then PrivateLink, Endpoint Service, NLB, ALB, and finally EKS or Istio-backed services.",
            "Endpoint Services are provider-side resources backed by NLBs. Interface Endpoints are consumer-side resources created inside each VPC that needs to consume the service. Interface Endpoints are not shared and are not transitive.",
            "That non-transitive behavior is important. If Tooling, Production, and Development all need access to Artifactory, each consuming VPC creates its own Interface Endpoint to the Artifactory Endpoint Service."
          ]
        },
        {
          heading: "DNS Strategy",
          body: [
            "The final DNS strategy uses the same internal domain in both App and Ingress VPCs, such as int.arc-one.com. This avoids ALB host-header rewrites and avoids Istio or Envoy translation workarounds.",
            "With the same hostname everywhere, the client uses the name that Istio already expects, for example dashboard.int.arc-one.com. The result is simpler routing, fewer moving parts, and unchanged Istio VirtualServices.",
            "A key Route53 constraint shaped the design: a VPC cannot be associated with two Private Hosted Zones that have the same name. Each VPC can only have one int.arc-one.com zone association path."
          ]
        },
        {
          heading: "Direct Connect Decision",
          body: [
            "Two Direct Connect patterns were considered. The first kept the existing enterprise-style path using Transit VIF, DX Gateway, Transit Gateway, and VPC attachments. This works well for broader enterprise and multi-cloud routing.",
            "The second created a dedicated SaaS access path using Private VIF, DX Gateway, VGW, Egress VPC, peering, Ingress VPC, Interface Endpoints, PrivateLink, Endpoint Services, and App VPC workloads.",
            "The final recommendation for the SaaS/private endpoint path was the VGW-based model because it reduces Transit Gateway dependency, keeps routing simpler, and aligns better with endpoint-centric SaaS access."
          ]
        },
        {
          heading: "Why VPC Peering Was Required",
          body: [
            "PrivateLink is cross-VPC, but Interface Endpoint ENIs still live inside the consumer VPC. Clients arriving through the Egress VPC need L3 connectivity to those endpoint ENIs.",
            "That means peering between the Egress VPC and each Ingress VPC is required for this model. The final client path becomes Direct Connect, Egress VPC, VPC peering, Interface Endpoint ENI, PrivateLink, Endpoint Service, App VPC, and finally EKS, MSK, or API Gateway-backed services."
          ]
        },
        {
          heading: "Terraform and GitLab Automation",
          body: [
            "The deployment model uses GitLab runners with STS AssumeRole to deploy infrastructure cross-account. GitLab does not need direct network connectivity into target VPCs for Terraform operations.",
            "The Terraform architecture uses reusable modules for ingress VPCs, endpoint services, endpoint consumers, endpoint providers, DNS, and environment-specific stacks. Pipeline ordering matters: provider services need to exist before consumers create Interface Endpoints, and DNS setup must follow the endpoint lifecycle."
          ]
        },
        {
          heading: "Final Outcome",
          body: [
            "The final architecture provides no public exposure for SaaS paths, clear account and environment isolation, centralized tooling, private service exposure through PrivateLink, DNS-based routing simplicity, Istio compatibility without rewrites, and full Terraform automation.",
            "The most important design lesson is that PrivateLink, Direct Connect, DNS, and account boundaries have to be designed together. Treating them as separate implementation details usually creates routing complexity later."
          ]
        }
      ]
    }
  ],
  "pt-br": [
    {
      slug: "about-me",
      title: "Sobre Mim",
      excerpt:
        "Uma nota mais pessoal sobre minha experiência em engenharia, como penso sobre plataforma e as coisas ao ar livre que me mantêm com os pés no chão.",
      date: "2026-05-24",
      readingTime: "4 min de leitura",
      tags: ["Sobre", "Platform Engineering", "AWS", "Outdoor"],
      sections: [
        {
          body: [
            "Sou Senior DevOps / Platform Engineer com foco em arquitetura de plataformas AWS, Kubernetes em produção, Terraform, CI/CD e networking cloud. Boa parte do meu trabalho recente fica entre arquitetura de infraestrutura e operação real: criar sistemas privados, repetíveis, observáveis e úteis para times de engenharia.",
            "Minha área mais forte é arquitetura corporativa de plataforma e networking na AWS. Tenho experiência com ambientes multi-conta, PrivateLink, Direct Connect, DNS privado com Route53, padrões cross-account com IAM e STS, EKS, Istio, GitLab CI/CD, módulos Terraform e infraestrutura SaaS regulada."
          ]
        },
        {
          heading: "Como Eu Trabalho",
          body: [
            "Gosto de infraestrutura que seja previsível em produção e clara no código. Para mim, um bom trabalho de plataforma dá bons padrões para os times sem esconder a arquitetura. Um bom módulo Terraform, padrão de DNS ou fluxo de deploy deve reduzir carga cognitiva e ainda deixar as fronteiras importantes visíveis.",
            "Também valorizo bastante a parte operacional: incident response, observabilidade, caminhos de acesso, planos de rollback e runbooks não são detalhes. Eles fazem parte da arquitetura."
          ]
        },
        {
          heading: "Fora do Terminal",
          body: [
            "Fora do trabalho, gosto de coisas mais selvagens: pesca, trilha, camping e estar ao ar livre. Esse tempo ajuda a equilibrar o trabalho abstrato de cloud com algo físico, silencioso e real.",
            "Existe uma mentalidade parecida nos dois mundos: ler o ambiente, preparar bem, respeitar restrições e manter a calma quando as condições mudam."
          ]
        }
      ]
    },
    {
      slug: "aws-multi-account-saas-architecture",
      title: "Arquitetura SaaS Multi-Conta na AWS",
      excerpt:
        "Uma arquitetura SaaS privada e enterprise usando AWS Organizations, Direct Connect, PrivateLink, shared services, DNS privado com Route53, GitLab e Terraform.",
      date: "2026-05-24",
      readingTime: "10 min de leitura",
      tags: ["AWS", "PrivateLink", "Direct Connect", "Terraform", "SaaS"],
      sections: [
        {
          body: [
            "Esta arquitetura evoluiu para um modelo SaaS seguro e multi-conta na AWS, desenhado em torno de tráfego privado, isolamento por ambiente, tooling centralizado e exposição escalável de serviços.",
            "O caminho principal do tráfego é: Direct Connect do cliente para uma VPC de acesso ou egress, peering para VPCs de ingress, Interface Endpoints, PrivateLink, Endpoint Services e, por fim, serviços de aplicação dentro de App VPCs isoladas."
          ]
        },
        {
          heading: "Modelo de Contas",
          body: [
            "AWS Organizations fica no topo e fornece ciclo de vida de contas, governança, SCPs, limites de IAM e controle centralizado. As contas de ambiente são separadas por ciclo de vida, como produção, desenvolvimento, treinamento e validação.",
            "A conta de shared services mantém a infraestrutura central, como Egress VPC e Tooling VPC. A Egress VPC atua como ponto de entrada do Direct Connect, camada centralizada de saída para internet e caminho de acesso aos endpoints. A Tooling VPC hospeda CI/CD e ferramentas internas, incluindo GitLab runners, sem exposição direta para redes de clientes.",
            "Uma conta separada de shared applications hospeda serviços centralizados como Artifactory. O Artifactory é exposto por um NLB interno e VPC Endpoint Service, sendo consumido de forma privada pela Tooling VPC e pelas App VPCs usando Interface Endpoints."
          ]
        },
        {
          heading: "Padrão de VPC por Ambiente",
          body: [
            "Cada conta de ambiente contém uma Ingress VPC e uma App VPC. A Ingress VPC é a camada consumidora de endpoints e entrada de DNS. Ela hospeda Interface Endpoints para padrões de acesso a EKS, MSK e API Gateway, além de Route53 Private Hosted Zones.",
            "A App VPC contém os workloads de aplicação, como EKS, Istio, MSK, RDS, integrações com API Gateway, zonas internas do Route53, NLBs e Endpoint Services. Isso separa o ownership da aplicação da camada privada de entrada para clientes."
          ]
        },
        {
          heading: "Desenho com PrivateLink",
          body: [
            "O padrão validado de PrivateLink é: VPC consumidora para Interface Endpoint, depois PrivateLink, Endpoint Service, NLB, ALB e finalmente serviços em EKS ou Istio.",
            "Endpoint Services são recursos do lado provedor e são apoiados por NLBs. Interface Endpoints são recursos do lado consumidor, criados dentro de cada VPC que precisa consumir o serviço. Interface Endpoints não são compartilhados e não são transitivos.",
            "Esse comportamento não transitivo é importante. Se Tooling, Produção e Desenvolvimento precisam acessar Artifactory, cada VPC consumidora cria seu próprio Interface Endpoint para o Endpoint Service do Artifactory."
          ]
        },
        {
          heading: "Estratégia de DNS",
          body: [
            "A estratégia final de DNS usa o mesmo domínio interno nas VPCs de App e Ingress, como int.arc-one.com. Isso evita rewrite de host-header no ALB e evita workarounds de tradução no Istio ou Envoy.",
            "Com o mesmo hostname em todos os lugares, o cliente usa o nome que o Istio já espera, por exemplo dashboard.int.arc-one.com. O resultado é um roteamento mais simples, com menos peças móveis e sem mudança nas VirtualServices do Istio.",
            "Uma limitação importante do Route53 influenciou o desenho: uma VPC não pode ser associada a duas Private Hosted Zones com o mesmo nome. Cada VPC só pode ter um caminho de associação para int.arc-one.com."
          ]
        },
        {
          heading: "Decisão de Direct Connect",
          body: [
            "Dois padrões de Direct Connect foram avaliados. O primeiro mantinha o caminho enterprise existente com Transit VIF, DX Gateway, Transit Gateway e attachments para VPCs. Esse modelo funciona bem para roteamento enterprise amplo e multi-cloud.",
            "O segundo criava um caminho dedicado para acesso SaaS usando Private VIF, DX Gateway, VGW, Egress VPC, peering, Ingress VPC, Interface Endpoints, PrivateLink, Endpoint Services e workloads na App VPC.",
            "A recomendação final para o caminho SaaS com endpoints privados foi o modelo baseado em VGW, pois reduz a dependência de Transit Gateway, simplifica o roteamento e se alinha melhor com acesso SaaS centrado em endpoints."
          ]
        },
        {
          heading: "Por Que o Peering Foi Necessário",
          body: [
            "PrivateLink é cross-VPC, mas as ENIs dos Interface Endpoints ainda ficam dentro da VPC consumidora. Clientes chegando pela Egress VPC precisam de conectividade L3 até essas ENIs.",
            "Por isso, o peering entre a Egress VPC e cada Ingress VPC é necessário nesse modelo. O caminho final do cliente fica: Direct Connect, Egress VPC, VPC peering, ENI do Interface Endpoint, PrivateLink, Endpoint Service, App VPC e finalmente serviços como EKS, MSK ou API Gateway."
          ]
        },
        {
          heading: "Automação com Terraform e GitLab",
          body: [
            "O modelo de deploy usa GitLab runners com STS AssumeRole para aplicar infraestrutura cross-account. O GitLab não precisa de conectividade direta com as VPCs de destino para executar Terraform.",
            "A arquitetura Terraform usa módulos reutilizáveis para ingress VPCs, endpoint services, consumidores e provedores de endpoints, DNS e stacks específicas por ambiente. A ordem do pipeline importa: serviços provedores precisam existir antes de consumidores criarem Interface Endpoints, e o DNS deve seguir o ciclo de vida dos endpoints."
          ]
        },
        {
          heading: "Resultado Final",
          body: [
            "A arquitetura final entrega ausência de exposição pública para caminhos SaaS, isolamento claro de contas e ambientes, tooling centralizado, exposição privada de serviços com PrivateLink, simplicidade de roteamento por DNS, compatibilidade com Istio sem rewrites e automação completa com Terraform.",
            "A principal lição é que PrivateLink, Direct Connect, DNS e fronteiras de conta precisam ser desenhados juntos. Tratar esses pontos como detalhes separados normalmente cria complexidade de roteamento depois."
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
