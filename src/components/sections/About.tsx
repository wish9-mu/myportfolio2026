import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'

const FOCUS_AREAS = [
  'Software Development',
  'Data Systems',
  'UI Engineering',
]

const INTERESTS = [
  'AI / ML',
  'Web Systems',
  'Data Engineering',
  'Product Design',
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-15%' })

  return (
    <section
      id="about"
      ref={ref}
      className="section-py relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      aria-label="About section"
    >
      <div className="container-grid">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <SectionLabel number="02" label="About" />
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-16">
          {/* Statement — spans most of grid */}
          <div className="md:col-span-8 lg:col-span-7">
            <motion.h2
              className="font-serif font-light text-fg leading-none text-safe"
              style={{ fontSize: 'var(--text-display)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              I BUILD SYSTEMS WHERE{' '}
              <span style={{ color: 'rgba(244,241,234,0.55)' }}>
                ENGINEERING, DATA, AND DESIGN
              </span>{' '}
              INTERSECT.
            </motion.h2>
          </div>

          {/* Right column — bio + metadata */}
          <div className="md:col-span-4 lg:col-span-5 space-y-10">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <p className="text-fg-muted leading-relaxed" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                I'm a software developer based in the Philippines with a strong focus on building
                high-quality, scalable systems. My work spans the full stack — from data pipelines
                and API architecture to polished user interfaces.
              </p>
              <p className="text-fg-muted leading-relaxed mt-4" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }}>
                I care equally about technical correctness and visual quality. Software that works
                well and looks intentional is not a trade-off — it's the standard.
              </p>
            </motion.div>

            {/* Metadata blocks */}
            <motion.div
              className="grid grid-cols-2 gap-8 border-t border-[rgba(255,255,255,0.08)] pt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <p className="text-label mb-3">Location</p>
                <p className="font-mono text-xs text-fg">Philippines</p>
              </div>
              <div>
                <p className="text-label mb-3">Focus</p>
                <ul className="space-y-1">
                  {FOCUS_AREAS.map((f) => (
                    <li key={f} className="font-mono text-[0.625rem] text-fg-muted tracking-wider">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2">
                <p className="text-label mb-3">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((i) => (
                    <span key={i} className="tech-tag">{i}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative rule with label */}
        <motion.div
          className="mt-16 md:mt-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <hr className="flex-1 rule" />
          <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase">
            Engineering / Data / Design
          </span>
          <hr className="flex-1 rule" />
        </motion.div>
      </div>
    </section>
  )
}
