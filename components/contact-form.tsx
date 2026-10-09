"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, LoaderCircle } from "lucide-react";
import { contactSchema } from "@/lib/contact";
export function ContactForm({
  selected,
  details,
  configured,
}: {
  selected: string;
  details: string;
  configured: boolean;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    setSuccess(false);
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues)
        next[String(issue.path[0])] = issue.message;
      setErrors(next);
      (form.elements.namedItem(Object.keys(next)[0]) as HTMLElement)?.focus();
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus(
          data.error || "We could not submit your enquiry. Please try again.",
        );
        return;
      }
      setSuccess(true);
      setStatus(
        "Your project enquiry has been accepted by our email provider. Thank you — we look forward to learning more.",
      );
      form.reset();
    } catch {
      setStatus("Unable to connect. Please try again or use the email option.");
    } finally {
      setBusy(false);
    }
  }
  const field = (
    name: string,
    label: string,
    type = "text",
    required = true,
  ) => (
    <div className="field">
      <label htmlFor={name}>
        {label}
        {!required && <span> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={name === "phone" ? 40 : name === "email" ? 254 : 160}
        autoComplete={
          name === "name"
            ? "name"
            : name === "business"
              ? "organization"
              : name === "phone"
                ? "tel"
                : "email"
        }
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <p className="field-error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {!configured && (
        <div className="form-status">
          <strong>Contact form setup pending.</strong> Email delivery has not
          been configured. This form cannot send enquiries yet; the studio must
          connect its email provider.
        </div>
      )}
      <div className="form-grid">
        {field("name", "Your name")}
        {field("email", "Email address", "email")}
        {field("business", "Business name")}
        {field("phone", "Phone number", "tel", false)}
        <div className="field">
          <label htmlFor="package">Desired package</label>
          <select name="package" id="package" defaultValue={selected}>
            {[
              "Not sure yet",
              "Launch",
              "Growth",
              "Pro",
              "Custom",
              "Website Care",
            ].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="budget">Approximate budget</label>
          <select name="budget" id="budget">
            {[
              "Not sure yet",
              "Under $500",
              "$500–$1,000",
              "$1,000–$2,000",
              "$2,000+",
            ].map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="details">Tell us about your project</label>
          <textarea
            name="details"
            id="details"
            required
            minLength={20}
            maxLength={5000}
            defaultValue={details}
            placeholder="What do you do, what do you need, and what would you love to create?"
            aria-invalid={!!errors.details}
            aria-describedby={errors.details ? "details-error" : undefined}
          />
          {errors.details && (
            <p className="field-error" id="details-error">
              {errors.details}
            </p>
          )}
        </div>
      </div>
      <div className="trap" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-note">
        By submitting, you agree that DRKN may use these details to respond to
        your enquiry. Read the <Link href="/privacy">draft privacy notice</Link>
        . Please do not include sensitive information.
      </p>
      <div role="status" aria-live="polite">
        {status && (
          <p className={`form-status ${success ? "success" : ""}`}>{status}</p>
        )}
      </div>
      <button className="button" disabled={busy} type="submit">
        {busy ? "Sending…" : "Send Project Enquiry"}
        {busy ? <LoaderCircle size={17} /> : <ArrowUpRight size={17} />}
      </button>
    </form>
  );
}
