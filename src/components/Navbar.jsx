import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { navLinks, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.92)] backdrop-blur-xl border-b border-[rgba(139,92,246,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-[1180px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="relative group"
            whileHover={{ scale: 1.03 }}
          >
            <span className="text-xl font-black tracking-tight text-white">
              PREETI
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 ml-0.5 mb-2 align-bottom" />
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 bg-[rgba(139,92,246,0.12)] rounded-lg border border-[rgba(139,92,246,0.25)]"
                      transition={{ type: 'spring', duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              )
            })}
          </div>

          {/* Resume Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={personalInfo.resumeUrl}
              download="Preeti_Joshi_Resume.pdf"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <FiDownload className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[rgba(139,92,246,0.1)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[rgba(10,10,15,0.98)] backdrop-blur-xl border-b border-[rgba(139,92,246,0.15)] lg:hidden"
          >
            <div className="max-w-[1180px] mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-white bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.3)]'
                        : 'text-slate-400 hover:text-white hover:bg-[rgba(255,255,255,0.03)]'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                )
              })}
              <div className="pt-2 border-t border-[rgba(139,92,246,0.1)] mt-2">
                <a
                  href={personalInfo.resumeUrl}
                  download="Preeti_Joshi_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <FiDownload className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
