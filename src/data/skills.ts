export interface SkillGroup {
  id: string
  label: string
  skills: string[]
}

export const skills: SkillGroup[] = [
  {
    id: '01',
    label: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'PHP', 'Kotlin'],
  },
  {
    id: '02',
    label: 'Web Development',
    skills: ['HTML5', 'CSS3', 'React.js', 'Shopify Liquid', 'Responsive Web Design', 'REST APIs'],
  },
  {
    id: '03',
    label: 'Quality Assurance',
    skills: ['Functional Testing', 'Test Case Execution', 'API Testing', 'Integration Testing', 'SIT / UAT', 'Defect Reporting', 'Retesting', 'Proof of Testing Documentation'],
  },
  {
    id: '04',
    label: 'Data & Databases',
    skills: ['SQL', 'Supabase', 'NoSQL', 'Data Cleaning', 'Data Validation', 'Exploratory Data Analysis', 'Feature Engineering', 'Machine Learning'],
  },
  {
    id: '05',
    label: 'Developer & QA Tools',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'Katalon Studio', 'SoapUI', 'Temenos T24 / T25', 'Microsoft Copilot', 'ChatGPT'],
  },
  {
    id: '06',
    label: 'Productivity & Creative',
    skills: ['Microsoft Excel', 'Microsoft Word', 'PowerPoint', 'Adobe Photoshop', 'Adobe Lightroom', 'Canva', 'Final Cut Pro X'],
  },
  {
    id: '07',
    label: 'Supporting Knowledge',
    skills: ['SDLC', 'Requirements Analysis', 'Analytical Troubleshooting', 'Networking Fundamentals', 'Hardware Diagnostics'],
  },
]
