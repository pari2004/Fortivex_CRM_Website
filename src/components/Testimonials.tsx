import { Star } from "lucide-react";
import { testimonials } from "@/content/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Customer stories</span>
            <h2 className="display">Admissions teams that stopped losing enquiries</h2>
          </div>
        </Reveal>

        <div className="tst">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
              <figure className="card tst__card">
                <div className="tst__stars" aria-label="5 out of 5">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} />
                  ))}
                </div>
                <blockquote className="tst__quote">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="tst__who">
                  <span className="tst__av">{t.name.charAt(0)}</span>
                  <span>
                    <span className="tst__n">{t.name}</span>
                    <span className="tst__r">
                      {t.role} · {t.org}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
