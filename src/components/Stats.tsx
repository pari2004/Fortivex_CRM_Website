import { Landmark, Rocket, Triangle, Sun, Code2, Compass, Mountain, Star } from "lucide-react";
import { stats } from "@/content/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const LOGOS = [
  { name: "Skillbridge Academy", icon: Landmark },
  { name: "NextGen Institute", icon: Rocket },
  { name: "Vertex Training Group", icon: Triangle },
  { name: "Aurora College", icon: Sun },
  { name: "CodeCraft Labs", icon: Code2 },
  { name: "Meridian Academy", icon: Compass },
  { name: "Pinnacle Coaching", icon: Mountain },
  { name: "Zenith EdTech", icon: Star },
];

export default function Stats() {
  return (
    <>
      <div className="marquee">
        <div className="wrap">
          <p className="marquee__label">Trusted by admissions teams across India</p>
        </div>
        <div className="marquee__mask">
          <div className="marquee__track" aria-hidden="true">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <span className="marquee__logo" key={i}>
                <l.icon />
                {l.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="stats__v"><CountUp value={s.value} /></div>
                  <div className="stats__l">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
