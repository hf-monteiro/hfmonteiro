import HomeView, { HomeCopy } from "@/components/views/HomeView";

const copy: HomeCopy = {
  name: "Higor Monteiro",
  title: "Senior DevOps / Platform Engineer",
  meta: [
    "Gramado, BR (UTC-3)",
    "remoto",
    "PT · EN · ES"
  ],
  summary: "Construo plataformas AWS seguras, networking privado e Kubernetes em produção para times SaaS regulados.",
  buttons: {
    caseStudies: "Ver projetos",
    labs: "Infrastructure Labs",
    resume: "Currículo"
  },
  metrics: [
    {
      label: "usuários atendidos",
      value: "16M+",
      detail: "plataforma bancária regulada"
    },
    {
      label: "frequência de deploy",
      value: "10–30x",
      detail: "1/semana → 2–6/dia"
    },
    {
      label: "experiência",
      value: "15+ anos",
      detail: "~7 em plataformas cloud"
    },
    {
      label: "certificações",
      value: "7",
      detail: "AWS ×4 · GCP ×2 · GitLab"
    }
  ],
  services: {
    title: "serviços · projetos",
    health: "healthy",
    env: "prod",
    link: "todos os projetos →"
  },
  events: {
    title: "event log · carreira",
    items: [
      {
        when: "2025",
        kind: "cert",
        text: "AWS Advanced Networking – Specialty"
      },
      {
        when: "2024",
        kind: "cert",
        text: "AWS DevOps Engineer – Professional"
      },
      {
        when: "2023",
        kind: "cargo",
        text: "Senior DevOps Engineer · BairesDev"
      },
      {
        when: "2022",
        kind: "cargo",
        text: "DevOps Engineer · BairesDev"
      },
      {
        when: "2021",
        kind: "cargo",
        text: "SRE Analyst · Banco Inter"
      },
      {
        when: "2020",
        kind: "cargo",
        text: "Cloud Architect · KXC Tecnologia"
      },
      {
        when: "2017",
        kind: "cargo",
        text: "Technical Lead · Gtek"
      },
      {
        when: "2014",
        kind: "cargo",
        text: "Technical Lead · Intranetworks"
      }
    ]
  },
  stack: {
    title: "stack",
    groups: [
      {
        label: "cloud",
        items: "AWS (principal), GCP"
      },
      {
        label: "rede",
        items: "Direct Connect, Transit Gateway, PrivateLink, Route 53"
      },
      {
        label: "iac",
        items: "Terraform, Ansible, CloudFormation"
      },
      {
        label: "containers",
        items: "EKS, Istio, Helm, ECS"
      },
      {
        label: "ci/cd",
        items: "GitLab CI, GitHub Actions, Argo CD"
      },
      {
        label: "observabilidade",
        items: "Datadog, CloudWatch, New Relic"
      }
    ]
  },
  docs: {
    title: "docs · notas",
    link: "todas as notas →"
  }
};

export default function Home() {
  return <HomeView lang="pt-br" copy={copy} />;
}
