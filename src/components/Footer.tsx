import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, footer } from "@/content/site";

/* Brand marks are inline SVG — lucide dropped third-party logos in v1. */
const SOCIALS = [
  {
    label: "LinkedIn",
    href: company.social.linkedin,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "X",
    href: company.social.twitter,
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z",
  },
  {
    label: "YouTube",
    href: company.social.youtube,
    path: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot__about">
            <a href="#top" className="brand">
              <Image
                src="/fortivex-logo.png"
                alt=""
                width={140}
                height={140}
                style={{ height: 34, width: "auto" }}
              />
              <span className="brand__txt">
                <span className="brand__name">
                  FORTIVEX<span className="grad-text">.AI</span>
                </span>
                <span className="brand__sub">CRM Platform</span>
              </span>
            </a>
            <p>
              The admissions and student lifecycle CRM for institutes that treat every
              enquiry as revenue. {company.tagline}
            </p>
            <div className="foot__contact">
              <a href={`mailto:${company.email}`}>
                <Mail /> {company.email}
              </a>
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Phone /> {company.phone}
              </a>
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <MapPin /> {company.address}
              </span>
            </div>
            <div className="foot__social">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((c) => (
            <div className="foot__col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot__bar">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <div className="foot__legal">
            {footer.legal.map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
