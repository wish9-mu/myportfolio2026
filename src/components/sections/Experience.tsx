import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../../data/experience'
import SectionLabel from '../ui/SectionLabel'

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10%' })

  return (
    <section
      id="experience"
      ref={ref}
      className="section-py relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      aria-label="Experience section"
    >
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel number="05" label="Experience" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl">
          {experience.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} parentInView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ItemProps {
  item: (typeof experience)[number]
  index: number
  parentInView: boolean
}

function ExperienceItem({ item, index, parentInView }: ItemProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-[rgba(255,255,255,0.08)] py-8 md:py-10 group"
      initial={{ opacity: 0, y: 20 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
    >
      {/* Year */}
      <div className="md:col-span-2">
        <span
          className="font-mono text-[0.625rem] tracking-widest text-fg-subtle uppercase"
        >
          {item.year}
        </span>
      </div>

      {/* Content */}
      <div className="md:col-span-10 space-y-3">
        <div>
          <h3
            className="font-serif font-light text-fg text-safe group-hover:text-fg transition-colors"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
          >
            {item.company}
          </h3>
          <p className="font-mono text-[0.625rem] tracking-widest text-fg-subtle uppercase mt-1">
            {item.role}
          </p>
        </div>
        <p className="text-fg-muted text-sm leading-relaxed max-w-2xl">
          {item.description}
        </p>
        {item.technologies && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.technologies.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
