import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
for (const path of [
  "/",
  "/services",
  "/pricing",
  "/portfolio",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/sitemap.xml",
  "/robots.txt",
  "/icon.svg",
  "/opengraph-image",
]) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, `${path} should return 200`);
  console.log(`PASS ${path}`);
}
const contact = await (await fetch(`${base}/contact?package=Growth`)).text();
assert.match(
  contact,
  /<option[^>]*selected=""[^>]*>Growth<\/option>/,
  "Growth package should be selected",
);
const payload = {
  name: "Test Visitor",
  email: "visitor@example.com",
  business: "Test Business",
  package: "Growth",
  budget: "Not sure yet",
  details: "This is a local verification of the project enquiry form.",
  phone: "",
  website: "",
};
async function post(body, origin) {
  return fetch(`${base}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(origin ? { Origin: origin } : {}),
    },
    body: JSON.stringify(body),
  });
}
assert.equal((await post({})).status, 400, "Invalid input must be rejected");
assert.equal(
  (await post({ ...payload, website: "https://spam.example" })).status,
  400,
  "Honeypot must reject bots",
);
assert.equal(
  (await post(payload, "https://untrusted.example")).status,
  403,
  "Untrusted origins must be rejected",
);
if (contact.includes("Contact form setup pending.")) {
  const response = await post(payload);
  assert.equal(
    response.status,
    503,
    "Unconfigured email must never report success",
  );
  console.log("PASS unconfigured email returns 503");
} else {
  console.log(
    "SKIP real email delivery: credentials configured; no message sent by smoke check",
  );
}
assert.equal((await fetch(`${base}/not-a-real-page`)).status, 404);
console.log(
  "PASS package prefill, validation, honeypot, origin checks, and 404",
);

const home = await (await fetch(`${base}/`)).text();
const services = await (await fetch(`${base}/services`)).text();
for (const html of [home, services]) {
  assert.equal((html.match(/class="service-card"/g) || []).length, 5);
  assert.doesNotMatch(html, />SEO Foundations</);
}
for (const html of [home, contact]) {
  assert.match(html, /href="mailto:drkn915@gmail.com"/);
  assert.match(html, /href="tel:\+19154490822"/);
  assert.doesNotMatch(html, /hello@drkn\.example/);
}
const portfolio = await (await fetch(`${base}/portfolio`)).text();
assert.match(portfolio, /href="\/portfolio\/desert-shine"/);
assert.match(portfolio, /Ember &amp; Oak Restaurant/);
assert.match(portfolio, /Greenstone Landscaping/);
assert.equal(
  (
    portfolio.match(
      /<p class="coming-soon">Demo Coming Soon · Photographic preview only<\/p>/g,
    ) || []
  ).length,
  2,
);
assert.doesNotMatch(portfolio, /href="\/portfolio\/(ember-oak|greenstone)"/);
for (const selected of ["Interior", "Exterior", "Full Detail"]) {
  const response = await fetch(
    `${base}/portfolio/desert-shine?package=${encodeURIComponent(selected)}`,
  );
  assert.equal(response.status, 200);
  const demo = await response.text();
  assert.match(
    demo,
    new RegExp(`<option[^>]*selected=""[^>]*>${selected}</option>`),
  );
  assert.match(demo, /Nothing is sent, stored, or booked/);
  assert.match(demo, /These photographs show different vehicles/);
  assert.doesNotMatch(demo, /class="nav-shell"/);
  assert.match(demo, /name="robots" content="noindex, follow"/);
  for (const id of ["about", "services", "packages", "gallery", "quote"])
    assert.ok(demo.includes(`id="${id}"`));
}
for (const filename of [
  "desert-hero",
  "desert-detail",
  "desert-finish",
  "restaurant",
  "restaurant-interior",
  "landscaping",
]) {
  const response = await fetch(`${base}/images/${filename}.webp`);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /image\/webp/);
}
const optimizedImage = await fetch(
  `${base}/_next/image?url=%2Fimages%2Fdesert-hero.webp&w=640&q=75`,
);
assert.equal(
  optimizedImage.status,
  200,
  "Next image optimization should serve the locally hosted photo",
);
assert.equal((await fetch(`${base}/images/CREDITS.md`)).status, 200);
console.log(
  "PASS official contact links, five services, live/coming-soon portfolio states, demo package prefills, disclosure, and optimized images",
);
