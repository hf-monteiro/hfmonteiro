import Container from "@/components/Container";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <main>
      <Container>
        <section className="py-14">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Best ways to reach me.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="mt-2 text-zinc-400">Fastest for proposals and introductions.</p>
              <a href="mailto:higor.fmonteiro@gmail.com" className="...">
                higor.fmonteiro@gmail.com →
              </a>
              <a href="tel:+5551981078364" className="...">
                +55 51 98107-8364 →
              </a>

            </Card>

            <Card>
              <h2 className="text-lg font-semibold">Profiles</h2>
              <div className="mt-4 flex flex-col gap-2">
                <a className="text-zinc-200 hover:text-zinc-100" href="https://www.linkedin.com/in/higorfm/" target="_blank" rel="noreferrer">
                  LinkedIn →
                </a>
                <a className="text-zinc-200 hover:text-zinc-100" href="https://github.com/hf-monteiro" target="_blank" rel="noreferrer">
                  GitHub →
                </a>
              </div>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
