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
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Small delay for initial load animation
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-[#0a0a0f] transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />
      
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
  )
}

export default App
