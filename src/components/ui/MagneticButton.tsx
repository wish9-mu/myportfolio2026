import { useRef, type ReactNode } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface Props {
  children: ReactNode
  className?: string
}

export default function MagneticButton({ children, className = '' }: Props) {
  const isPointerFine = useMediaQuery('(pointer: fine) and (hover: hover)')
  const ref = useRef<HTMLDivElement>(null)

  const x = useSpring(0, { stiffness: 300, damping: 30 })
  const y = useSpring(0, { stiffness: 300, damping: 30 })

  const tx = useTransform(x, (v) => `${v}px`)
  const ty = useTransform(y, (v) => `${v}px`)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25)
    y.set((e.clientY - cy) * 0.25)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={isPointerFine ? { x: tx, y: ty } : {}}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}
