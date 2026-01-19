export default function Skill({ children, className }) {
  return (
    <span className={`px-4 py-2 rounded-full font-mono text-xs hover:opacity-80 transition-opacity duration-200 cursor-default ${className}`}>
      {children}
    </span>
  );
}
