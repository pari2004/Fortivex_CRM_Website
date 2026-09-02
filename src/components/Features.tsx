import {
  Check, GraduationCap, MessagesSquare, PhoneCall, Radar, Sparkles, Wallet,
} from "lucide-react";
import { features } from "@/content/site";
import Reveal from "./Reveal";

const ICONS = { Radar, MessagesSquare, PhoneCall, GraduationCap, Wallet, Sparkles } as const;

export default function Features() {
  return (
    <section className="section" id="platform">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">The platform</span>
            <h2 className="display">
              Six systems your institute runs on.{" "}
              <span className="grad-text">Now one.</span>
            </h2>
            <p className="lead">
              Every module shares the same lead record, the same permissions and the
              same reporting layer — so nobody re-keys data between tools again.
            </p>
          </div>
        </Reveal>

        <div className="feat">
          {features.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS];
            return (
              <Reveal key={f.title} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <article className="card feat__card">
                  <span className="icon-badge">
                    <Icon />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <ul className="feat__pts">
                    {f.points.map((p) => (
                      <li key={p}>
                        <Check strokeWidth={3} /> {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
