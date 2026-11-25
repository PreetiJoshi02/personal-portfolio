// SectionWrapper — consistent section background with section-aware ambient glow
export default function SectionWrapper({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Primary center glow — indigo/blue */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '900px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.045) 0%, rgba(59,130,246,0.025) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Top-left accent — subtle cyan */}
        <div
          className="absolute top-0 left-0 rounded-full"
          style={{
            width: '400px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.03) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'translate(-30%, -30%)',
          }}
        />
        {/* Bottom-right accent — subtle violet */}
        <div
          className="absolute bottom-0 right-0 rounded-full"
          style={{
            width: '350px',
            height: '250px',
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.03) 0%, transparent 70%)',
            filter: 'blur(45px)',
            transform: 'translate(25%, 25%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}
