import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main>
      <Container>
        <section className="py-20">
          <p className="text-sm text-emerald-300/80">404</p>
          <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
          <p className="mt-3 max-w-xl text-zinc-400">
            The page you are looking for does not exist or may have moved.
          </p>
          <div className="mt-6">
            <Button href="/" variant="primary">Back to home</Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
