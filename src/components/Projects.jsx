import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiCode } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`h-2 w-full rounded-t-2xl bg-gradient-to-r ${project.color}`} />
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-400 text-sm">{project.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="text-slate-300 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {project.longDescription}
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2.5 flex-1 justify-center"
              >
                <FiGithub className="w-4 h-4" />
                View on GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 flex-1 justify-center"
                >
                  <FiExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, index }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card group hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(139,92,246,0.12)] overflow-hidden flex flex-col"
      >
        {/* Color accent top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

        <div className="p-6 flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.icon}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-0.5">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-xs mt-0.5">{project.subtitle}</p>
              </div>
            </div>
            <span className="text-xs text-slate-600 bg-white/5 border border-white/5 rounded-full px-2.5 py-1 shrink-0 ml-2">
              {project.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="tech-badge text-[11px]">{tech}</span>
            ))}
            {project.technologies.length > 5 && (
              <span className="tech-badge text-[11px] text-slate-500 border-slate-700/50 bg-white/5">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              <FiCode className="w-3.5 h-3.5" />
              View Details
            </button>
            <div className="flex-1" />
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all"
              title="GitHub Repository"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-green-400 hover:bg-green-500/10 transition-all"
                title="Live Demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

export default function Projects() {
  return (
    <SectionWrapper>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-heading"
        >
          <span className="section-label">Portfolio</span>
          <h2>My Projects</h2>
          <p className="subtitle">Real-world applications I've built to solve problems and learn new technologies</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          GitHub links and additional projects will be added soon. Contact me for more details.
        </motion.p>
      </div>
    </SectionWrapper>
  )
}
