import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Infrastructure Labs",
  intro:
    "Labs e implementacoes de referencia em AWS, Terraform, Kubernetes, CI/CD, Packer e automacao.",
  note:
    "Esses projetos sao exemplos de aprendizado, arquitetura e implementacao, nao modulos prontos para uso direto em producao.",
  back: "Voltar para o inicio",
  sections: [
    {
      title: "Fundacao AWS Multi-Conta",
      repo: "tf-multi-acc",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/tf-multi-acc" }],
      desc:
        "Padroes Terraform para AWS Organizations, separacao de contas, networking compartilhado, contas de seguranca, roles cross-account, remote state e blocos reutilizaveis de VPC/subnets.",
      tags: ["AWS Organizations", "Terraform", "IAM cross-account", "VPC", "Seguranca"]
    },
    {
      title: "Modulos Reutilizaveis de Infraestrutura",
      repo: "infra-modules",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/infra-modules" }],
      desc:
        "Modulos e exemplos Terraform para EKS, VPC, RDS, DocumentDB, S3, SQS FIFO, Directory Service e padroes de infraestrutura por ambiente.",
      tags: ["Terraform Modules", "EKS", "RDS", "S3", "SQS", "Directory Service"]
    },
    {
      title: "Lab de Ambiente ECS/RDS",
      repo: "simple-ecs-env",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/simple-ecs-env" }],
      desc:
        "Ambiente lab com ECS, RDS, ECR, S3, SQS, roteamento VPC, security groups e integracao com Secrets Manager para infraestrutura de aplicacoes.",
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
        "Exemplos com Packer e Ansible para criar imagens Linux e Windows hardenizadas, incluindo configuracao orientada a STIG e bootstrap de automacao remota.",
      tags: ["Packer", "Ansible", "STIG", "Windows", "RHEL"]
    },
    {
      title: "Exemplos de GitLab CI/CD",
      repo: "cicd-examples",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/cicd-examples" }],
      desc:
        "Exemplos de pipelines para fluxos GitLab CI/CD single-env e multi-env, automacao Terraform e padroes reutilizaveis de entrega.",
      tags: ["GitLab CI/CD", "Terraform", "Multi-env", "Automacao"]
    },
    {
      title: "Scripts de Automacao AWS",
      repo: "aws-scripts",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-scripts" }],
      desc:
        "Scripts operacionais pequenos para automacao de contas AWS, checks de deploy ECS, leitura de Secrets Manager, monitoramento SSL, inspecao IAM e criacao de roles.",
      tags: ["Python", "Bash", "Boto3", "ECS", "IAM", "Secrets Manager"]
    },
    {
      title: "Lab de Ansible Tower / Automation Platform",
      repo: "tf-ansible-tower",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/tf-ansible-tower" }],
      desc:
        "Exemplos Terraform e bootstrap para deploy de uma plataforma de automacao lab com EC2, IAM, security groups, user data e scripts operacionais.",
      tags: ["Legacy lab", "Terraform", "Ansible Tower", "EC2", "IAM", "Automacao"]
    },
    {
      title: "Lab de Repositorio de Pacotes Windows",
      repo: "tf-chocolatey",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/tf-chocolatey" }],
      desc:
        "Lab Terraform para criar infraestrutura em torno de um repositorio estilo Chocolatey, incluindo EC2, IAM roles e padroes de security groups.",
      tags: ["Legacy lab", "Windows", "Chocolatey", "EC2", "IAM", "Terraform"]
    },
    {
      title: "Exemplos Terraform de EC2, ALB e RDS",
      repo: "aws-ec2-simple",
      links: [{ label: "Ver repo", href: "https://github.com/hf-monteiro/aws-ec2-simple" }],
      desc:
        "Exemplos Terraform anteriores para EC2, ALB, padroes RDS master/replica, IAM roles, security groups e composicao basica de infraestrutura AWS.",
      tags: ["Legacy lab", "EC2", "ALB", "RDS", "IAM", "Terraform"]
    }
  ]
};

export default function LabsPage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <a className="text-sm text-zinc-400 hover:text-zinc-200" href="/pt-br">
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
