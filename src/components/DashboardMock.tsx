import {
  BarChart3, CalendarDays, GraduationCap, LayoutDashboard, MessagesSquare,
  Phone, Search, Users, Wallet,
} from "lucide-react";

/* A faithful, lightweight recreation of the Fortivex CRM admin dashboard.
   Rendered in CSS so it stays crisp at any size and matches the brand palette.
   To use a real screenshot instead, drop it in /public/shots and swap this
   component for <Image src="/shots/dashboard.png" ... /> in ProductFrame. */

const KPIS = [
  { label: "New Inquiry Leads", value: "119", pct: 100, color: "#2563eb" },
  { label: "Leads Worked", value: "180", pct: 100, color: "#7c3aed" },
  { label: "Admissions", value: "42", pct: 74, color: "#22c55e" },
  { label: "Fees Collected", value: "₹8.4L", pct: 61, color: "#f59e0b" },
];

const STAGES = [
  { label: "Enquiry", value: "312", color: "#3b82f6" },
  { label: "Contacted", value: "184", color: "#8b5cf6" },
  { label: "Application", value: "96", color: "#f59e0b" },
  { label: "Admitted", value: "42", color: "#22c55e" },
];

const BARS = [46, 62, 38, 74, 58, 88, 70, 96, 64, 82, 55, 92];
const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const ACTIVITY = [
  { i: "A", n: "Abhishek", s: "Call · 2m 10s with Abhaya K.", t: "Won", c: "#2563eb", tc: "#059669", tb: "rgba(5,150,105,.1)" },
  { i: "P", n: "Priya", s: "WhatsApp reply · Batch enquiry", t: "Hot", c: "#7c3aed", tc: "#b45309", tb: "rgba(245,158,11,.12)" },
  { i: "R", n: "Rahul", s: "Application submitted · Data Science", t: "New", c: "#0ea5e9", tc: "#1d4ed8", tb: "rgba(37,99,235,.1)" },
  { i: "S", n: "Sneha", s: "Fee instalment received · ₹24,000", t: "Paid", c: "#22c55e", tc: "#059669", tb: "rgba(5,150,105,.1)" },
];

const NAV_MAIN = [
  { icon: LayoutDashboard, label: "Dashboard", on: true },
  { icon: Users, label: "Leads" },
  { icon: MessagesSquare, label: "Conversations" },
  { icon: Phone, label: "Calls" },
  { icon: CalendarDays, label: "Follow-ups" },
];

const NAV_ACAD = [
  { icon: GraduationCap, label: "Admissions" },
  { icon: Users, label: "Students" },
  { icon: Wallet, label: "Fees" },
  { icon: BarChart3, label: "Reports" },
];

export default function DashboardMock() {
  return (
    <div className="mk">
      <aside className="mk__side">
        <div className="mk__brand">
          <i>FX</i>
          <b>Fortivex CRM</b>
        </div>
        {NAV_MAIN.map(({ icon: Icon, label, on }) => (
          <div key={label} className={`mk__nav${on ? " on" : ""}`}>
            <Icon /> {label}
          </div>
        ))}
        <div className="mk__lbl">Academics</div>
        {NAV_ACAD.map(({ icon: Icon, label }) => (
          <div key={label} className="mk__nav">
            <Icon /> {label}
          </div>
        ))}
      </aside>

      <div className="mk__main">
        <div className="mk__top">
          <div className="mk__search">
            <Search /> Search across CRM… (Ctrl + K)
          </div>
          <span className="mk__chip">Last 7 Days</span>
          <span className="mk__btn">Save view</span>
        </div>

        <div className="mk__kpis">
          {KPIS.map((k) => (
            <div className="mk__kpi" key={k.label}>
              <span>{k.label}</span>
              <b>{k.value}</b>
              <div className="mk__bar">
                <i style={{ width: `${k.pct}%`, background: k.color }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mk__cols">
          <div className="mk__card">
            <div className="mk__ch">
              <b>Admissions pipeline</b>
              <em>View report</em>
            </div>
            <div className="mk__stages">
              {STAGES.map((s) => (
                <div className="mk__stage" key={s.label}>
                  <span>{s.label}</span>
                  <b>{s.value}</b>
                  <i style={{ background: s.color }} />
                </div>
              ))}
            </div>
            <div className="mk__chart">
              {BARS.map((h, idx) => (
                <div key={idx} style={{ height: `${h}%`, opacity: 0.45 + (idx / BARS.length) * 0.55 }} />
              ))}
            </div>
            <div className="mk__legend">
              {MONTHS.map((m, idx) => (
                <span key={idx}>{m}</span>
              ))}
            </div>
          </div>

          <div className="mk__card">
            <div className="mk__ch">
              <b>Live activity</b>
              <em>All users</em>
            </div>
            <div style={{ marginTop: 6 }}>
              {ACTIVITY.map((a) => (
                <div className="mk__row" key={a.n}>
                  <div className="mk__av" style={{ background: a.c }}>{a.i}</div>
                  <div className="mk__rt">
                    <b>{a.n}</b>
                    <span>{a.s}</span>
                  </div>
                  <span className="mk__tag" style={{ color: a.tc, background: a.tb }}>{a.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
