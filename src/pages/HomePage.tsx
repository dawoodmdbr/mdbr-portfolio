import { useRef } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { navSections } from '../data/nav'
import TopNav            from '../components/ui/TopNav'
import SectionNav        from '../components/ui/SectionNav'
import HeroSection       from '../components/sections/HeroSection'
import AboutSection      from '../components/sections/AboutSection'
import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection   from '../components/sections/ProjectsSection'
import SkillsSection     from '../components/sections/SkillsSection'
import ContactSection    from '../components/sections/ContactSection'

const IDS = navSections.map(s => s.id)

export default function HomePage() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const active  = useActiveSection(IDS, wrapRef)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el || !wrapRef.current) return
    wrapRef.current.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  }

  return (
    <>
      <TopNav onNav={scrollTo} />
      <SectionNav active={active} onNav={scrollTo} />
      <div ref={wrapRef} className="snap-wrap">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  )
}
