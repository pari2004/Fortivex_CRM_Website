import { Filter, Plus, Sparkles } from "lucide-react";

const ROWS = [
  { n: "Aarav Sharma", i: "A", c: "#2563eb", o: "Priya M.", s: "Meta Lead Ads", st: "Contacted", stc: "#7c3aed", f: "Today, 4:30 PM", p: "High", pc: "#dc2626" },
  { n: "Diya Krishnan", i: "D", c: "#7c3aed", o: "Rahul D.", s: "Website form", st: "Application", stc: "#f59e0b", f: "Tomorrow", p: "High", pc: "#dc2626" },
  { n: "Kabir Nair", i: "K", c: "#0ea5e9", o: "Sneha R.", s: "WhatsApp", st: "New", stc: "#3b82f6", f: "Today, 6:00 PM", p: "Medium", pc: "#b45309" },
  { n: "Ishita Patel", i: "I", c: "#22c55e", o: "Priya M.", s: "IndiaMART", st: "Admitted", stc: "#22c55e", f: "—", p: "Low", pc: "#64748b" },
  { n: "Vivaan Reddy", i: "V", c: "#f59e0b", o: "Arjun S.", s: "Walk-in", st: "Contacted", stc: "#7c3aed", f: "Fri, 11:00 AM", p: "Medium", pc: "#b45309" },
  { n: "Ananya Iyer", i: "A", c: "#ec4899", o: "Rahul D.", s: "JustDial", st: "Application", stc: "#f59e0b", f: "Mon, 10:00 AM", p: "High", pc: "#dc2626" },
];

const tint = (hex: string) => `${hex}1f`;

export default function LeadsMock() {
  return (
    <div className="mkl">
      <div className="mkl__head">
        <div>
          <h4>Active Leads</h4>
          <p>612 enquiries · 4 counsellors · updated just now</p>
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          <span className="mk__chip" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <Filter size={11} /> Filters
          </span>
          <span className="mk__btn" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <Sparkles size={11} /> AI Agent
          </span>
          <span className="mk__btn" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <Plus size={11} /> Add lead
          </span>
        </div>
      </div>

      <div className="mkl__tabs">
        <span className="on">Active Leads</span>
        <span>Inactive Leads</span>
        <span>Lead Owner</span>
        <span>Segments</span>
      </div>

      <div className="mkl__table">
        <div className="mkl__tr mkl__tr--h">
          <span>Lead name</span>
          <span>Owner</span>
          <span>Source</span>
          <span>Stage</span>
          <span>Next follow-up</span>
          <span>Priority</span>
        </div>
        {ROWS.map((r) => (
          <div className="mkl__tr" key={r.n}>
            <div className="mkl__nm">
              <span className="mk__av" style={{ background: r.c }}>{r.i}</span>
              <b>{r.n}</b>
            </div>
            <span className="mkl__cell">{r.o}</span>
            <span className="mkl__cell">{r.s}</span>
            <span>
              <span className="mkl__pill" style={{ color: r.stc, background: tint(r.stc) }}>{r.st}</span>
            </span>
            <span className="mkl__cell">{r.f}</span>
            <span>
              <span className="mkl__pill" style={{ color: r.pc, background: tint(r.pc) }}>{r.p}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
