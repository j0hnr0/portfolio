export default function Skill({ children, className }) {
  return (
    <span className={`px-4 py-2 rounded-full font-mono text-xs ${className}`}>
      {children}
    </span>
  );
}
