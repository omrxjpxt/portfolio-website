import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cpu, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in text
      gsap.from(textRef.current.children, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Fade in cards
      gsap.fromTo(cardsRef.current.children,
        {
          y: 20,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-6 overflow-hidden bg-[#050814]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Column: Text */}
          <div ref={textRef} className="w-full lg:w-3/5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sky-400 font-medium tracking-[0.2em] uppercase text-sm">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold font-poppins text-white leading-tight">
                Crafting the future with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                  Code & Intelligence
                </span>
              </h3>
            </div>

            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              I'm Om Gangwar, a Full Stack Developer and AI-focused builder creating modern websites, automation systems, and intelligent web applications.

              I specialize in responsive web experiences, real-time AI tools, portfolio websites, business websites, and custom automation workflows using React, Next.js, Python, OpenCV, and modern web technologies.

              Alongside my B.Tech in CSE (AI & DS), I work with clients to turn ideas into clean, fast, and professional digital products.

              My focus is simple: build projects that look premium, solve real problems, and create actual value.

            </p>
          </div>

          {/* Right Column: Stats/Cards */}
          <div ref={cardsRef} className="w-full lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

            {/* Projects Card */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-sky-500/30 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                  <Rocket size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Projects Built</p>
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-sky-500/30 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">AI + Full Stack</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Primary Focus</p>
                </div>
              </div>
            </div>

            {/* Learning Card */}
            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-sky-500/30 transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Advanced Dev</p>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">Currently Learning</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
