# MDBR Portfolio

**Mian Dawood bin Rafay** — Frontend Developer · Software Engineer · Photographer

Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

Push to GitHub, import repo on vercel.com. Done.

## Adding your images

- Project screenshots → `public/images/` (filenames: `pds.png`, `fps-photobooth.png`, `marks-portal.png`, `mdbr-nursery.png`, `campus-go.png`)
- Gallery photos → `public/gallery/` (filenames: `photo-1.jpg`, `photo-2.jpg`, ...)
- Resume → `public/resume.pdf`

## Customising content

| What | File |
|------|------|
| Tagline | `src/components/sections/HeroSection.tsx` — `TAGLINE` constant (alternatives in comments) |
| Quotes | `src/data/quotes.json` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Experience | `src/components/sections/ExperienceSection.tsx` — `EXPERIENCES` array |
| About paragraphs | `src/components/sections/AboutSection.tsx` — `PARAS` array |
| Gallery photos | `src/pages/PhotosGallery.tsx` — `PHOTOS` array |
| Contact socials | `src/components/sections/ContactSection.tsx` — `SOCIALS` array |
