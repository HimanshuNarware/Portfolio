import React, { useMemo } from 'react';

export default function MeteorShower() {
  const meteors = useMemo(() => {
    // Generate 35 particles with random offsets
    return Array.from({ length: 35 }).map((_, idx) => {
      // Start them off-screen at random positions
      const left = `${-25 + Math.random() * 100}%`; 
      const top = `${-20 + Math.random() * 10}%`;
      const delay = `${Math.random() * 2.5}s`;
      // Reduce the speed of the falling animation (between 1.8s and 4s)
      const duration = `${1.8 + Math.random() * 2.2}s`;
      return {
        id: idx,
        left,
        top,
        delay,
        duration
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {/* Falling meteors list (no extra display color flashes) */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor"
          style={{
            left: m.left,
            top: m.top,
            animationDelay: m.delay,
            animationDuration: m.duration,
            background: 'linear-gradient(to top, rgba(203, 213, 225, 0.45), transparent)',
            boxShadow: '0 0 6px rgba(203, 213, 225, 0.2)'
          }}
        />
      ))}
    </div>
  );
}
