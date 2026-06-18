import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp, slideLeft, viewport } from '../../animations/variants'

const EMAIL = 'dawoodbinrafaydbr@gmail.com'

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@dawoodmdbr',
    href: 'https://github.com/dawoodmdbr',
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'dawoodmdbr',
    href: 'https://www.linkedin.com/in/dawoodmdbr/',
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    handle: '@dawood.mdbr',
    href: 'https://instagram.com/dawood.mdbr',
    available: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Photography',
    handle: '/photos-gallery',
    href: '/photos-gallery',
    available: true,
    isInternal: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
  },
]

/* ─── Easter egg ────────────────────────────────────────── */
function EasterEgg() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') setVisible(v => !v)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          <div
            className="px-5 py-3.5 rounded-xl font-mono text-[0.72rem] text-center max-w-[360px]"
            style={{
              background: 'rgba(12,12,12,0.95)',
              border: '1px solid var(--border)',
              backdropFilter: 'blur(16px)',
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: 'var(--white)' }}>press F to pay respects 🫡</span>
            <br />
            <span style={{ color: 'var(--subtle)' }}>
              no but seriously — you scrolled all the way down.
              <br />most recruiters don't. you might be the one. hire me pls.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─── Main component ────────────────────────────────────── */
export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="snap-section">
      <EasterEgg />

      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeUp} className="eyebrow">Contact</motion.span>
            <motion.h2 variants={fadeUp} className="heading">
              Let's build something<br />
              <span style={{ color: 'var(--muted)' }}>worth talking about.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm leading-[1.9] max-w-md"
              style={{ color: 'var(--muted)' }}
            >
              Open to internships, freelance projects, and interesting conversations.
              I reply fast — usually the same day.
            </motion.p>

            {/* Email */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap">
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-[0.78rem] transition-opacity duration-200 hover:opacity-60"
                style={{ color: 'var(--accent)' }}
              >
                {EMAIL}
              </a>
              <button
                onClick={copy}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[0.7rem]
                           transition-all duration-200 hover:bg-white/5"
                style={{
                  border: '1px solid var(--border)',
                  color: copied ? 'rgba(120,220,120,0.85)' : 'var(--muted)',
                }}
              >
                {copied ? (
                  <>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="9" y="9" width="13" height="13" rx="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </motion.div>

            {/* F key hint */}
            <motion.p
              variants={fadeUp}
              className="font-mono text-[0.6rem] tracking-widest"
              style={{ color: 'rgba(58,58,58,0.8)' }}
            >
              press F for something
            </motion.p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-2.5"
          >
            {SOCIALS.map(s => (
              <motion.div key={s.label} variants={slideLeft}>
                {s.available ? (
                  <a
                    href={s.href}
                    target={s.isInternal ? '_self' : '_blank'}
                    rel={s.isInternal ? undefined : 'noopener noreferrer'}
                    className="card flex items-center gap-4 p-4 transition-all duration-250
                               hover:border-white/10 hover:bg-white/[0.015] group"
                  >
                    <span style={{ color: 'var(--muted)' }} className="transition-colors duration-200 group-hover:text-white flex-shrink-0">
                      {s.icon}
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-sm font-medium" style={{ color: 'var(--white)' }}>{s.label}</span>
                      <span className="font-mono text-[0.65rem]" style={{ color: 'var(--muted)' }}>{s.handle}</span>
                    </div>
                    <svg
                      className="ml-auto flex-shrink-0 transition-transform duration-200
                                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      width="13" height="13" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      style={{ color: 'var(--subtle)' }}
                    >
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </a>
                ) : (
                  <div
                    className="card flex items-center gap-4 p-4 opacity-25 cursor-not-allowed select-none"
                  >
                    <span style={{ color: 'var(--muted)' }} className="flex-shrink-0">{s.icon}</span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium" style={{ color: 'var(--white)' }}>{s.label}</span>
                      <span className="font-mono text-[0.65rem]" style={{ color: 'var(--muted)' }}>unavailable</span>
                    </div>
                    <span className="ml-auto font-mono text-[0.6rem]" style={{ color: 'var(--subtle)' }}>disabled</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
