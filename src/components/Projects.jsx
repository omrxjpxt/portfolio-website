import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text from left
      gsap.from('.project-content > *', {
        scrollTrigger: {
          trigger: '.project-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Animate video from right
      gsap.from('.project-video', {
        scrollTrigger: {
          trigger: '.project-video',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-6 bg-[#03050a] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-sky-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white">
            Projects <span className="text-slate-500">I've Built</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 project-content space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-poppins">
                Face Particle Tracker
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed font-light max-w-xl">
                A real-time face and hand tracking system using MediaPipe and OpenCV. 
                It renders the face using particles and allows interactive distortion using hand gestures.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {['Python', 'OpenCV', 'MediaPipe'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-sky-300 backdrop-blur-sm shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#" 
                className="group flex items-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-sky-50 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:scale-[1.05] active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a 
                href="https://github.com/omrxjpxt/face-particle-tracking" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/10 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:scale-[1.05] active:scale-95"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Video Media */}
          <div className="w-full lg:w-1/2 project-video order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Video Container */}
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                >
                  <source src="/projects/face-tracker.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay Polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
