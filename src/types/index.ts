export interface Quote {
  category: string
  quote: string
  source: string
  theme: string
}

export interface Project {
  id: string
  title: string
  overview: string
  problem: string
  solution: string
  tech: string[]
  image: string
  github: string
  live: string
  tag: string
}

export interface NavSection {
  id: string
  label: string
}

export interface SkillItem {
  name: string
  description: string
}
