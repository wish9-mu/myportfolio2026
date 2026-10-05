import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../../data/skills'
import SectionLabel from '../ui/SectionLabel'

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10%' })

  return (
    <section
      id="stack"
      ref={ref}
      className="section-py relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      aria-label="Technology stack"
    >
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex items-end justify-between"
        >
          <SectionLabel number="04" label="Technology Stack" />
          <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase hidden md:block">
            Systems / Online
          </span>
        </motion.div>

        {/* Architecture note */}
        <motion.div
          className="mb-12 max-w-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-fg-muted text-sm leading-relaxed">
            A refined index of the technologies I work with across the full stack —
            from interface engineering to infrastructure and machine learning.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {skills.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
              className="border-t border-[rgba(255,255,255,0.08)] sm:border-l first:border-l-0 p-6 md:p-5 lg:p-6"
              style={{
                borderLeft: i === 0 ? 'none' : undefined,
              }}
            >
              <div className="flex items-baseline gap-2 mb-5">
                <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle">
                  {group.id}
                </span>
                <h3 className="font-mono text-[0.625rem] tracking-widest text-fg uppercase">
                  {group.label}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-sans text-fg-muted text-sm hover:text-fg transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom annotation */}
        <motion.div
          className="mt-12 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase">
            Build / 2026
          </span>
          <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase hidden md:block">
            Loc / PH
          </span>
        </motion.div>
      </div>
    </section>
  )
}
