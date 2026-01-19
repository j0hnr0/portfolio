import SectionHeader from '@/app/(home)/_components/ui/SectionHeader';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-8 flex flex-col justify-center hover:bg-bg-card-hover hover:border-accent/30 hover:-translate-y-1 transition-all duration-[400ms]">
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
              <span className="font-mono text-[0.625rem] px-3 py-1 bg-bg border border-border rounded">
                Dean&apos;s Lister
              </span>
              <span className="font-mono text-[0.625rem] px-3 py-1 bg-bg border border-border rounded">
                ICpEP Region 7 Programming Competition
              </span>
            </div>
          </div>

          {/* Resume CTA Card */}
          <div className="bg-gradient-to-br from-accent-dim to-transparent border border-border rounded-2xl p-8 flex flex-col justify-center items-center hover:border-accent/30 hover:-translate-y-1 transition-all duration-[400ms]">
            <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
              Download Resume
            </h3>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent text-bg font-medium px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
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
          </div>
        </div>
      </div>
    </section>
  );
}
