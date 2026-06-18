import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../../types'

interface Props { project: Project; index: number }

export default function ProjectCard({ project, index }: Props) {
  const [imgHov, setImgHov] = useState(false)
  const [imgErr, setImgErr] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="card flex flex-col overflow-hidden group hover:border-white/10 transition-colors duration-300"
    >
      {/* ── Image ─────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          height: imgHov ? '220px' : '160px',
          transition: 'height 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
        onMouseEnter={() => setImgHov(true)}
        onMouseLeave={() => setImgHov(false)}
      >
        {imgErr ? (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'var(--surface)' }}
          >
            <span className="font-mono text-[0.65rem]" style={{ color: 'var(--subtle)' }}>
              img not found
            </span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgErr(true)}
            className="w-full h-full object-cover"
            style={{
              transform: imgHov ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
        )}

        {/* overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(8,8,8,0.72))',
            opacity: imgHov ? 0.25 : 1,
          }}
        />

        {/* tag badge */}
        {project.tag && (
          <div className="absolute bottom-2.5 left-3">
            <span
              className="font-mono text-[0.58rem] tracking-widest uppercase px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(8,8,8,0.85)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {project.tag}
            </span>
          </div>
        )}

        {/* hover action buttons */}
        <AnimatePresence>
          {imgHov && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18 }}
              className="absolute top-2.5 right-2.5 flex gap-1.5"
            >
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[0.7rem] font-semibold
                             transition-transform duration-150 hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.95)', color: '#080808' }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[0.7rem] font-medium
                             transition-transform duration-150 hover:scale-105"
                  style={{
                    background: 'rgba(12,12,12,0.92)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    color: '#e8e8e8',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  Code
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Text — fades out when image expands ───────────── */}
      <motion.div
        animate={{ opacity: imgHov ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-3 p-4"
        style={{ pointerEvents: imgHov ? 'none' : 'auto' }}
      >
        <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--white)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'var(--muted)' }}>
          {project.overview}
        </p>
        <div className="flex items-start gap-2">
          <span className="font-mono text-[0.57rem] uppercase tracking-widest flex-shrink-0 mt-0.5"
                style={{ color: 'var(--subtle)' }}>prob</span>
          <span className="text-[0.75rem] leading-relaxed line-clamp-2"
                style={{ color: 'rgba(107,107,107,0.75)' }}>
            {project.problem}
          </span>
        </div>
        <div className="rule" />
        <div className="flex flex-wrap gap-1">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-[0.57rem] px-1.5 py-0.5 rounded"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
