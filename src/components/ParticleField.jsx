import { useMemo } from 'react'

// Performance-optimized particle field using CSS animations only.
// No canvas, no JS animation loops — purely CSS driven.
const PARTICLE_COUNT = 26
const ANIM_VARIANTS = ['pFloat1', 'pFloat2', 'pFloat3', 'pFloat4', 'pFloat5']
const COLORS = ['#3b82f6', '#8b5cf6', '#06b6d4', '#6366f1', '#a78bfa', '#38bdf8']

// Seeded random to avoid hydration mismatch
function seededRand(seed) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

export default function ParticleField() {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const r = (n) => seededRand(i * 7 + n)
      return {
        id: i,
        x: r(0) * 100,
        y: r(1) * 100,
        size: r(2) * 2.4 + 0.8,
        opacity: r(3) * 0.45 + 0.1,
        duration: r(4) * 22 + 18,
        delay: r(5) * 16,
        color: COLORS[Math.floor(r(6) * COLORS.length)],
        anim: ANIM_VARIANTS[i % ANIM_VARIANTS.length],
        // Larger "orb" particles add depth
        isOrb: i < 5,
      }
    })
  , [])

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.isOrb ? `${p.size * 60}px` : `${p.size}px`,
            height: p.isOrb ? `${p.size * 60}px` : `${p.size}px`,
            background: p.isOrb
              ? `radial-gradient(circle, ${p.color}08 0%, transparent 70%)`
              : p.color,
            opacity: p.isOrb ? 1 : p.opacity,
            boxShadow: p.isOrb ? 'none' : `0 0 ${p.size * 5}px ${p.color}99`,
            filter: p.isOrb ? 'blur(40px)' : 'none',
            animationName: p.anim,
            animationDuration: `${p.duration}s`,
            animationDelay: `-${p.delay}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  )
}
