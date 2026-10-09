"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X, Sun } from "lucide-react";
import { detailingPackages } from "@/lib/desert-shine";
export function DesertNav() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="ds-header">
      <div className="ds-concept">
        <span>CONCEPT PROJECT BY DRKN · NOT A REAL DETAILING BUSINESS</span>
        <Link href="/portfolio">
          Back to portfolio <ArrowUpRight size={13} />
        </Link>
      </div>
      <nav className="ds-nav ds-wrap" aria-label="Desert Shine navigation">
        <a href="#top" className="ds-logo" onClick={() => setOpen(false)}>
          <Sun size={31} strokeWidth={1.5} />
          <span>
            DESERT SHINE<small>AUTO DETAILING</small>
          </span>
        </a>
        <div className="ds-nav-links">
          <a href="#about">Our approach</a>
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#gallery">The details</a>
        </div>
        <a className="ds-button ds-nav-cta" href="#quote">
          Request a Quote <ArrowUpRight size={16} />
        </a>
        <button
          ref={button}
          className="ds-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close demo menu" : "Open demo menu"}
          aria-expanded={open}
          aria-controls="ds-mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <nav
          className="ds-mobile-nav"
          id="ds-mobile-nav"
          aria-label="Desert Shine mobile navigation"
        >
          {["about", "services", "packages", "gallery", "quote"].map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {id === "quote" ? "Request a Quote" : id}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
export function DemoQuoteForm({ selected }: { selected: string }) {
  const [summary, setSummary] = useState<{
    name: string;
    vehicle: string;
    package: string;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const result = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (summary) result.current?.focus();
  }, [summary]);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim(),
      email = String(data.get("email") || "").trim(),
      vehicle = String(data.get("vehicle") || "").trim();
    const issues: Record<string, string> = {};
    if (name.length < 2) issues.name = "Enter at least two characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      issues.email = "Enter a valid example email address.";
    if (vehicle.length < 3) issues.vehicle = "Enter a vehicle make and model.";
    setErrors(issues);
    if (Object.keys(issues).length) {
      (form.elements.namedItem(Object.keys(issues)[0]) as HTMLElement)?.focus();
      return;
    }
    setSummary({ name, vehicle, package: String(data.get("package")) });
  }
  return (
    <form className="ds-quote-form" onSubmit={submit} noValidate>
      <div className="ds-form-notice">
        <span>TRY THE EXPERIENCE</span>
        <p>
          Demo only. Use sample details. Nothing is sent, stored, or booked.
        </p>
      </div>
      <div className="ds-form-grid">
        {[
          ["name", "Your name", "Alex Taylor", "name"],
          ["email", "Email address", "alex@example.com", "email"],
          ["vehicle", "Vehicle make & model", "2022 sedan", "off"],
        ].map(([id, label, placeholder, autoComplete]) => (
          <div
            className={id === "vehicle" ? "ds-field ds-field-full" : "ds-field"}
            key={id}
          >
            <label htmlFor={`ds-${id}`}>{label}</label>
            <input
              id={`ds-${id}`}
              name={id}
              type={id === "email" ? "email" : "text"}
              autoComplete={autoComplete}
              placeholder={placeholder}
              required
              maxLength={id === "email" ? 254 : 100}
              aria-invalid={!!errors[id]}
              aria-describedby={errors[id] ? `ds-error-${id}` : undefined}
            />
            {errors[id] && (
              <p className="ds-error" id={`ds-error-${id}`}>
                {errors[id]}
              </p>
            )}
          </div>
        ))}
        <div className="ds-field ds-field-full">
          <label htmlFor="ds-package">Your package</label>
          <select id="ds-package" name="package" defaultValue={selected}>
            <option>Help me choose</option>
            {detailingPackages.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
        <div className="ds-field ds-field-full">
          <label htmlFor="ds-details">
            Anything else? <span>(optional)</span>
          </label>
          <textarea
            id="ds-details"
            name="details"
            rows={3}
            maxLength={1500}
            placeholder="Tell us what your vehicle needs. Use sample information only."
          />
        </div>
      </div>
      <button className="ds-button" type="submit">
        Preview Quote Request <ArrowUpRight size={17} />
      </button>
      <div aria-live="polite">
        {summary && (
          <div ref={result} tabIndex={-1} className="ds-quote-result">
            <h3>Your demo request preview</h3>
            <p>
              {summary.name} · {summary.vehicle}
              <br />
              Package: {summary.package}
            </p>
            <p>
              <strong>No request was sent.</strong> This is a local preview
              only. Desert Shine is fictional and does not accept bookings.
            </p>
            <button type="button" onClick={() => setSummary(null)}>
              Continue editing
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
