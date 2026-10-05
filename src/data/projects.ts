export interface Project {
  id: string
  slug: string
  title: string
  category: string
  year: string
  shortDescription: string
  description: string
  technologies: string[]
  image?: string
  github?: string
  live?: string
  caseStudy?: string
  overview?: string
  problem?: string
  solution?: string
  results?: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'Predictive Data Analysis & Modeling',
    title: 'Predictive Data Analysis & Modeling',
    category: 'Computer Vision / Predictive Modeling',
    year: 'Academic Project',
    shortDescription: 'Object detection pipeline for automated jaywalking identification.',
    description:
      'An object detection pipeline for automated jaywalking identification, developed as a predictive data analysis and modeling project.',
    technologies: ['Python', 'Computer Vision', 'Machine Learning', 'Data Analysis'],
    image: '/images/predictive-data.png',
    github: 'https://github.com/jbbbarce/Barce_Respecio_DSCI_SA2.git',
    featured: true,
    overview:
      'This project applies predictive data analysis and computer vision to identify jaywalking events automatically.',
  },
  {
    id: '02',
    slug: 'dengue-temporal-modeling',
    title: 'Dengue Temporal Modeling',
    category: 'Data Science / Forecasting',
    image: '/images/Temporal Modelling - BG.png',
    year: 'Academic Project',
    shortDescription: 'Comparative modeling of weekly dengue cases in Marikina City.',
    description:
      'A comparative analysis of classical, machine-learning, and deep temporal models for forecasting weekly dengue cases in Marikina City.',
    technologies: ['Python', 'Time-Series Analysis', 'Machine Learning', 'Deep Learning', 'Data Validation'],
    featured: true,
    overview:
      'The project analyzed weekly dengue case data to identify temporal patterns and compare alternative forecasting approaches in a public-health context.',
    results: [
      'Applied time-respecting evaluation to preserve chronological order.',
      'Compared classical, machine-learning, and deep temporal models.',
    ],
  },
  {
    id: '03',
    slug: 'studynest',
    title: 'StudyNest',
    category: 'Full-Stack / Web Development',
    year: 'Featured Project',
    shortDescription: 'Peer tutoring platform with booking management and analytics.',
    description:
      'A full-stack web platform connecting tutors and tutees with booking management, analytics, and an admin dashboard.',
    technologies: ['React', 'JavaScript', 'Full-Stack Web Development'],
    image: '/images/studynest.png',
    live: 'https://luis-respecio.vercel.app/project/studynest',
    featured: true,
    overview:
      'StudyNest is a peer tutoring platform designed to support tutor discovery, session booking, and administrative oversight.',
  },
  {
    id: '04',
    slug: 'parkit',
    title: 'ParkIt',
    category: 'UX/UI / Research',
    year: 'IC4E 2026',
    shortDescription: 'Location-based system for finding available parking spaces.',
    description:
      'A location-based system designed to assist users in finding available parking spaces in dense urban areas. Accepted for publication and presentation at IC4E 2026 in Fukuoka, Japan.',
    technologies: ['UX/UI', 'Location-Based System', 'Research'],
    image: '/images/parkit.png',
    live: 'https://luis-respecio.vercel.app/project/parkit',
    featured: true,
    overview:
      'ParkIt explores a user-centered approach to locating available parking spaces in dense urban environments.',
  },
  {
    id: '05',
    slug: 'division-designs',
    title: 'Division Designs',
    category: 'E-commerce / Full-Stack',
    year: 'Featured Project',
    shortDescription: 'E-commerce platform for custom merchandise and design products.',
    description:
      'A full-stack e-commerce website for custom merchandise and design products, featuring a product catalog, shopping cart, and checkout flow.',
    technologies: ['React', 'E-commerce', 'Full-Stack'],
    image: '/images/division-designs.jpg',
    live: 'https://luis-respecio.vercel.app/project/division-designs',
    featured: true,
    overview:
      'Division Designs presents a complete storefront experience for browsing custom products and completing purchases.',
  },
  {
    id: '06',
    slug: 'beep-one',
    title: 'BeepOne',
    category: 'UI/UX / Mobile Concept',
    year: 'Concept Project',
    shortDescription: 'Unified transportation payment concept for the Philippines.',
    description:
      'A unified transit payment app concept for the Philippines that consolidates rail, bus, and ferry transportation into a single card or NFC-enabled phone.',
    technologies: ['Figma', 'UI/UX', 'Mobile Concept'],
    image: '/images/beep-one.png',
    live: 'https://luis-respecio.vercel.app/project/beep-one',
    featured: true,
    overview:
      'BeepOne explores a single payment experience for multiple public transportation types across the Philippines.',
  },
  {
    id: '07',
    slug: 'res-plus',
    title: 'Res+',
    category: 'Emergency Response / Real-Time Systems',
    year: 'Featured Project',
    shortDescription: 'Coordinated emergency response platform for households, responders, and hospitals.',
    description:
      'A real-time emergency response platform connecting households, Barangay Health Workers, ambulance crews, and hospital ER teams in one coordinated system.',
    technologies: ['Next.js', 'Supabase', 'Agora', 'TomTom', 'Kiro', 'Vercel'],
    featured: true,
    image: '/images/resplus2.png',
    overview:
      'Res+ enables one-tap SOS reporting, live responder calls with automated transcription, structured triage, traffic-aware ambulance routing, and real-time hospital handoffs.',
    problem:
      'Emergency response can be slowed by fragmented communication, limited field context, and blind handoffs between responders and hospitals.',
    solution:
      'Res+ brings emergency participants into one coordinated system to support faster, better-informed decisions without replacing human judgment or existing 911 services.',
    results: [
      'Connects households, Barangay Health Workers, ambulance crews, and hospital ER teams.',
      'Supports live calls, structured triage, routing context, and hospital handoffs in real time.',
    ],
  },
]
