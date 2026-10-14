# Premium Animated Developer Portfolio

A modern, dark-themed, animated developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Motion for React**.

---

## 📁 JSON-Driven Content Management

All editable portfolio content is modularized in `src/data/` so you can easily update your information without touching UI components:

| File | Purpose |
| :--- | :--- |
| [`src/data/personal.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/personal.json) | Name, professional title, tagline, location, availability status, resume path |
| [`src/data/about.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/about.json) | About narrative paragraphs, core strengths, and key stats |
| [`src/data/skills.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/skills.json) | Categorized skills (Frontend, Backend, Databases, Mobile, Tools) & proficiency levels |
| [`src/data/projects.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/projects.json) | Project cards, descriptions, highlights, technologies, GitHub & live demo URLs |
| [`src/data/experience.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/experience.json) | Professional experience timeline, responsibilities, and technologies |
| [`src/data/education.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/education.json) | Degree, institution, graduation dates, coursework, and honors |
| [`src/data/social-links.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/social-links.json) | GitHub, LinkedIn, email, and social networks |
| [`src/data/site-config.json`](file:///c:/Users/cvbzh/Desktop/Myportfolio/developer-portfolio/src/data/site-config.json) | Navigation items, SEO metadata defaults, site title, and footer text |

---

## 🛠️ Architecture & Components

```text
src/
├── app/
│   ├── globals.css          # Dark theme design system, glassmorphism & glow tokens
│   ├── layout.tsx           # SEO metadata, Google font optimization
│   └── page.tsx             # Main assembled portfolio page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky glass header with mobile drawer & active tracking
│   │   └── Footer.tsx       # Copyright, social links, back-to-top interaction
│   ├── sections/
│   │   ├── HeroSection.tsx  # Name, title, CTAs, interactive terminal preview card
│   │   ├── AboutSection.tsx # Narrative bio, stats grid, development pillars
│   │   ├── SkillsSection.tsx# Category tabs, skill badges, icons
│   │   ├── ProjectsSection.tsx # Filterable cards, key highlights, links
│   │   ├── ExperienceSection.tsx # Vertical timeline with pulsating node indicators
│   │   ├── EducationSection.tsx # Degrees, coursework, honors
│   │   └── ContactSection.tsx # Interactive message form, email copy action
│   └── ui/
│       ├── Button.tsx       # Primary gradient, secondary glass, outline variants
│       ├── Badge.tsx        # Pill badges with purple accents
│       ├── Card.tsx         # Glassmorphism cards with hover lighting
│       ├── Container.tsx    # Responsive centered layout container
│       ├── SectionHeader.tsx# Animated section titles with gradient highlights
│       ├── BackgroundGlow.tsx# Ambient restrained violet & indigo mesh backdrop
│       └── IconRenderer.tsx # Dynamic Lucide and brand SVG icon component
├── data/                    # JSON content files
├── lib/
│   ├── data.ts              # Type-safe exports for all JSON data
│   └── utils.ts             # Tailwind class name merging utility
└── types/
    └── portfolio.ts         # Strict TypeScript definitions for all data structures
```

---

## 🚀 Development & Build

```bash
# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Production build
npm run build

# Start production server
npm start
```
