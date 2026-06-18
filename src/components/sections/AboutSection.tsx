import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../../animations/variants'

const KEYWORDS = ['FAST-NUCES', 'Teaching Assistant', 'Enigmatix Global', 'React', 'TypeScript']

const PARAS = [
  `I'm a first-year Software Engineering student at FAST-NUCES, Faisalabad — learning fast, shipping faster. What started as curiosity about how websites worked turned into a full obsession with building them properly.`,
  `Before my first year was over, I was already a Teaching Assistant for Dr. Tahir Farooq — helping students debug their first C++ programs in Programming Fundamentals, then moving into OOP the semester after. Teaching forces you to actually understand things, not just copy them.`,
  `Over summer 2024, I interned at Enigmatix Global as a Web Development Intern. My first real production codebase, real deadlines, and real code review. I came back with a sharper eye and a longer checklist.`,
  `Now I build full-stack web applications with React and TypeScript at the front and Node or Flask at the back — with enough attention to detail that people notice. I care about the gap between "it works" and "it's good."`,
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
  { icon: '🎓', text: 'BSE — FAST-NUCES · Year 1'    },
  { icon: '🔍', text: 'Open to internship opportunities' },
  { icon: '📸', text: 'FPS · FAST Photography Society'  },
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
                  className="text-sm leading-[1.9]"
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
                  <p className="text-[1.7rem] font-bold tracking-tight" style={{ color: 'var(--white)' }}>{s.v}</p>
                  <p className="font-mono text-[0.62rem] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>{s.l}</p>
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
