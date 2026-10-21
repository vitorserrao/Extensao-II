import React, { useEffect, useRef, useState } from 'react';

/**
 * Número que conta de 0 até o valor final quando entra na tela,
 * desacelerando até estabilizar no placar final.
 */
export const CountUp: React.FC<{ to: number; duration?: number; className?: string }> = ({
  to,
  duration = 2200,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const run = () => {
      if (reduce) {
        setValue(to);
        setDone(true);
        return;
      }
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 4); // rápido no começo, devagar no fim
        setValue(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setDone(true);
      };
      raf = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${done ? 'count-done' : ''} ${className ?? ''}`} aria-label={String(to)}>
      {value.toLocaleString('pt-BR')}
    </span>
  );
};

/** Barra que enche até `pct` quando entra na tela, no mesmo ritmo do contador. */
export const CountBar: React.FC<{ pct: number }> = ({ pct }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShow(true);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="h-2 rounded-full bg-[#E8EFE5] overflow-hidden">
      <div
        className="h-full rounded-full bg-[#2F9E41] transition-[width] duration-[2200ms] ease-out"
        style={{ width: show ? `${pct}%` : '0%' }}
      />
    </div>
  );
};
