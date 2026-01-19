'use client';

import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let initialTimeout;

    const checkDesktop = () => {
      const isDesktop = window.innerWidth >= 768 && !('ontouchstart' in window);
      setIsVisible(isDesktop);
      document.body.style.cursor = isDesktop ? 'none' : 'auto';
    };

    // Defer initial check to avoid synchronous setState in effect
    initialTimeout = setTimeout(checkDesktop, 0);
    window.addEventListener('resize', checkDesktop);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      clearTimeout(initialTimeout);
      const timeout = setTimeout(() => setIsVisible(false), 0);
      return () => clearTimeout(timeout);
    }

    const handleMouseMove = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .bento-card, .project-card, input, textarea, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], .bento-card, .project-card, input, textarea, [data-cursor-hover]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      clearTimeout(initialTimeout);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkDesktop);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] w-5 h-5 border-2 border-accent rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out ${
          isHovering ? 'scale-[2] bg-accent-dim' : 'scale-100'
        }`}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] w-1 h-1 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
