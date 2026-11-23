import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'
import { education } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

export default function Education() {
  return (
    <SectionWrapper className="bg-[#0d0d1a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-heading"
        >
          <span className="section-label">Education</span>
          <h2>Academic Background</h2>
          <p className="subtitle">My educational journey and academic achievements</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="sm:pl-16 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 text-xl">
                    {item.icon}
                  </div>

                  {/* Card */}
                  <div className={`glass-card p-6 hover:border-purple-500/25 transition-all duration-200 ${item.current ? 'border-purple-500/25 shadow-[0_0_30px_rgba(139,92,246,0.06)]' : ''}`}>
                    <div className="flex items-start justify-between flex-wrap gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-white font-bold text-base">
                            {item.degree}
                          </h3>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
                              <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5 text-purple-400 font-medium text-sm mb-3">
                          <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                          {item.institution}, {item.location}
                        </div>

                        {item.description && (
                          <p className="text-slate-500 text-sm">{item.description}</p>
                        )}
                      </div>

                      {/* Score badge */}
                      <div className="text-right shrink-0">
                        <div className="glass-card px-4 py-3 border-purple-500/20">
                          <div className="text-2xl font-black gradient-text">{item.scoreValue}</div>
                          <div className="text-slate-500 text-xs mt-0.5">{item.scoreLabel}</div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {item.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <FiAward className="w-3.5 h-3.5" />
                        {item.score}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
