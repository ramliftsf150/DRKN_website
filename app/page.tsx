import Link from "next/link";
import {
  ArrowUpRight,
  Smartphone,
  Layers,
  MessagesSquare,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/hero";
import {
  Button,
  Eyebrow,
  ServiceCard,
  PricingCard,
  PortfolioCard,
  CTASection,
  PricingNote,
} from "@/components/ui";
import { FAQ, Reveal } from "@/components/interactive";
import { services, packages, projects } from "@/lib/config";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="discipline-strip">
        <div className="wrap">
          <span>STRATEGY</span>
          <b>✳</b>
          <span>DESIGN</span>
          <b>✳</b>
          <span>DEVELOPMENT</span>
          <b>✳</b>
          <span>DIGITAL EXPERIENCES</span>
          <b>✳</b>
          <span>DRKN.</span>
        </div>
      </div>
      <section id="services" className="section wrap">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow>WHAT WE DO</Eyebrow>
              <h2>
                Digital craft.
                <br />
                <span className="muted">Real-world impact.</span>
              </h2>
            </div>
            <div>
              <p>
                From a first website to your next evolution,
                <br />
                we turn ambitious ideas into purposeful experiences.
              </p>
              <Link className="text-link" href="/services">
                Explore our services <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.name} service={s} index={i} />
            ))}
          </div>
        </Reveal>
      </section>
      <section className="why-section">
        <div className="wrap why-grid">
          <div>
            <Eyebrow>THE DRKN DIFFERENCE</Eyebrow>
            <h2>
              Small by design.
              <br />
              Ambitious by nature.
            </h2>
            <p>
              You bring the vision. We bring the care, craft, and curiosity to
              make it happen. No unnecessary complexity. Just a thoughtful
              website, built around you.
            </p>
            <Button href="/about" secondary>
              Meet the Studio
            </Button>
          </div>
          <div className="benefits">
            {[
              [
                Smartphone,
                "Every screen. Every detail.",
                "Responsive design that feels right, from the smallest phone to the widest desktop.",
              ],
              [
                BadgeDollarSign,
                "Clarity from day one.",
                "Transparent starting prices and a scope we agree on before we build.",
              ],
              [
                MessagesSquare,
                "Your ideas, in the room.",
                "Thoughtful collaboration with space for your voice and your feedback.",
              ],
              [
                Layers,
                "Ready for your next chapter.",
                "Scalable foundations that can evolve with your business.",
              ],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof Smartphone;
              return (
                <div key={String(title)}>
                  <I size={22} />
                  <div>
                    <h3>{String(title)}</h3>
                    <p>{String(text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>SELECTED CONCEPTS</Eyebrow>
            <h2>
              A glimpse of
              <br />
              <span className="muted">what’s possible.</span>
            </h2>
          </div>
          <div>
            <p>
              Imagined businesses. Real attention to detail.
              <br />
              Original design explorations, not client commissions.
            </p>
            <Link className="text-link" href="/portfolio">
              Explore the concepts <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <PortfolioCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
      <section className="process-section section">
        <div className="wrap">
          <Eyebrow>FROM FIRST HELLO TO WHAT’S NEXT</Eyebrow>
          <h2>A clear path to something great.</h2>
          <div className="process-grid">
            {[
              [
                "Discover",
                "We get to know your business, your audience, and what success looks like for you.",
              ],
              [
                "Design & Build",
                "We shape your vision into a considered design, then bring every detail to life.",
              ],
              [
                "Launch & Grow",
                "We check the details, prepare your launch, and discuss what comes next.",
              ],
            ].map(([t, d], i) => (
              <article key={t}>
                <div>
                  <span>0{i + 1}</span>
                  <ArrowRight size={24} />
                </div>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
            <h2>
              Big ambition.
              <br />
              <span className="muted">Clear starting points.</span>
            </h2>
          </div>
          <p>
            A package for where you are.
            <br />A foundation for where you’re going.
          </p>
        </div>
        <div className="pricing-grid">
          {packages.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>
        <PricingNote />
        <div className="custom-line">
          <span>Something a little more ambitious? Let’s make it custom.</span>
          <Link className="text-link" href="/contact?package=Custom">
            Talk about your project <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="faq-section section wrap">
        <div>
          <Eyebrow>A LITTLE MORE CLARITY</Eyebrow>
          <h2>
            Good questions.
            <br />
            <span className="muted">Straight answers.</span>
          </h2>
          <p>Still curious about something?</p>
          <Link className="text-link" href="/contact">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
        </div>
        <FAQ />
      </section>
      <CTASection />
    </>
  );
}
