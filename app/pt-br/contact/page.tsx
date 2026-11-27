import ContactView, { ContactCopy } from "@/components/views/ContactView";

export const metadata = {
  title: "Contato | Higor Monteiro",
  description:
    "Contato profissional para conversas e temas de arquitetura de plataforma."
};

const copy: ContactCopy = {
  title: "Contato",
  emailTitle: "Comece uma conversa",
  emailBody:
    "Ideal para vagas, consultoria e architecture reviews.",
  emailButton: "Enviar email",
  resumeButton: "PDF do currículo",
  email: "higor.fmonteiro@gmail.com",
  profilesTitle: "Perfis",
  linkedin: "LinkedIn",
  github: "GitHub",
  fitTitle: "Melhor alinhamento",
  fit: [
    "Senior DevOps / Platform Engineering",
    "Cloud Infrastructure Architecture",
    "AWS Networking e Conectividade Privada",
    "EKS / Kubernetes em Produção",
    "Padronização de Terraform e CI/CD"
  ]
};

export default function ContactPage() {
  return <ContactView copy={copy} />;
}
