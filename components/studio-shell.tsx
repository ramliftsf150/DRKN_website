"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "./interactive";
import { Footer } from "./footer";
// Keep the demo independent without moving or rebuilding the studio routes.
export function StudioShell({ children }: { children: React.ReactNode }) {
  const isDemo = usePathname() === "/portfolio/desert-shine";
  return (
    <>
      {!isDemo && <Navbar />}
      <main id="main">{children}</main>
      {!isDemo && <Footer />}
    </>
  );
}
