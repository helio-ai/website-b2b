import { Button, SimpleHero } from "./ui";

export function ComingSoon({ title }: { title: string }) {
  return (
    <SimpleHero title={title} sub="This section isn't part of the site build yet. Add your articles here.">
      <div className="mt-8 flex justify-center">
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </SimpleHero>
  );
}
