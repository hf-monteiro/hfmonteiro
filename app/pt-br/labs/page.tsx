import Container from "@/components/Container";
import Card from "@/components/Card";
import Pill from "@/components/Pill";

const copy = {
  title: "Infrastructure Labs",
  intro:
    "Labs de infraestrutura e implementacoes de referencia cobrindo AWS networking, modulos Terraform, Kubernetes, automacao CI/CD, hardening de imagens com Packer e scripts operacionais.",
  note:
    "Esses projetos sao exemplos de aprendizado, arquitetura e implementacao, nao modulos prontos para uso direto em producao.",
  back: "Voltar para o inicio",
  sections: [
    {
      title: "Fundacao AWS Multi-Conta",
      repo: "tf-multi-acc",
      desc:
        "Padroes Terraform para AWS Organizations, separacao de contas, networking compartilhado, contas de seguranca, roles cross-account, remote state e blocos reutilizaveis de VPC/subnets.",
      tags: ["AWS Organizations", "Terraform", "IAM cross-account", "VPC", "Seguranca"]
    },
    {
      title: "Modulos Reutilizaveis de Infraestrutura",
      repo: "infra-modules",
      desc:
        "Modulos e exemplos Terraform para EKS, VPC, RDS, DocumentDB, S3, SQS FIFO, Directory Service e padroes de infraestrutura por ambiente.",
      tags: ["Terraform Modules", "EKS", "RDS", "S3", "SQS", "Directory Service"]
    },
    {
      title: "Lab de Ambiente ECS/RDS",
      repo: "simple-ecs-env",
      desc:
        "Ambiente lab com ECS, RDS, ECR, S3, SQS, roteamento VPC, security groups e integracao com Secrets Manager para infraestrutura de aplicacoes.",
      tags: ["ECS", "RDS", "Secrets Manager", "ECR", "VPC"]
    },
    {
      title: "Hardening de Imagens STIG com Packer",
      repo: "packer-rhel-stigs / packer-win-stigs",
      desc:
        "Exemplos com Packer e Ansible para criar imagens Linux e Windows hardenizadas, incluindo configuracao orientada a STIG e bootstrap de automacao remota.",
      tags: ["Packer", "Ansible", "STIG", "Windows", "RHEL"]
    },
    {
      title: "Exemplos de GitLab CI/CD",
      repo: "cicd-examples",
      desc:
        "Exemplos de pipelines para fluxos GitLab CI/CD single-env e multi-env, automacao Terraform e padroes reutilizaveis de entrega.",
      tags: ["GitLab CI/CD", "Terraform", "Multi-env", "Automacao"]
    },
    {
      title: "Scripts de Automacao AWS",
      repo: "aws-scripts",
      desc:
        "Scripts operacionais pequenos para automacao de contas AWS, checks de deploy ECS, leitura de Secrets Manager, monitoramento SSL, inspecao IAM e criacao de roles.",
      tags: ["Python", "Bash", "Boto3", "ECS", "IAM", "Secrets Manager"]
    },
    {
      title: "Lab de Ansible Tower / Automation Platform",
      repo: "tf-ansible-tower",
      desc:
        "Exemplos Terraform e bootstrap para deploy de uma plataforma de automacao lab com EC2, IAM, security groups, user data e scripts operacionais.",
      tags: ["Terraform", "Ansible Tower", "EC2", "IAM", "Automacao"]
    },
    {
      title: "Lab de Repositorio de Pacotes Windows",
      repo: "tf-chocolatey",
      desc:
        "Lab Terraform para criar infraestrutura em torno de um repositorio estilo Chocolatey, incluindo EC2, IAM roles e padroes de security groups.",
      tags: ["Windows", "Chocolatey", "EC2", "IAM", "Terraform"]
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
                <p className="mt-3 text-sm text-zinc-300">{lab.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lab.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
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
