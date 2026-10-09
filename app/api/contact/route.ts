import { NextResponse } from "next/server";
import { brand } from "@/lib/config";
import { contactSchema } from "@/lib/contact";
export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = request.headers.get("origin");

const allowedOrigins = new Set<string>();

// Local development addresses
if (process.env.NODE_ENV === "development") {
  allowedOrigins.add("http://localhost:3000");
  allowedOrigins.add("http://127.0.0.1:3000");
}

// Configured public website address
if (process.env.NEXT_PUBLIC_SITE_URL) {
  try {
    allowedOrigins.add(
      new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    );
  } catch {
    console.error("Invalid NEXT_PUBLIC_SITE_URL");
  }
}

if (!origin || !allowedOrigins.has(origin)) {
  return NextResponse.json(
    { error: "This request origin is not allowed." },
    { status: 403 }
  );
}
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ error: "Expected JSON." }, { status: 415 });
  let value: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 20000)
      return NextResponse.json(
        { error: "Your enquiry is too large." },
        { status: 413 },
      );
    value = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const result = contactSchema.safeParse(value);
  if (!result.success)
    return NextResponse.json(
      {
        error: "Please check your details and try again.",
        fields: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  if (result.data.website)
    return NextResponse.json(
      { error: "Submission rejected." },
      { status: 400 },
    );
  const key = process.env.RESEND_API_KEY,
    from = process.env.CONTACT_FROM_EMAIL,
    to = brand.email;
  if (!key || !from || !to)
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. The studio owner must complete the contact form setup before enquiries can be sent.",
      },
      { status: 503 },
    );
  const d = result.data;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `DRKN project enquiry — ${d.package}`,
        text: `Name: ${d.name}\nEmail: ${d.email}\nBusiness: ${d.business}\nPhone: ${d.phone || "Not provided"}\nPackage: ${d.package}\nBudget: ${d.budget}\n\n${d.details}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok)
      return NextResponse.json(
        {
          error:
            "Email delivery could not be confirmed. Please try again later or use the email option.",
        },
        { status: 502 },
      );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "The email provider is unavailable. Please try again later." },
      { status: 502 },
    );
  }
}
