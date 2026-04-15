import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Avatar = () => {
  const containerRef = useRef(null);
  const avatarRef = useRef(null);
  
  // Refs for tracking irises
  const leftIrisRef = useRef(null);
  const rightIrisRef = useRef(null);

  // Float animation
  useEffect(() => {
    gsap.to(avatarRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  // 3D Parallax & Iris Tracking
  useEffect(() => {
    // Current and Target positions for lerp
    const coords = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPos = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1

      // Update targets
      coords.targetX = xPos;
      coords.targetY = yPos;

      // Tilt and shift the entire avatar container (Keep GSAP for the large motion)
      gsap.to(containerRef.current, {
        rotationY: xPos * 20, 
        rotationX: -yPos * 15,
        x: xPos * 15, 
        y: yPos * 15,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    // Smooth lerp loop for irises
    const ticker = () => {
      // Lerp logic: current += (target - current) * easing
      coords.x += (coords.targetX - coords.x) * 0.1;
      coords.y += (coords.targetY - coords.y) * 0.1;

      // Apply to irises
      if (leftIrisRef.current && rightIrisRef.current) {
        const xMove = coords.x * 4;
        const yMove = coords.y * 3;
        
        leftIrisRef.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
        rightIrisRef.current.style.transform = `translate(${xMove}px, ${yMove}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div 
       className="relative w-[220px] h-[220px] sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] mx-auto select-none pointer-events-none" 
       style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div ref={containerRef} className="relative z-10 w-full h-full">
        <div ref={avatarRef} className="relative w-full h-full flex justify-center items-center">
          <div className="avatar-wrapper">
            <img src="/avatar.png" className="avatar" alt="3D Avatar" />

            {/* Left Eye */}
            <div className="eye eye-left">
              <div className="iris" ref={leftIrisRef}>
                 <div className="pupil" />
              </div>
              <div className="eye-highlight" />
              <div className="eyelid" />
            </div>

            {/* Right Eye */}
            <div className="eye eye-right">
              <div className="iris" ref={rightIrisRef}>
                 <div className="pupil" />
              </div>
              <div className="eye-highlight" />
              <div className="eyelid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
