import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { config } from '../../data/config'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const handleWorkClick = () => {
    const el = document.getElementById('work')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: '100svh', background: 'var(--bg)' }}
      aria-label="Hero section"
    >
      {/* Background abstract visual */}
      <HeroBackground />

      {/* Grid overlay lines — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
        {/* Vertical grid lines */}
        <div className="grid-line-v" style={{ left: '25%' }} />
        <div className="grid-line-v" style={{ left: '50%' }} />
        <div className="grid-line-v" style={{ left: '75%' }} />
        {/* Horizontal */}
        <div className="grid-line-h" style={{ top: '20%' }} />
        <div className="grid-line-h" style={{ top: '80%' }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-grid flex flex-col justify-end pb-12 md:pb-16"
        style={{ minHeight: '100svh', y: yText, opacity }}
      >
        {/* Top metadata row — mobile */}
        <div className="pt-24 md:pt-0 mb-8 md:hidden">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <MetaTag>Software Developer</MetaTag>
            <MetaTag>Data / AI</MetaTag>
            <MetaTag>Based / PH</MetaTag>
          </div>
        </div>

        {/* Desktop layout: metadata on left, headline centered/right */}
        <div className="hidden md:grid md:grid-cols-12 md:gap-6 items-end mb-8 flex-1 relative">
          {/* Metadata — moved to profile position */}
<div className="absolute left-[24%] top-[50%] z-20 w-[240px] space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <div>
                <p className="text-label mb-1">Location</p>
                <p className="font-mono text-xs text-fg-muted">{config.location}</p>
              </div>
              <div>
                <p className="text-label mb-1">Focus</p>
                <p className="font-mono text-xs text-fg-muted leading-relaxed">
                  Software Dev / Data / AI
                </p>
              </div>
            </motion.div>

            {/* Coordinates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-mono text-[0.5625rem] text-fg-subtle space-y-0.5"
            >
              <p>X {config.coordinates.x}</p>
              <p>Y {config.coordinates.y}</p>
            </motion.div>
          </div>

          {/* Center / headline area */}
          <div className="col-span-6 self-end">
            {/* intentionally empty — headline sits outside grid below for full-width effect */}
          </div>

          {/*  — Profile card */}
          <motion.div
            className="absolute left-[0%] top-200 z-10 w-[190px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="relative w-full max-w-[190px]">

              {/* Profile image */}
              <div className="group relative aspect-[4/5] overflow-hidden border border-white/20 bg-black/20 backdrop-blur-sm">

                <img
                  src="/images/profile.png"
                  alt={config.name}
                  className="
          w-full
          h-full
          object-cover
          grayscale
          group-hover:grayscale-0
          group-hover:scale-105
          transition-all
          duration-700
          ease-out
        "
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Top label */}
                <p className="absolute top-3 left-3 font-mono text-[0.45rem] tracking-[0.2em] uppercase text-white/60">
                  Profile / 01
                </p>

                {/* Name */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-lg text-white leading-none">
                    {config.name}
                  </p>

                  <p className="mt-2 font-mono text-[0.5rem] tracking-[0.18em] uppercase text-white/60">
                    Software Developer
                  </p>
                </div>

                {/* Corner details */}
                <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/50" />
                <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/50" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/50" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/50" />
              </div>

            </div>
          </motion.div>
        </div>


        {/* Headline — full width, editorial */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Name */}
            <p className="mb-4 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-fg-muted">
              {config.name}
            </p>

            {/* Main headline */}
            <h1
              className="font-serif font-light text-fg leading-none text-safe"
              style={{ fontSize: 'var(--text-hero)' }}
            >
              <span className="block">BUILDING</span>

              <span
                className="block md:pl-[15%]"
                style={{ color: 'rgba(244,241,234,0.85)' }}
              >
                SYSTEMS.
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Description */}
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p
              className="font-sans text-fg-muted leading-relaxed"
              style={{ fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)' }}
            >
              {config.description}
            </p>
          </motion.div>

          {/* CTA Row */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {/* Mobile: text CTA */}
            <button
              onClick={handleWorkClick}
              className="md:hidden flex items-center gap-2 font-mono text-[0.625rem] tracking-widest uppercase text-fg border border-[rgba(255,255,255,0.2)] px-5 py-3 min-h-[44px] hover:border-[rgba(255,255,255,0.4)] transition-all"
            >
              View Work <ArrowUpRight size={12} />
            </button>

            {/* Desktop: circular CTA */}
            <MagneticButton className="hidden md:flex">
              <button
                onClick={handleWorkClick}
                className="btn-circle w-20 h-20 group flex-col gap-0.5"
                aria-label="View selected work"
              >
                <ArrowUpRight
                  size={20}
                  className="text-fg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Sub-headline — appears below on mobile */}
        <motion.div
          className="mt-8 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-serif font-light text-fg-muted text-safe" style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', lineHeight: '0.95' }}>
            DESIGNING<br />EXPERIENCES.
          </p>
        </motion.div>

        {/* Bottom technical meta strip */}
        <motion.div
          className="mt-8 flex flex-wrap gap-x-6 gap-y-1 border-t border-[rgba(255,255,255,0.08)] pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <MetaTag>Engineering</MetaTag>
          <MetaTag>Data</MetaTag>
          <MetaTag>Design</MetaTag>
          <MetaTag>AI / ML</MetaTag>
          <span className="ml-auto font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase hidden md:block">
            {config.year}©
          </span>
        </motion.div>
      </motion.div>

      {/* Secondary headline on desktop (positioned in visual zone) */}
      <motion.div
        className="absolute hidden md:block z-10 pointer-events-none"
        style={{ top: '22%', right: 'clamp(1.25rem, 5vw, 5rem)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        <p
          className="font-serif font-light text-fg-muted text-right leading-none"
          style={{ fontSize: 'var(--text-hero-sm)' }}
        >
          DESIGNING<br />
          <span style={{ color: 'rgba(244,241,234,0.45)' }}>EXPERIENCES.</span>
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="w-px h-12 overflow-hidden">
          <motion.div
            className="w-full h-full bg-fg-subtle"
            animate={{ y: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}

function MetaTag({ children }: { children: string }) {
  return (
    <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
      {children}
    </span>
  )
}

// ── Abstract background visual ────────────────────────────────────────────────
function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/trees.png')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Abstract node network SVG */}
      <svg
        className="absolute w-full h-full opacity-[0.12]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid dots */}
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 80 + 20}
              cy={row * 80 + 20}
              r="1"
              fill="rgba(244,241,234,0.6)"
            />
          ))
        )}
        {/* Connection lines */}
        <line x1="160" y1="100" x2="400" y2="260" stroke="rgba(91,184,212,0.4)" strokeWidth="0.5" />
        <line x1="400" y1="260" x2="720" y2="180" stroke="rgba(91,184,212,0.4)" strokeWidth="0.5" />
        <line x1="720" y1="180" x2="960" y2="340" stroke="rgba(232,113,74,0.3)" strokeWidth="0.5" />
        <line x1="960" y1="340" x2="1200" y2="220" stroke="rgba(91,184,212,0.3)" strokeWidth="0.5" />
        <line x1="240" y1="500" x2="560" y2="420" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
        <line x1="560" y1="420" x2="800" y2="560" stroke="rgba(232,113,74,0.25)" strokeWidth="0.5" />
        <line x1="800" y1="560" x2="1120" y2="480" stroke="rgba(91,184,212,0.25)" strokeWidth="0.5" />
        {/* Node circles */}
        <circle cx="400" cy="260" r="4" fill="none" stroke="rgba(91,184,212,0.6)" strokeWidth="0.8" />
        <circle cx="720" cy="180" r="3" fill="rgba(232,113,74,0.4)" />
        <circle cx="960" cy="340" r="5" fill="none" stroke="rgba(244,241,234,0.3)" strokeWidth="0.8" />
        <circle cx="560" cy="420" r="3" fill="rgba(91,184,212,0.3)" />
        <circle cx="800" cy="560" r="4" fill="none" stroke="rgba(232,113,74,0.4)" strokeWidth="0.8" />
        {/* Crosshair at center */}
        <line x1="710" y1="440" x2="730" y2="440" stroke="rgba(244,241,234,0.25)" strokeWidth="0.5" />
        <line x1="720" y1="430" x2="720" y2="450" stroke="rgba(244,241,234,0.25)" strokeWidth="0.5" />
        <circle cx="720" cy="440" r="8" fill="none" stroke="rgba(244,241,234,0.1)" strokeWidth="0.5" />
        {/* Architectural frame rectangle */}
        <rect x="300" y="150" width="840" height="520" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        {/* Corner brackets */}
        <path d="M300,150 L320,150 M300,150 L300,170" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <path d="M1140,150 L1120,150 M1140,150 L1140,170" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <path d="M300,670 L320,670 M300,670 L300,650" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <path d="M1140,670 L1120,670 M1140,670 L1140,650" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
      </svg>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(7,16,20,0.6) 100%)',
        }}
      />
    </div>
  )
}
