// SectionWrapper - provides consistent section background and spacing
export default function SectionWrapper({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/2 rounded-full blur-[160px]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
