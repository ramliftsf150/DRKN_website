import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/config";
export function Footer() {
  return (
    <footer className="footer wrap">
      <div className="footer-top">
        <div>
          <Link href="/" className="wordmark">
            DRKN<span>.</span>
          </Link>
          <p>Built Different. Built Digital.</p>
          <small>Independent thinking. Intentional design.</small>
        </div>
        <div>
          <span className="footer-label">EXPLORE</span>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div>
          <span className="footer-label">THE STUDIO</span>
          <Link href="/about">About DRKN</Link>
          <Link href="/contact">
            Start a Project <ArrowUpRight size={14} />
          </Link>
          {brand.socials.map((s) => (
            <a key={s.url} href={s.url}>
              {s.label}
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <span className="footer-label">LET’S CONNECT</span>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={brand.phoneHref}>{brand.phone}</a>
          <p>Small studio. Big possibilities.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DRKN Digital Studio.</span>
        <div>
          <Link href="/privacy">Privacy · Draft</Link>
          <Link href="/terms">Terms · Draft</Link>
          <span>
            DESIGNED WITH INTENTION{" "}
            <ArrowUpRight
              className="inline-icon"
              size={10}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </footer>
  );
}
