/**
 * Content architecture — the single source of truth for portfolio copy and
 * structured data. Components read facts from here; nothing is invented.
 */

import plate01 from '../assets/gallery/plate-01.svg'
import plate02 from '../assets/gallery/plate-02.svg'
import plate03 from '../assets/gallery/plate-03.svg'
import plate04 from '../assets/gallery/plate-04.svg'
import plate05 from '../assets/gallery/plate-05.svg'
import plate06 from '../assets/gallery/plate-06.svg'

export interface Period {
  start: string
  end: string
}

export interface Positioning {
  full: string
  headline: readonly string[]
  accent: string
  suffix: string
}

export interface ExperienceEntry {
  id: string
  role: string
  organisation?: string
  location?: string
  department?: string
  period?: Period
  current?: boolean
}

export interface EducationEntry {
  id: string
  institution: string
  degree: string
  period: Period
  focus: readonly string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectEntry {
  id: string
  no: string
  name: string
  category: string
  role: string
  platform: string
  technologies: readonly string[]
  summary: string
  summaryLang?: 'en' | 'id'
  contributions: readonly string[]
  links: readonly ProjectLink[]
  featured?: boolean
}

export interface RecognitionEntry {
  id: string
  title: string
  organisation: string
  date: string
  detail: string
  skills: readonly string[]
}

export interface SkillGroup {
  id: string
  label: string
  items: readonly string[]
}

export interface SocialLink {
  id: string
  label: string
  href: string
}

export interface GalleryEntry {
  id: string
  no: string
  label: string
  caption: string
  src: string
  aspect: 'portrait' | 'landscape' | 'square'
}

const site = {
  domain: 'raihanazmi.dev',
  tagline: 'Digital products · Systems · Mobile apps',
  summary:
    'Digital products and mobile applications built on deliberate system architecture — with AI-assisted workflows treated as an architectural layer rather than a feature added at the end.',
} as const

const positioning = {
  full: 'AI-Native System Architect & Mobile Product Developer',
  headline: ['AI-Native', 'System', 'Architect'],
  accent: '&',
  suffix: 'Mobile Product Developer',
} as const satisfies Positioning

const person = {
  fullName: 'Muhammad Raihan Azmi',
  name: 'Raihan Azmi',
  shortName: 'Raihan',
  email: 'raihanazmi.official@gmail.com',
  location: { city: 'Banjarmasin', region: 'Indonesia', timeZone: 'Asia/Makassar' },
  positioning,
}

const hero = {
  greeting: 'Halo, aku',
  kanji: '創',
  intro: site.summary,
} as const

const experience: ExperienceEntry[] = [
  {
    id: 'kpp',
    role: 'IT / ICT Intern',
    organisation: 'PT Kalimantan Prima Persada (KPP)',
    location: 'Site INDE, Kalimantan Timur',
    department: 'ICT',
    period: { start: '24 August 2026', end: '24 February 2027' },
    current: true,
  },
  {
    id: 'independent',
    role: 'Independent Mobile Product Developer & System Architect',
    current: false,
  },
]

const education: EducationEntry[] = [
  {
    id: 'uin-antasari',
    institution: 'UIN Antasari Banjarmasin',
    degree: 'S1 Teknologi Informasi',
    period: { start: 'August 2023', end: 'Present' },
    focus: ['System Architecture', 'IoT / Smart Environment', 'AI-Assisted Development'],
  },
]

const githubProfile = 'https://github.com/Raihhazmi'

const projects: ProjectEntry[] = [
  {
    id: 'forestguard',
    no: '01',
    name: 'ForestGuard',
    category: 'Environmental Crowdsourcing Platform',
    role: 'System Architect & Product Designer',
    platform: 'Android Mobile App',
    technologies: ['Kotlin', 'Jetpack Compose', 'Appwrite', 'Geolocation API'],
    summary:
      'Platform Android berbasis crowdsourcing untuk pelaporan hotspot kebakaran hutan secara real-time.',
    summaryLang: 'id',
    contributions: [
      'Technical Design Document',
      'real-time database architecture',
      'community validation / trust-score logic',
      'UI/UX',
      'AI-assisted integration workflow',
    ],
    links: [{ label: 'GitHub', href: githubProfile }],
    featured: true,
  },
  {
    id: 'cityevent',
    no: '02',
    name: 'CityEvent',
    category: 'Hyperlocal Event Discovery',
    role: 'Lead Mobile Developer',
    platform: 'Android Mobile App',
    technologies: ['Kotlin', 'Jetpack Compose', 'Appwrite'],
    summary: 'Aplikasi agregator event berbasis lokasi.',
    summaryLang: 'id',
    contributions: [
      'MVVM architecture',
      'real-time synchronization',
      'Saved Events',
      'UI/UX',
      'state management',
    ],
    links: [{ label: 'GitHub', href: githubProfile }],
  },
  {
    id: 'smartpay',
    no: '03',
    name: 'SmartPay',
    category: 'UMKM Point of Sales System',
    role: 'Lead Mobile Developer',
    platform: 'Android Mobile App',
    technologies: ['Kotlin', 'Jetpack Compose', 'Appwrite'],
    summary:
      'Aplikasi kasir pintar untuk membantu pelaku UMKM melacak pendapatan dan pembayaran cashless.',
    summaryLang: 'id',
    contributions: [
      'transaction business flow',
      'database schema',
      'dynamic QRIS',
      'Daily Report',
      'PDF export',
      'biometric security',
    ],
    links: [{ label: 'GitHub', href: githubProfile }],
  },
]

const recognition: RecognitionEntry[] = [
  {
    id: 'mobile-minds',
    title: 'Selected Presenter — Mobile Minds',
    organisation: 'FDIK UIN Antasari',
    date: 'January 2026',
    detail:
      'Selected as 1 of 16 students to present an Android application prototype and Technical Design Document.',
    skills: ['Product pitching', 'Technical communication', 'Product presentation'],
  },
]

const skills: SkillGroup[] = [
  {
    id: 'system-product-design',
    label: 'System & Product Design',
    items: [
      'Technical Design Document',
      'UI/UX Prototyping',
      'Database Architecture',
      'User Flow',
      'System Flow & Logic Design',
    ],
  },
  {
    id: 'ai-orchestration',
    label: 'AI Orchestration',
    items: [
      'Prompt Engineering',
      'AI-Assisted Coding',
      'Rapid Prototyping',
      'AI Debugging',
      'Error Log Analysis',
    ],
  },
  {
    id: 'mobile-cloud',
    label: 'Mobile & Cloud',
    items: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Appwrite', 'Supabase'],
  },
  {
    id: 'web',
    label: 'Web',
    items: ['React', 'Next.js', 'Laravel'],
  },
  {
    id: 'iot',
    label: 'IoT',
    items: ['Arduino', 'Smart Environment Architecture'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Figma'],
  },
]

const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: githubProfile },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-raihan-azmi',
  },
]

