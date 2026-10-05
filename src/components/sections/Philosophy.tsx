import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const lines = [
  { text: 'GOOD SOFTWARE', muted: false },
  { text: "ISN'T JUST CODE", muted: true },
  { text: 'THAT WORKS.', muted: false },
]

const lines2 = [
  { text: "IT'S A SYSTEM", muted: false },
  { text: 'PEOPLE CAN', muted: true },
  { text: 'UNDERSTAND.', muted: false },
]

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-15%' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section
      id="philosophy"
      ref={ref}
      className="section-py relative overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      aria-label="Philosophy"
    >
      {/* Subtle moving gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              radial-gradient(ellipse 100% 80% at 50% 50%, rgba(74,127,165,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 60% 60% at 20% 20%, rgba(232,113,74,0.05) 0%, transparent 60%)
            `,
          }}
        />
      </motion.div>

      <div className="container-grid relative z-10">
        {/* Top annotation */}
        <motion.div
          className="mb-16 md:mb-20 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase">
            Design / Engineering / Data
          </span>
          <hr className="flex-1 rule" />
        </motion.div>

        {/* Main typographic moment */}
        <div className="space-y-2 md:space-y-4">
          {[...lines, { text: '', muted: false }, ...lines2].map((line, i) => {
            if (!line.text) return <div key={i} className="h-4 md:h-8" />
            return (
              <div key={i} className="overflow-hidden">
                <motion.p
                  className="font-serif font-light leading-none text-safe"
                  style={{
                    fontSize: 'var(--text-display)',
                    color: line.muted ? 'rgba(244,241,234,0.35)' : 'var(--fg)',
                  }}
                  initial={{ y: '110%' }}
                  animate={inView ? { y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line.text}
                </motion.p>
              </div>
            )
          })}
        </div>

        {/* Bottom annotation */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="font-mono text-[0.625rem] tracking-widest text-fg-subtle uppercase max-w-xs leading-relaxed">
            Every system reflects the clarity — or confusion — of its designer's thinking.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
