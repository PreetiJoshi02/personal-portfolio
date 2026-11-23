import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import SectionWrapper from './SectionWrapper'

const contactInfo = [
  {
    icon: <FiMail className="w-5 h-5" />,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: <FiPhone className="w-5 h-5" />,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <FiMapPin className="w-5 h-5" />,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: <FiGithub className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/preeti-joshi',
    href: personalInfo.github,
    color: 'text-slate-300',
    bg: 'bg-white/5',
    border: 'border-white/10',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/preeti-joshi',
    href: personalInfo.linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required'
  if (!form.message.trim()) {
    errors.message = 'Message is required'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')

    // Using Formspree or similar service would be ideal.
    // For now, we open the user's email client with the form data pre-filled.
    // This is a real, functional approach without a fake backend.
    try {
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )}`
      window.location.href = mailtoLink
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper className="bg-[#0d0d1a]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="section-heading"
        >
          <span className="section-label">Contact</span>
          <h2>Get In Touch</h2>
          <p className="subtitle">I'm open to opportunities, collaborations, and conversations. Let's connect!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-white font-bold text-xl mb-2">Let's work together</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Whether you have an exciting project, a job opportunity, or just want to say hello — my inbox is always open. I'll do my best to respond promptly!
            </p>

            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 glass-card ${info.border} hover:border-purple-500/30 transition-all group`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${info.bg} ${info.color} flex items-center justify-center shrink-0`}>
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-slate-500 text-xs mb-0.5">{info.label}</div>
                        <div className="text-white text-sm font-medium truncate group-hover:text-purple-300 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-4 glass-card ${info.border}`}>
                      <div className={`w-10 h-10 rounded-lg ${info.bg} ${info.color} flex items-center justify-center shrink-0`}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">{info.label}</div>
                        <div className="text-white text-sm font-medium">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-6">Send a Message</h3>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 mb-6 text-sm"
                >
                  <FiCheck className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Message ready to send!</div>
                    <div className="text-green-500/80">Your email client has been opened with the message pre-filled. Please send it from there.</div>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 mb-6 text-sm"
                >
                  <FiAlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Something went wrong</div>
                    <div className="text-red-500/80">Please email me directly at {personalInfo.email}</div>
                  </div>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`form-input ${errors.name ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-slate-500 font-medium mb-1.5 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                  <label className="block text-xs text-slate-500 font-medium mb-1.5 uppercase tracking-wider">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`form-input ${errors.subject ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-xs text-slate-500 font-medium mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`form-input resize-none ${errors.message ? 'border-red-500/40 focus:border-red-500/60' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                  <p className="text-slate-600 text-xs mt-1.5 text-right">
                    {form.message.length} characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening email client...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-slate-600 text-xs text-center mt-3">
                  Clicking "Send Message" will open your email client with the message pre-filled.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
