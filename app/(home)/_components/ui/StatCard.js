export default function StatCard({ score, title, desc }) {
  return (
    <div className="border border-border bg-bg-card rounded-lg p-6 hover:bg-bg-card-hover transition-colors">
      <div className="font-mono text-4xl font-bold text-accent mb-2">
        {score}
      </div>
      <div className="text-text font-medium mb-1">{title}</div>
      <div className="text-text-muted text-sm">{desc}</div>
    </div>
  );
}
