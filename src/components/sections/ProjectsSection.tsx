import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../../animations/variants'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="snap-section projects-snap py-24">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-2 mb-10"
        >
          <motion.span variants={fadeUp} className="eyebrow">Projects</motion.span>
          <motion.h2 variants={fadeUp} className="heading">Things I've built.</motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-sm max-w-md"
            style={{ color: 'var(--muted)' }}
          >
            Hover the image to preview links. Each card hides the text so the screenshot can breathe.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
