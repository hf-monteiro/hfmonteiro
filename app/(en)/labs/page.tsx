import LabsView, { LabsCopy } from "@/components/views/LabsView";
import { getRepoStats } from "@/lib/github";
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
  catalogTitle: "catalog · repositories",
  tiles: { repos: "repositories", terraform: "repos in hcl", lastPush: "last push", lifecycle: "active / legacy" },
  catalog: {
    all: "all",
    columns: { repo: "repo", kind: "kind", language: "language", updated: "updated", lifecycle: "lifecycle" },
    lifecycle: { active: "active", legacy: "legacy" }
  },
  sections: [
    {
      title: "AWS Multi-Account Foundation",
      repo: "aws-tf-multi-acc",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-multi-acc" }],
      desc:
        "AWS Organizations foundation: account separation, shared networking, and cross-account roles.",
      kind: "terraform"
    },
    {
      title: "Production-Oriented EKS Environment",
      repo: "aws-tf-simple-eks",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-simple-eks" }],
      desc:
        "Private EKS with Karpenter, ArgoCD GitOps, IRSA, External Secrets, and VPC endpoints.",
      kind: "kubernetes"
    },
    {
      title: "Reusable Infrastructure Modules",
      repo: "infra-modules",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/infra-modules" }],
      desc:
        "Reusable Terraform modules for EKS, VPC, RDS, DocumentDB, S3, and SQS.",
      kind: "terraform"
    },
    {
      title: "ECS/RDS Environment Lab",
      repo: "aws-tf-simple-ecs",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-simple-ecs" }],
      desc:
        "ECS application environment with RDS, ECR, SQS, and Secrets Manager.",
      kind: "terraform"
    },
    {
      title: "Packer STIG Image Hardening",
      repo: "packer-{rhel,win}-stigs",
      links: [
        { label: "RHEL", href: "https://github.com/hf-monteiro/packer-rhel-stigs" },
        { label: "Windows", href: "https://github.com/hf-monteiro/packer-win-stigs" }
      ],
      desc:
        "Hardened, STIG-oriented Linux and Windows images built with Packer and Ansible.",
      kind: "images"
    },
    {
      title: "GitLab CI/CD Examples",
      repo: "cicd-examples",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/cicd-examples" }],
      desc:
        "Single- and multi-environment GitLab CI/CD pipelines, including Terraform automation.",
      kind: "ci/cd",
      language: "YAML"
    },
    {
      title: "AWS Automation Scripts",
      repo: "aws-scripts",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-scripts" }],
      desc:
        "Operational Python and Bash scripts for AWS accounts, ECS, IAM, and secrets.",
      kind: "scripts"
    },
    {
      title: "This Portfolio",
      repo: "hfmonteiro",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/hfmonteiro" }],
      desc: "Static Next.js site with GitHub Actions checks (build, link check, Lighthouse) deployed to Cloudflare Pages.",
      kind: "web"
    },
    {
      title: "Ansible Tower / Automation Platform Lab",
      repo: "aws-tf-ansible-tower",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-ansible-tower" }],
      desc:
        "Terraform and bootstrap scripts for an Ansible Tower lab on EC2.",
      kind: "terraform",
      legacy: true
    },
    {
      title: "Windows Package Repository Lab",
      repo: "aws-tf-chocolatey",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-chocolatey" }],
      desc:
        "Terraform for a Chocolatey-style Windows package repository on EC2.",
      kind: "terraform",
      legacy: true
    },
    {
      title: "EC2, ALB, and RDS Terraform Examples",
      repo: "aws-tf-ec2-simple",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-tf-ec2-simple" }],
      desc:
        "Early Terraform examples: EC2, ALB, and RDS primary/replica.",
      kind: "terraform",
      legacy: true
    }
  ]
};

export default async function LabsPage() {
  return <LabsView copy={copy} repos={await getRepoStats()} />;
}
