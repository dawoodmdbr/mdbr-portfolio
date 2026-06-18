import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navSections } from '../../data/nav'

interface Props {
  active: string
  onNav: (id: string) => void
}

export default function SectionNav({ active, onNav }: Props) {
  const [hoveredId, setHoveredId]   = useState<string | null>(null)
  const [flashLabel, setFlashLabel] = useState<string | null>(null)
  const prevActive = useRef(active)
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Mobile: when active section changes, flash the label for 1.4s then hide
  useEffect(() => {
    if (active !== prevActive.current) {
      prevActive.current = active
      const label = navSections.find(s => s.id === active)?.label ?? null
      setFlashLabel(label)
      if (flashTimer.current) clearTimeout(flashTimer.current)
      flashTimer.current = setTimeout(() => setFlashLabel(null), 1400)
    }
  }, [active])

  // Determine which label to show for desktop: hovered takes priority, else active
  const desktopLabelId = hoveredId ?? active

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass rounded-xl px-2 py-2.5 flex flex-col gap-0.5"
      >
        {navSections.map(sec => {
          const isActive  = active === sec.id
          const showLabel = desktopLabelId === sec.id

          return (
            <button
              key={sec.id}
              onClick={() => onNav(sec.id)}
              onMouseEnter={() => setHoveredId(sec.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={sec.label}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg
                         transition-colors duration-200 hover:bg-white/[0.05]"
            >
              {/* dot */}
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0 transition-all duration-300"
                style={{
                  background: isActive ? '#fff' : 'rgba(255,255,255,0.22)',
                  transform: isActive ? 'scale(1.4)' : 'scale(1)',
                }}
              />

              {/* Desktop label — expands on hover OR when active */}
              <span
                className="hidden sm:block font-mono text-[0.6rem] tracking-widest uppercase
                           overflow-hidden whitespace-nowrap transition-all duration-250"
                style={{
                  maxWidth: showLabel ? '72px' : '0px',
                  opacity: showLabel ? (isActive ? 1 : 0.55) : 0,
                  color: '#fff',
                }}
              >
                {sec.label}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* Mobile flash label — appears to the left of the nav pill */}
      <AnimatePresence>
        {flashLabel && (
          <motion.div
            key={flashLabel}
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 sm:hidden pointer-events-none"
          >
            <div
              className="font-mono text-[0.65rem] tracking-widest uppercase px-2.5 py-1.5 rounded-lg whitespace-nowrap"
              style={{
                background: 'rgba(14,14,14,0.92)',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(10px)',
                color: 'var(--white)',
              }}
            >
              {flashLabel}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
