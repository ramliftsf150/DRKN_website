import type { Metadata } from "next";
import { StudioShell } from "@/components/studio-shell";
import { brand } from "@/lib/config";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: "DRKN Digital Studio — Built Different. Built Digital.",
    template: "%s | DRKN Digital Studio",
  },
  description:
    "Bold, modern websites for small businesses, entrepreneurs, and growing brands. Independent design and development, with transparent starting prices.",
  openGraph: {
    type: "website",
    siteName: brand.name,
    title: "DRKN Digital Studio",
    description: brand.tagline,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: brand.name,
              email: brand.email,
              telephone: brand.phoneHref.replace("tel:", ""),
            }).replace(/</g, "\\u003c"),
          }}
        />
        <StudioShell>{children}</StudioShell>
      </body>
    </html>
  );
}
