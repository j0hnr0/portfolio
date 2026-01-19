'use client';

import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 1500,
  threshold = 0.5,
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setCount(end);
        setHasAnimated(true);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic for smooth deceleration
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easedProgress * end);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, threshold, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
