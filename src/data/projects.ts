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
    slug: 'res-plus',
    title: 'Res+',
    category: 'Emergency Technology',
    year: '2026',
    shortDescription: 'Real-time emergency coordination platform.',
    description:
      'Real-time emergency coordination platform connecting households, responders, ambulance crews, and hospitals. Built for speed, resilience, and clarity under pressure.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Agora RTC', 'AWS', 'Node.js'],
    github: '',
    live: '',
    featured: true,
    overview:
      'Res+ is an emergency coordination platform designed to close the gap between distress calls and emergency response. It orchestrates real-time communication across four actor types simultaneously.',
    problem:
      'Emergency response in high-density urban areas suffers from coordination failures — dispatchers lack real-time field visibility, responders have no shared context, and hospitals cannot prepare ahead of incoming patients.',
    solution:
      'A unified real-time platform using Supabase for live data synchronisation, Agora for encrypted voice/video, and a custom dispatch algorithm that routes incidents to the nearest available responder.',
    results: [
      'Sub-200ms message delivery in local tests',
      'Multi-role dashboard supporting 4 actor types simultaneously',
      'Offline-resilient data sync for intermittent connectivity',
    ],
  },
  {
    id: '02',
    slug: 'vision-pipeline',
    title: 'Vision Pipeline',
    category: 'Computer Vision / AI',
    year: '2025',
    shortDescription: 'ML-powered computer vision system for object classification.',
    description:
      'A modular computer vision pipeline for real-time object detection and classification. Designed with edge deployment in mind, running efficiently on constrained hardware.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Docker', 'ONNX'],
    github: '',
    featured: true,
    overview:
      'An end-to-end computer vision system covering data ingestion, model training, optimisation, and deployment to edge inference endpoints.',
    problem:
      'Existing object detection pipelines often trade accuracy for speed or require expensive GPU infrastructure for real-time inference.',
    solution:
      'ONNX model export + runtime quantisation achieving near-desktop performance on edge hardware. Modular FastAPI backend decouples model serving from the application layer.',
    results: [
      '30fps inference on entry-level hardware post-quantisation',
      'REST API supporting streaming inference via SSE',
      'Modular design enabling model hot-swap without downtime',
    ],
  },
  {
    id: '03',
    slug: 'data-atlas',
    title: 'Data Atlas',
    category: 'Data Engineering / Analytics',
    year: '2025',
    shortDescription: 'End-to-end analytics pipeline with interactive dashboards.',
    description:
      'An analytics engineering project spanning data ingestion, transformation, warehousing, and visual reporting. Designed for operational visibility at scale.',
    technologies: ['Python', 'dbt', 'PostgreSQL', 'Apache Airflow', 'React', 'D3.js'],
    github: '',
    featured: true,
    overview:
      'Data Atlas is a complete analytics stack — from raw data ingestion through to interactive dashboards — built for a mid-scale operational context.',
    problem:
      'Ad-hoc SQL queries and manual CSV exports create data inconsistency and slow decision-making cycles.',
    solution:
      'dbt-modelled transformation layer on top of a PostgreSQL warehouse, orchestrated via Airflow, with a React + D3.js frontend exposing curated metrics.',
    results: [
      'Automated daily pipeline replacing 6 hours of manual reporting',
      'Single source of truth for key business metrics',
      'Interactive drill-down dashboards with sub-second query response',
    ],
  },
  {
    id: '04',
    slug: 'system-core',
    title: 'SystemCore',
    category: 'Full-Stack System',
    year: '2024',
    shortDescription: 'Scalable full-stack platform with real-time capabilities.',
    description:
      'A production-grade full-stack platform handling authentication, role-based access, real-time events, and REST/GraphQL APIs across a distributed microservice architecture.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker', 'Nginx'],
    github: '',
    live: '',
    featured: true,
    overview:
      'SystemCore serves as the backbone infrastructure for a SaaS product — handling auth, multi-tenancy, billing integration, and real-time notification delivery.',
    problem:
      'Monolithic architecture created deploy bottlenecks and made horizontal scaling unpredictable under load spikes.',
    solution:
      'Decomposed into four focused microservices behind Nginx, with Redis pub/sub for real-time event delivery and a GraphQL API gateway unifying data access.',
    results: [
      'Horizontal scale tested to 10k concurrent connections',
      'Zero-downtime rolling deployments via Docker Compose',
      'Reduced p95 API response time by 40% post-migration',
    ],
  },
]
