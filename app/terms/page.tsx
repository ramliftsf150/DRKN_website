import { brand } from "@/lib/config";
import { PageHeading } from "@/components/ui";
export const metadata = {
  title: "Terms — Draft",
  robots: { index: false, follow: true },
};
export default function Terms() {
  return (
    <>
      <PageHeading
        label="DRAFT · OWNER REVIEW REQUIRED"
        title="Terms of use."
        description="A working draft for DRKN Digital Studio. Project-specific terms must be agreed in writing before work begins."
      />
      <article className="wrap legal">
        <p className="draft-banner">
          Not a finalized legal agreement. The owner must obtain appropriate
          review and complete the business details, governing jurisdiction,
          payment and cancellation terms, and any required consumer provisions
          before launch.
        </p>
        <h2>Website information and enquiries</h2>
        <p>
          This website presents the studio’s proposed services and starting
          prices. Submitting an enquiry does not create a service contract or
          reserve a delivery date. A separate accepted proposal or agreement is
          required before a project begins.
        </p>
        <h2>Scope and pricing</h2>
        <p>
          Prices are starting points and depend on the agreed scope. Domain
          registration, hosting, third-party subscriptions, and maintenance are
          excluded unless expressly included. Payment schedule, applicable
          taxes, revision scope, acceptance, and change requests must be defined
          in the project agreement.
        </p>
        <h2>Project responsibilities</h2>
        <p>
          The project agreement should identify required content, approval
          responsibilities, licensing permissions, dependencies, and estimated
          milestones. Search rankings, conversion outcomes, and delivery
          deadlines are not guaranteed by this website.
        </p>
        <h2>Concept work</h2>
        <p>
          Portfolio examples are fictional concept projects. They are not client
          commissions and do not represent business results, testimonials, or
          relationships with actual businesses.
        </p>
        <h2>Ownership and third-party services</h2>
        <p>
          Ownership transfer, source delivery, permitted use, and third-party
          licenses must be defined in the project agreement. External service
          availability and charges are subject to the relevant provider’s terms.
        </p>
        <h2>Website Care</h2>
        <p>
          The care plan description is illustrative. Coverage, response
          expectations, billing, exclusions, and cancellation require a separate
          written agreement.
        </p>
        <h2>Details requiring completion</h2>
        <p>
          Business contact: <a href={`mailto:${brand.email}`}>{brand.email}</a>,{" "}
          <a href={brand.phoneHref}>{brand.phone}</a>. Legal business identity:
          [to be supplied]. Governing jurisdiction: [to be supplied]. Applicable
          rights, dispute procedures, cancellation and refund terms: [review
          required]. Effective date: [to be supplied after review].
        </p>
      </article>
    </>
  );
}
