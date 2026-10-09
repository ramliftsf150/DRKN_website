import {
  PageHeading,
  PricingCard,
  PricingNote,
  Button,
  CTASection,
} from "@/components/ui";
import { packages } from "@/lib/config";
export const metadata = {
  title: "Pricing",
  description:
    "Website packages starting at $399, $799, and $1,499. Transparent starting prices and custom project quotes.",
};
export default function Pricing() {
  return (
    <>
      <PageHeading
        label="THE INVESTMENT"
        title="Built for your business. Priced with clarity."
        description="Choose a starting point, then we’ll shape the details together. Clear scope. Thoughtful design. No surprises hidden in the fine print."
      />
      <section className="wrap page-content">
        <div className="pricing-grid">
          {packages.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>
        <PricingNote />
        <div className="two-cards">
          <article className="info-card">
            <h2>Outside the lines?</h2>
            <p>Custom · Request a Quote</p>
            <p>
              For e-commerce, bespoke integrations, and complex projects. We’ll
              work through your requirements and create a tailored proposal.
            </p>
            <Button href="/contact?package=Custom">
              Request a Custom Quote
            </Button>
          </article>
          <article className="info-card">
            <h2>A little ongoing care.</h2>
            <p>Website Care · Starting at $59/month</p>
            <p>
              Illustrative scope: one monthly maintenance check, up to 30
              minutes of minor text or image changes, and a summary of completed
              work. Unused edit time does not roll over.
            </p>
            <small>
              New pages, redesigns, emergency recovery, paid licenses, hosting,
              and round-the-clock monitoring are excluded. Availability,
              response times, billing, and cancellation terms require a separate
              written agreement.
            </small>
            <br />
            <Button href="/contact?package=Website%20Care" secondary>
              Discuss Website Care
            </Button>
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
}
