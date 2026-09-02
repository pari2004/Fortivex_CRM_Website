"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import Reveal from "./Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Questions</span>
            <h2 className="display">Everything institutes ask us first</h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="faq">
            {faqs.map((f, i) => (
              <div key={f.q} className={`faq__item${open === i ? " open" : ""}`}>
                <button
                  className="faq__q"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                  <span className="faq__ico">
                    <Plus size={15} />
                  </span>
                </button>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
