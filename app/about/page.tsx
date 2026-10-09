import { PageHeading, Eyebrow, CTASection } from "@/components/ui";
import { brand } from "@/lib/config";
export const metadata = {
  title: "About the Studio",
  description:
    "Meet DRKN, an emerging independent digital studio focused on purposeful websites for small businesses and growing brands.",
};
export default function About() {
  return (
    <>
      <PageHeading
        label="THE STUDIO BEHIND THE PIXELS"
        title="Independent spirit. Digital ambition."
        description="DRKN — pronounced DAR-KIN — is an emerging independent digital studio with a simple belief: a small business deserves a thoughtful website."
      />
      <section className="wrap page-content">
        <div className="about-intro">
          <div>
            <Eyebrow>BUILT DIFFERENT. BUILT DIGITAL.</Eyebrow>
            <h2>
              A fresh studio.
              <br />A considered approach.
            </h2>
            <p>
              Getting a business online can feel like a maze of technical
              choices. DRKN exists to make that next step clearer, bringing
              design and development together around what your business actually
              needs.
            </p>
            <p>
              We care about the way a page feels, the way a form works, and the
              details that make a website welcoming. Our ambition is to build
              useful, distinctive digital homes for entrepreneurs and growing
              brands.
            </p>
          </div>
          <div className="studio-art">
            <div className="wordmark">
              DRKN<span>.</span>
            </div>
            <p>BUILT WITH INTENTION.</p>
          </div>
        </div>
        <div className="two-cards">
          <article className="info-card">
            <Eyebrow>HOW WE WORK</Eyebrow>
            <h2>Direct. Curious. Collaborative.</h2>
            <p>
              We start by listening, agree on a clear scope, and build with
              feedback along the way. We value honest conversations and
              thoughtful decisions over unnecessary complexity.
            </p>
          </article>
          <article className="info-card">
            <Eyebrow>THE PERSON BEHIND DRKN</Eyebrow>
            <h2>A story still taking shape.</h2>
            <p>
              DRKN is an independent studio at the beginning of its journey.
            </p>
            <p className="owner-placeholder">
              <strong>Owner-editable placeholders</strong>
              <br />
              {brand.founder}
              <br />
              {brand.location}
            </p>
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
}
