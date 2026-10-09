import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Check,
  MapPin,
  Sparkles,
  ShieldCheck,
  Sun,
  Plus,
} from "lucide-react";
import { photos } from "@/lib/photos";
import { detailingPackages, detailingFAQs } from "@/lib/desert-shine";
import {
  DesertNav,
  DemoQuoteForm,
} from "@/components/desert-shine-interactive";
import "./desert-shine.css";
export const metadata: Metadata = {
  title: "Desert Shine Auto Detailing — Concept Demo",
  description:
    "Explore an interactive, fictional mobile auto detailing website designed by DRKN Digital Studio. Example services and prices; no real bookings.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Desert Shine — A DRKN Concept Project",
    description:
      "Premium mobile detailing, imagined. Explore the interactive website concept.",
    images: [
      {
        url: "/images/desert-hero.webp",
        width: 1600,
        height: 2395,
        alt: photos.desert.alt,
      },
    ],
  },
};
export default async function DesertShine({
  searchParams,
}: {
  searchParams: Promise<{ package?: string | string[] }>;
}) {
  const params = await searchParams;
  const selected =
    typeof params.package === "string" &&
    detailingPackages.some((p) => p.name === params.package)
      ? params.package
      : "Help me choose";
  return (
    <div className="ds" id="top">
      <DesertNav />
      <section className="ds-hero">
        <div className="ds-hero-image">
          <Image
            src={photos.desert.src}
            alt={photos.desert.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="ds-hero-overlay" />
        <div className="ds-wrap ds-hero-content">
          <p className="ds-kicker">THE ART OF AUTOMOTIVE CARE</p>
          <h1>
            Your Car
            <br />
            Deserves
            <br />
            <em>the Best.</em>
          </h1>
          <p className="ds-hero-description">
            Premium mobile auto detailing,
            <br />
            brought directly to you.
          </p>
          <div className="ds-actions">
            <a className="ds-button" href="#packages">
              View Packages <ArrowUpRight size={17} />
            </a>
            <a className="ds-button ds-outline" href="#quote">
              Request a Quote <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="ds-hero-caption">
            <span>PRECISION IN EVERY PASS.</span>
            <span>PRIDE IN EVERY DETAIL.</span>
          </div>
        </div>
        <a className="ds-scroll" href="#about">
          <ArrowDown size={16} /> DISCOVER THE DIFFERENCE
        </a>
        <span className="ds-hero-index">01 / THE FIRST IMPRESSION</span>
      </section>
      <div className="ds-promise-strip">
        <span>MOBILE BY DESIGN</span>
        <i>✳</i>
        <span>DETAILS MATTER</span>
        <i>✳</i>
        <span>CARE WITHOUT COMPROMISE</span>
        <i>✳</i>
        <span>DESERT SHINE</span>
      </div>
      <section id="about" className="ds-section ds-wrap ds-about">
        <div className="ds-about-image">
          <Image
            src={photos.detail.src}
            alt={photos.detail.alt}
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
            placeholder="blur"
          />
          <span>THE CARE IS IN THE CRAFT.</span>
        </div>
        <div>
          <p className="ds-kicker">MORE THAN A CLEAN CAR</p>
          <h2>
            That fresh-car feeling.
            <br />
            <em>All over again.</em>
          </h2>
          <p>
            Your car is part of your everyday. The early starts. The long
            weekends. The roads less traveled. It deserves a little care in
            return.
          </p>
          <p>
            Desert Shine imagines a more considered approach to mobile
            detailing: thoughtful service, precise finishing touches, and the
            convenience of coming to you.
          </p>
          <div className="ds-about-signature">
            <Sun size={33} />
            <span>
              Good care. Great details.
              <small>A FICTIONAL BRAND. A FULLY REALIZED DESIGN.</small>
            </span>
          </div>
        </div>
      </section>
      <section id="services" className="ds-section ds-services">
        <div className="ds-wrap">
          <div className="ds-section-heading">
            <div>
              <p className="ds-kicker">CONSIDERED CARE, INSIDE & OUT</p>
              <h2>
                Every surface.
                <br />
                <em>Nothing overlooked.</em>
              </h2>
            </div>
            <p>
              Three ways to reset your ride.
              <br />
              Illustrative services for this concept.
            </p>
          </div>
          <div className="ds-service-grid">
            {[
              {
                title: "Interior Detailing",
                text: "A cleaner cabin. A calmer drive. From carpets and seats to the smallest touchpoints.",
                photo: photos.detail,
                package: "Interior",
              },
              {
                title: "Exterior Detailing",
                text: "A thoughtful hand wash, wheel care, and a finishing touch that lets the paint shine.",
                photo: photos.finish,
                package: "Exterior",
              },
              {
                title: "Full Detail",
                text: "Inside meets outside. One complete care experience, from the first wipe to the final inspection.",
                photo: photos.desert,
                package: "Full Detail",
              },
            ].map((s, i) => (
              <article key={s.title}>
                <div className="ds-service-image">
                  <Image
                    src={s.photo.src}
                    alt={s.photo.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    placeholder="blur"
                  />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={`?package=${encodeURIComponent(s.package)}#quote`}>
                  Explore this service <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="packages" className="ds-section ds-wrap">
        <div className="ds-section-heading">
          <div>
            <p className="ds-kicker">YOUR CAR. YOUR KIND OF CARE.</p>
            <h2>
              A package for
              <br />
              <em>every kind of drive.</em>
            </h2>
          </div>
          <p>
            Clear inclusions. Thoughtful details.
            <br />
            All prices below are examples in USD.
          </p>
        </div>
        <div className="ds-pricing-grid">
          {detailingPackages.map((p) => (
            <article
              key={p.name}
              className={`ds-price-card ${p.featured ? "ds-featured" : ""}`}
            >
              {p.featured && (
                <div className="ds-featured-label">THE COMPLETE EXPERIENCE</div>
              )}
              <span className="ds-price-label">ILLUSTRATIVE PACKAGE</span>
              <h3>{p.name}</h3>
              <p>{p.tagline}</p>
              <div className="ds-price">
                <span>${p.price}</span>
                <small>example price</small>
              </div>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                className={`ds-button ${p.featured ? "" : "ds-outline"}`}
                href={`?package=${encodeURIComponent(p.name)}#quote`}
              >
                Choose {p.name} <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        <p className="ds-fine-print">
          Concept pricing only. No services are offered for purchase. A real
          quote would depend on vehicle size, condition, location, and agreed
          scope.
        </p>
      </section>
      <section id="gallery" className="ds-section ds-gallery">
        <div className="ds-wrap">
          <div className="ds-section-heading">
            <div>
              <p className="ds-kicker">A CLOSER LOOK</p>
              <h2>
                Before the reveal.
                <br />
                <em>After the attention.</em>
              </h2>
            </div>
            <p>
              A before-and-after gallery layout,
              <br />
              demonstrated with independent stock references.
            </p>
          </div>
          <div className="ds-gallery-grid">
            <figure>
              <div className="ds-gallery-image">
                <Image
                  src={photos.detail.src}
                  alt={photos.detail.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  placeholder="blur"
                />
                <span>BEFORE / PROCESS REFERENCE</span>
              </div>
              <figcaption>
                Care in progress · Interior cleaning reference.
              </figcaption>
            </figure>
            <figure>
              <div className="ds-gallery-image">
                <Image
                  src={photos.finish.src}
                  alt={photos.finish.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  placeholder="blur"
                />
                <span>AFTER / FINISH INSPIRATION</span>
              </div>
              <figcaption>
                The finishing look · Independent exterior reference.
              </figcaption>
            </figure>
          </div>
          <p className="ds-gallery-disclosure">
            These photographs show different vehicles. They are not a
            before-and-after pair, customer work, or evidence of results. They
            illustrate the gallery design only.
          </p>
        </div>
      </section>
      <section className="ds-section ds-wrap">
        <p className="ds-kicker">BUILT AROUND YOUR EVERYDAY</p>
        <h2>
          The details make
          <br />
          <em>the difference.</em>
        </h2>
        <div className="ds-benefits">
          {[
            {
              Icon: MapPin,
              title: "Mobile Convenience",
              text: "A service concept that fits around your day, with vehicle care at a suitable location of your choice.",
            },
            {
              Icon: Sparkles,
              title: "Attention to Detail",
              text: "From the corners of the cabin to the edges of the wheels, the small things deserve attention.",
            },
            {
              Icon: ShieldCheck,
              title: "Quality Products",
              text: "A considered approach to surface-appropriate products and careful application. No implied product endorsements.",
            },
          ].map(({ Icon, title, text }) => (
            <article key={title}>
              <Icon size={27} strokeWidth={1.4} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="ds-section ds-faq-section">
        <div className="ds-wrap ds-faq-layout">
          <div>
            <p className="ds-kicker">BEFORE YOU ASK</p>
            <h2>
              A little clarity.
              <br />
              <em>A better experience.</em>
            </h2>
          </div>
          <div>
            {detailingFAQs.map(([q, a]) => (
              <details className="ds-faq" key={q}>
                <summary>
                  {q}
                  <Plus size={18} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="quote" className="ds-section ds-wrap ds-quote-layout">
        <div>
          <p className="ds-kicker">MAKE ROOM FOR A LITTLE SHINE</p>
          <h2>
            Your next
            <br />
            fresh start
            <br />
            <em>begins here.</em>
          </h2>
          <p>
            Explore how a simple detailing enquiry could feel. Choose a package,
            share a sample vehicle, and preview your request.
          </p>
          <div className="ds-contact-note">
            <strong>This is a website demo.</strong>
            <p>
              Desert Shine does not offer services or accept bookings. Looking
              for a website like this?
            </p>
            <Link href="/contact?inspiration=desert-shine">
              Talk to DRKN Digital Studio <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <DemoQuoteForm key={selected} selected={selected} />
      </section>
      <footer className="ds-footer">
        <div className="ds-wrap">
          <div className="ds-footer-top">
            <a href="#top" className="ds-logo">
              <Sun size={31} />
              <span>
                DESERT SHINE<small>AUTO DETAILING</small>
              </span>
            </a>
            <p>Every detail. A little brighter.</p>
            <a href="#top">Back to top ↑</a>
          </div>
          <div className="ds-footer-bottom">
            <span>
              Fictional concept designed by{" "}
              <Link href="/">DRKN Digital Studio</Link>.
            </span>
            <a href="/images/CREDITS.md">Photography credits</a>
            <Link href="/portfolio">Explore the portfolio ↗</Link>
          </div>
          <p className="ds-stock-note">
            Licensed stock photography. No affiliation with pictured vehicle
            manufacturers, photographers, or detailing professionals is implied.
          </p>
        </div>
      </footer>
    </div>
  );
}
