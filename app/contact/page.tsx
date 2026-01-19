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
              <a className="mt-4 inline-block text-zinc-200 hover:text-zinc-100" href="mailto:you@example.com">
                you@example.com →
              </a>
            </Card>

            <Card>
              <h2 className="text-lg font-semibold">Profiles</h2>
              <div className="mt-4 flex flex-col gap-2">
                <a className="text-zinc-200 hover:text-zinc-100" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn →
                </a>
                <a className="text-zinc-200 hover:text-zinc-100" href="https://github.com/" target="_blank" rel="noreferrer">
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
