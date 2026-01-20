'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timeout = setTimeout(() => setIsLoading(false), 0);
      return () => clearTimeout(timeout);
    }

    // Wait for animation to complete (2s) then start fade out
    const hideTimeout = setTimeout(() => {
      setIsHiding(true);
    }, 2000);

    // Remove loader after fade out (500ms)
    const removeTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ${
        isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <span className="font-mono text-sm text-accent tracking-[0.2em]">
        INITIALIZING
      </span>
      <div className="w-[200px] h-0.5 bg-border relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-accent animate-loader-progress"
        />
      </div>

      <style jsx>{`
        @keyframes loaderProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-loader-progress {
          animation: loaderProgress 2s ease forwards;
        }
      `}</style>
    </div>
  );
}
