export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-32 pb-16 px-6 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Label */}
        <p className="font-mono text-accent uppercase tracking-widest text-sm mb-6">
          Frontend Developer — Cebu, Philippines
        </p>

        {/* Hero Title */}
        <h1
          className="font-bold mb-8"
          style={{
            fontSize: "clamp(2.5rem, 10vw, 7rem)",
            lineHeight: "1.0",
            letterSpacing: "-0.04em",
            fontWeight: "800",
          }}
        >
          <span className="block">Building fast,</span>
          <span className="block">
            <span className="text-accent">pixel-perfect</span> interfaces
          </span>
        </h1>

        {/* Description */}
        <p className="text-text-secondary text-lg max-w-[520px] mb-12 leading-relaxed">
          Frontend Developer with 2+ years delivering responsive web
          applications across international remote teams. I optimize for
          performance and ship on time, every time.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-16">
          {/* Stat 1 - Lighthouse Score */}
          <div>
            <div className="font-mono text-4xl font-bold text-accent leading-none">90+</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-2">Lighthouse Score</div>
          </div>

          {/* Stat 2 - Pages Delivered */}
          <div>
            <div className="font-mono text-4xl font-bold text-accent leading-none">35+</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-2">Pages Delivered</div>
          </div>

          {/* Stat 3 - On-Time Rate */}
          <div>
            <div className="font-mono text-4xl font-bold text-accent leading-none">100%</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-2">On-Time Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
