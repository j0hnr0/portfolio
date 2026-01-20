'use client';

import { useEffect, useRef, useState } from 'react';

// Page loader duration (2000ms progress + 500ms fade)
const LOADER_DURATION = 2500;

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 1500,
  delay = 0,
  threshold = 0.5,
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const mountTime = useRef(null);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated || mountTime.current === null) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const timeout = setTimeout(() => {
        setCount(end);
        setHasAnimated(true);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const startAnimation = () => {
      setHasAnimated(true);

      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Linear progress for smooth, consistent counting
        const currentCount = Math.round(progress * end);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          observer.unobserve(element);

          const timeSinceMount = Date.now() - mountTime.current;

          // If within initial load period, wait for loader to finish + delay
          // Otherwise, start immediately (user scrolled down later)
          if (timeSinceMount < LOADER_DURATION) {
            const remainingLoaderTime = LOADER_DURATION - timeSinceMount;
            setTimeout(startAnimation, remainingLoaderTime + delay);
          } else {
            if (delay > 0) {
              setTimeout(startAnimation, delay);
            } else {
              startAnimation();
            }
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, delay, threshold, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
