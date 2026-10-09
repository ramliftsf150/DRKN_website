import { DecorativeStar } from "./decorative-star";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  Menu,
  Code2,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { Button, Eyebrow } from "./ui";
export function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <Eyebrow>INDEPENDENT DIGITAL STUDIO</Eyebrow>
        <h1>
          Your Vision.
          <br />
          Our Code.
          <br />
          <span>
            Limitless
            <br className="mobile-break" /> Possibilities.
          </span>
        </h1>
        <p>
          We build bold, modern websites that help businesses stand out, earn
          trust, and turn visitors into customers.
        </p>
        <div className="hero-actions">
          <Button href="/pricing">Explore Packages</Button>
          <Button href="/contact" secondary>
            Start Your Project
          </Button>
        </div>
        <div className="hero-footnote">
          <DecorativeStar className="tiny-lines" size={22} /> MADE WITH PURPOSE.
          BUILT FOR WHAT’S NEXT.
        </div>
      </div>
      <div
        className="hero-art"
        aria-label="Original abstract web design illustration"
        role="img"
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="art-glow" />
        <div className="floating-code">
          <Code2 size={18} />
          <span>Good design. Great code.</span>
          <span className="status-dot" />
        </div>
        <div className="hero-browser">
          <div className="browser-chrome">
            <i />
            <i />
            <i />
            <span>your-next-big-thing.com</span>
            <span>
              <ArrowUpRight size={10} aria-hidden="true" />
            </span>
          </div>
          <div className="browser-page">
            <div className="mini-nav">
              <b>
                next
                <span>
                  <svg
                    className="inline-icon"
                    width="9"
                    height="9"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="6" cy="6" r="5" />
                    <path d="M4 9V3h2a1.5 1.5 0 0 1 0 3H4m2 0 2 3" />
                  </svg>
                </span>
              </b>
              <span>THINK BIG. BUILD BOLD.</span>
              <span>
                <Menu size={9} aria-hidden="true" />
              </span>
            </div>
            <div className="mini-hero">
              <small>THIS IS YOUR MOMENT</small>
              <strong>
                Different
                <br />
                by design<span>.</span>
              </strong>
              <div className="mini-pill">
                MAKE YOUR MARK{" "}
                <ArrowUpRight
                  className="inline-icon"
                  size={7}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="sculpture">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="mini-bottom">
              <span>
                INDEPENDENT SPIRIT.
                <br />
                EXTRAORDINARY POSSIBILITIES.
              </span>
              <span>
                <ArrowDownRight size={23} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="floating-badge">
          <span>
            <Sparkles size={20} />
          </span>
          <div>
            Built to stand out.<small>Never to blend in.</small>
          </div>
        </div>
        <div className="design-cursor">
          <MousePointer2 size={22} fill="#ff784f" />
          <span>Your next chapter</span>
        </div>
        <span className="art-caption">
          IDEA{" "}
          <ArrowRight className="inline-icon" size={8} aria-hidden="true" />{" "}
          DESIGN{" "}
          <ArrowRight className="inline-icon" size={8} aria-hidden="true" />{" "}
          REALITY
        </span>
      </div>
      <a href="#services" className="scroll-cue">
        <ArrowDown size={14} /> SCROLL TO EXPLORE
      </a>
      <span className="hero-coordinate">
        DESIGN + DEVELOPMENT / EST. WITH INTENTION
      </span>
    </section>
  );
}
