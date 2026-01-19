'use client';

import { useEffect, useRef, useState } from 'react';

export default function TextReveal({
  children,
  delay = 0,
  className = '',
  as: Component = 'span',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timeout = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Component ref={ref} className={`overflow-hidden block ${className}`}>
      <span
        className={`block transition-transform duration-700 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </span>
    </Component>
  );
}
