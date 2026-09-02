import { modules } from "@/content/site";
import Reveal from "./Reveal";

export default function Modules() {
  return (
    <section className="section" id="modules">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Everything included</span>
            <h2 className="display">
              60+ modules, <span className="grad-text">no bolt-ons</span>
            </h2>
            <p className="lead">
              Fortivex ships as a complete admissions operating system. There is no
              marketplace to shop in and no second vendor to invoice you.
            </p>
          </div>
        </Reveal>

        <div className="mods">
          {modules.map((m, i) => (
            <Reveal key={m.group} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
              <article className="card mod">
                <h3>{m.group}</h3>
                <div className="mod__list">
                  {m.items.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
