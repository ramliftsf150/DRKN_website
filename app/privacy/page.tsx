import { brand } from "@/lib/config";
import { PageHeading } from "@/components/ui";
export const metadata = {
  title: "Privacy Notice — Draft",
  robots: { index: false, follow: true },
};
export default function Privacy() {
  return (
    <>
      <PageHeading
        label="DRAFT · OWNER REVIEW REQUIRED"
        title="Privacy notice."
        description="A working draft for DRKN Digital Studio. This page must be completed and reviewed before the site accepts real customer enquiries."
      />
      <article className="wrap legal">
        <p className="draft-banner">
          Not a finalized legal policy. Owner action required: confirm the
          business identity, jurisdiction, contact address, retention periods,
          email provider, hosting provider, and any analytics or tracking before
          publication.
        </p>
        <h2>Information submitted through this site</h2>
        <p>
          The contact form requests your name, email, business name, package
          preference, budget, project description, and optional phone number.
          These details are intended to help the studio understand and respond
          to your enquiry. Please do not submit sensitive personal information.
        </p>
        <h2>How enquiries are handled</h2>
        <p>
          When configured, the server forwards enquiries to the studio through
          Resend. The application does not store enquiries in a database.
          Messages may be retained by the configured email provider and
          receiving mailbox. The owner must confirm the applicable retention and
          deletion practices.
        </p>
        <h2>Hosting and technical information</h2>
        <p>
          The hosting provider may process connection information and request
          logs to deliver and secure the website. The owner must identify the
          deployed host and review its logging and retention settings.
        </p>
        <h2>Cookies and analytics</h2>
        <p>
          This implementation does not include analytics, advertising trackers,
          or non-essential cookies. Any future tracking or analytics integration
          requires this notice to be updated and any applicable consent
          requirements to be assessed.
        </p>
        <h2>Your requests and questions</h2>
        <p>
          Contact <a href={`mailto:${brand.email}`}>{brand.email}</a> for
          privacy questions. The owner must describe the access, correction,
          deletion, and complaint procedures applicable to the business and its
          visitors.
        </p>
        <h2>Outstanding owner details</h2>
        <p>
          Legal business name: [to be supplied]. Business address and
          jurisdiction: [to be supplied]. Privacy contact: {brand.email}.
          Retention period: [to be supplied]. Effective date: [to be supplied
          after review].
        </p>
      </article>
    </>
  );
}
