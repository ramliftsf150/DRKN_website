"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Plus, Minus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { faqs } from "@/lib/config";
const links = ["Home", "Services", "Pricing", "Portfolio", "About", "Contact"];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className="nav-shell">
      <nav className="wrap navbar" aria-label="Main navigation">
        <Link
          className="wordmark"
          href="/"
          aria-label="DRKN home"
          onClick={() => setOpen(false)}
        >
          DRKN<span>.</span>
        </Link>
        <div className="desktop-nav">
          {links.map((x) => (
            <Link
              aria-current={
                path === (x === "Home" ? "/" : `/${x.toLowerCase()}`)
                  ? "page"
                  : undefined
              }
              href={x === "Home" ? "/" : `/${x.toLowerCase()}`}
              key={x}
            >
              {x}
            </Link>
          ))}
        </div>
        <Link className="nav-quote" href="/contact">
          Get a Quote <ArrowUpRight size={15} />
        </Link>
        <button
          ref={menuButton}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((x) => (
            <Link
              onClick={() => setOpen(false)}
              href={x === "Home" ? "/" : `/${x.toLowerCase()}`}
              key={x}
            >
              {x}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0.8, 1], y: [14, 0] }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map(([q, a], i) => (
        <div className="faq-item" key={q}>
          <h3>
            <button
              aria-expanded={active === i}
              aria-controls={`faq-${i}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              {q}
              {active === i ? <Minus size={19} /> : <Plus size={19} />}
            </button>
          </h3>
          <div id={`faq-${i}`} hidden={active !== i}>
            <p>{a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
