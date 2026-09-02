const KPIS = [
  { l: "Enquiries", v: "2,418", c: "#2563eb" },
  { l: "Conversion", v: "17.4%", c: "#7c3aed" },
  { l: "Admissions", v: "421", c: "#22c55e" },
  { l: "Collections", v: "₹3.1 Cr", c: "#f59e0b" },
];

const SOURCES = [
  { l: "Meta Lead Ads", p: 82, v: "742", c: "#2563eb" },
  { l: "Website forms", p: 64, v: "581", c: "#7c3aed" },
  { l: "IndiaMART", p: 47, v: "428", c: "#0ea5e9" },
  { l: "WhatsApp", p: 38, v: "344", c: "#22c55e" },
  { l: "Walk-ins & referrals", p: 26, v: "236", c: "#f59e0b" },
];

const POINTS = [22, 34, 28, 46, 40, 58, 52, 70, 64, 82, 76, 94];

function areaPath(vals: number[], w: number, h: number) {
  const max = Math.max(...vals) * 1.15;
  const step = w / (vals.length - 1);
  const pts = vals.map((v, i) => [i * step, h - (v / max) * h] as const);
  const d = pts
    .map(([x, y], i) => {
      if (i === 0) return `M${x},${y}`;
      const [px, py] = pts[i - 1];
      const cx = (px + x) / 2;
      return `C${cx},${py} ${cx},${y} ${x},${y}`;
    })
    .join(" ");
  return { line: d, fill: `${d} L${w},${h} L0,${h} Z` };
}

export default function ReportsMock() {
  const { line, fill } = areaPath(POINTS, 520, 130);

  return (
    <div className="mkr">
      <div className="mkl__head">
        <div>
          <h4>Reports &amp; Analytics</h4>
          <p>Admission report · last 12 months · all campuses</p>
        </div>
        <span className="mk__chip">Export PDF</span>
      </div>

      <div className="mk__kpis">
        {KPIS.map((k) => (
          <div className="mk__kpi" key={k.l}>
            <span>{k.l}</span>
            <b style={{ color: k.c }}>{k.v}</b>
          </div>
        ))}
      </div>

      <div className="mkr__grid">
        <div className="mk__card">
          <div className="mk__ch">
            <b>Enquiry to admission trend</b>
            <em>Monthly</em>
          </div>
          <div className="mkr__area">
            <svg viewBox="0 0 520 130" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
              <defs>
                <linearGradient id="fx-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.34" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="fx-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d={fill} fill="url(#fx-area)" />
              <path d={line} fill="none" stroke="url(#fx-line)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="mk__legend">
            {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        <div className="mk__card">
          <div className="mk__ch">
            <b>Enquiries by source</b>
            <em>Volume</em>
          </div>
          <div className="mkr__src">
            {SOURCES.map((s) => (
              <div key={s.l}>
                <span>
                  {s.l} <strong style={{ color: "var(--ink-700)" }}>{s.v}</strong>
                </span>
                <i>
                  <b style={{ width: `${s.p}%`, background: s.c }} />
                </i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
