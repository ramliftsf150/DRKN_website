import { PageHeading, Button } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageHeading
        label="404 · A SMALL DETOUR"
        title="This page hasn’t been built."
        description="Let’s get you back to somewhere with possibilities."
      />
      <div className="wrap page-content">
        <Button href="/">Back to Home</Button>
      </div>
    </>
  );
}
