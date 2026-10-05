export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  {
    id: '01',
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '02',
    label: 'Backend',
    skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Supabase', 'FastAPI'],
  },
  {
    id: '03',
    label: 'Data',
    skills: ['SQL', 'PostgreSQL', 'dbt', 'Pandas', 'Apache Airflow', 'D3.js'],
  },
  {
    id: '04',
    label: 'AI / ML',
    skills: ['PyTorch', 'scikit-learn', 'OpenCV', 'ONNX', 'Hugging Face', 'LangChain'],
  },
  {
    id: '05',
    label: 'Infrastructure',
    skills: ['Docker', 'AWS', 'Linux', 'Nginx', 'Redis', 'Git'],
  },
  {
    id: '06',
    label: 'Design',
    skills: ['Figma', 'UI/UX', 'Design Systems', 'Prototyping', 'Typography'],
  },
]
