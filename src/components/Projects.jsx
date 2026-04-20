import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

/* ───────────────────────── Project Data ───────────────────────── */
/* ── Theme presets for per-project colouring ── */
const themes = {
  sky: {
    badgeBg: 'bg-sky-500/10',
    badgeText: 'text-sky-400',
    badgeBorder: 'border-sky-500/20',
    ribbon: 'from-sky-500 to-blue-600',
    ribbonShadow: 'shadow-sky-500/20',
    cardBorder: 'border-sky-500/20',
    cardGlow: 'shadow-[0_0_40px_rgba(56,189,248,0.04)]',
    hoverGlow: 'shadow-[0_20px_60px_rgba(56,189,248,0.06)]',
    mediaGlowFrom: 'from-sky-500/20',
    mediaGlowTo: 'to-blue-600/20',
    techText: 'text-sky-300',
  },
  amber: {
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-400',
    badgeBorder: 'border-amber-500/20',
    ribbon: 'from-amber-500 to-orange-600',
    ribbonShadow: 'shadow-amber-500/20',
    cardBorder: 'border-amber-500/20',
    cardGlow: 'shadow-[0_0_40px_rgba(245,158,11,0.06)]',
    hoverGlow: 'shadow-[0_20px_60px_rgba(245,158,11,0.08)]',
    mediaGlowFrom: 'from-amber-500/20',
    mediaGlowTo: 'to-orange-600/20',
    techText: 'text-amber-300',
  },
};

const projects = [
  {
    id: 'luxora',
    title: 'Luxora Collectibles',
    description:
      'A premium product-catalog website with direct WhatsApp ordering, built for a real client to simplify local commerce.',
    stack: ['React', 'TailwindCSS'],
    badge: 'Client Work',
    featured: true,
    category: 'client',
    theme: 'sky',
    github: 'https://github.com/omrxjpxt/Luxora-Collectibles-',
    live: 'https://luxora-collectibles.vercel.app/',
    media: { type: 'image', src: '/projects/luxora.png' },
  },
  {
    id: 'anvadhya-weather',
    title: 'Weather Web App',
    description:
      'A premium frontend weather application with live forecasts, geolocation search, dynamic weather-based themes, and smooth animations. Built for a client using React, Tailwind CSS, Framer Motion, and Open-Meteo API.',
    stack: ['React', 'TailwindCSS', 'Framer Motion', 'Axios', 'Open-Meteo API'],
    badge: 'Client Work',
    featured: true,
    category: 'client',
    theme: 'amber',
    github: 'https://github.com/omrxjpxt/anvadhya-weather',
    live: 'https://weather-check-webapp-om.vercel.app/',
    media: { type: 'image', src: '/projects/anvadhya-weather.png' },
  },
  {
    id: 'smartspend',
    title: 'SmartSpend AI',
    description:
      'An AI-powered personal-finance system that tracks expenses, predicts savings, and provides real-time financial guidance.',
    stack: ['React', 'JavaScript', 'AI Logic', 'Local Storage'],
    badge: 'AI Project',
    featured: false,
    category: 'experiment',
    theme: 'sky',
    github: 'https://github.com/omrxjpxt/smartspend-ai',
    media: { type: 'video', src: '/projects/smart_spend_new.mov' },
  },
  {
    id: 'facetracker',
    title: 'Face Particle Tracker',
    description:
      'A real-time face & hand tracking system using MediaPipe and OpenCV. It renders faces with particles and allows interactive distortion via hand gestures.',
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    badge: 'Computer Vision',
    featured: false,
    category: 'experiment',
    theme: 'sky',
    github: 'https://github.com/omrxjpxt/face-particle-tracker',
    media: { type: 'video', src: '/projects/fpt-video.mp4' },
  },
];

/* ───────────────────────── Filter Tabs ─────────────────────────── */
const filters = [
  { key: 'all', label: 'All' },
  { key: 'client', label: 'Client Work' },
  { key: 'experiment', label: 'Experiments' },
];

/* ───────────────────────── Project Card ─────────────────────────── */
const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;
  const t = themes[project.theme] || themes.sky;

  return (
    <div
      className={`
        group relative w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center
        p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem]
        border bg-white/[0.02] backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:bg-white/[0.04]
        ${isFeatured
          ? `${t.cardBorder} ${t.cardGlow} hover:${t.hoverGlow}`
          : 'border-white/5 hover:border-white/10'}
      `}
    >
      {/* Featured ribbon */}
      {isFeatured && (
        <div className="absolute -top-px left-8 sm:left-12">
          <div className={`px-4 py-1 bg-gradient-to-r ${t.ribbon} rounded-b-lg text-[11px] font-semibold uppercase tracking-wider text-white shadow-lg ${t.ribbonShadow}`}>
            Featured
          </div>
        </div>
      )}

      {/* ── Left: Content ── */}
      <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
        {/* Badge */}
        <span
          className={`
            inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border
            ${project.category === 'client'
              ? `${t.badgeBg} ${t.badgeText} ${t.badgeBorder}`
              : 'bg-white/5 text-slate-400 border-white/10'}
          `}
        >
          {project.badge}
        </span>

        {/* Title */}
        <h3
          className={`font-poppins font-bold text-white leading-tight ${isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
            }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-xl">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 ${t.techText} backdrop-blur-sm`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 bg-white text-black rounded-full font-medium text-sm transition-all duration-300 hover:bg-slate-200 hover:scale-[1.03] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 bg-transparent border border-white/10 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:scale-[1.03] active:scale-95"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* ── Right: Media ── */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="relative group/media">
          {/* Hover glow */}
          <div className={`absolute -inset-1 bg-gradient-to-r ${t.mediaGlowFrom} ${t.mediaGlowTo} rounded-[2rem] blur-2xl opacity-0 group-hover/media:opacity-100 transition-opacity duration-700`} />

          <div className="relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
            {project.media.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              >
                <source src={project.media.src} type="video/mp4" />
                <source src={project.media.src} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.media.src}
                alt={project.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            )}

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────── Main Section ──────────────────────────── */
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleFilterChange = (key) => {
    if (key === activeFilter) return;
    // fade out → swap → fade in
    setVisible(false);
    setTimeout(() => {
      setActiveFilter(key);
      setVisible(true);
    }, 250);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-6 bg-[#03050a] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/2" />

      <div className="container mx-auto max-w-6xl">
        {/* ── Header ── */}
        <div className="mb-12">
          <span className="text-sky-400 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white">
            Projects <span className="text-slate-500">I've Built</span>
          </h2>
        </div>

        {/* ── Filter Bar ── */}
        <div className="mb-14 flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`
                  min-w-fit px-4 py-2 text-xs rounded-full font-medium tracking-wide
                  md:px-6 md:py-2.5 md:text-sm
                  transition-all duration-300 cursor-pointer
                  ${isActive
                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'}
                `}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* ── Project Cards ── */}
        <div
          className="flex flex-col gap-12 md:gap-16 min-h-[1600px] md:min-h-[1200px]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
