import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Infrastructure Labs",
  intro:
    "Curated labs and reference implementations across AWS, Terraform, Kubernetes, CI/CD, Packer, and automation.",
  note:
    "These projects are designed as learning, architecture, and implementation examples rather than drop-in production modules.",
  back: "Back to home",
  sections: [
    {
      title: "AWS Multi-Account Foundation",
      repo: "tf-multi-acc",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/tf-multi-acc" }],
      desc:
        "Terraform patterns for AWS Organizations, account separation, shared networking, security accounts, cross-account roles, remote state, and reusable subnet/VPC building blocks.",
      tags: ["AWS Organizations", "Terraform", "Cross-account IAM", "VPC", "Security"]
    },
    {
      title: "Reusable Infrastructure Modules",
      repo: "infra-modules",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/infra-modules" }],
      desc:
        "Reference Terraform modules and examples for EKS, VPC, RDS, DocumentDB, S3, SQS FIFO, Directory Service, and environment-oriented infrastructure patterns.",
      tags: ["Terraform Modules", "EKS", "RDS", "S3", "SQS", "Directory Service"]
    },
    {
      title: "ECS/RDS Environment Lab",
      repo: "simple-ecs-env",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/simple-ecs-env" }],
      desc:
        "A lab environment showing ECS, RDS, ECR, S3, SQS, VPC routing, security groups, and Secrets Manager integration for application infrastructure.",
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
        "Packer and Ansible examples for building hardened Linux and Windows images, including STIG-oriented configuration and remote automation bootstrap patterns.",
      tags: ["Packer", "Ansible", "STIG", "Windows", "RHEL"]
    },
    {
      title: "GitLab CI/CD Examples",
      repo: "cicd-examples",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/cicd-examples" }],
      desc:
        "Pipeline examples for single-environment and multi-environment GitLab CI/CD workflows, Terraform automation, and reusable delivery patterns.",
      tags: ["GitLab CI/CD", "Terraform", "Multi-env", "Automation"]
    },
    {
      title: "AWS Automation Scripts",
      repo: "aws-scripts",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-scripts" }],
      desc:
        "Small operational scripts for AWS account automation, ECS deployment checks, Secrets Manager reads, SSL monitoring, IAM inspection, and role creation workflows.",
      tags: ["Python", "Bash", "Boto3", "ECS", "IAM", "Secrets Manager"]
    },
    {
      title: "Ansible Tower / Automation Platform Lab",
      repo: "tf-ansible-tower",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/tf-ansible-tower" }],
      desc:
        "Terraform and bootstrap examples for deploying an automation platform lab with EC2, IAM, security groups, user data, and operational setup scripts.",
      tags: ["Legacy lab", "Terraform", "Ansible Tower", "EC2", "IAM", "Automation"]
    },
    {
      title: "Windows Package Repository Lab",
      repo: "tf-chocolatey",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/tf-chocolatey" }],
      desc:
        "Terraform lab for standing up infrastructure around a Chocolatey-style package repository, including EC2, IAM roles, and security group patterns.",
      tags: ["Legacy lab", "Windows", "Chocolatey", "EC2", "IAM", "Terraform"]
    },
    {
      title: "EC2, ALB, and RDS Terraform Examples",
      repo: "aws-ec2-simple",
      links: [{ label: "View repo", href: "https://github.com/hf-monteiro/aws-ec2-simple" }],
      desc:
        "Earlier Terraform examples for EC2, ALB, RDS master/replica patterns, IAM roles, security groups, and basic AWS infrastructure composition.",
      tags: ["Legacy lab", "EC2", "ALB", "RDS", "IAM", "Terraform"]
    }
  ]
};

export default function LabsPage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/">
            ← {copy.back}
          </a>
          <h1 className="mt-4 text-3xl font-semibold">{copy.title}</h1>
          <p className="mt-3 max-w-3xl text-zinc-300">{copy.intro}</p>
          <p className="mt-3 max-w-3xl text-sm text-zinc-500">{copy.note}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {copy.sections.map((lab) => (
              <Card key={lab.title}>
                <p className="text-xs uppercase tracking-wider text-zinc-500">{lab.repo}</p>
                <h2 className="mt-2 text-lg font-semibold">{lab.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm text-zinc-300">{lab.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lab.tags.slice(0, 4).map((tag) => (
                    tag === "Legacy lab" ? (
                      <span
                        key={tag}
                        className="rounded-full border border-white bg-white px-3 py-1 text-xs font-medium text-zinc-950"
                      >
                        {tag}
                      </span>
                    ) : (
                      <Pill key={tag}>{tag}</Pill>
                    )
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {lab.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-zinc-300 hover:text-zinc-100"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
