const COLS = [
  { t: "Enquiry", n: 312, v: "₹1.9 Cr", c: "#3b82f6", cards: [
    { n: "Aarav Sharma", p: "Full-Stack · Sep batch", a: "P", ac: "#2563eb", v: "₹85,000" },
    { n: "Kabir Nair", p: "Data Science · Oct", a: "S", ac: "#0ea5e9", v: "₹1,20,000" },
  ]},
  { t: "Contacted", n: 184, v: "₹1.2 Cr", c: "#8b5cf6", cards: [
    { n: "Ananya Iyer", p: "UI/UX · Sep batch", a: "R", ac: "#7c3aed", v: "₹65,000" },
    { n: "Vivaan Reddy", p: "Cloud & DevOps", a: "A", ac: "#f59e0b", v: "₹98,000" },
  ]},
  { t: "Application", n: 96, v: "₹78 L", c: "#f59e0b", cards: [
    { n: "Diya Krishnan", p: "Data Science · Oct", a: "R", ac: "#7c3aed", v: "₹1,20,000" },
    { n: "Aditya Rao", p: "Cybersecurity", a: "P", ac: "#2563eb", v: "₹1,10,000" },
  ]},
  { t: "Documents", n: 61, v: "₹52 L", c: "#0ea5e9", cards: [
    { n: "Meera Joshi", p: "Full-Stack · Sep", a: "S", ac: "#0ea5e9", v: "₹85,000" },
  ]},
  { t: "Admitted", n: 42, v: "₹36 L", c: "#22c55e", cards: [
    { n: "Ishita Patel", p: "Digital Marketing", a: "P", ac: "#2563eb", v: "₹58,000" },
    { n: "Rohan Gupta", p: "Full-Stack · Sep", a: "A", ac: "#f59e0b", v: "₹85,000" },
  ]},
];

export default function PipelineMock() {
  return (
    <div className="mkp">
      <div className="mkl__head">
        <div>
          <h4>Admissions pipeline</h4>
          <p>Sep–Oct intake · 695 open records · ₹4.7 Cr weighted</p>
        </div>
        <span className="mk__chip">This intake</span>
      </div>

      <div className="mkp__cols">
        {COLS.map((c) => (
          <div className="mkp__col" key={c.t}>
            <div className="mkp__ch">
              <b>{c.t}</b>
              <span>{c.n}</span>
            </div>
            <div className="mkp__sum">{c.v}</div>
            <div className="mkp__bar" style={{ background: c.c }} />
            {c.cards.map((k) => (
              <div className="mkp__card" key={k.n}>
                <b>{k.n}</b>
                <em>{k.p}</em>
                <div className="mkp__meta">
                  <i style={{ background: k.ac }}>{k.a}</i>
                  <span style={{ color: c.c }}>{k.v}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
