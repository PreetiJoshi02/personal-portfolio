import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

// Floating code snippets for the visual
const codeSnippets = [
  { code: 'const dev = "Preeti";', top: '12%', left: '5%', delay: 0 },
  { code: 'npm run build', top: '25%', right: '8%', delay: 0.5 },
  { code: 'git commit -m "feat"', top: '65%', left: '3%', delay: 1 },
  { code: '{ fullStack: true }', bottom: '20%', right: '5%', delay: 0.8 },
]

const techOrbs = [
  { label: 'Node.js', color: '#68a063', size: 52, top: '18%', right: '14%' },
  { label: 'React', color: '#61dafb', size: 48, top: '52%', right: '6%' },
  { label: 'MongoDB', color: '#4db33d', size: 44, bottom: '25%', right: '20%' },
  { label: 'Express', color: '#ffffff', size: 42, top: '38%', right: '28%' },
  { label: 'JS', color: '#f7df1e', size: 46, top: '72%', right: '10%' },
]

export default function Hero() {
  const handleScroll = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <div className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/3 rounded-full blur-[160px]" />

        {/* Floating code snippets */}
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0.3] }}
            transition={{ duration: 2, delay: snippet.delay + 1, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
            className="absolute hidden xl:block"
            style={{ top: snippet.top, left: snippet.left, right: snippet.right, bottom: snippet.bottom }}
          >
            <div className="glass-card px-3 py-1.5 text-xs text-purple-400/70 font-mono border-purple-500/20">
              {snippet.code}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1180px] mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants} className="mb-4">
              <p className="text-slate-400 text-lg mb-2 font-medium">Hi there, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none mb-3">
                Preeti
                <br />
                <span className="gradient-text">Joshi</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 text-slate-300 text-lg sm:text-xl font-medium">
                <span className="w-8 h-px bg-purple-500" />
                Full Stack Developer
                <span className="text-slate-500">|</span>
                CS Engineer
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => handleScroll('#projects')}
                className="btn-primary"
              >
                View My Projects
              </button>
              <a
                href={personalInfo.resumeUrl}
                download="Preeti_Joshi_Resume.pdf"
                className="btn-secondary"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-secondary"
              >
                <FiMail className="w-4 h-4" />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-purple-500/40 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
                  aria-label="Email"
                >
                  <FiMail className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Main visual container */}
            <div className="relative w-80 h-80">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-purple-500/20 spin-slow"
              />
              <motion.div
                className="absolute inset-6 rounded-full border border-dashed border-blue-500/15"
                style={{ animation: 'spin-slow 15s linear infinite reverse' }}
              />

              {/* Center orb */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 backdrop-blur-sm flex items-center justify-center float-anim">
                <div className="text-center">
                  <div className="text-5xl mb-2">👩‍💻</div>
                  <div className="text-xs text-purple-400 font-medium font-mono">full-stack</div>
                </div>
              </div>

              {/* Orbiting tech labels */}
              {techOrbs.map((orb, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 200 }}
                  className="absolute flex items-center justify-center rounded-xl px-2.5 py-1.5 text-xs font-bold border backdrop-blur-sm"
                  style={{
                    top: orb.top,
                    right: orb.right,
                    bottom: orb.bottom,
                    color: orb.color,
                    borderColor: `${orb.color}30`,
                    background: `${orb.color}10`,
                    minWidth: orb.size,
                    animation: `float ${5 + i}s ease-in-out infinite ${i * 0.5}s`,
                  }}
                >
                  {orb.label}
                </motion.div>
              ))}
            </div>

            {/* Stats cards */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
              {[
                { value: '3+', label: 'Projects' },
                { value: '8.75', label: 'CGPA' },
                { value: '7+', label: 'Technologies' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="glass-card px-4 py-2.5 text-center min-w-[72px]"
                >
                  <div className="text-lg font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
