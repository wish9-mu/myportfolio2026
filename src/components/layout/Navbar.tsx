import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../../data/config'
import { useActiveSection } from '../../hooks/useActiveSection'
import MobileMenu from './MobileMenu'

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['hero', 'work', 'about', 'stack', 'experience', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div
          className="mx-auto transition-all duration-500"
          style={{
            background: scrolled
              ? 'rgba(7, 16, 20, 0.85)'
              : 'rgba(7, 16, 20, 0.3)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}`,
          }}
        >
          <div className="container-grid flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
              className="flex items-center gap-2 shrink-0 min-h-[44px] min-w-[44px]"
              aria-label="Home"
            >
              <span
                className="font-mono text-sm font-medium tracking-wider border border-[rgba(255,255,255,0.2)] px-2 py-0.5 transition-colors hover:border-[rgba(255,255,255,0.4)]"
                style={{ color: 'var(--fg)' }}
              >
                {config.initials}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary navigation">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="hidden md:flex items-center gap-2 font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted border border-[rgba(255,255,255,0.15)] px-4 py-2 hover:text-fg hover:border-[rgba(255,255,255,0.35)] transition-all duration-200 min-h-[44px]"
            >
              Contact
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-1.5 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="block w-5 h-px bg-fg transition-all"></span>
              <span className="block w-3 h-px bg-fg-muted transition-all self-end"></span>
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <ScrollBar />
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            items={NAV_ITEMS}
            onClose={() => setMenuOpen(false)}
            onNavigate={(href) => {
              setMenuOpen(false)
              setTimeout(() => handleNavClick(href), 300)
            }}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function ScrollBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="h-px w-full bg-transparent">
      <div
        className="h-full transition-none"
        style={{
          width: `${progress * 100}%`,
          background: 'rgba(232, 113, 74, 0.7)',
        }}
      />
    </div>
  )
}
