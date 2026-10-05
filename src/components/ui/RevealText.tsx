import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  children: string
  className?: string
  delay?: number
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  const words = children.split(' ')

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} aria-label={children}>
      <span aria-hidden="true" className="flex flex-wrap gap-x-[0.25em]">
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: '110%' }}
              animate={inView ? { y: 0 } : { y: '110%' }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </div>
  )
}
