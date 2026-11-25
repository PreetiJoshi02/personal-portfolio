import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ParticleField from './components/ParticleField'
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Small delay for initial load animation
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-[#060b18] transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

      {/* ── Layer 0: Animated Mesh Gradient Orbs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
        <div className="mesh-orb mesh-orb-4" />
        <div className="mesh-orb mesh-orb-5" />
      </div>

      {/* ── Layer 1: Technology Grid ── */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true" />

      {/* ── Layer 2: Floating Particles ── */}
      <ParticleField />

      {/* ── Main Content ── */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />

        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="certifications">
            <Certifications />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App
