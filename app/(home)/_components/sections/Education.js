'use client';

import SectionHeader from '@/app/(home)/_components/ui/SectionHeader';
import FadeInSection from '@/app/(home)/_components/ui/FadeInSection';
import MouseGlowCard from '@/app/(home)/_components/ui/MouseGlowCard';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <FadeInSection>
          <SectionHeader title="Education" />
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Education Card */}
          <FadeInSection delay={0}>
            <MouseGlowCard className="h-full bg-bg-card border border-border rounded-2xl p-6 md:p-8 hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1.5 transition-all duration-300" contentClassName="flex flex-col justify-center">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
                Degree
              </h3>
              <div className="text-lg font-semibold text-text mb-1">
                BS Computer Engineering
              </div>
              <div className="text-[0.9375rem] text-accent mb-2">
                University of Cebu
              </div>
              <div className="font-mono text-xs text-text-muted">
                2018 — 2023
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="font-mono text-[0.625rem] px-3 py-1 bg-bg border border-border rounded hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default">
                  Dean&apos;s Lister
                </span>
                <span className="font-mono text-[0.625rem] px-3 py-1 bg-bg border border-border rounded hover:border-accent/30 hover:text-accent transition-all duration-300 cursor-default">
                  ICpEP Region 7 Programming Competition
                </span>
              </div>
            </MouseGlowCard>
          </FadeInSection>

          {/* Resume CTA Card */}
          <FadeInSection delay={100}>
            <MouseGlowCard className="h-full bg-gradient-to-br from-accent-dim to-transparent border border-border rounded-2xl p-6 md:p-8 hover:border-accent/30 hover:-translate-y-1.5 transition-all duration-300" contentClassName="flex flex-col justify-center items-center">
              <h3 className="text-2xl font-semibold mb-4">
                Download Resume
              </h3>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-accent text-bg font-mono text-sm font-bold px-8 py-4 rounded-lg hover:scale-105 hover:shadow-[0_0_30px_var(--color-accent-glow)] transition-all duration-300"
              >
                Download PDF
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width={16}
                  height={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </MouseGlowCard>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
