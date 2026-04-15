import React, { useEffect } from 'react';
import gsap from 'gsap';
import Avatar from './Avatar';

const Hero = () => {
  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      // Move background subtly
      gsap.to('.parallax-bg', {
        x: xPos * 20,
        y: yPos * 20,
        duration: 2,
        ease: 'power2.out'
      });

      // Move foreground subtly in opposite direction
      gsap.to('.parallax-fg', {
        x: xPos * -25,
        y: yPos * -25,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050814] via-[#0a0f1c] to-[#02040a] -z-10 parallax-bg scale-110"></div>

      <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center justify-between h-full pt-16 pb-4 lg:pt-20 lg:pb-0">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pr-10 z-10 parallax-fg">
          <div className="reveal-initial text-center lg:text-left">
            <span className="text-sky-400/90 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-3 lg:mb-4 block">
              Welcome
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold font-poppins text-white leading-[1.1] tracking-tight">
              Hello, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                Om Gangwar
              </span>
            </h1>
          </div>
          
          <div className="reveal-initial w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full my-5 lg:my-8 opacity-80 mx-auto lg:mx-0"></div>
          
          <p className="reveal-initial text-lg sm:text-xl md:text-2xl text-slate-400 font-light max-w-lg leading-relaxed text-center lg:text-left mb-2 lg:mb-0">
            Full Stack Developer <br className="hidden md:block lg:hidden"/>
            <span className="text-slate-600 font-bold mx-2 hidden lg:inline">/</span> 
            AI Developer
          </p>

          <div className="reveal-initial pt-6 lg:pt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center lg:items-start">
            <a href="#work" className="px-8 py-3.5 bg-white text-black rounded-full font-medium tracking-wide hover:bg-slate-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95 w-full sm:w-auto text-center">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-transparent border border-slate-700 text-slate-300 rounded-full font-medium tracking-wide hover:border-slate-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Avatar */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 reveal-initial parallax-fg">
          <Avatar />
        </div>

      </div>
    </section>
  );
};

export default Hero;
