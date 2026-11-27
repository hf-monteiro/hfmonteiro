import HomeView, { HomeCopy } from "@/components/views/HomeView";

const copy: HomeCopy = {
  intro: "Olá, sou o Higor",
  title: "Senior DevOps / Platform Engineer",
  summary:
    "Construo plataformas AWS seguras, networking privado e Kubernetes em produção para times SaaS regulados.",
  buttons: {
    caseStudies: "Ver projetos",
    labs: "Infrastructure Labs",
    resume: "Currículo"
  },
  proof: [
    { value: "16M+", label: "usuários atendidos" },
    { value: "Multi-conta", label: "plataformas AWS" },
    { value: "Private EKS", label: "operação em produção" },
    { value: "10–30x", label: "deploys mais frequentes" },
    { value: "AWS ANS", label: "advanced networking certified" }
  ],
  about: {
    text: "Gosto de infraestrutura que é tediosa em produção e clara no código. Longe do terminal: pesca, trilhas e camping.",
    link: "Mais sobre mim →"
  },
  featured: {
    title: "Projetos em Destaque",
    link: "Ver todos →"
  },
  notes: {
    title: "Notas Recentes",
    link: "Ler todos →"
  }
};

export default function Home() {
  return <HomeView lang="pt-br" copy={copy} />;
}
