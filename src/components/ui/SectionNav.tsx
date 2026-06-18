import { motion } from 'framer-motion'
import { navSections } from '../../data/nav'

interface Props {
  active: string
  onNav: (id: string) => void
}

export default function SectionNav({ active, onNav }: Props) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 desktop-only"
    >
      <div className="glass rounded-xl px-2 py-2.5 flex flex-col gap-0.5">
        {navSections.map(sec => {
          const isActive = active === sec.id
          return (
            <button
              key={sec.id}
              onClick={() => onNav(sec.id)}
              aria-label={sec.label}
              className="group flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200
                         hover:bg-white/[0.05]"
            >
              {/* dot */}
              <span
                className="w-[5px] h-[5px] rounded-full flex-shrink-0 transition-all duration-300"
                style={{
                  background: isActive ? '#fff' : 'rgba(255,255,255,0.2)',
                  transform: isActive ? 'scale(1.4)' : 'scale(1)',
                }}
              />
              {/* label */}
              <span
                className="font-mono text-[0.6rem] tracking-widest uppercase
                           overflow-hidden transition-all duration-300 whitespace-nowrap"
                style={{
                  maxWidth: isActive ? '72px' : '0px',
                  opacity: isActive ? 1 : 0,
                  color: '#fff',
                }}
              >
                {sec.label}
              </span>
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}
