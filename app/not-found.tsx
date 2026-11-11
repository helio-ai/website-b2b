import { Button, SimpleHero } from "@/components/ui";

export default function NotFound() {
  return (
    <SimpleHero title="Page not found" sub="The page you're looking for doesn't exist or has moved.">
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/" variant="white">Go home</Button>
        <Button href="/contact" variant="secondary">Contact us</Button>
      </div>
    </SimpleHero>
  );
}
