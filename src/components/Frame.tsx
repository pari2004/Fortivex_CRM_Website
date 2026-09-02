import type { ReactNode } from "react";

/** Browser-chrome wrapper used around product screenshots and mockups. */
export default function Frame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <>
      <div className="chrome" aria-hidden="true">
        <i style={{ background: "#ff5f57" }} />
        <i style={{ background: "#febc2e" }} />
        <i style={{ background: "#28c840" }} />
        <span className="chrome__url">{url}</span>
      </div>
      {children}
    </>
  );
}
