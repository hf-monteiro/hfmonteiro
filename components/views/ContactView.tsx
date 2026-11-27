import Container from "@/components/Container";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import BulletList from "@/components/BulletList";

export type ContactCopy = {
  title: string;
  emailTitle: string;
  emailBody: string;
  emailButton: string;
  resumeButton: string;
  email: string;
  profilesTitle: string;
  linkedin: string;
  github: string;
  fitTitle: string;
  fit: string[];
};

const profileLink = "text-zinc-300 hover:text-zinc-100";

export default function ContactView({ copy: t }: { copy: ContactCopy }) {
  return (
    <main>
      <Container>
        <section className="pt-14">
          <PageHeader title={t.title} />

          <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6">
              <h2 className="text-lg font-semibold">{t.emailTitle}</h2>
              <p className="mt-2 text-zinc-400">{t.emailBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`mailto:${t.email}`} variant="primary">{t.emailButton}</Button>
                <Button href="/resume.pdf" variant="secondary">{t.resumeButton}</Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-zinc-800 pt-5 text-sm">
                <a href={`mailto:${t.email}`} className={profileLink}>{t.email}</a>
                <a href="https://www.linkedin.com/in/higorfm/" target="_blank" rel="noreferrer" className={profileLink}>
                  {t.linkedin} →
                </a>
                <a href="https://github.com/hf-monteiro" target="_blank" rel="noreferrer" className={profileLink}>
                  {t.github} →
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">{t.fitTitle}</h2>
              <BulletList items={t.fit} className="mt-4" />
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
