'use client';

import { useRef, useCallback } from 'react';

export default function MouseGlowCard({ children, className = '', contentClassName = '' }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden ${className}`}
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[inherit]"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--color-accent-dim), transparent 40%)',
        }}
      />
      {/* Card content */}
      <div className={`relative z-10 h-full ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
}
