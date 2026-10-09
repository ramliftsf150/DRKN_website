import Image from "next/image";
import { photos } from "@/lib/photos";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  PenTool,
  Code2,
  ShoppingBag,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { packages, services, projects } from "@/lib/config";
export function Button({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "secondary" : ""} ${className}`}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function PageHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-heading wrap">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
const icons = {
  design: PenTool,
  code: Code2,
  shop: ShoppingBag,
  refresh: RefreshCw,
  care: ShieldCheck,
};
export function ServiceCard({
  service,
  index,
  expanded = false,
}: {
  service: (typeof services)[number];
  index: number;
  expanded?: boolean;
}) {
  const Icon = icons[service.icon as keyof typeof icons];
  return (
    <article className="service-card">
      <div className="card-top">
        <Icon size={26} />
        <span>0{index + 1}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{expanded ? service.detail : service.text}</p>
      {expanded && (
        <ul className="deliverables">
          {service.deliverables.map((x) => (
            <li key={x}>
              <Check size={15} />
              {x}
            </li>
          ))}
        </ul>
      )}
      <Link
        aria-label={`Discuss ${service.name}`}
        href={`/contact?service=${encodeURIComponent(service.name)}`}
        className="text-link"
      >
        Let’s build it <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
export function PricingCard({ plan }: { plan: (typeof packages)[number] }) {
  return (
    <article className={`price-card ${plan.popular ? "popular" : ""}`}>
      {plan.popular && (
        <span className="popular-tag">THE SWEET SPOT · MOST POPULAR</span>
      )}
      <div className="plan-label">
        <h3>{plan.name}</h3>
        <span>0{packages.indexOf(plan) + 1}</span>
      </div>
      <p>{plan.description}</p>
      <div className="price">
        <span className="starting">STARTING AT</span>$
        {plan.price.toLocaleString()}
        <small> / project</small>
      </div>
      <Button href={`/contact?package=${plan.name}`} secondary={!plan.popular}>
        Choose {plan.name}
      </Button>
      <ul>
        {plan.features.map((x) => (
          <li key={x}>
            <Check size={16} />
            {x}
          </li>
        ))}
      </ul>
    </article>
  );
}
export function ProjectVisual({
  type,
  large = false,
}: {
  type: string;
  large?: boolean;
}) {
  const project = projects.find((p) => p.type === type) || projects[0];
  const photo = photos[project.type as "desert" | "ember" | "greenstone"];
  return (
    <div className={`photo-browser ${project.type} ${large ? "large" : ""}`}>
      <div className="photo-chrome">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{project.name.toLowerCase()} / concept</span>
        <ArrowUpRight size={9} aria-hidden="true" />
      </div>
      <div className="photo-scene">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          placeholder="blur"
          sizes={
            large
              ? "(max-width: 800px) 100vw, 55vw"
              : "(max-width: 800px) 100vw, 33vw"
          }
        />
        <div className="photo-shade" />
        <div className="photo-brand">
          {project.type === "desert"
            ? "DESERT SHINE"
            : project.type === "ember"
              ? "ember & oak"
              : "greenstone."}
          <span>EST. IN IMAGINATION</span>
        </div>
        <div className="photo-copy">
          <small>{project.category.split(" · ")[0].toUpperCase()}</small>
          <strong>{project.headline}</strong>
          <span className="photo-line">
            CRAFTED WITH CARE <ArrowUpRight size={12} />
          </span>
        </div>
        {project.type === "ember" && (
          <div className="photo-inset">
            <Image
              src={photos.interior.src}
              alt={photos.interior.alt}
              fill
              sizes="180px"
              placeholder="blur"
            />
          </div>
        )}
      </div>
    </div>
  );
}
export function PortfolioCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className="portfolio-card">
      {project.demo ? (
        <Link href={project.demo} aria-label={`View ${project.name} live demo`}>
          <ProjectVisual type={project.type} />
        </Link>
      ) : (
        <ProjectVisual type={project.type} />
      )}
      <div className="portfolio-meta">
        <div>
          <small>CONCEPT PROJECT</small>
          <h3>{project.name}</h3>
          <p>{project.category}</p>
        </div>
      </div>
      {project.demo ? (
        <Link className="text-link portfolio-action" href={project.demo}>
          View Live Demo <ArrowUpRight size={16} />
        </Link>
      ) : (
        <span className="coming-soon">Demo Coming Soon</span>
      )}
    </article>
  );
}
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="wrap cta-inner">
        <div>
          <Eyebrow>BIG IDEAS START WITH A CONVERSATION</Eyebrow>
          <h2>
            Let’s build your
            <br />
            <span>next big thing.</span>
          </h2>
        </div>
        <div>
          <p>
            Your business deserves a website
            <br />
            that works as hard as you do.
          </p>
          <Button href="/contact">Start Your Project</Button>
        </div>
        <ArrowRight className="cta-watermark" aria-hidden="true" />
      </div>
    </section>
  );
}
export function PricingNote() {
  return (
    <p className="pricing-note">
      Starting prices are subject to agreed scope. Domain, hosting, third-party
      subscriptions, and maintenance are not included unless agreed separately.
      Rankings, conversions, and delivery deadlines are not guaranteed.
    </p>
  );
}
