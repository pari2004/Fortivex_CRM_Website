"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates the numeric part of a stat label ("2.5L", "6,000+", "31%")
 * from zero once it scrolls into view, preserving prefix/suffix exactly.
 */
export default function CountUp({ value, duration = 1500 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const m = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!m) return;
    const [, prefix, numRaw, suffix] = m;
    const decimals = (numRaw.split(".")[1] || "").length;
    const grouped = numRaw.includes(",");
    const target = parseFloat(numRaw.replace(/,/g, ""));
    if (Number.isNaN(target)) return;

    const fmt = (n: number) => {
      const fixed = n.toFixed(decimals);
      return grouped ? Number(fixed).toLocaleString("en-IN") : fixed;
    };

    setText(`${prefix}${fmt(0)}${suffix}`);

    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setText(`${prefix}${fmt(target * eased)}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return <span ref={ref}>{text}</span>;
}
