import { Check, X } from "lucide-react";
import { problem } from "@/content/site";
import Reveal from "./Reveal";

export default function Problem() {
  return (
    <section className="section section--paper">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">{problem.eyebrow}</span>
            <h2 className="display">{problem.headline}</h2>
            <p className="lead">{problem.sub}</p>
          </div>
        </Reveal>

        <div className="compare">
          <Reveal delay={1}>
            <div className="compare__col compare__col--bad">
              <div className="compare__title">
                <i style={{ background: "rgba(239,68,68,.12)", color: "#dc2626" }}>
                  <X size={14} />
                </i>
                Without Fortivex
              </div>
              <ul>
                {problem.before.map((b) => (
                  <li key={b}>
                    <X size={18} color="#dc2626" strokeWidth={2.4} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="compare__col compare__col--good">
              <div className="compare__title">
                <i style={{ background: "rgba(37,99,235,.12)", color: "#2563eb" }}>
                  <Check size={14} />
                </i>
                With Fortivex CRM
              </div>
              <ul>
                {problem.after.map((b) => (
                  <li key={b}>
                    <Check size={18} color="#2563eb" strokeWidth={2.4} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
