import Container from "@/components/Container";
import Card from "@/components/Card";

const copy = {
  title: "Contact",
  intro: "Best ways to reach me.",
  emailTitle: "Email",
  emailBody: "Fastest for proposals and introductions.",
  phoneTitle: "Phone",
  profilesTitle: "Profiles",
  linkedin: "LinkedIn",
  github: "GitHub"
};

export default function ContactPage() {
  const t = copy;

  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">{t.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold">{t.emailTitle}</h2>
              <p className="mt-2 text-zinc-400">{t.emailBody}</p>
              <a
                href="mailto:higor.fmonteiro@gmail.com"
                className="mt-3 inline-block text-zinc-200 hover:text-zinc-100"
              >
                higor.fmonteiro@gmail.com →
              </a>
              <h3 className="mt-5 text-sm font-semibold text-zinc-300">{t.phoneTitle}</h3>
              <a
                href="tel:+5551981078364"
                className="mt-2 inline-block text-zinc-200 hover:text-zinc-100"
              >
                +55 51 98107-8364 →
              </a>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">{t.profilesTitle}</h2>
              <div className="mt-4 flex flex-col gap-2">
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
        </section>
      </Container>
    </main>
  );
}
