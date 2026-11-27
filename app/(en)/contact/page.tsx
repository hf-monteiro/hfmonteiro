import ContactView, { ContactCopy } from "@/components/views/ContactView";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Contact | Higor Monteiro",
  description:
    "Contact Higor Monteiro for professional conversations and platform architecture topics.",
  openGraph: {
    title: "Contact | Higor Monteiro",
    description:
      "Reach out for professional conversations, consulting requests, and platform architecture topics.",
    url: "https://hfmonteiro.dev/contact",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: ContactCopy = {
  title: "Contact",
  tiles: { localTime: "local time", timezone: "timezone", channel: "preferred channel", languages: "languages" },
  tileValues: { timezone: "UTC-3", channel: "email", languages: "EN·PT·ES" },
  requestTitle: "new request",
  request: {
    type: "type",
    types: ["Role opportunity", "Consulting", "Architecture review", "Other"],
    name: "name",
    company: "company",
    message: "message",
    placeholder: "What are you working on, and how can I help?",
    submit: "Open request",
    hint: "Opens your email client with the request pre-filled."
  },
  endpointsTitle: "endpoints",
  copy: "copy",
  copied: "copied",
  email: "higor.fmonteiro@gmail.com",
  fitTitle: "Best fit",
  fit: [
    "Senior DevOps / Platform Engineering",
    "Cloud Infrastructure Architecture",
    "AWS Networking & Private Connectivity",
    "Production EKS / Kubernetes Platforms",
    "Terraform and CI/CD Standardization"
  ]
};

export default function ContactPage() {
  return <ContactView copy={copy} />;
}
