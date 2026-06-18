import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { stagger, staggerFast, viewport } from '../../animations/variants'
import { skills } from '../../data/skills'
import type { SkillItem } from '../../data/skills'

type Cat = 'Frontend' | 'Backend' | 'Languages' | 'Tools'
const CATS: Cat[] = ['Frontend', 'Backend', 'Languages', 'Tools']

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SkillLogo({ name, category, slug, iconColor, description }: SkillItem) {
  const url = slug
    ? `https://cdn.simpleicons.org/${slug}${iconColor ? `/${iconColor}` : ''}`
    : null
  const initials = name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()

  return (
    <div className="group relative flex flex-col items-center">
      {/* Icon tile */}
      <motion.div
        variants={scaleIn}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
        className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl
                   transition-all duration-300"
        style={{ border: '1px solid var(--border)', background: 'var(--card)' }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = '0 0 18px rgba(255,255,255,0.08)'
          el.style.borderColor = 'var(--subtle)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = 'none'
          el.style.borderColor = 'var(--border)'
        }}
      >
        {url ? (
          <img src={url} alt={name} width={26} height={26} className="w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <span className="font-mono text-sm font-semibold select-none" style={{ color: 'var(--muted)' }}>
            {initials}
          </span>
        )}
      </motion.div>

      {/* Tooltip — desktop only */}
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2.5 rounded-xl z-20
                   opacity-0 group-hover:opacity-100 pointer-events-none
                   translate-y-2 group-hover:translate-y-0
                   transition-all duration-200 whitespace-nowrap hidden sm:block"
        style={{
          background: 'rgba(18,18,18,0.97)',
          border: '1px solid var(--border)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <p className="text-sm font-semibold" style={{ color: 'var(--white)' }}>{name}</p>
        <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--muted)' }}>
          {category} · {description}
        </p>
        <div
          className="absolute top-full left-1/2 -translate-x-1/2"
          style={{
            width: 0, height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid var(--border)',
          }}
        />
      </div>

      {/* Mobile label */}
      <p className="sm:hidden mt-2 font-mono text-[10px] text-center leading-tight max-w-[60px] truncate"
         style={{ color: 'var(--muted)' }}>
        {name}
      </p>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="snap-section">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 overflow-y-auto h-full py-24 flex flex-col justify-center">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-2 mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow">Skills</motion.span>
          <motion.h2 variants={fadeUp} className="heading">What I build with.</motion.h2>
          <motion.p variants={fadeUp} className="text-base" style={{ color: 'var(--muted)' }}>
            Hover any icon for details.
          </motion.p>
        </motion.div>

        {/* Category rows */}
        <div className="flex flex-col gap-10">
          {CATS.map(cat => {
            const list = skills.filter(s => s.category === cat)
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
                    {cat}
                  </span>
                  <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
                  <span className="font-mono text-xs" style={{ color: 'var(--subtle)' }}>{list.length}</span>
                </div>
                <motion.div
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  className="flex flex-wrap gap-3 sm:gap-4"
                >
                  {list.map(s => <SkillLogo key={s.name} {...s} />)}
                </motion.div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
