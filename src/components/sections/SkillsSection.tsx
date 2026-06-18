import { useState } from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeUp, staggerFast, viewport } from '../../animations/variants'
import { skills } from '../../data/skills'

export default function SkillsSection() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="skills" className="snap-section">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-2 mb-12"
        >
          <motion.span variants={fadeUp} className="eyebrow">Skills</motion.span>
          <motion.h2 variants={fadeUp} className="heading">Tools of the trade.</motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm"
            style={{ color: 'var(--muted)' }}
          >
            Hover any technology to see what I use it for.
          </motion.p>
        </motion.div>

        {/* Pill grid */}
        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              className="relative"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pill */}
              <div
                className="px-3.5 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  background: hovered === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${hovered === i ? 'rgba(255,255,255,0.12)' : 'var(--border)'}`,
                  color: hovered === i ? 'var(--white)' : 'var(--muted)',
                  transform: hovered === i ? 'translateY(-2px)' : 'none',
                  boxShadow: hovered === i ? '0 4px 12px rgba(0,0,0,0.4)' : 'none',
                }}
              >
                {skill.name}
              </div>

              {/* Tooltip */}
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.14 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50 pointer-events-none"
                >
                  <div
                    className="font-mono text-[0.63rem] px-2.5 py-1.5 rounded-lg whitespace-nowrap"
                    style={{
                      background: 'rgba(18,18,18,0.97)',
                      border: '1px solid var(--border)',
                      color: 'var(--accent)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {skill.description}
                  </div>
                  {/* Arrow */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2"
                    style={{
                      width: 0, height: 0,
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid var(--border)',
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
