"use client";

import { useState } from "react";
import { appHost } from "@/content/site";
import DashboardMock from "./DashboardMock";
import Frame from "./Frame";
import LeadsMock from "./LeadsMock";
import PipelineMock from "./PipelineMock";
import Reveal from "./Reveal";
import ReportsMock from "./ReportsMock";

const VIEWS = [
  {
    tab: "Dashboard",
    url: `${appHost}/dashboard`,
    render: () => <DashboardMock />,
    caption:
      "Owner-level analytics: leads added, leads worked, admissions and collections — with live team activity as counsellors work.",
  },
  {
    tab: "Leads",
    url: `${appHost}/leads`,
    render: () => <LeadsMock />,
    caption:
      "Every enquiry with source, owner, stage and next action. Filter, segment and bulk-assign without leaving the table.",
  },
  {
    tab: "Pipeline",
    url: `${appHost}/pipeline`,
    render: () => <PipelineMock />,
    caption:
      "Drag-and-drop admissions pipeline with stage value, ageing alerts and counsellor ownership at a glance.",
  },
  {
    tab: "Reports",
    url: `${appHost}/reports/dashboard`,
    render: () => <ReportsMock />,
    caption:
      "Ten report families out of the box — lead, admission, student, payment, attendance, trainer, placement and revenue.",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const view = VIEWS[active];

  return (
    <section className="section section--dark">
      <div className="grid-fade" />
      <div className="wrap rel">
        <Reveal>
          <div className="head-block head-block--center">
            <span className="eyebrow">Inside the product</span>
            <h2 className="display">
              Built for the person who has to{" "}
              <span className="grad-text">use it all day</span>
            </h2>
            <p className="lead">
              Dense where it needs to be, quiet everywhere else. Keyboard-first search,
              saved views, and a workspace that loads in under a second.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="show__tabs" role="tablist">
            {VIEWS.map((v, i) => (
              <button
                key={v.tab}
                role="tab"
                aria-selected={i === active}
                className={`show__tab${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                {v.tab}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="show__frame">
            <div className="show__inner show__stage" key={active}>
              <Frame url={view.url}>{view.render()}</Frame>
            </div>
          </div>
          <p className="show__caption">{view.caption}</p>
        </Reveal>
      </div>
    </section>
  );
}
