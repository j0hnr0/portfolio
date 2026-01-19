export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 flex items-center">
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
          Frontend Developer with 2+ years across international remote teams in Dubai, LA, and the Philippines. 
          I optimize Core Web Vitals and Lighthouse scores—and ship on time, every time.
        </p>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 lg:gap-16">
          {/* Stat 1 - Lighthouse Score */}
          <div className="group cursor-default">
            <div className="font-mono text-4xl font-bold text-accent leading-none group-hover:text-accent/80 transition-colors duration-300">90+</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-2 group-hover:text-text-secondary transition-colors duration-300">Lighthouse Score</div>
          </div>

          {/* Stat 2 - Pages Delivered */}
          <div className="group cursor-default">
            <div className="font-mono text-4xl font-bold text-accent leading-none group-hover:text-accent/80 transition-colors duration-300">35+</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-2 group-hover:text-text-secondary transition-colors duration-300">Projects Delivered</div>
          </div>

          {/* Stat 3 - On-Time Rate */}
          <div className="group cursor-default">
            <div className="font-mono text-4xl font-bold text-accent leading-none group-hover:text-accent/80 transition-colors duration-300">100%</div>
            <div className="text-xs text-text-muted uppercase tracking-wider mt-2 group-hover:text-text-secondary transition-colors duration-300">On-Time Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
