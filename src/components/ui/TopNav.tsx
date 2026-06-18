import { motion } from 'framer-motion'

interface Props { onNav: (id: string) => void }

export default function TopNav({ onNav }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 desktop-only"
    >
      <div className="flex items-center justify-between px-8 py-5">
        {/* MDBR Logo */}
        <button
          onClick={() => onNav('hero')}
          className="group"
          aria-label="Back to top"
        >
          <span
            className="font-mono font-bold text-sm tracking-[0.22em] text-white uppercase
                       transition-opacity duration-200 group-hover:opacity-60"
          >
            MDBR
          </span>
        </button>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="font-mono text-[0.67rem] tracking-widest uppercase
                       text-white/40 hover:text-white/80 transition-colors duration-200"
          >
            Resume ↓
          </a>
          <span className="w-px h-3 bg-white/10" />
          <a
            href="https://github.com/dawoodmdbr"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.67rem] tracking-widest uppercase
                       text-white/40 hover:text-white/80 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.header>
  )
}
