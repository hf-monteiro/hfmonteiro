import LabsView, { LabsCopy } from "@/components/views/LabsView";

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
  legacyTitle: "Labs legados",
  sections: [
    {
      title: "Fundação AWS Multi-Conta",
      repo: "aws-tf-multi-acc",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-multi-acc" }],
      desc:
        "Fundação AWS Organizations: separação de contas, networking compartilhado e roles cross-account.",
      tags: ["AWS Organizations", "Terraform", "IAM cross-account", "VPC", "Segurança"]
    },
    {
      title: "Ambiente EKS Orientado a Produção",
      repo: "aws-tf-simple-eks",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-simple-eks" }],
      desc:
        "EKS privado com Karpenter, GitOps com ArgoCD, IRSA, External Secrets e VPC endpoints.",
      tags: ["EKS", "Karpenter", "ArgoCD", "IRSA", "Terraform", "VPC Endpoints"]
    },
    {
      title: "Módulos Reutilizáveis de Infraestrutura",
      repo: "infra-modules",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/infra-modules" }],
      desc:
        "Módulos Terraform reutilizáveis para EKS, VPC, RDS, DocumentDB, S3 e SQS.",
      tags: ["Terraform Modules", "EKS", "RDS", "S3", "SQS", "Directory Service"]
    },
    {
      title: "Lab de Ambiente ECS/RDS",
      repo: "aws-tf-simple-ecs",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-simple-ecs" }],
      desc:
        "Ambiente de aplicação em ECS com RDS, ECR, SQS e Secrets Manager.",
      tags: ["ECS", "RDS", "Secrets Manager", "ECR", "VPC"]
    },
    {
      title: "Hardening de Imagens STIG com Packer",
      repo: "packer-rhel-stigs / packer-win-stigs",
      links: [
        { label: "Repo RHEL", href: "https://github.com/hf-monteiro/packer-rhel-stigs" },
        { label: "Repo Windows", href: "https://github.com/hf-monteiro/packer-win-stigs" }
      ],
      desc:
        "Imagens Linux e Windows endurecidas (STIG) com Packer e Ansible.",
      tags: ["Packer", "Ansible", "STIG", "Windows", "RHEL"]
    },
    {
      title: "Exemplos de GitLab CI/CD",
      repo: "cicd-examples",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/cicd-examples" }],
      desc:
        "Pipelines GitLab CI/CD para um ou vários ambientes, incluindo automação Terraform.",
      tags: ["GitLab CI/CD", "Terraform", "Multi-env", "Automação"]
    },
    {
      title: "Scripts de Automação AWS",
      repo: "aws-scripts",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-scripts" }],
      desc:
        "Scripts operacionais em Python e Bash para contas AWS, ECS, IAM e secrets.",
      tags: ["Python", "Bash", "Boto3", "ECS", "IAM", "Secrets Manager"]
    },
    {
      title: "Lab de Ansible Tower / Automation Platform",
      repo: "aws-tf-ansible-tower",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-ansible-tower" }],
      desc:
        "Terraform e scripts de bootstrap para um lab de Ansible Tower em EC2.",
      legacy: true,
      tags: ["Terraform", "Ansible Tower", "EC2", "IAM", "Automação"]
    },
    {
      title: "Lab de Repositório de Pacotes Windows",
      repo: "aws-tf-chocolatey",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-chocolatey" }],
      desc:
        "Terraform para um repositório de pacotes Windows estilo Chocolatey em EC2.",
      legacy: true,
      tags: ["Windows", "Chocolatey", "EC2", "IAM", "Terraform"]
    },
    {
      title: "Exemplos Terraform de EC2, ALB e RDS",
      repo: "aws-tf-ec2-simple",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-tf-ec2-simple" }],
      desc:
        "Exemplos Terraform iniciais: EC2, ALB e RDS primário/réplica.",
      legacy: true,
      tags: ["EC2", "ALB", "RDS", "IAM", "Terraform"]
    }
  ]
};

export default function LabsPage() {
  return <LabsView copy={copy} />;
}
