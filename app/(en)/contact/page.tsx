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
  emailTitle: "Start a conversation",
  emailBody:
    "Best for roles, consulting, and architecture reviews.",
  emailButton: "Email me",
  resumeButton: "Resume PDF",
  email: "higor.fmonteiro@gmail.com",
  profilesTitle: "Profiles",
  linkedin: "LinkedIn",
  github: "GitHub",
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
