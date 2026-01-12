export default function SectionHeader({ title }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
        // {title}
      </span>
      <div className="flex-1 h-px bg-border ml-8"></div>
    </div>
  );
}
