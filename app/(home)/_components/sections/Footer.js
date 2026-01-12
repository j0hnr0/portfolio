export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            © 2025 Rovan Cabucos. Crafted with precision.
          </p>

          {/* Status indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-text-secondary text-sm">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
