import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Add your images to public/gallery/ and list them here
const PHOTOS = [
  { src: '/gallery/photo-1.jpg', alt: 'Photo 1' },
  { src: '/gallery/photo-2.jpg', alt: 'Photo 2' },
  { src: '/gallery/photo-3.jpg', alt: 'Photo 3' },
  { src: '/gallery/photo-4.jpg', alt: 'Photo 4' },
  { src: '/gallery/photo-5.jpg', alt: 'Photo 5' },
  // keep adding: { src: '/gallery/photo-N.jpg', alt: 'Caption' }
]

interface ExifData {
  shutter?: string
  aperture?: string
  iso?: string
}

async function readExif(src: string): Promise<ExifData | null> {
  try {
    const exifr = await import('exifr')
    const raw = await exifr.parse(src, { pick: ['ExposureTime', 'FNumber', 'ISO'] })
    if (!raw) return null
    const shutter = raw.ExposureTime
      ? raw.ExposureTime < 1
        ? `1/${Math.round(1 / raw.ExposureTime)}s`
        : `${raw.ExposureTime}s`
      : undefined
    const aperture = raw.FNumber ? `f${raw.FNumber}` : undefined
    const iso = raw.ISO ? `ISO ${raw.ISO}` : undefined
    return { shutter, aperture, iso }
  } catch {
    return null
  }
}

export default function PhotosGallery() {
  const [idx, setIdx]         = useState(0)
  const [exif, setExif]       = useState<ExifData | null>(null)
  const [errors, setErrors]   = useState<Record<number, boolean>>({})
  const [loaded, setLoaded]   = useState(false)
  const total = PHOTOS.length

  const goTo = useCallback((i: number) => {
    setIdx(i); setExif(null); setLoaded(false)
  }, [])

  const prev = useCallback(() => goTo((idx - 1 + total) % total), [idx, total, goTo])
  const next = useCallback(() => goTo((idx + 1) % total), [idx, total, goTo])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [prev, next])

  const onLoad = useCallback(async () => {
    setLoaded(true)
    const data = await readExif(PHOTOS[idx].src)
    setExif(data)
  }, [idx])

  const photo    = PHOTOS[idx]
  const hasError = errors[idx]
  const hasExif  = loaded && exif && (exif.shutter || exif.aperture || exif.iso)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--accent)' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5">
        <Link
          to="/"
          className="font-mono text-sm tracking-[0.22em] uppercase transition-opacity duration-200 hover:opacity-60"
          style={{ color: 'var(--white)' }}
        >
          ← MDBR
        </Link>
        <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
          {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </header>

      {/* Viewer */}
      <main className="flex flex-col items-center px-8 pb-10 gap-5">
        {/* Frame */}
        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{
            maxWidth: '900px',
            aspectRatio: '3/2',
            border: '1px solid var(--border)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              {hasError ? (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: 'var(--card)' }}
                >
                  <span className="text-4xl">📷</span>
                  <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                    img not found
                  </span>
                </div>
              ) : (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  onLoad={onLoad}
                  onError={() => setErrors(p => ({ ...p, [idx]: true }))}
                  draggable={false}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          {[
            { dir: 'prev', side: 'left-3', fn: prev, path: 'M15 18l-6-6 6-6' },
            { dir: 'next', side: 'right-3', fn: next, path: 'M9 18l6-6-6-6' },
          ].map(btn => (
            <button
              key={btn.dir}
              onClick={btn.fn}
              aria-label={btn.dir}
              className={`absolute ${btn.side} top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                          flex items-center justify-center transition-all duration-200
                          hover:bg-white/12 hover:scale-110`}
              style={{
                background: 'rgba(8,8,8,0.72)',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d={btn.path}/>
              </svg>
            </button>
          ))}
        </div>

        {/* EXIF bar — left: shutter, center: aperture, right: ISO */}
        <div className="w-full" style={{ maxWidth: '900px' }}>
          <AnimatePresence>
            {hasExif && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between"
              >
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {exif?.shutter ?? '—'}
                </span>
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {exif?.aperture ?? '—'}
                </span>
                <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                  {exif?.iso ?? '—'}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress pills */}
        <div className="flex items-center gap-1.5 flex-wrap justify-center" style={{ maxWidth: '900px' }}>
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Photo ${i + 1}`}
              className="rounded-sm transition-all duration-200"
              style={{
                width: i === idx ? '22px' : '6px',
                height: '3px',
                background: i === idx ? 'var(--white)' : 'var(--subtle)',
              }}
            />
          ))}
        </div>

        {/* Hint */}
        <p className="font-mono text-[0.6rem] tracking-widest" style={{ color: 'var(--subtle)' }}>
          ← → keys to navigate
        </p>
      </main>
    </div>
  )
}
