import ContactView, { ContactCopy } from "@/components/views/ContactView";

export const metadata = {
  title: "Contato | Higor Monteiro",
  description:
    "Contato profissional para conversas e temas de arquitetura de plataforma."
};

const copy: ContactCopy = {
  title: "Contato",
  tiles: { localTime: "hora local", timezone: "fuso horário", channel: "canal preferido", languages: "idiomas" },
  tileValues: { timezone: "UTC-3", channel: "email", languages: "PT·EN·ES" },
  requestTitle: "nova solicitação",
  request: {
    type: "tipo",
    types: ["Oportunidade de vaga", "Consultoria", "Architecture review", "Outro"],
    name: "nome",
    company: "empresa",
    message: "mensagem",
    placeholder: "No que você está trabalhando e como posso ajudar?",
    submit: "Abrir solicitação",
    hint: "Abre seu cliente de email com a solicitação preenchida."
  },
  endpointsTitle: "endpoints",
  copy: "copiar",
  copied: "copiado",
  email: "higor.fmonteiro@gmail.com",
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
