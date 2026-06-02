import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pill from "@/components/Pill";

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
    type: "website"
  }
};

const copy = {
  title: "Contact",
  intro:
    "A direct way to reach me for professional conversations, introductions, and platform architecture topics.",
  emailTitle: "Start a conversation",
  emailBody:
    "Email is the best path for role conversations, consulting requests, architecture reviews, and introductions.",
  email: "higor.fmonteiro@gmail.com",
  phoneTitle: "Phone",
  phone: "+55 51 98107-8364",
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
  const t = copy;

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-3xl text-zinc-400">{t.intro}</p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-lg font-semibold">{t.emailTitle}</h2>
                <p className="mt-2 text-zinc-400">{t.emailBody}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={`mailto:${t.email}`} variant="primary">Email me</Button>
                  <Button href="/resume.pdf" variant="secondary">Resume PDF</Button>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">Email</p>
                    <a href={`mailto:${t.email}`} className="mt-2 inline-block text-zinc-200 hover:text-zinc-100">
                      {t.email} →
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500">{t.phoneTitle}</p>
                    <a href="tel:+5551981078364" className="mt-2 inline-block text-zinc-200 hover:text-zinc-100">
                      {t.phone} →
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card>
              <h2 className="text-lg font-semibold">{t.profilesTitle}</h2>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  className="text-zinc-200 hover:text-zinc-100"
                  href="https://www.linkedin.com/in/higorfm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.linkedin} →
                </a>
                <a
                  className="text-zinc-200 hover:text-zinc-100"
                  href="https://github.com/hf-monteiro"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.github} →
                </a>
              </div>
            </Card>
          </div>

          <div className="mt-4">
            <Card>
              <h2 className="text-lg font-semibold">{t.fitTitle}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.fit.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
