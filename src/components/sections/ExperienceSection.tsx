import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../../animations/variants'

const EXPERIENCES = [
  {
    role: 'Teaching Assistant — OOP',
    company: 'FAST-NUCES · Faisalabad',
    period: 'Spring 2026',
    sub: 'Object Oriented Programming · Dr. Tahir Farooq',
    lines: [
      'Designed and graded OOP assignments and quizzes for 60+ students across C++ class hierarchies, polymorphism, and design principles.',
      'Ran dedicated office hours turning compiler errors into plain English — making the semester survivable for a lot of people.',
    ],
  },
  {
    role: 'Teaching Assistant — Programming Fundamentals',
    company: 'FAST-NUCES · Faisalabad',
    period: 'Fall 2025',
    sub: 'Programming Fundamentals · Dr. Tahir Farooq',
    lines: [
      'Evaluated C++ assignments and quizzes for first-year students — first TA role before finishing freshman year myself.',
      'Marked quizzes, assignments, and helped students debug their very first programs.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Enigmatix Global',
    period: 'Jun 2024 – Aug 2024',
    sub: null,
    lines: [
      'Contributed to production web interfaces with React — first real exposure to codebase conventions, code review, and shipping under deadline.',
      'Turned a three-month internship into a crash course in how real software teams actually work.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="snap-section">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-10"
        >
          {/* Header */}
          <div className="flex flex-col gap-2">
            <motion.span variants={fadeUp} className="eyebrow">Experience</motion.span>
            <motion.h2 variants={fadeUp} className="heading">Where I've shown up.</motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col gap-4">
            {/* vertical line */}
            <div
              className="absolute left-0 top-3 bottom-3 w-px hidden lg:block"
              style={{ background: 'var(--border)' }}
            />

            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.role}
                variants={fadeUp}
                className="relative lg:pl-9 group"
              >
                {/* dot */}
                <div
                  className="absolute left-0 top-[22px] w-2 h-2 rounded-full -translate-x-[3px] hidden lg:block
                             transition-all duration-300 group-hover:scale-150"
                  style={{ background: 'var(--subtle)', border: '1px solid var(--border)' }}
                />

                <div className="card p-5 flex flex-col gap-4 group-hover:border-white/10 transition-colors duration-300 relative">
                  {/* index */}
                  <span className="absolute top-5 right-5 font-mono text-[0.62rem]"
                        style={{ color: 'rgba(255,255,255,0.05)' }}>
                    0{i + 1}
                  </span>

                  {/* top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pr-6">
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-sm font-semibold tracking-tight" style={{ color: 'var(--white)' }}>
                        {exp.role}
                      </h3>
                      <span className="font-mono text-[0.63rem] tracking-wide" style={{ color: 'var(--muted)' }}>
                        {exp.company}
                      </span>
                      {exp.sub && (
                        <span className="font-mono text-[0.6rem]" style={{ color: 'var(--subtle)' }}>
                          {exp.sub}
                        </span>
                      )}
                    </div>
                    <span
                      className="font-mono text-[0.6rem] tracking-widest uppercase px-2.5 py-1
                                 rounded-full whitespace-nowrap self-start"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div className="rule" />

                  {/* two lines */}
                  <div className="flex flex-col gap-2">
                    {exp.lines.map((line, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full mt-[0.45rem] flex-shrink-0"
                              style={{ background: 'var(--subtle)' }} />
                        <p className="text-[0.82rem] leading-relaxed" style={{ color: 'var(--muted)' }}>
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
