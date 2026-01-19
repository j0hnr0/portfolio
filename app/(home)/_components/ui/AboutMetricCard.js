'use client';

import MouseGlowCard from './MouseGlowCard';

export default function AboutMetricCard({score, title, desc}) {
  return (
    <MouseGlowCard className="bento-card bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1.5 transition-all duration-300">
      <div className="flex flex-col h-full justify-center items-center text-center">
        <div className="font-mono text-3xl md:text-[3.5rem] font-bold text-accent leading-none">{score}</div>
        <div className="text-sm text-text-secondary mt-3">{title}</div>
        <div className="font-mono text-[0.625rem] text-text-muted uppercase tracking-widest mt-1">{desc}</div>
      </div>
    </MouseGlowCard>
  );
}
