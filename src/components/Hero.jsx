import React, { useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import Avatar from './Avatar';

/* ─── Resume data ─────────────────────────────────────────── */
const RESUMES = [
  {
    id: 'fsd',
    label: 'Full Stack',
    subtitle: 'React · Node.js · Python · Cloud',
    description: 'Best suited for web and software development roles',
    icon: '🖥️',
    color: 'sky',
    href: '/OM Resume FSD.pdf',
    downloadName: 'OM_Resume_FullStack.pdf',
  },
  {
    id: 'da',
    label: 'Data Analytics',
    subtitle: 'SQL · Power BI · ML · Python',
    description: 'Best suited for data analysis and ML roles',
    icon: '📊',
    color: 'violet',
    href: '/OM Resume DA.pdf',
    downloadName: 'OM_Resume_DataAnalytics.pdf',
  },
];

/* ─── Color tokens ───────────────────────────────────────── */
const COLOR = {
  sky: {
    /* gradient border wrapper: outer ring shifts on hover */
    ring:     'from-sky-500/40 via-sky-400/20 to-transparent',
    ringHover:'group-hover:from-sky-400/70 group-hover:via-sky-500/30',
    card:     'bg-gradient-to-br from-sky-950/60 to-[#0d1325]',
    iconWrap: 'bg-sky-500/15 ring-1 ring-sky-500/30',
    iconText: 'text-sky-300 text-2xl',
    label:    'text-sky-300',
    tag:      'bg-sky-500/10 text-sky-400/80 border-sky-500/20',
    divider:  'from-transparent via-sky-500/20 to-transparent',
    preview:  'border border-sky-500/40 text-sky-300 hover:bg-sky-500/15 hover:border-sky-400 hover:text-sky-200',
    download: 'bg-gradient-to-r from-sky-500 to-cyan-400 text-white hover:from-sky-400 hover:to-cyan-300 shadow-[0_4px_24px_rgba(56,189,248,0.35)] hover:shadow-[0_4px_32px_rgba(56,189,248,0.55)]',
  },
  violet: {
    ring:     'from-violet-500/40 via-violet-400/20 to-transparent',
    ringHover:'group-hover:from-violet-400/70 group-hover:via-violet-500/30',
    card:     'bg-gradient-to-br from-violet-950/60 to-[#0d1325]',
    iconWrap: 'bg-violet-500/15 ring-1 ring-violet-500/30',
    iconText: 'text-violet-300 text-2xl',
    label:    'text-violet-300',
    tag:      'bg-violet-500/10 text-violet-400/80 border-violet-500/20',
    divider:  'from-transparent via-violet-500/20 to-transparent',
    preview:  'border border-violet-500/40 text-violet-300 hover:bg-violet-500/15 hover:border-violet-400 hover:text-violet-200',
    download: 'bg-gradient-to-r from-violet-500 to-purple-400 text-white hover:from-violet-400 hover:to-purple-300 shadow-[0_4px_24px_rgba(167,139,250,0.35)] hover:shadow-[0_4px_32px_rgba(167,139,250,0.55)]',
  },
};

/* ─── Resume Modal ───────────────────────────────────────── */
const ResumeModal = ({ onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(16px)', backgroundColor: 'rgba(3,6,16,0.80)' }}
      onClick={onClose}
    >
      {/* ── Ambient glow behind modal ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(56,189,248,0.07) 0%, rgba(139,92,246,0.06) 55%, transparent 75%)',
          pointerEvents: 'none',
          animation: 'glowPulse 4s ease-in-out infinite alternate',
        }}
      />

      {/* ── Modal shell ── */}
      <div
        className="relative w-full max-w-md"
        style={{ animation: 'modalIn 0.3s cubic-bezier(0.34,1.48,0.64,1) both' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* thin gradient border ring */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: -1, borderRadius: '1.25rem',
            background: 'linear-gradient(135deg, rgba(56,189,248,0.4), rgba(139,92,246,0.3), rgba(56,189,248,0.1))',
            zIndex: -1,
          }}
        />

        <div className="rounded-[1.2rem] bg-[#090e1f] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

          {/* ── Header ── */}
          <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(148,163,184,0.08)' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                {/* eyebrow */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-sky-400/70 mb-2">
                  <span aria-hidden="true" style={{ fontSize: 8 }}>●</span> Portfolio
                </span>
                <h2 className="text-white font-bold text-xl tracking-tight leading-tight">
                  Choose a Resume
                </h2>
                <p className="text-slate-500 text-[13px] mt-1 leading-relaxed">
                  Select based on the role you're applying for
                </p>
              </div>

              {/* close */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(148,163,184,0.07)', border: '1px solid rgba(148,163,184,0.12)' }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── Resume cards ── */}
          <div className="flex flex-col gap-4 px-7 py-6">
            {RESUMES.map((r) => {
              const c = COLOR[r.color];
              return (
                <div
                  key={r.id}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-default ${c.card}`}
                  style={{ border: '1px solid rgba(148,163,184,0.10)' }}
                >
                  {/* subtle inner gradient border on hover */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    style={{
                      background:
                        r.color === 'sky'
                          ? 'linear-gradient(135deg, rgba(56,189,248,0.12) 0%, transparent 60%)'
                          : 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, transparent 60%)',
                    }}
                  />

                  {/* Card top row */}
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl ${c.iconWrap}`}
                      style={{ fontSize: 22 }}
                    >
                      {r.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className={`font-bold text-[15px] ${c.label}`}>{r.label} Resume</p>
                      </div>
                      <p className="text-slate-500 text-xs mt-0.5 truncate">{r.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-5">
                    {r.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="mb-5 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${r.color === 'sky' ? 'rgba(56,189,248,0.2)' : 'rgba(139,92,246,0.2)'}, transparent)` }}
                  />

                  {/* Actions — stacked, Download is primary */}
                  <div className="flex flex-col gap-2.5">
                    {/* Download — primary, full width */}
                    <a
                      href={r.href}
                      download={r.downloadName}
                      onClick={() => console.log(`Resume download: ${r.label}`)}
                      className={`flex items-center justify-center gap-2.5 w-full py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] ${c.download}`}
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                        <path d="M7.5 1v9m0 0L4 6.5M7.5 10l3.5-3.5M1.5 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Download PDF
                    </a>

                    {/* Preview — secondary, ghost */}
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => console.log(`Resume preview: ${r.label}`)}
                      className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] ${c.preview}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7 2C3.5 2 1 7 1 7s2.5 5 6 5 6-5 6-5-2.5-5-6-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                        <circle cx="7" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.4"/>
                      </svg>
                      Preview in Browser
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Footer ── */}
          <div className="px-7 pb-6 text-center">
            <p className="text-slate-600 text-[11px] tracking-wide">
              PDFs open in a new tab · Open to full-time &amp; freelance roles
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.90) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
        @keyframes glowPulse {
          from { transform: scale(0.9); opacity: 0.7; }
          to   { transform: scale(1.1); opacity: 1;   }
        }
      `}</style>
    </div>
  );
};

/* ─── Hero ───────────────────────────────────────────────── */
const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume  = useCallback(() => setResumeOpen(true),  []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth  - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      gsap.to('.parallax-bg', { x: xPos * 20,  y: yPos * 20,  duration: 2, ease: 'power2.out' });
      gsap.to('.parallax-fg', { x: xPos * -25, y: yPos * -25, duration: 2, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050814] via-[#0a0f1c] to-[#02040a] -z-10 parallax-bg scale-110" />

        <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse lg:flex-row items-center justify-between h-full pt-16 pb-4 lg:pt-20 lg:pb-0">

          {/* Left Side: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:pr-10 z-10 parallax-fg">
            <div className="reveal-initial text-center lg:text-left">
              <span className="text-sky-400/90 font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-3 lg:mb-4 block">
                Welcome
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold font-poppins text-white leading-[1.1] tracking-tight">
                Hello, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                  Om Gangwar
                </span>
              </h1>
            </div>

            <div className="reveal-initial w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full my-5 lg:my-8 opacity-80 mx-auto lg:mx-0" />

            <p className="reveal-initial text-lg sm:text-xl md:text-2xl text-slate-400 font-light max-w-lg leading-relaxed text-center lg:text-left mb-2 lg:mb-0">
              Full Stack Developer <br className="hidden md:block lg:hidden" />
              <span className="text-slate-600 font-bold mx-2 hidden lg:inline">/</span>
              AI Developer
            </p>

            {/* CTA Buttons — View Work → View Resume → Contact */}
            <div className="reveal-initial pt-6 lg:pt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start">

              {/* 1 ─ Primary: View Work (solid fill) */}
              <a
                href="#work"
                className="px-8 py-3.5 bg-white text-black rounded-full font-semibold tracking-wide hover:bg-slate-100 transition-all duration-300 shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:shadow-[0_0_32px_rgba(255,255,255,0.22)] hover:scale-[1.03] active:scale-95 w-full sm:w-auto text-center"
              >
                View Work
              </a>

              {/* 2 ─ Secondary: Resume (gradient border + hover glow) */}
              <div className="relative group w-full sm:w-auto">

                {/* gradient border ring: 65% at rest → 100% on hover */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-[1.5px] rounded-full opacity-[0.65] group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, #38bdf8 0%, #818cf8 45%, #c084fc 75%, #38bdf8 100%)',
                    backgroundSize: '250% 250%',
                    animation: 'gradientShift 5s linear infinite',
                  }}
                />

                {/* glow bloom: invisible at rest → soft blue halo on hover */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-[5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, rgba(129,140,248,0.10) 55%, transparent 72%)',
                  }}
                />

                {/* button face */}
                <button
                  id="view-resume-btn"
                  onClick={openResume}
                  className="relative px-8 py-3.5 rounded-full font-semibold tracking-wide w-full sm:w-auto text-center flex items-center justify-center gap-2 hover:scale-[1.05] active:scale-[0.97]"
                  style={{
                    background: 'linear-gradient(160deg, #0c1322 0%, #0f1a2e 100%)',
                    color: '#7dd3fc',
                    transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), color 0.2s ease, box-shadow 0.28s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#e0f2fe';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(56,189,248,0.30), 0 0 44px rgba(129,140,248,0.13)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#7dd3fc';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* document icon */}
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    aria-hidden="true"
                    className="opacity-75 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <path d="M2 2h6l3 3v7H2V2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M8 2v3.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M4 7.5h5M4 9.5h5M4 11.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Resume
                  {/* ↗ micro-arrow — translates 2px diagonally on hover */}
                  <svg
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                    aria-hidden="true"
                    className="opacity-[0.55] group-hover:opacity-95 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-[250ms] ease-out"
                  >
                    <path d="M2 8L8 2M8 2H4M8 2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* 3 ─ Tertiary: Contact (ghost, de-emphasized) */}
              <a
                href="#contact"
                className="px-8 py-3.5 bg-transparent border border-slate-800 text-slate-600 rounded-full font-medium tracking-wide hover:border-slate-700 hover:text-slate-400 transition-colors duration-300 active:scale-[0.98] w-full sm:w-auto text-center"
              >
                Contact
              </a>
            </div>

            <style>{`
              @keyframes gradientShift {
                0%   { background-position: 0%   50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0%   50%; }
              }
            `}</style>
          </div>

          {/* Right Side: Avatar */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0 reveal-initial parallax-fg">
            <Avatar />
          </div>

        </div>
      </section>

      {/* Resume Modal — rendered at root level to avoid z-index issues */}
      {resumeOpen && <ResumeModal onClose={closeResume} />}
    </>
  );
};

export default Hero;
