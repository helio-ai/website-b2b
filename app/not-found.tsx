import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-grid-dark bg-ink pt-36 pb-24 text-center text-white">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/70">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="white">
            Go home
          </Button>
          <Button href="/#demo" variant="secondary">
            Book a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
