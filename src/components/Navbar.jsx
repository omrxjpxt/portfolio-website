import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full px-8 py-6 z-50 flex justify-between items-center reveal-initial">
      <div className="text-xl font-bold font-poppins tracking-tighter cursor-pointer">
        PORTFOLIO<span className="text-sky-400">.</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
        <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300 relative group">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#work" className="text-slate-300 hover:text-white transition-colors duration-300 relative group">
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300 relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
