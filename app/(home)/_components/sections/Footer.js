export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-text-secondary text-sm hover:text-text transition-colors duration-300 cursor-default">
            © 2025 Rovan Cabucos. Crafted with precision.
          </p>

          {/* Status indicator */}
          <div className="flex items-center gap-2 group cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-text-secondary text-sm group-hover:text-accent transition-colors duration-300">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
