import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { personalInfo, navLinks } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNav = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080810] border-t border-[rgba(139,92,246,0.1)]">
      <div className="max-w-[1180px] mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-black text-white mb-1">
              PREETI
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 ml-0.5 mb-2 align-bottom" />
            </div>
            <p className="text-purple-400 text-sm font-medium mb-3">Full Stack Developer</p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-[220px]">
              Building responsive web applications and practical software solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className="text-slate-500 hover:text-purple-400 text-sm text-left transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </h4>
            <div className="space-y-2.5 mb-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-purple-400 text-sm transition-colors"
              >
                <FiMail className="w-4 h-4 shrink-0" />
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <p className="text-slate-600 text-xs">
            © {year} Preeti Joshi. All rights reserved.
          </p>
          <button
            onClick={handleTop}
            className="flex items-center gap-2 text-slate-600 hover:text-purple-400 text-xs transition-colors group"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/5 border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all">
              <FiArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
