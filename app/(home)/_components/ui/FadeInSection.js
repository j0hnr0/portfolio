'use client';

import { useRef, useState, useEffect } from 'react';

const directionClasses = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  none: '',
};

// Page loader duration (2000ms progress + 500ms fade)
const LOADER_DURATION = 2500;

export default function FadeInSection({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [actualDelay, setActualDelay] = useState(0);
  const mountTime = useRef(null);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || mountTime.current === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timeSinceMount = Date.now() - mountTime.current;

          // If within initial load period, calculate remaining delay
          // Otherwise, show immediately (user scrolled down later)
          if (timeSinceMount < LOADER_DURATION) {
            const remainingLoaderTime = LOADER_DURATION - timeSinceMount;
            setActualDelay(remainingLoaderTime + delay);
          } else {
            setActualDelay(0);
          }

          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '-50px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  const initialTransform = directionClasses[direction] || directionClasses.up;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${initialTransform}`
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${actualDelay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
