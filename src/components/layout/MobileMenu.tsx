import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface NavItem {
  label: string
  href: string
}

interface Props {
  items: NavItem[]
  onClose: () => void
  onNavigate: (href: string) => void
  activeSection: string
}

export default function MobileMenu({ items, onClose, onNavigate, activeSection }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus close button on mount
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Escape key closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-[60] flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-bg"
        style={{ background: 'rgba(7,16,20,0.97)', backdropFilter: 'blur(20px)' }}
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative flex flex-col h-full px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-mono text-[0.625rem] tracking-widest text-fg-subtle uppercase">
            Navigation
          </span>
          <button
            ref={closeRef}
            onClick={onClose}
            className="flex items-center justify-center w-11 h-11 border border-[rgba(255,255,255,0.15)] text-fg-muted hover:text-fg hover:border-[rgba(255,255,255,0.35)] transition-all"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col flex-1" aria-label="Mobile navigation">
          {items.map((item, i) => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <motion.div
                key={item.label}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => onNavigate(item.href)}
                  className="w-full text-left flex items-baseline gap-4 py-4 border-b border-[rgba(255,255,255,0.08)] group min-h-[64px]"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span
                    className="font-mono text-[0.625rem] tracking-widest shrink-0 transition-colors"
                    style={{ color: isActive ? 'var(--accent-coral)' : 'rgba(244,241,234,0.3)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="font-serif text-3xl font-light tracking-tight transition-colors group-hover:text-fg"
                    style={{
                      color: isActive ? 'var(--fg)' : 'var(--fg-muted)',
                      fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                    }}
                  >
                    {item.label.toUpperCase()}
                  </span>
                </button>
              </motion.div>
            )
          })}
        </nav>

        {/* Footer meta */}
        <div className="mt-auto pt-8 flex justify-between items-end">
          <p className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
            Portfolio / 2026
          </p>
          <p className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
            Based / PH
          </p>
        </div>
      </div>
    </motion.div>
  )
}
