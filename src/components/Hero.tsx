import { ArrowRight, PlayCircle, TrendingUp, Zap } from "lucide-react";
import { appHost, hero } from "@/content/site";
import DashboardMock from "./DashboardMock";
import Frame from "./Frame";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="aurora">
        <span className="blob-a" />
        <span className="blob-b" />
        <span className="blob-c" />
      </div>
      <div className="grid-fade" />

      <div className="wrap">
        <div className="hero__in">
          <Reveal>
            <span className="pill">
              <b>New</b> {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="display">
              <span>{hero.headline[0]}</span>
              <span className="grad-text">{hero.headline[1]}</span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="lead">{hero.sub}</p>
          </Reveal>

          <Reveal delay={3}>
            <div className="hero__ctas">
              <a className="btn btn--primary btn--lg" href="#demo">
                {hero.primaryCta} <ArrowRight />
              </a>
              <a className="btn btn--ghost btn--lg" href="#platform">
                <PlayCircle /> {hero.secondaryCta}
              </a>
            </div>
            <p className="hero__micro">{hero.microProof}</p>
          </Reveal>
        </div>
      </div>

      <div className="wrap" style={{ position: "relative" }}>
        <div className="hero__glow" />
        <Reveal delay={4}>
          <div className="hero__shot">
            <div className="float-chip float-chip--tl">
              <span className="float-chip__ico" style={{ background: "linear-gradient(135deg,#22c55e,#16a34a)" }}>
                <Zap size={15} />
              </span>
              <span>
                First response
                <small>Under 60 seconds</small>
              </span>
            </div>

            <div className="float-chip float-chip--br">
              <span className="float-chip__ico" style={{ background: "linear-gradient(135deg,#2563eb,#7c3aed)" }}>
                <TrendingUp size={15} />
              </span>
              <span>
                Admission rate
                <small>+31% this intake</small>
              </span>
            </div>

            <Tilt max={4}>
              <div className="hero__shot-inner">
                <Frame url={`${appHost}/dashboard`}>
                  <DashboardMock />
                </Frame>
              </div>
            </Tilt>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
