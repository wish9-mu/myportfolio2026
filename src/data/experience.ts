export interface Experience {
  year: string
  company: string
  role: string
  description: string
  technologies?: string[]
}

export const experience: Experience[] = [
  {
    year: '2026',
    company: 'Freelance / Independent',
    role: 'Software Developer · UI Engineer',
    description:
      'Designing and building full-stack applications, data pipelines, and AI-integrated systems for clients across different sectors. Handling end-to-end delivery from architecture to deployment.',
    technologies: ['React', 'TypeScript', 'Python', 'Supabase', 'AWS'],
  },
  {
    year: '2025',
    company: 'Project Collaboration',
    role: 'Frontend Engineer · Data Engineer',
    description:
      'Led frontend architecture for a collaborative platform, while contributing to the data layer — building ETL pipelines and analytics dashboards that gave the team real-time operational visibility.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'dbt', 'Airflow'],
  },
  {
    year: '2024',
    company: 'Academic / Research',
    role: 'ML Research Developer',
    description:
      'Built computer vision models for object classification research. Designed training pipelines, handled data preprocessing, and optimised models for edge inference using ONNX.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'ONNX', 'Docker'],
  },
  {
    year: '2023',
    company: 'Open Source / Personal',
    role: 'Full-Stack Developer',
    description:
      'Shipped personal projects exploring real-time systems, UI engineering, and web performance. Contributed to open-source tools in the React ecosystem.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
]
