export default function ExperienceCard({ title, company, location, date }) {
  return (
    <div className="border-l-2 border-text-muted pl-3 md:pl-4 py-2 -my-2 rounded-r hover:border-accent hover:bg-bg-card-hover/50 transition-all duration-300">
      <h5 className="font-medium text-text mb-1">{title}</h5>
      <p className="text-sm text-accent mb-1">{company}</p>
      <p className="text-xs text-text-muted">{location}</p>
      <p className="font-mono text-xs text-text-muted mt-1">{date}</p>
    </div>
  );
}
