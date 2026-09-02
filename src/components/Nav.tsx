"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { announcement, company, nav } from "@/content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="announce">
        <div className="announce__in">
          <span className="announce__dot" />
          <span>{announcement.text}</span>
          <a href={announcement.href} onClick={() => setOpen(false)}>
            {announcement.linkLabel} <ArrowRight size={13} />
          </a>
        </div>
      </div>

      <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <div className="wrap">
          <div className="nav__in">
            <a href="#top" className="brand" aria-label={`${company.name} home`}>
              <Image
                src="/fortivex-logo.png"
                alt=""
                width={140}
                height={140}
                priority
                style={{ height: 34, width: "auto" }}
              />
              <span className="brand__txt">
                <span className="brand__name">
                  FORTIVEX<span className="grad-text">.AI</span>
                </span>
                <span className="brand__sub">CRM Platform</span>
              </span>
            </a>

            <nav className="nav__links">
              {nav.map((n) => (
                <a key={n.label} href={n.href}>
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="nav__actions">
              <a className="nav__login" href={company.loginUrl}>
                Log in
              </a>
              <a className="btn btn--primary btn--sm" href="#demo">
                Book a demo <ArrowRight />
              </a>
              <button
                className="nav__burger"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`nav__mobile${open ? " open" : ""}`}>
          {nav.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href={company.loginUrl} onClick={() => setOpen(false)}>
            Log in
          </a>
          <a className="btn btn--primary" href="#demo" onClick={() => setOpen(false)}>
            Book a demo <ArrowRight />
          </a>
        </div>
      </header>
    </>
  );
}
