import { motion } from 'framer-motion'
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub,
} from 'react-icons/fa'
import {
  SiJavascript, SiBootstrap, SiExpress, SiMongodb, SiMysql,
  SiEclipseide, SiC, SiFlask, SiChartdotjs, SiScikitlearn,
  SiPandas, SiNumpy, SiVercel,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { MdPsychology, MdAutoAwesome, MdPeople } from 'react-icons/md'
import { skills } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const iconMap = {
  FaJava: <FaJava />,
  SiC: <SiC />,
  FaPython: <FaPython />,
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  SiJavascript: <SiJavascript />,
  SiBootstrap: <SiBootstrap />,
  SiChartdotjs: <SiChartdotjs />,
  FaNodeJs: <FaNodeJs />,
  SiExpress: <SiExpress />,
  SiFlask: <SiFlask />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiEjs: <span className="font-bold text-sm">EJS</span>,
  SiPassport: <span className="font-bold text-sm">🛂</span>,
  SiScikitlearn: <SiScikitlearn />,
  SiPandas: <SiPandas />,
  SiNumpy: <SiNumpy />,
  FaGit: <FaGitAlt />,
  FaGithub: <FaGithub />,
  SiVisualstudiocode: <VscVscode />,
  SiEclipseide: <SiEclipseide />,
  SiVercel: <SiVercel />,
  MdPsychology: <MdPsychology />,
  MdAutoAwesome: <MdAutoAwesome />,
  MdPeople: <MdPeople />,
}

const categories = [
  {
    id: 'languages',
    label: 'Programming Languages',
    color: 'purple',
    accent: '#8b5cf6',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    items: skills.languages,
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'blue',
    accent: '#3b82f6',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    items: skills.frontend,
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'green',
    accent: '#22c55e',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    text: 'text-green-400',
    items: skills.backend,
  },
  {
    id: 'databases',
    label: 'Databases',
    color: 'cyan',
    accent: '#06b6d4',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    items: skills.databases,
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    color: 'emerald',
    accent: '#10b981',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    items: skills.frameworks,
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    color: 'orange',
    accent: '#f97316',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    text: 'text-orange-400',
    items: skills.tools,
  },
  {
    id: 'softSkills',
    label: 'Soft Skills',
    color: 'pink',
    accent: '#ec4899',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    text: 'text-pink-400',
    items: skills.softSkills,
  },
]

function SkillCard({ skill, accent, bg, border, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className={`glass-card flex flex-col items-center gap-2.5 py-4 px-3 ${border} hover:shadow-lg transition-all duration-200 cursor-default group`}
      style={{ '--hover-shadow': `0 8px 24px ${accent}20` }}
    >
      <div className={`text-2xl ${text} group-hover:scale-110 transition-transform duration-200`}>
        {iconMap[skill.icon] || <span>⚙️</span>}
      </div>
      <span className="text-xs text-slate-400 font-medium text-center leading-tight group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper className="bg-[#0d0d1a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-heading"
        >
          <span className="section-label">Technical Skills</span>
          <h2>My Skill Set</h2>
          <p className="subtitle">Technologies and tools I work with to build full-stack web applications</p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: ci * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-2 h-2 rounded-full`} style={{ background: cat.accent }} />
                <h3 className={`text-sm font-semibold tracking-wide uppercase ${cat.text}`}>
                  {cat.label}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-slate-600 text-xs">{cat.items.length} skills</span>
              </div>

              <div className={`grid gap-3`} style={{
                gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`
              }}>
                {cat.items.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    accent={cat.accent}
                    bg={cat.bg}
                    border={cat.border}
                    text={cat.text}
                    index={si}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
