import LabsView, { LabsCopy } from "@/components/views/LabsView";
import { getRepoStats } from "@/lib/github";

export const metadata = {
  title: "Infrastructure Labs | Higor Monteiro",
  description:
    "Labs e implementações de referência em AWS, Terraform, Kubernetes, CI/CD, Packer e automação."
};

const copy: LabsCopy = {
  title: "Infrastructure Labs",
  intro:
    "Implementações de referência em AWS, Terraform, Kubernetes e CI/CD.",
  note:
    "Exemplos de aprendizado e arquitetura, não módulos prontos para produção.",
  catalogTitle: "catálogo · repositórios",
  tiles: { repos: "repositórios", terraform: "repos em hcl", lastPush: "último push", lifecycle: "ativos / legados" },
  catalog: {
    all: "todos",
    columns: { repo: "repo", kind: "tipo", language: "linguagem", updated: "atualizado", lifecycle: "ciclo" },
    lifecycle: { active: "ativo", legacy: "legado" }
  },
  sections: [
    {
      title: "Fundação AWS Multi-Conta",
      repo: "aws-tf-multi-acc",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-multi-acc" }],
      desc:
        "Fundação AWS Organizations: separação de contas, networking compartilhado e roles cross-account.",
      kind: "terraform"
    },
    {
      title: "Ambiente EKS Orientado a Produção",
      repo: "aws-tf-simple-eks",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-simple-eks" }],
      desc:
        "EKS privado com Karpenter, GitOps com ArgoCD, IRSA, External Secrets e VPC endpoints.",
      kind: "kubernetes"
    },
    {
      title: "Módulos Reutilizáveis de Infraestrutura",
      repo: "infra-modules",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/infra-modules" }],
      desc:
        "Módulos Terraform reutilizáveis para EKS, VPC, RDS, DocumentDB, S3 e SQS.",
      kind: "terraform"
    },
    {
      title: "Lab de Ambiente ECS/RDS",
      repo: "aws-tf-simple-ecs",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-simple-ecs" }],
      desc:
        "Ambiente de aplicação em ECS com RDS, ECR, SQS e Secrets Manager.",
      kind: "terraform"
    },
    {
      title: "Hardening de Imagens STIG com Packer",
      repo: "packer-{rhel,win}-stigs",
      links: [
        { label: "RHEL", href: "https://github.com/hf-monteiro/packer-rhel-stigs" },
        { label: "Windows", href: "https://github.com/hf-monteiro/packer-win-stigs" }
      ],
      desc:
        "Imagens Linux e Windows endurecidas (STIG) com Packer e Ansible.",
      kind: "images"
    },
    {
      title: "Exemplos de GitLab CI/CD",
      repo: "cicd-examples",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/cicd-examples" }],
      desc:
        "Pipelines GitLab CI/CD para um ou vários ambientes, incluindo automação Terraform.",
      kind: "ci/cd",
      language: "YAML"
    },
    {
      title: "Scripts de Automação AWS",
      repo: "aws-scripts",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-scripts" }],
      desc:
        "Scripts operacionais em Python e Bash para contas AWS, ECS, IAM e secrets.",
      kind: "scripts"
    },
    {
      title: "Este Portfólio",
      repo: "hfmonteiro",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/hfmonteiro" }],
      desc: "Site Next.js estático com checks no GitHub Actions (build, link check, Lighthouse) publicado no Cloudflare Pages.",
      kind: "web"
    },
    {
      title: "Lab de Ansible Tower / Automation Platform",
      repo: "aws-tf-ansible-tower",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-ansible-tower" }],
      desc:
        "Terraform e scripts de bootstrap para um lab de Ansible Tower em EC2.",
      kind: "terraform",
      legacy: true
    },
    {
      title: "Lab de Repositório de Pacotes Windows",
      repo: "aws-tf-chocolatey",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-chocolatey" }],
      desc:
        "Terraform para um repositório de pacotes Windows estilo Chocolatey em EC2.",
      kind: "terraform",
      legacy: true
    },
    {
      title: "Exemplos Terraform de EC2, ALB e RDS",
      repo: "aws-tf-ec2-simple",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-ec2-simple" }],
      desc:
        "Exemplos Terraform iniciais: EC2, ALB e RDS primário/réplica.",
      kind: "terraform",
      legacy: true
    }
  ]
};

export default async function LabsPage() {
  return <LabsView copy={copy} repos={await getRepoStats()} />;
}