const gallery: GalleryEntry[] = [
  {
    id: 'plate-01',
    no: '01',
    label: 'Portrait',
    caption: 'Studio — ink study',
    src: plate01,
    aspect: 'portrait',
  },
  {
    id: 'plate-02',
    no: '02',
    label: 'Landscape',
    caption: 'Horizon field',
    src: plate02,
    aspect: 'landscape',
  },
  {
    id: 'plate-03',
    no: '03',
    label: 'Series',
    caption: 'Vertical rhythm',
    src: plate03,
    aspect: 'square',
  },
  {
    id: 'plate-04',
    no: '04',
    label: 'Portrait',
    caption: 'Split light',
    src: plate04,
    aspect: 'portrait',
  },
  {
    id: 'plate-05',
    no: '05',
    label: 'Frame',
    caption: 'Nested rooms',
    src: plate05,
    aspect: 'landscape',
  },
  {
    id: 'plate-06',
    no: '06',
    label: 'Grid',
    caption: 'Dot matrix',
    src: plate06,
    aspect: 'square',
  },
]

const about = {
  title: 'Designed as a system. Shipped as a product.',
  lede: 'An AI-Native System Architect and Mobile Product Developer working across system architecture, digital products, and mobile applications.',
  paragraphs: [
    'Every product starts as a system decision. System flow, data shape, state boundaries and validation rules are settled before the first screen exists, then captured in a Technical Design Document and built against — so the interface rests on decisions rather than negotiating around them.',
    'Mobile is where that approach meets reality. Android applications have been carried from technical design document to shipped product: real-time data, state management, validation logic, and the UI/UX that makes the system usable.',
    'AI is treated as an architectural layer rather than a feature added at the end. AI-assisted workflows drive how prototypes are explored, how error logs are read, and how quickly a system can be re-cut — while the architectural decisions themselves stay deliberate.',
  ],
} as const

export const siteContent = {
  site,
  person,
  hero,
  about,
  experience,
  education,
  projects,
  recognition,
  skills,
  socials,
  gallery,
}
