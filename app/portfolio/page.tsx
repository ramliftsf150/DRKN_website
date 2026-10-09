import { ArrowUpRight } from "lucide-react";
import {
  PageHeading,
  ProjectVisual,
  Eyebrow,
  Button,
  CTASection,
} from "@/components/ui";
import { projects } from "@/lib/config";
export const metadata = {
  title: "Portfolio Concepts",
  description:
    "Three original fictional website concepts for auto detailing, hospitality, and landscaping. Explore the DRKN design approach.",
};
export default function Portfolio() {
  return (
    <>
      <PageHeading
        label="AN EXPLORATION OF WHAT’S POSSIBLE"
        title="Imagined brands. Intentional experiences."
        description="These original concept projects show our design approach. They are fictional businesses, not client work, and carry no claimed performance results."
      />
      <section className="wrap page-content">
        {projects.map((p) => (
          <article id={p.slug} className="case-study" key={p.slug}>
            <div>
              <ProjectVisual type={p.type} large />
            </div>
            <div>
              <Eyebrow>CONCEPT PROJECT · {p.category.split(" · ")[0]}</Eyebrow>
              <h2>{p.name}</h2>
              <p>{p.description}</p>
              <p>
                <strong>Concept scope</strong>
                <br />
                {p.scope}.
              </p>
              {p.demo ? (
                <Button href={p.demo}>View Live Demo</Button>
              ) : (
                <p className="coming-soon">
                  Demo Coming Soon · Photographic preview only
                </p>
              )}
              <p>
                Fictional concept. Licensed stock photography is used for visual
                direction; no customer results or business affiliations are
                implied.
              </p>
              <Button href={`/contact?inspiration=${p.slug}`} secondary>
                Build Something Like This
              </Button>
            </div>
          </article>
        ))}
      </section>
      <p className="wrap photo-credit">
        Photography: Pexels.{" "}
        <a href="/images/CREDITS.md">
          View image credits and sources{" "}
          <ArrowUpRight className="inline-icon" size={12} aria-hidden="true" />
        </a>
      </p>
      <CTASection />
    </>
  );
}
