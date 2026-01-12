import Link from "next/link";
import AboutMetricCard from "../ui/AboutMetricCard";
import ExperienceCard from "../ui/ExperienceCard";
import SectionHeader from "../ui/SectionHeader";
import Skill from "../ui/Skill";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="About" />
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 - Large About Card (2x2) */}
          <div className="md:col-span-2 md:row-span-2 bg-bg-card border border-border rounded-2xl p-8 hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-[400ms]">
            <div className="flex flex-col h-full">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-bg border-2 border-accent flex items-center justify-center mb-6">
                <span className="font-mono text-2xl font-bold text-accent">
                  JR
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4">
                I turn designs into fast, accessible, production-ready code.
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Frontend developer with experience building for global clients
                across Dubai, LA, and the Philippines. I obsess over performance
                metrics—improving Lighthouse scores from 40-50 to 90+—while
                maintaining pixel-perfect implementations and 100% on-time
                delivery.
              </p>
            </div>
          </div>

          {/* Card 2 - Lighthouse Metric (Small) */}
          <AboutMetricCard
            score="90+"
            title="Lighthouse Score"
            desc="Up from 40-50"
          />

          {/* Card 3 - Pages Metric (Small) */}
          <AboutMetricCard score="35+" title="Web Pages" desc="Delivered" />

          {/* Card 4 - Tech Stack (Wide 2x1) */}
          <div className="md:col-span-2 bg-bg-card border border-border rounded-2xl p-8 hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-[400ms]">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-6">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {/* Primary skills */}
              <Skill className="bg-accent-dim border border-accent text-accent">
                React
              </Skill>
              <Skill className="bg-accent-dim border border-accent text-accent">
                Next.js
              </Skill>
              <Skill className="bg-accent-dim border border-accent text-accent">
                JavaScript
              </Skill>

              {/* Secondary skills */}
              <Skill className="bg-bg border border-border text-text-secondary">
                Tailwind CSS
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                HTML/CSS
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                PostgreSQL
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                Prisma
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                Supabase
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                PHP
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                Laravel
              </Skill>
              <Skill className="bg-bg border border-border text-text-secondary">
                Git
              </Skill>
            </div>
          </div>

          {/* Card 5 - Experience (Tall 1x2) */}
          <div className="md:row-span-2 bg-bg-card border border-border rounded-2xl p-8 hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-[400ms]">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-6">
              Experience
            </h4>
            <div className="space-y-6">
              {/* Position 1 */}
              <ExperienceCard title="Frontend Developer" company="Mutant Media FZC" location="Dubai, UAE (Remote)" date="Mar 2025 — Dec 2025" />

              {/* Position 2 */}
              <ExperienceCard title="Frontend Developer" company="Chat Nexus" location=" Los Angeles, CA (Remote)" date="Dec 2024 — Jan 2025" />

              {/* Position 3 */}
              <ExperienceCard title="Frontend Developer" company="Teknosprint Solutions" location="Cebu, Philippines" date="Nov 2023 — Nov 2024" />
            </div>
          </div>

          {/* Card 6 - CTA Card (Small) */}
          <div className="bg-linear-to-br from-accent-dim to-bg-card border border-accent/20 rounded-2xl p-8 hover:border-accent/40 hover:-translate-y-1 transition-all duration-[400ms]">
            <div className="flex flex-col h-full justify-between">
              <h4 className="text-lg font-semibold mb-4">
                Let&apos;s work together
              </h4>
              <Link
                href="#contact"
                className="bg-accent text-bg px-6 py-3 rounded-lg font-mono text-sm font-bold hover:bg-accent/90 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                Get in touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
