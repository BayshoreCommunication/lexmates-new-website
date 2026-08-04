'use client';

import { useEffect, useRef, useState } from 'react';
import { StatItem } from '@/data/stats';

interface StatCountersProps {
  stats: StatItem[];
}

function StatCard({ stat }: { stat: StatItem }) {
  const [displayValue, setDisplayValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduceMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setDisplayValue(stat.count);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            const duration = 1200;
            let start: number | null = null;

            const step = (ts: number) => {
              if (!start) start = ts;
              const progress = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * stat.count);
              setDisplayValue(current);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setDisplayValue(stat.count);
              }
            };

            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [stat.count]);

  return (
    <div className="stat" ref={containerRef}>
      <span className="stat-num">
        {displayValue.toLocaleString()}
        {stat.suffix}
      </span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function StatCounters({ stats }: StatCountersProps) {
  return (
    <section className="stats">
      <div className="container stats-grid reveal-stagger">
        {stats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} />
        ))}
      </div>
    </section>
  );
}
