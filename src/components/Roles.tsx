import { roles } from "@/content/site";
import Reveal from "./Reveal";

export default function Roles() {
  return (
    <section className="section section--paper">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Role-shaped workspaces</span>
            <h2 className="display">Everyone opens the same CRM. Nobody sees the same screen.</h2>
            <p className="lead">
              Fortivex renders a different dashboard, sidebar and permission set for
              every role — so counsellors get a worklist, and owners get the whole picture.
            </p>
          </div>
        </Reveal>

        <div className="roles">
          {roles.map((r, i) => (
            <Reveal key={r.name} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
              <article className="card role">
                <span className="role__tag">{r.name}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <ul>
                  {r.metrics.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
