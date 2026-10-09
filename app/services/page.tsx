import { PageHeading, ServiceCard, CTASection } from "@/components/ui";
import { services } from "@/lib/config";
export const metadata = {
  title: "Services",
  description:
    "Thoughtful website design, development, e-commerce, redesign, and ongoing care.",
};
export default function Services() {
  return (
    <>
      <PageHeading
        label="WHAT WE DO"
        title="Good ideas deserve great execution."
        description="Design with a purpose. Development with care. Digital experiences that make your business easier to find, understand, and choose."
      />
      <section className="wrap page-content">
        <div className="services-grid">
          {services.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i} expanded />
          ))}
        </div>
        <p className="pricing-note">
          Every engagement starts with a written scope. Third-party platform and
          subscription costs are confirmed separately. SEO foundations do not
          guarantee rankings.
        </p>
      </section>
      <CTASection />
    </>
  );
}
