export const brand = {
  name: "DRKN Digital Studio",
  tagline: "Built Different. Built Digital.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://drkn.example",
  email: "drkn915@gmail.com",
  phone: "(915) 449-0822",
  phoneHref: "tel:+19154490822",
  founder: "Founder biography coming soon.",
  location: "Location to be announced.",
  socials: [] as { label: string; url: string }[],
};
export const packages = [
  {
    name: "Launch",
    price: 399,
    description: "A strong first impression. A confident first step.",
    features: [
      "1–3 thoughtfully designed pages",
      "Responsive on every screen",
      "Contact form",
      "Basic SEO setup",
      "One revision round",
    ],
  },
  {
    name: "Growth",
    price: 799,
    description: "More room for your brand. More ways to connect.",
    popular: true,
    features: [
      "Up to 6 custom-designed pages",
      "Custom visual design",
      "Quote & contact forms",
      "Basic SEO foundations",
      "Two revision rounds",
    ],
  },
  {
    name: "Pro",
    price: 1499,
    description: "A bigger vision. Built with room to grow.",
    features: [
      "Up to 10 bespoke pages",
      "Advanced visual design",
      "CMS integration",
      "Analytics setup",
      "Three revision rounds",
    ],
  },
];
export const services = [
  {
    name: "Website Design",
    icon: "design",
    text: "Make your first impression count.",
    detail:
      "A distinctive, intuitive website that feels like your business and makes the next step clear.",
    deliverables: [
      "Visual direction & page layouts",
      "Accessible, responsive interface",
      "Clear customer journeys",
    ],
  },
  {
    name: "Website Development",
    icon: "code",
    text: "Beautiful outside. Thoughtful inside.",
    detail:
      "A fast, dependable foundation that brings your design to life and grows with your business.",
    deliverables: [
      "Responsive development",
      "Working forms & navigation",
      "Performance & launch checks",
    ],
  },
  {
    name: "E-Commerce",
    icon: "shop",
    text: "Turn your storefront into an experience.",
    detail:
      "Make it easier for customers to discover your products and buy with confidence.",
    deliverables: [
      "Product & collection pages",
      "Commerce platform integration",
      "Checkout configuration",
    ],
  },
  {
    name: "Website Redesign",
    icon: "refresh",
    text: "A fresh chapter for your online presence.",
    detail:
      "Keep what makes your brand yours. Rethink the experience that is holding it back.",
    deliverables: [
      "Existing website review",
      "Refreshed design & structure",
      "Agreed content migration",
    ],
  },
  {
    name: "Ongoing Website Care",
    icon: "care",
    text: "Keep your website moving forward.",
    detail:
      "Practical help after launch, with the scope and response expectations agreed in advance.",
    deliverables: [
      "Scheduled maintenance checks",
      "Small content updates",
      "Agreed technical support",
    ],
  },
];
export const projects = [
  {
    slug: "desert-shine",
    name: "Desert Shine Auto Detailing",
    type: "desert",
    category: "Automotive · Website concept",
    headline: "Your car deserves the best.",
    description:
      "A cinematic mobile detailing concept. Rich automotive photography, clear packages, and an interactive quote experience make every touchpoint feel considered.",
    scope: "Art direction, responsive website, interactive demo quote flow",
    demo: "/portfolio/desert-shine",
  },
  {
    slug: "ember-oak",
    name: "Ember & Oak Restaurant",
    type: "ember",
    category: "Hospitality · Website concept",
    headline: "Gather around something good.",
    description:
      "Warm interiors, beautiful food, and quiet typography set the table for a restaurant experience with character. A photographic design direction for a fictional neighborhood restaurant.",
    scope: "Visual direction and photographic website preview",
    demo: null,
  },
  {
    slug: "greenstone",
    name: "Greenstone Landscaping",
    type: "greenstone",
    category: "Landscaping · Website concept",
    headline: "A little closer to nature.",
    description:
      "An earthy, editorial concept for outdoor spaces. Natural textures and real garden photography inspire an approachable landscape design brand.",
    scope: "Visual identity and photographic website preview",
    demo: null,
  },
];
export const faqs = [
  [
    "What is included in the starting price?",
    "Each package includes the pages, features, and revision rounds listed. We confirm the exact scope and price in writing before work begins. Domain, hosting, paid subscriptions, and ongoing care are separate unless your agreement includes them.",
  ],
  [
    "How long will my website take?",
    "Timing depends on your scope, content readiness, feedback, and any integrations. We discuss an estimated schedule during discovery and confirm milestones in your project agreement. No delivery deadline is guaranteed on this site.",
  ],
  [
    "Can you refresh my existing website?",
    "Yes. We can review your current website, identify what is worth keeping, and propose a redesign that fits your goals. Share your existing website in your project enquiry.",
  ],
  [
    "Will I be able to update my website?",
    "If you need to manage content yourself, we can scope an appropriate CMS. CMS integration is included in Pro; requirements and any third-party fees are confirmed before work starts.",
  ],
  [
    "Do you offer support after launch?",
    "Website Care starts at $59/month. An illustrative plan includes a monthly maintenance check and up to 30 minutes of minor content edits. Exact coverage, response expectations, and cancellation terms are subject to a separate agreement.",
  ],
  [
    "Do you guarantee SEO rankings or sales?",
    "No. We build solid technical foundations and thoughtful customer journeys, but search rankings, traffic, and conversions depend on many factors and are not guaranteed.",
  ],
];
