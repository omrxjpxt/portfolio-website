import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SmartSpend = () => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Content
      gsap.fromTo('.smart-content > *', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.smart-content',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );

      // Reveal Visuals (FIX: Using fromTo and clearer trigger)
      gsap.fromTo('.smart-visual .mockup-card', 
        { x: 50, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'expo.out',
        }
      );

      // Continuous floating parallax effect
      gsap.to('.mockup-card', {
        y: 'random(-10, 10)',
        x: 'random(-5, 5)',
        duration: 'random(4, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 md:py-40 px-6 bg-[#050814] overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[160px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 smart-content space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
                Next-Gen Fintech
              </span>
              <h2 className="text-5xl md:text-7xl font-bold font-poppins text-white leading-tight">
                SmartSpend <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-slate-300 font-poppins italic">
                "AI-powered personal finance system for students"
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed font-light max-w-xl">
                A smart budgeting system that tracks expenses, predicts monthly savings, 
                and provides AI-driven financial guidance in real time.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
              {[
                "AI-powered financial advisor for students",
                "Real-time expense tracking with categories",
                "Advanced savings prediction & simulations",
                "Interactive 'Budget Champion' badge system"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <CheckCircle2 className="text-blue-500 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.3)]" size={20} />
                  <span className="text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'JavaScript', 'AI Logic', 'Local Storage'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-5 py-2 rounded-xl text-sm font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300 backdrop-blur-md transition-colors hover:border-blue-400/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 pt-6">
              <a 
                href="https://github.com/omrxjpxt/smartspend-ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white rounded-2xl font-bold transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:scale-[1.05] active:scale-95"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Side: Stacked Visuals */}
          <div className="w-full lg:w-1/2 smart-visual relative min-h-[500px] lg:h-[700px] order-1 lg:order-2 flex items-center justify-center">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>

            {/* Main Interactive UI Mockup */}
            <div className="mockup-card relative z-20 w-[90%] sm:w-[75%] lg:w-[85%] transition-all duration-700 hover:z-50 group cursor-pointer">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] shadow-blue-500/10 group-hover:scale-[1.02] group-hover:border-blue-400/50 transition-all duration-500">
                {/* Real UI Demo Video */}
                <div className="max-h-[600px] overflow-hidden bg-slate-900/50">
                  <video 
                    src="/projects/smartspend/smartspend_demo.mov" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-auto object-top"
                  />
                </div>
                
                {/* Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              {/* Floating Chat Bubble Accent */}
              <div className="absolute -right-6 top-1/4 z-30 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/50 animate-bounce cursor-default">
                 <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                 </svg>
              </div>
            </div>

            {/* Decorative Card 1 (Behind) */}
            <div className="mockup-card absolute z-10 w-[60%] -left-4 top-1/2 -translate-y-1/2 opacity-30 blur-[2px] transition-all hover:opacity-100 hover:z-50 hover:blur-0 pointer-events-none lg:pointer-events-auto">
               <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur-xl">
                  <div className="h-4 w-1/2 bg-blue-500/20 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-slate-500/20 rounded"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartSpend;
