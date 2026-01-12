export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between p-6 max-w-350 mx-auto">
        {/* Logo with pulsing dot */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono font-bold text-white">rovan.dev</span>
        </div>

        {/* Navigation links - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-accent transition-colors font-medium"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
