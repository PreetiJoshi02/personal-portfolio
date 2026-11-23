import { motion } from 'framer-motion'
import { FiExternalLink, FiAward } from 'react-icons/fi'
import { certifications } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

export default function Certifications() {
  return (
    <SectionWrapper>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-heading"
        >
          <span className="section-label">Certifications</span>
          <h2>Credentials & Learning</h2>
          <p className="subtitle">Professional certifications and courses that have expanded my skillset</p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group"
            >
              {/* Gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <div className="p-6">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white/5 border border-white/5 rounded-full px-2.5 py-1">
                    <FiAward className="w-3 h-3" />
                    {cert.year}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-white font-bold text-base leading-snug mb-1 group-hover:text-purple-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{cert.description}</p>

                {/* CTA */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors group/link"
                  >
                    View Credential
                    <FiExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
