export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 px-6 flex items-center">
      <div className="max-w-350 mx-auto w-full">
        {/* Label */}
        <p className="font-mono text-accent uppercase tracking-widest text-sm mb-6">
          Frontend Developer — Cebu, Philippines
        </p>

        {/* Hero Title */}
        <h1 className="font-bold mb-6" style={{ fontSize: 'clamp(2.5rem, 10vw, 7rem)', lineHeight: '1.1', fontWeight: '800' }}>
          <span className="block">Building fast,</span>
          <span className="block">
            <span className="text-accent">pixel-perfect</span> interfaces
          </span>
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          Frontend Developer with 2+ years delivering responsive web applications
          across international remote teams. I optimize for performance and ship
          on time, every time.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl">
          {/* Stat 1 - Lighthouse Score */}
          <div className="border border-border bg-bg-card rounded-lg p-6 hover:bg-bg-card-hover transition-colors">
            <div className="font-mono text-4xl font-bold text-accent mb-2">90+</div>
            <div className="text-text font-medium mb-1">Lighthouse Score</div>
            <div className="text-text-muted text-sm">Up from 40-50</div>
          </div>

          {/* Stat 2 - Pages Delivered */}
          <div className="border border-border bg-bg-card rounded-lg p-6 hover:bg-bg-card-hover transition-colors">
            <div className="font-mono text-4xl font-bold text-accent mb-2">35+</div>
            <div className="text-text font-medium mb-1">Pages Delivered</div>
            <div className="text-text-muted text-sm">Production ready</div>
          </div>

          {/* Stat 3 - On-Time Rate */}
          <div className="border border-border bg-bg-card rounded-lg p-6 hover:bg-bg-card-hover transition-colors">
            <div className="font-mono text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-text font-medium mb-1">On-Time Rate</div>
            <div className="text-text-muted text-sm">Every project</div>
          </div>
        </div>
      </div>
    </section>
  );
}
