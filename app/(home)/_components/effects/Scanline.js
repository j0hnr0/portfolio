'use client';

import { useEffect, useState } from 'react';

export default function Scanline() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timeout = setTimeout(() => setIsVisible(!mediaQuery.matches), 0);

    const handleChange = (e) => setIsVisible(!e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      clearTimeout(timeout);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed left-0 w-full h-0.5 z-[9998] pointer-events-none opacity-30"
      style={{
        top: '-2px',
        background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
        animation: 'scanline 8s linear infinite',
      }}
    />
  );
}
