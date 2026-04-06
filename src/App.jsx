import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import SmartSpend from './components/SmartSpend'
import Contact from './components/Contact'
import gsap from 'gsap'

function App() {
  useEffect(() => {
    // Reveal animation for load
    gsap.fromTo('.reveal-initial', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-navy-900 overflow-hidden font-inter relative selection:bg-sky-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SmartSpend />
      <Contact />
      {/* Additional sections will be rendered below */}
    </div>
  )
}

export default App
