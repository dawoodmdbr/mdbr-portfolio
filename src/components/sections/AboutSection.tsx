import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../../animations/variants'

const KEYWORDS = ['FAST-NUCES', 'Teaching Assistant', 'Enigmatix Global', 'React', 'TypeScript']

const PARAS = [
  `I'm a Software Engineering student at FAST-NUCES, Faisalabad, focused on building modern, scalable web applications and understanding the engineering behind them.`,
  `What started as curiosity about how websites worked turned into a passion for building products that are functional, scalable, and thoughtfully designed. I work mainly with React, TypeScript, and modern frontend technologies, while also exploring full-stack development with Node.js, Express, and Flask.`,
  `Along the way, I’ve gained experience through a Web Development Internship at Enigmatix Global and my role as a Teaching Assistant at FAST-NUCES. Working closely with students helped me notice recurring problems in academic workflows, which led me to build two tools focused on improving those processes through practical software solutions.`,
  `I enjoy turning ideas and problems into clean, user-focused applications. From designing responsive interfaces to building complete systems, I focus on the details that transform "it works" into "it works well."`,
]

function highlight(text: string) {
  const parts = text.split(new RegExp(`(${KEYWORDS.join('|')})`, 'g'))
  return parts.map((p, i) =>
    KEYWORDS.includes(p)
      ? <strong key={i} style={{ color: 'var(--white)', fontWeight: 500 }}>{p}</strong>
      : p
  )
}

const STATS = [
  { v: '2+', l: 'Years building'  },
  { v: '5',  l: 'Projects shipped' },
  { v: '2',  l: 'TA semesters'    },
  { v: '1',  l: 'Internship'      },
]

const NOW = [
  { icon: '📍', text: 'Chiniot-Faisalabad, Pakistan' },
  { icon: '🎓', text: 'BS Software Engineering — FAST-NUCES · 3rd Year'    },
  { icon: '🔍', text: 'Open to internship opportunities' },
  { icon: '📸', text: 'Photography Head · FAST Photography Society'  },
]

export default function AboutSection() {
  return (
    <section id="about" className="snap-section">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.span variants={fadeUp} className="eyebrow">About</motion.span>
            <motion.h2 variants={fadeUp} className="heading">
              Student by day,<br />builder by night.
            </motion.h2>
            <div className="flex flex-col gap-3.5">
              {PARAS.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-base leading-[1.85]"
                  style={{ color: 'var(--muted)' }}
                >
                  {highlight(p)}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {/* Stats */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 gap-3"
            >
              {STATS.map(s => (
                <motion.div key={s.l} variants={fadeUp} className="card p-5">
                  <p className="text-[1.8rem] font-bold tracking-tight" style={{ color: 'var(--white)' }}>{s.v}</p>
                  <p className="font-mono text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>{s.l}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="card p-5 flex flex-col gap-4"
            >
              <span className="eyebrow" style={{ marginBottom: 0 }}>Currently</span>
              <div className="flex flex-col gap-3">
                {NOW.map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-base leading-none">{item.icon}</span>
                    <span className="text-sm" style={{ color: 'var(--muted)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
