export default function AboutMetricCard({score, title, desc}) {
  return (
    <div className="bg-bg-card border border-border rounded-2xl p-8 hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-[400ms]">
      <div className="flex flex-col h-full justify-center items-center text-center">
        <div className="font-mono text-[3.5rem] font-bold text-accent leading-none">{score}</div>
        <div className="text-sm text-text-secondary mt-3">{title}</div>
        <div className="font-mono text-[0.625rem] text-text-muted uppercase tracking-widest mt-1">{desc}</div>
      </div>
    </div>
  );
}
