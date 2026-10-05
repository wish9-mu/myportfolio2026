import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Mail, Github, Linkedin, FileText } from 'lucide-react'
import { config } from '../../data/config'
import { socials } from '../../data/socials'
import SectionLabel from '../ui/SectionLabel'
import MagneticButton from '../ui/MagneticButton'

const ICON_MAP: Record<string, LucideIcon> = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  Resume: FileText,
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10%' })

  return (
    <section
      id="contact"
      ref={ref}
      className="section-py relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingBottom: 'max(clamp(5rem, 10vw, 10rem), env(safe-area-inset-bottom))',
      }}
      aria-label="Contact section"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% 50%, rgba(232,113,74,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(91,184,212,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className="container-grid relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel number="07" label="Contact" />
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Headline */}
          <div className="md:col-span-8">
            <div className="space-y-0">
              {["LET'S BUILD", 'SOMETHING', 'MEANINGFUL.'].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h2
                    className="font-serif font-light text-fg leading-none text-safe"
                    style={{ fontSize: 'var(--text-hero-sm)' }}
                    initial={{ y: '110%' }}
                    animate={inView ? { y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.1 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.h2>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <motion.div
              className="mt-10 md:mt-12 flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <MagneticButton>
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-3 font-mono text-[0.625rem] tracking-widest uppercase text-fg border border-[rgba(255,255,255,0.25)] px-7 py-4 min-h-[52px] hover:bg-[rgba(244,241,234,0.06)] hover:border-[rgba(255,255,255,0.4)] transition-all"
                  aria-label={`Send email to ${config.email}`}
                >
                  Get In Touch <ArrowUpRight size={12} />
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right sidebar */}
          <motion.div
            className="md:col-span-4 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Social links */}
            <div className="space-y-1">
              <p className="text-label mb-4">Connect</p>
              {socials.map((s) => {
                const Icon = ICON_MAP[s.label] ?? Mail
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel={s.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] py-3 group min-h-[48px]"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={12} className="text-fg-subtle group-hover:text-fg transition-colors" />
                      <span className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted group-hover:text-fg transition-colors">
                        {s.label}
                      </span>
                    </div>
                    <ArrowUpRight size={10} className="text-fg-subtle opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )
              })}
            </div>

            {/* Available for */}
            <div>
              <p className="text-label mb-4">Available For</p>
              <ul className="space-y-2">
                {config.availableFor.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block w-1 h-1 bg-[rgba(91,184,212,0.6)]" />
                    <span className="font-mono text-[0.625rem] tracking-wider text-fg-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <motion.div
          className="mt-20 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase">
            Based / Philippines — Open to remote
          </span>
          <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase">
            Portfolio / {config.year}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
