import { config } from '../../data/config'
import { socials } from '../../data/socials'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-8">
      <div className="container-grid flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
          © {year} {config.name} — All rights reserved
        </span>
        <div className="flex items-center gap-6">
          {socials.slice(0, 3).map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith('http') ? '_blank' : undefined}
              rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase hover:text-fg transition-colors min-h-[44px] flex items-center"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
