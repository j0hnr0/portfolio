'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timeout = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(timeout);
    }

    const duration = 1500;
    const startTime = performance.now();

    const animateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animateProgress);
      } else {
        setTimeout(() => setIsLoading(false), 300);
      }
    };

    requestAnimationFrame(animateProgress);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <span className="font-mono text-sm text-accent tracking-[0.2em]">
        INITIALIZING
      </span>
      <div className="w-[200px] h-0.5 bg-border relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-accent transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
