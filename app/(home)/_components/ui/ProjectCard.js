export default function ProjectCard({
  number,
  title,
  description,
  tags,
  link,
  metrics,
  codeLines,
  status,
}) {
  return (
    <article className="group bg-bg-card border border-border rounded-lg overflow-hidden transition-all duration-[400ms] hover:border-accent hover:-translate-y-2">
      {/* Image Area */}
      <div className="aspect-video bg-bg relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-dim to-transparent z-[1]" />

        {/* Project Number */}
        <span className="absolute top-4 left-4 font-mono text-xs text-accent z-[2]">
          {number}
        </span>

        {/* Status Badge */}
        {status && (
          <span className="absolute top-4 left-12 font-mono text-[0.625rem] px-2 py-1 bg-accent/20 text-accent rounded z-[2]">
            {status}
          </span>
        )}

        {/* Code Preview */}
        <div className="absolute inset-8 bg-bg-card rounded-lg flex flex-col p-4 font-mono text-[0.625rem] text-text-muted overflow-hidden">
          {codeLines.map((line, index) => (
            <div key={index} className="flex gap-2 mb-1">
              {line.type === "keyword" && (
                <>
                  <span className="text-accent">{line.keyword}</span>
                  <span>{line.rest}</span>
                </>
              )}
              {line.type === "code" && <span>{line.content}</span>}
              {line.type === "comment" && (
                <span className="text-text-muted">{line.content}</span>
              )}
            </div>
          ))}
        </div>

        {/* External Link Button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-10 h-10 bg-bg border border-border rounded-full flex items-center justify-center text-text opacity-100 translate-y-0 md:opacity-0 md:translate-y-2.5 transition-all duration-300 z-[3] md:group-hover:opacity-100 md:group-hover:translate-y-0 hover:bg-accent hover:border-accent hover:text-bg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="font-mono text-[0.625rem] px-3 py-1 bg-accent-dim text-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-text-secondary text-[0.9375rem] leading-relaxed mb-4">
          {description}
        </p>

        {/* Metrics */}
        <div className="flex gap-6 pt-4 border-t border-border">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-mono text-base text-accent font-bold">
                {metric.value}
              </span>
              <span className="text-xs text-text-muted">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
