export interface Experience {
  year: string
  company: string
  role: string
  description: string
  technologies?: string[]
}

export const experience: Experience[] = [
  {
    year: 'Apr - Jul 2026',
    company: 'EastWest Bank',
    role: 'Testing Intern',
    description:
      'Executed functional, automated, API, and integration testing for the EWB RB project. Validated results, documented defects in Azure DevOps, and used company-approved Copilot AI to support test documentation, analysis, and reporting.',
    technologies: ['T24 / Temenos', 'Katalon Studio', 'SoapUI', 'Azure DevOps', 'Copilot AI'],
  },
  {
    year: 'Mar - Jul 2026',
    company: 'The Living Textiles',
    role: 'Shopify Web Developer',
    description:
      'Configured and updated Shopify themes, page layouts, product information, navigation, and storefront content. Performed functional and usability checks before publishing changes to reduce storefront defects.',
    technologies: ['Shopify', 'Shopify Liquid', 'HTML5', 'CSS3', 'Responsive Web Design'],
  },
  {
    year: 'Mar 2023 - Mar 2026',
    company: 'Division Designs',
    role: 'Operations Manager',
    description:
      'Managed and maintained multi-platform e-commerce operations across Shopee, Lazada, and TikTok Shop, coordinating product content and day-to-day operational priorities.',
    technologies: ['Shopee', 'Lazada', 'TikTok Shop', 'E-commerce Operations'],
  },
]
