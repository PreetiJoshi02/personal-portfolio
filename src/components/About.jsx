import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiBook, FiCode, FiCpu, FiTarget } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const highlights = [
  {
    icon: <FiBook className="w-5 h-5" />,
    label: 'Education',
    value: 'BE Computer Science, KLE Tech',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: <FiCode className="w-5 h-5" />,
    label: 'Specialization',
    value: 'Full Stack Development',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <FiCpu className="w-5 h-5" />,
    label: 'Technologies',
    value: 'Node.js, MongoDB, React, Express',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <FiTarget className="w-5 h-5" />,
    label: 'Goal',
    value: 'Full Stack Developer Role',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
]

export default function About() {
  return (
    <SectionWrapper>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-label">About Me</span>
          <h2>Who I Am</h2>
          <p className="subtitle">A passionate developer who loves turning ideas into reality</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar placeholder */}
            <div className="mb-8 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl font-black text-white shrink-0 shadow-[0_8px_32px_rgba(139,92,246,0.3)]">
                PJ
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                <p className="text-purple-400 font-medium">{personalInfo.role}</p>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1">
                  <FiMapPin className="w-3.5 h-3.5" />
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {personalInfo.aboutSummary.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-purple-500/30 transition-all text-sm"
              >
                <FiMail className="w-4 h-4 text-purple-400" />
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-sm">
                <FiMapPin className="w-4 h-4 text-blue-400" />
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights & CGPA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* CGPA card */}
            <div className="glass-card p-6 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl -translate-y-8 translate-x-8" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Academic Performance</p>
                    <h3 className="text-white font-bold text-lg">KLE Institute of Technology</h3>
                    <p className="text-slate-400 text-sm mt-0.5">BE Computer Science Engineering</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black gradient-text">8.75</div>
                    <div className="text-slate-500 text-xs mt-1">CGPA</div>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                    <span>Academic Score</span>
                    <span>87.5%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '87.5%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`glass-card p-4 border ${item.border} hover:scale-[1.02] transition-transform duration-200`}
                >
                  <div className={`w-9 h-9 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-3`}>
                    {item.icon}
                  </div>
                  <p className="text-slate-500 text-xs mb-1">{item.label}</p>
                  <p className="text-white text-sm font-medium leading-snug">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
