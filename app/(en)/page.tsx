import HomeView, { HomeCopy } from "@/components/views/HomeView";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Higor Monteiro | Senior DevOps / Platform Engineer",
  description:
    "Senior DevOps / Platform Engineer designing enterprise AWS platforms, private networking architectures, production EKS environments, and delivery systems for regulated SaaS teams.",
  openGraph: {
    title: "Higor Monteiro | Senior DevOps / Platform Engineer",
    description:
      "Enterprise AWS platforms, advanced cloud networking, production EKS, Terraform, and GitLab CI/CD.",
    url: "https://hfmonteiro.dev",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: HomeCopy = {
  name: "Higor Monteiro",
  title: "Senior DevOps / Platform Engineer",
  meta: [
    "Gramado, BR (UTC-3)",
    "remote",
    "EN · PT · ES"
  ],
  summary: "I build secure AWS platforms, private networking, and production Kubernetes for regulated SaaS teams.",
  buttons: {
    caseStudies: "View Projects",
    labs: "Infrastructure Labs",
    resume: "Resume"
  },
  metrics: [
    {
      label: "users served",
      value: "16M+",
      detail: "regulated banking platform"
    },
    {
      label: "deploy frequency",
      value: "10–30x",
      detail: "1/week → 2–6/day"
    },
    {
      label: "experience",
      value: "15+ yrs",
      detail: "~7 on cloud platforms"
    },
    {
      label: "certifications",
      value: "7",
      detail: "AWS ×4 · GCP ×2 · GitLab"
    }
  ],
  services: {
    title: "services · case studies",
    health: "healthy",
    env: "prod",
    link: "all projects →"
  },
  events: {
    title: "event log · career",
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
        kind: "role",
        text: "Senior DevOps Engineer · BairesDev"
      },
      {
        when: "2022",
        kind: "role",
        text: "DevOps Engineer · BairesDev"
      },
      {
        when: "2021",
        kind: "role",
        text: "SRE Analyst · Banco Inter"
      },
      {
        when: "2020",
        kind: "role",
        text: "Cloud Architect · KXC Tecnologia"
      },
      {
        when: "2017",
        kind: "role",
        text: "Technical Lead · Gtek"
      },
      {
        when: "2014",
        kind: "role",
        text: "Technical Lead · Intranetworks"
      }
    ]
  },
  stack: {
    title: "stack",
    groups: [
      {
        label: "cloud",
        items: "AWS (primary), GCP"
      },
      {
        label: "network",
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
        label: "observability",
        items: "Datadog, CloudWatch, New Relic"
      }
    ]
  },
  docs: {
    title: "docs · notes",
    link: "all notes →"
  }
};

export default function Home() {
  return <HomeView lang="en" copy={copy} />;
}
