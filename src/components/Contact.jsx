import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, Instagram, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Content
      gsap.fromTo('.contact-content > *', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.contact-content',
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

      // Reveal Cards
      gsap.fromTo('.contact-card', 
        { y: 50, opacity: 0, scale: 0.9 },
        {
          scrollTrigger: {
            trigger: '.contact-cards-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'expo.out',
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactLinks = [
    {
      title: "LinkedIn",
      text: "Connect professionally",
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/om-gangwar-58315a271/",
      buttonLabel: "Visit Profile",
      color: "blue"
    },
    {
      title: "Email",
      text: "gangwarom973@gmail.com",
      icon: <Mail size={24} />,
      link: "mailto:gangwarom973@gmail.com",
      buttonLabel: "Send Email",
      color: "sky"
    },
    {
      title: "Instagram",
      text: "Behind the scenes",
      icon: <Instagram size={24} />,
      link: "https://www.instagram.com/om.gangwarr/",
      buttonLabel: "View Profile",
      color: "indigo"
    }
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 md:py-40 px-6 bg-[#050814] overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-[160px] -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 contact-content space-y-8">
            <div className="space-y-4">
              <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-2 block animate-pulse">
                GET IN TOUCH
              </span>
              <h2 className="text-5xl md:text-7xl font-bold font-poppins text-white leading-tight">
                Let's Build <br />
                Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-500">Powerful</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light max-w-lg">
                Have an idea, project, or opportunity? I’m always open to collaborating and creating something meaningful.
              </p>
            </div>
            
            {/* Branding Accent */}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
          </div>

          {/* Right Side: Contact Cards */}
          <div className="w-full lg:w-1/2 contact-cards-container space-y-6">
            {contactLinks.map((contact, i) => (
              <a 
                key={i}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card block group"
              >
                <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_10px_40px_rgba(37,99,235,0.15)] group-hover:-translate-y-2 flex items-center gap-6 overflow-hidden">
                  
                  {/* Card Glow */}
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Icon Container */}
                  <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    {contact.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-white mb-1">{contact.title}</h4>
                    <p className="text-slate-400 text-sm font-medium">{contact.text}</p>
                  </div>

                  {/* Arrow Action */}
                  <div className="hidden sm:flex items-center gap-2 text-blue-400 font-bold text-sm tracking-tight group-hover:translate-x-1 transition-transform">
                    <span>{contact.buttonLabel}</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
