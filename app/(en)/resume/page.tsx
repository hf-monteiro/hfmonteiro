import ResumeView, { ResumeCopy } from "@/components/views/ResumeView";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Resume | Higor Monteiro",
  description:
    "Senior DevOps and Platform Engineering resume focused on AWS architecture, EKS, Terraform, GitLab CI/CD, and cloud networking.",
  openGraph: {
    title: "Resume | Higor Monteiro",
    description:
      "Senior DevOps and Platform Engineering resume: AWS architecture, EKS, Terraform, GitLab CI/CD, cloud networking.",
    url: "https://hfmonteiro.dev/resume",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: ResumeCopy = {
  title: "Resume",
  summaryBody:
    "Senior DevOps and Platform Engineer with 15+ years in infrastructure, including about 7 years on cloud platforms, focused on AWS multi-account platforms, hybrid networking, Kubernetes (Amazon EKS), Infrastructure as Code, and Site Reliability Engineering. Hands-on in architecture and production for US-based SaaS clients, including a US government engagement, and earlier in regulated banking (16M+ users). Standardized CI/CD to take teams from 1 deploy per week to 2–6 per day.",
  download: "Download PDF",
  contact: "Contact",
  certsTitle: "Certifications",
  certs: [
    "AWS Certified Advanced Networking – Specialty (2025–2028)",
    "AWS Certified DevOps Engineer – Professional (2024–2027)",
    "AWS Certified Developer – Associate (2023–2027)",
    "AWS Certified Cloud Practitioner (2020–2027)",
    "GCP Professional Cloud Developer (2025–2027)",
    "GCP Professional Cloud Architect (2024–2026)",
    "GitLab Certified Associate (2021)"
  ],
  educationTitle: "Education",
  education: [
    { degree: "Master's Degree in Big Data and Data Intelligence", school: "INSA Barcelona", period: "2019 - 2020" },
    { degree: "Bachelor's Degree in Computer Infrastructure and Networks", school: "Senac RS", period: "2013 - 2017" }
  ],
  languagesTitle: "Languages",
  languages: ["English: Fluent", "Portuguese: Native", "Spanish: Advanced"],
  recentTitle: "Recent Platform & Cloud Experience",
  earlierTitle: "Earlier Infrastructure Leadership",
  recentRoles: [
    {
      title: "Senior DevOps Engineer",
      company: "BairesDev",
      period: "Mar 2023 - Present",
      items: [
        "Designed hybrid AWS networking over Direct Connect and Transit Gateway with a centralized PrivateLink endpoint VPC and Route 53 Resolver for partner connectivity.",
        "Built multi-account AWS environments with reusable Terraform modules across dozens of accounts, enabling self-service provisioning.",
        "Led a team of engineers delivering cloud infrastructure for a US government client in a regulated, high-security environment.",
        "Standardized GitLab CI/CD across engineering teams: 1 deploy/week to 2–6/day (10–30x).",
        "Led the monolith-to-microservices migration on Amazon EKS and ECS, and own production with SRE practices: observability, incident response, and post-mortems."
      ]
    },
    {
      title: "DevOps Engineer",
      company: "BairesDev",
      period: "Feb 2022 - Mar 2023",
      items: [
        "Set up GitOps deployments to Amazon EKS with Argo CD and reusable Terraform modules.",
        "Led a DevOps team for a high-security US client (May–Jul 2022), standardizing Terraform and Ansible provisioning across Windows and Linux.",
        "Built GitLab CI and AWS CodePipeline pipelines that automated build, test, and deploy.",
        "Ran highly available RDS and Aurora (PostgreSQL/MySQL) clusters with Multi-AZ automated failover."
      ]
    },
    {
      title: "SRE Analyst",
      company: "Banco Inter",
      period: "Sep 2021 - Feb 2022",
      items: [
        "Operated production AWS for one of Brazil's largest digital banks (16M+ users) across VPC, EKS, ECS, API Gateway, RDS, Lambda, and MSK.",
        "Built GitLab pipelines with integrated code quality and security scanning for a regulated SDLC.",
        "Implemented monitoring, logging, and alerting that reduced on-call toil."
      ]
    },
    {
      title: "Cloud Architect",
      company: "KXC Tecnologia",
      period: "Jun 2020 - Sep 2021",
      items: [
        "Architected AWS solutions with Terraform and AWS CI/CD tools (CodePipeline, CodeDeploy) for enterprise clients.",
        "Automated deployments with AWS CodePipeline, GitHub, and GitLab, replacing manual releases.",
        "Led large-scale migrations of legacy workloads to AWS."
      ]
    }
  ],
  earlierRoles: [
    {
      title: "Technical Lead",
      company: "Gtek Soluções Tecnológicas",
      period: "Sep 2017 - Jun 2019",
      items: [
        "Led a technical team, owning incident management and on-premises virtualization projects.",
        "Architected and delivered network infrastructure projects for enterprise clients."
      ]
    },
    {
      title: "Technical Lead",
      company: "Intranetworks",
      period: "Sep 2014 - Aug 2017",
      items: [
        "Promoted from IT Analyst to Technical Lead within a year; led team and incident management.",
        "Designed and delivered data center, network, and virtualization infrastructure projects."
      ]
    }
  ]
};

export default function ResumePage() {
  return <ResumeView lang="en" copy={copy} />;
}
