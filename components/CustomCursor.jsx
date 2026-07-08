'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    // Move dot instantly
    const onMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    // Ring lags behind smoothly
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      animId = requestAnimationFrame(animate);
    };

    // Hover scale effects
    const grow = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(3)';
      dot.style.backgroundColor = 'rgba(200,240,78,0.4)';
      ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
      ring.style.borderColor = '#c8f04e';
    };

    const shrink = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      dot.style.backgroundColor = '#c8f04e';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor = 'rgba(200,240,78,0.6)';
    };

    document.addEventListener('mousemove', onMouseMove);
    animId = requestAnimationFrame(animate);

    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    };

    // Run once + re-run after route changes
    addHover();
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Small lime dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          backgroundColor: '#c8f04e',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease, background-color 0.2s ease',
        }}
      />

      {/* Big ring follower */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '44px',
          height: '44px',
          border: '1.5px solid rgba(200,240,78,0.6)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          top: 0,
          left: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  );
}
