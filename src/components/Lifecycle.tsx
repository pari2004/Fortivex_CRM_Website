import { lifecycle } from "@/content/site";
import Reveal from "./Reveal";

export default function Lifecycle() {
  return (
    <section className="section section--dark" id="lifecycle">
      <div className="grid-fade" />
      <div className="wrap rel">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">One continuous record</span>
            <h2 className="display">
              The full student lifecycle,{" "}
              <span className="grad-text">on a single timeline</span>
            </h2>
            <p className="lead">
              Most CRMs stop at the deal. Fortivex keeps going — through admission,
              batch delivery and placement — so the enquiry you paid for keeps
              earning long after it converts.
            </p>
          </div>
        </Reveal>

        <div className="life">
          <div className="life__rail">
            {lifecycle.map((l, i) => (
              <Reveal key={l.step} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <div className="life__node">
                  <div className="life__dot">{l.step}</div>
                  <h3>{l.title}</h3>
                  <p>{l.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
