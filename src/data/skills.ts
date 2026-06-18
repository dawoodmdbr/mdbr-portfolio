export type SkillCategory = 'Frontend' | 'Backend' | 'Languages' | 'Tools'

export interface SkillItem {
  name: string
  category: SkillCategory
  slug: string | null   // simpleicons.org slug, null = use initials
  iconColor: string | null
  description: string
}

export const skills: SkillItem[] = [
  // ── Frontend ──────────────────────────────────────────────
  { name: 'HTML',          category: 'Frontend',   slug: 'html5',        iconColor: 'E34F26', description: 'Structure of the web' },
  { name: 'CSS',           category: 'Frontend',   slug: 'css3',         iconColor: '1572B6', description: 'Visual layer of the web' },
  { name: 'JavaScript',    category: 'Frontend',   slug: 'javascript',   iconColor: 'F7DF1E', description: 'Language of the browser' },
  { name: 'TypeScript',    category: 'Frontend',   slug: 'typescript',   iconColor: '3178C6', description: 'JavaScript with types' },
  { name: 'React',         category: 'Frontend',   slug: 'react',        iconColor: '61DAFB', description: 'Component-based UI library' },
  { name: 'Vite',          category: 'Frontend',   slug: 'vite',         iconColor: '646CFF', description: 'Lightning-fast build tool' },
  { name: 'Next.js',       category: 'Frontend',   slug: 'nextdotjs',    iconColor: 'ffffff', description: 'Full-stack React framework' },
  { name: 'Tailwind',      category: 'Frontend',   slug: 'tailwindcss',  iconColor: '06B6D4', description: 'Utility-first CSS framework' },
  { name: 'shadcn/ui',     category: 'Frontend',   slug: null,           iconColor: null,     description: 'Accessible component system' },
  { name: 'Framer Motion', category: 'Frontend',   slug: 'framer',       iconColor: '0055FF', description: 'Production-ready animations' },

  // ── Backend ───────────────────────────────────────────────
  { name: 'Node.js',       category: 'Backend',    slug: 'nodedotjs',    iconColor: '5FA04E', description: 'Backend JavaScript runtime' },
  { name: 'Express.js',    category: 'Backend',    slug: 'express',      iconColor: 'ffffff', description: 'Minimal Node.js web framework' },
  { name: 'Flask',         category: 'Backend',    slug: 'flask',        iconColor: 'ffffff', description: 'Lightweight Python web server' },
  { name: 'REST APIs',     category: 'Backend',    slug: null,           iconColor: null,     description: 'HTTP-based data exchange' },
  { name: 'Firebase',      category: 'Backend',    slug: 'firebase',     iconColor: 'FFCA28', description: 'Auth and real-time backend' },
  { name: 'Cloudinary',    category: 'Backend',    slug: 'cloudinary',   iconColor: '3448C5', description: 'Cloud media storage and CDN' },
  { name: 'Apps Script',   category: 'Backend',    slug: 'googleappsscript', iconColor: '4285F4', description: 'Automate Google Workspace' },
  { name: 'SQL',           category: 'Backend',    slug: null,           iconColor: null,     description: 'Query and manage data' },

  // ── Languages ─────────────────────────────────────────────
  { name: 'Python',        category: 'Languages',  slug: 'python',       iconColor: '3776AB', description: 'Scripting and backend logic' },
  { name: 'C',             category: 'Languages',  slug: null,           iconColor: null,     description: 'Systems-level programming' },
  { name: 'C++',           category: 'Languages',  slug: 'cplusplus',    iconColor: '00599C', description: 'Object-oriented systems' },

  // ── Tools ─────────────────────────────────────────────────
  { name: 'Git',           category: 'Tools',      slug: 'git',          iconColor: 'F05032', description: 'Version control system' },
  { name: 'GitHub',        category: 'Tools',      slug: 'github',       iconColor: 'ffffff', description: 'Code hosting and collaboration' },
  { name: 'Vercel',        category: 'Tools',      slug: 'vercel',       iconColor: 'ffffff', description: 'Zero-config frontend deployment' },
  { name: 'Render',        category: 'Tools',      slug: null,           iconColor: null,     description: 'Backend cloud hosting' },
]
