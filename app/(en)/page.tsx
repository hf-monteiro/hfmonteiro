import HomeView, { HomeCopy } from "@/components/views/HomeView";
import { ogImageUrl } from "@/lib/ogImage";

export const metadata = {
  title: "Higor Monteiro | Senior DevOps / Platform Engineer",
  description:
    "Senior DevOps / Platform Engineer designing enterprise AWS platforms, private networking architectures, production EKS environments, and delivery systems for regulated SaaS teams.",
  openGraph: {
    title: "Higor Monteiro | Senior DevOps / Platform Engineer",
    description:
      "Enterprise AWS platforms, advanced cloud networking, production EKS, Terraform, and GitLab CI/CD.",
    url: "https://hfmonteiro.dev",
    siteName: "hfmonteiro.dev",
    type: "website",
    images: [ogImageUrl("en")]
  }
};

const copy: HomeCopy = {
  intro: "Hi, I’m Higor",
  title: "Senior DevOps / Platform Engineer",
  summary:
    "I build secure AWS platforms, private networking, and production Kubernetes for regulated SaaS teams.",
  buttons: {
    caseStudies: "View Projects",
    labs: "Infrastructure Labs",
    resume: "Resume"
  },
  proof: [
    { value: "16M+", label: "users supported" },
    { value: "Multi-account", label: "AWS platforms" },
    { value: "Private EKS", label: "production operations" },
    { value: "10–30x", label: "more frequent deploys" },
    { value: "AWS ANS", label: "advanced networking certified" }
  ],
  about: {
    text: "I like infrastructure that is boring in production and clear in code. Away from the terminal: fishing, hiking, and camping.",
    link: "More about me →"
  },
  featured: {
    title: "Featured Projects",
    link: "See all →"
  },
  notes: {
    title: "Recent Notes",
    link: "Read all →"
  }
};

export default function Home() {
  return <HomeView lang="en" copy={copy} />;
}
