import { config } from './config'

export interface Social {
  label: string
  url: string
  handle?: string
}

export const socials: Social[] = [
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    handle: config.email,
  },
  {
    label: 'GitHub',
    url: config.github,
    handle: '@wdev',
  },
  {
    label: 'LinkedIn',
    url: config.linkedin,
    handle: 'in/wdev',
  },
  {
    label: 'Resume',
    url: config.resume,
    handle: 'Download PDF',
  },
]
