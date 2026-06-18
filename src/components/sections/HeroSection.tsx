import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp } from '../../animations/variants'
import quotesRaw from '../../data/quotes.json'
import type { Quote } from '../../types'

/* ─── Roles ────────────────────────────────────────────── */
const ROLES = ['Frontend Developer', 'Software Engineer', 'Photographer']

/* ─── Tagline — pick one, comment out the rest ─────────── */
const TAGLINE =
  'I build things people actually want to use.'
  // 'Turning caffeine and keystrokes into products.'
  // 'Clean code. Sharp eye. Fast ship.'
  // 'I write code by day and shoot frames by night.'
  // 'From wireframe to deployment — I own the whole thing.'
  // 'Making the web feel like it was worth the wait.'
  // 'I solve problems. The UI just makes it obvious.'
  // 'detail-obsessed developer with a camera problem.'

/* ─── Typewriter hook ───────────────────────────────────── */
function useTypewriter(text: string, speed = 42) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    setOut(''); setDone(false)
    let i = 0
    const t = setInterval(() => {
      i++; setOut(text.slice(0, i))
      if (i >= text.length) { clearInterval(t); setDone(true) }
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])
  return { out, done }
}

/* ─── Component ─────────────────────────────────────────── */
export default function HeroSection() {
  const [ri, setRi]     = useState(0)
  const [rShow, setRS]  = useState(true)
  const [qi, setQi]     = useState(0)
  const [qShow, setQS]  = useState(true)
  const quotes: Quote[] = quotesRaw.quotes
  const { out, done }   = useTypewriter(TAGLINE)

  /* Role cycle */
  useEffect(() => {
    const id = setInterval(() => {
      setRS(false)
      setTimeout(() => { setRi(p => (p + 1) % ROLES.length); setRS(true) }, 380)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  /* Quote shuffle */
  const shuffle = useCallback(() => {
    setQS(false)
    setTimeout(() => {
      setQi(p => { let n = p; while (n === p && quotes.length > 1) n = Math.floor(Math.random() * quotes.length); return n })
      setQS(true)
    }, 280)
  }, [quotes.length])

  useEffect(() => {
    const id = setInterval(shuffle, 11000)
    return () => clearInterval(id)
  }, [shuffle])

  const q = quotes[qi]

  return (
    <section id="hero" className="snap-section">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-14 items-center">

          {/* ── LEFT ──────────────────────────────────────── */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-7">

            {/* Eyebrow */}
            <motion.span variants={fadeUp} className="eyebrow">
              available for work · 2026
            </motion.span>

            {/* Name */}
            <motion.h1 variants={fadeUp} className="display">
              Mian Dawood<br />
              <span style={{ color: 'rgba(232,232,232,0.35)' }}>bin Rafay</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 h-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 flex-shrink-0" />
              <AnimatePresence mode="wait">
                {rShow && (
                  <motion.span
                    key={ri}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-mono text-sm"
                    style={{ color: 'var(--muted)' }}
                  >
                    {ROLES[ri]}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Typewriter tagline */}
            <motion.p
              variants={fadeUp}
              className="text-lg font-light min-h-[1.8rem]"
              style={{ color: 'rgba(232,232,232,0.72)' }}
            >
              {out}
              {!done && (
                <span className="inline-block w-0.5 h-[1.1rem] bg-white/55 ml-0.5 animate-blink align-middle" />
              )}
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              <a
                href="#projects"
                className="btn-white"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView() }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView() }}
              >
                Contact Me
              </a>
              <a href="/resume.pdf" download className="btn-ghost">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M12 3v14M6 13l6 6 6-6M5 21h14"/>
                </svg>
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Quote card ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="card p-6 flex flex-col gap-5 relative overflow-hidden">
              {/* top glow line */}
              <div className="absolute inset-x-0 top-0 h-px"
                   style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.07),transparent)' }} />

              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] tracking-widest uppercase"
                      style={{ color: 'var(--muted)' }}>
                  {q?.category}
                </span>
                <button
                  onClick={shuffle}
                  className="w-7 h-7 rounded-md flex items-center justify-center
                             border border-[var(--border)] hover:bg-white/6
                             transition-colors duration-200 group"
                  aria-label="Shuffle quote"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                       className="transition-transform duration-300 group-hover:rotate-180"
                       style={{ color: 'var(--muted)' }}>
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                  </svg>
                </button>
              </div>

              {/* Quote body */}
              <AnimatePresence mode="wait">
                {qShow && (
                  <motion.div
                    key={qi}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                  >
                    <span className="text-3xl leading-none select-none"
                          style={{ color: 'rgba(255,255,255,0.07)', fontFamily: 'Georgia, serif' }}>
                      "
                    </span>
                    <p className="text-[0.92rem] font-light leading-relaxed -mt-3"
                       style={{ color: 'rgba(232,232,232,0.82)' }}>
                      {q?.quote}
                    </p>
                    <div className="rule" />
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[0.62rem] tracking-wide"
                            style={{ color: 'var(--muted)' }}>
                        {q?.source}
                      </span>
                      <span className="font-mono text-[0.6rem] px-2 py-0.5 rounded-full"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid var(--border)',
                              color: 'var(--muted)',
                            }}>
                        {q?.theme}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex items-center justify-end gap-2 mt-4"
              style={{ color: 'rgba(107,107,107,0.5)' }}
            >
              <span className="font-mono text-[0.6rem] tracking-widest uppercase">scroll</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 3v18M7 16l5 5 5-5"/>
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
