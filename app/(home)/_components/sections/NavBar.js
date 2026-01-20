import Link from "next/link";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-6 max-w-[1400px] mx-auto">
        {/* Logo with pulsing dot */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono font-bold text-white">johnrovan.com</span>
        </div>

        {/* Navigation links - hidden on mobile */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="#about"
              className="font-mono text-xs uppercase tracking-widest text-white hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="font-mono text-xs uppercase tracking-widest text-white hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest text-white hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
