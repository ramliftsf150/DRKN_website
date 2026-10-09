import { PageHeading } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { brand } from "@/lib/config";
export const metadata = {
  title: "Start Your Project",
  description: `Contact DRKN Digital Studio at ${brand.email} or ${brand.phone}. Tell us about your website goals.`,
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const options = ["Launch", "Growth", "Pro", "Custom", "Website Care"];
  const selected =
    typeof params.package === "string" && options.includes(params.package)
      ? params.package
      : "Not sure yet";
  const details =
    typeof params.service === "string"
      ? `I’m interested in ${params.service.slice(0, 100)}. `
      : typeof params.inspiration === "string"
        ? `I’m inspired by the ${params.inspiration.slice(0, 100)} concept. `
        : "";
  return (
    <>
      <PageHeading
        label="LET’S MAKE SOMETHING MATTER"
        title="Your next chapter starts with a hello."
        description="A new website, a fresh direction, or an idea you’re still figuring out. Tell us what you have in mind."
      />
      <section className="wrap page-content contact-layout">
        <aside className="contact-aside">
          <h2>
            Big idea?
            <br />
            We’re listening.
          </h2>
          <p>
            No need for a perfect brief. A little about your business and what
            you’re hoping to achieve is a great place to start.
          </p>
          <ol>
            <li>Share your vision.</li>
            <li>We explore the right approach.</li>
            <li>You receive a clear project proposal.</li>
          </ol>
          <p>Prefer email?</p>
          <a href={`mailto:${brand.email}`}>{brand.email} ↗</a>
          <p>Prefer a conversation?</p>
          <a href={brand.phoneHref}>{brand.phone}</a>

          <small>
            Submission is an enquiry, not a booking or a commitment to purchase.
          </small>
        </aside>
        <ContactForm
          selected={selected}
          details={details}
          configured={Boolean(
            process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL,
          )}
        />
      </section>
    </>
  );
}
