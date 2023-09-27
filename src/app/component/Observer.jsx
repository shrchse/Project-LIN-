"use client"
import React, { useEffect, useRef, useState } from 'react';

function Observer({ children, animationStyle }) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  let className = '';

  switch (animationStyle) {
    case 'fade-in-tb':
      className = isVisible ? '-translate-y-0 opacity-100 duration-[1s] delay-[0.4s] opacity-100' : '-translate-y-10 opacity-0';
      break;
    case 'fade-in-tb-d-2':
      className = isVisible ? '-translate-y-0 opacity-100 duration-[1s] delay-[1s] opacity-100' : '-translate-y-10 opacity-0';
      break;
    case 'fade-in-tb-d-3':
      className = isVisible ? '-translate-y-0 opacity-100 duration-[1s] delay-[1.6s] opacity-100' : '-translate-y-10 opacity-0';
      break;

    default:
      className = '';
  }

  return <div ref={targetRef} className={className}>{children}</div>;
}

export default Observer;
