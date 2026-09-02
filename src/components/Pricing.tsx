"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { pricing } from "@/content/site";
import Reveal from "./Reveal";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="section section--paper" id="pricing">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Pricing</span>
            <h2 className="display">Priced per counsellor, not per enquiry</h2>
            <p className="lead">
              Grow your lead volume without growing your bill. Every plan includes
              unlimited leads, unlimited students and unlimited reports.
            </p>
            <div className="toggle" role="group" aria-label="Billing period">
              <button className={annual ? "" : "on"} onClick={() => setAnnual(false)}>
                Monthly
              </button>
              <button className={annual ? "on" : ""} onClick={() => setAnnual(true)}>
                Annual <em>Save 20%</em>
              </button>
            </div>
          </div>
        </Reveal>

        <div className="plans">
          {pricing.plans.map((p, i) => {
            const price = annual ? p.priceAnnual : p.priceMonthly;
            return (
              <Reveal key={p.name} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <article className={`card plan${p.featured ? " plan--featured" : ""}`}>
                  {p.featured && <span className="plan__badge">Most popular</span>}
                  <h3 className="plan__name">{p.name}</h3>
                  <p className="plan__blurb">{p.blurb}</p>
                  <div className="plan__price">
                    {price === null ? (
                      <span className="plan__amt plan__amt--word">Custom pricing</span>
                    ) : (
                      <>
                        <span className="plan__amt">₹{price.toLocaleString("en-IN")}</span>
                        <span className="plan__per">/user/month</span>
                      </>
                    )}
                  </div>
                  <a
                    className={`btn ${p.featured ? "btn--dark" : "btn--primary"}`}
                    href="#demo"
                  >
                    {p.cta} <ArrowRight />
                  </a>
                  <ul className="plan__feats">
                    {p.features.map((f) => (
                      <li key={f}>
                        <Check strokeWidth={3} /> {f}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="pricing__note">{pricing.note}</p>
      </div>
    </section>
  );
}
