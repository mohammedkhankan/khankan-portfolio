"use client";
import { useEffect, useRef } from "react";

/**
 * Animates every number inside a string ("+2,000", "52 / 52", "1.84 s", "5 من 30")
 * up from 0 when it scrolls into view. The server renders the final text, so the
 * real value shows without JS and is read by screen readers; reduced motion skips it.
 */
const NUM = /\d[\d,]*(?:\.\d+)?/g;

function format(n: number, template: string) {
  const decimals = template.includes(".") ? template.split(".")[1].length : 0;
  const s = n.toFixed(decimals);
  if (!template.includes(",")) return s;
  const [int, dec] = s.split(".");
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "");
}

export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !/\d/.test(value)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = (value.match(NUM) ?? []).map((t) => parseFloat(t.replace(/,/g, "")));
    const render = (p: number) => {
      let i = 0;
      return value.replace(NUM, (t) => format(targets[i++] * p, t));
    };
    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const k = Math.min(1, (now - t0) / duration);
        el.textContent = render(1 - Math.pow(1 - k, 3));
        if (k < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    // Only reset to zero numbers that are still below the fold, so nothing visible flickers.
    if (el.getBoundingClientRect().top > window.innerHeight) el.textContent = render(0);
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value, duration]);

  return (
    <>
      <span ref={ref} aria-hidden className="tabular-nums">{value}</span>
      <span className="sr-only">{value}</span>
    </>
  );
}
