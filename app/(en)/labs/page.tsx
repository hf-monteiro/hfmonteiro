import LabsView, { LabsCopy } from "@/components/views/LabsView";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Infrastructure Labs | Higor Monteiro",
  description:
    "Infrastructure labs and reference implementations for AWS, Terraform, Kubernetes, CI/CD, Packer, and automation.",
  openGraph: {
    title: "Infrastructure Labs | Higor Monteiro",
    description:
      "Curated labs and reference implementations: AWS, Terraform, Kubernetes, CI/CD, Packer, and automation.",
    url: "https://hfmonteiro.dev/labs",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: LabsCopy = {
  title: "Infrastructure Labs",
  intro:
    "Reference implementations across AWS, Terraform, Kubernetes, and CI/CD.",
  note:
    "Learning and architecture examples, not drop-in production modules.",
  legacyTitle: "Legacy labs",
  sections: [
    {
      title: "AWS Multi-Account Foundation",
      repo: "aws-tf-multi-acc",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-multi-acc" }],
      desc:
        "AWS Organizations foundation: account separation, shared networking, and cross-account roles.",
      tags: ["AWS Organizations", "Terraform", "Cross-account IAM", "VPC", "Security"]
    },
    {
      title: "Production-Oriented EKS Environment",
      repo: "aws-tf-simple-eks",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-simple-eks" }],
      desc:
        "Private EKS with Karpenter, ArgoCD GitOps, IRSA, External Secrets, and VPC endpoints.",
      tags: ["EKS", "Karpenter", "ArgoCD", "IRSA", "Terraform", "VPC Endpoints"]
    },
    {
      title: "Reusable Infrastructure Modules",
      repo: "infra-modules",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/infra-modules" }],
      desc:
        "Reusable Terraform modules for EKS, VPC, RDS, DocumentDB, S3, and SQS.",
      tags: ["Terraform Modules", "EKS", "RDS", "S3", "SQS", "Directory Service"]
    },
    {
      title: "ECS/RDS Environment Lab",
      repo: "aws-tf-simple-ecs",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-simple-ecs" }],
      desc:
        "ECS application environment with RDS, ECR, SQS, and Secrets Manager.",
      tags: ["ECS", "RDS", "Secrets Manager", "ECR", "VPC"]
    },
    {
      title: "Packer STIG Image Hardening",
      repo: "packer-rhel-stigs / packer-win-stigs",
      links: [
        { label: "RHEL repo", href: "https://github.com/hf-monteiro/packer-rhel-stigs" },
        { label: "Windows repo", href: "https://github.com/hf-monteiro/packer-win-stigs" }
      ],
      desc:
        "Hardened, STIG-oriented Linux and Windows images built with Packer and Ansible.",
      tags: ["Packer", "Ansible", "STIG", "Windows", "RHEL"]
    },
    {
      title: "GitLab CI/CD Examples",
      repo: "cicd-examples",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/cicd-examples" }],
      desc:
        "Single- and multi-environment GitLab CI/CD pipelines, including Terraform automation.",
      tags: ["GitLab CI/CD", "Terraform", "Multi-env", "Automation"]
    },
    {
      title: "AWS Automation Scripts",
      repo: "aws-scripts",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-scripts" }],
      desc:
        "Operational Python and Bash scripts for AWS accounts, ECS, IAM, and secrets.",
      tags: ["Python", "Bash", "Boto3", "ECS", "IAM", "Secrets Manager"]
    },
    {
      title: "Ansible Tower / Automation Platform Lab",
      repo: "aws-tf-ansible-tower",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-ansible-tower" }],
      desc:
        "Terraform and bootstrap scripts for an Ansible Tower lab on EC2.",
      legacy: true,
      tags: ["Terraform", "Ansible Tower", "EC2", "IAM", "Automation"]
    },
    {
      title: "Windows Package Repository Lab",
      repo: "aws-tf-chocolatey",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-chocolatey" }],
      desc:
        "Terraform for a Chocolatey-style Windows package repository on EC2.",
      legacy: true,
      tags: ["Windows", "Chocolatey", "EC2", "IAM", "Terraform"]
    },
    {
      title: "EC2, ALB, and RDS Terraform Examples",
      repo: "aws-tf-ec2-simple",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-ec2-simple" }],
      desc:
        "Early Terraform examples: EC2, ALB, and RDS primary/replica.",
      legacy: true,
      tags: ["EC2", "ALB", "RDS", "IAM", "Terraform"]
    }
  ]
};

export default function LabsPage() {
  return <LabsView copy={copy} />;
}
