/**
 * Content architecture — the single source of truth for portfolio copy and
 * structured data.
 *
 * Stage 3.5 is content-first: the About, Experience, Education, Projects and
 * Recognition sections do NOT exist yet. They will read from this file in a
 * later stage so no component ever has to hard-code facts again.
 *
 * Rules that produced this data:
 *  - Nothing is invented. Dates, metrics, clients, awards and job
 *    descriptions only appear when explicitly confirmed.
 *  - Employer entries carry public metadata only: no hosts, IPs,
 *    credentials, internal systems, endpoints or confidential material.
 *  - No database, CMS, API or state layer. This is plain source code.
 */

export interface Period {
  start: string
  end: string
}

export interface Positioning {
  /** Full sentence used for meta tags and section intros. */
  full: string
  /** Display-headline lines, one per rendered row. */
  headline: readonly string[]
  /** Accent-coloured token that opens the secondary line. */
  accent: string
  /** Remaining words on the secondary line. */
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

export interface ProjectEntry {
  id: string
  name: string
  category: string
  role: string
  platform: string
  technologies: readonly string[]
  summary: string
  /**
   * BCP 47 tag for the summary's language. Several summaries are written in
   * Indonesian while the page itself is English — declaring this lets a screen
   * reader switch pronunciation instead of mangling both.
   */
  summaryLang?: 'en' | 'id'
  contributions: readonly string[]
  /** Editorial hierarchy for the Work section: one project leads, the rest sit secondary. */
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
  email: 'raihanazmi.official@gmail.com',
  positioning,
}

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

const projects: ProjectEntry[] = [
  {
    id: 'forestguard',
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
    featured: true,
  },
  {
    id: 'cityevent',
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
  },
  {
    id: 'smartpay',
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
  { id: 'github', label: 'GitHub', href: 'https://github.com/Raihhazmi' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-raihan-azmi',
  },
]

/**
 * About narrative. Editorial prose rather than structured facts, but it lives
 * here for the same reason the rest does: one source of truth, no copy
 * duplicated between sections.
 *
 * Every claim traces back to confirmed data — no numbers, clients, employers,
 * metrics or years of experience that were not explicitly given.
 */
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
  about,
  experience,
  education,
  projects,
  recognition,
  skills,
  socials,
}
