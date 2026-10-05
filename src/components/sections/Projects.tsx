import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../../data/projects'
import SectionLabel from '../ui/SectionLabel'

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10%' })

  return (
    <section
      id="work"
      ref={ref}
      className="section-py relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      aria-label="Selected work"
    >
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 md:mb-16"
        >
          <SectionLabel number="03" label="Selected Work" />
          <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase hidden md:block">
            {projects.length} Projects
          </span>
        </motion.div>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={i}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ShowcaseProps {
  project: Project
  index: number
  reverse: boolean
}

function ProjectShowcase({ project, index, reverse }: ShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-5%' })

  return (
    <motion.article
      ref={ref}
      data-cursor="project"
      className="relative border-t border-[rgba(255,255,255,0.08)] py-10 md:py-14 group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      aria-label={project.title}
    >
      {/* Ghost number */}
      <span className="project-num" aria-hidden="true">{project.id}</span>

      {/* Mobile layout */}
      <div className="md:hidden space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
              {project.id}
            </span>
          </div>
        </div>
        <h3
          className="font-serif font-light text-fg leading-none text-safe"
          style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}
        >
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-[0.5625rem] tracking-wider text-fg-subtle uppercase">
            {project.category}
          </span>
          <span className="font-mono text-[0.5625rem] tracking-wider text-fg-subtle uppercase">
            / {project.year}
          </span>
        </div>
        {/* Project image */}
        <div className="aspect-project overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
          <ProjectVisual project={project} />
        </div>
        <p className="text-fg-muted text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted border border-[rgba(255,255,255,0.15)] px-4 py-3 min-h-[44px] flex items-center gap-2 hover:text-fg hover:border-[rgba(255,255,255,0.35)] transition-all"
            >
              GitHub <ArrowUpRight size={10} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted border border-[rgba(255,255,255,0.15)] px-4 py-3 min-h-[44px] flex items-center gap-2 hover:text-fg hover:border-[rgba(255,255,255,0.35)] transition-all"
            >
              Live <ArrowUpRight size={10} />
            </a>
          )}
          <a
            href={`/projects/${project.slug}`}
            className="font-mono text-[0.625rem] tracking-widest uppercase text-fg flex items-center gap-2 min-h-[44px] hover:text-fg-muted transition-colors"
          >
            View Case Study <ArrowUpRight size={10} />
          </a>
        </div>
      </div>

      {/* Desktop layout — alternating */}
      <div
        className={`hidden md:grid grid-cols-12 gap-6 items-start ${
          reverse ? 'direction-rtl' : ''
        }`}
      >
        {/* Details */}
        <div className={`${reverse ? 'col-start-7 col-span-6' : 'col-span-6'} space-y-6 pt-8`}>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle">
              [ {project.id} ]
            </span>
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
              {project.category}
            </span>
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle ml-auto">
              {project.year}
            </span>
          </div>

          <h3
            className="font-serif font-light text-fg leading-none text-safe group-hover:text-fg transition-colors"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            {project.title}
          </h3>

          <p className="text-fg-muted leading-relaxed max-w-lg" style={{ fontSize: 'clamp(0.8125rem, 1.3vw, 0.9375rem)' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted hover:text-fg transition-colors flex items-center gap-1.5 min-h-[44px]"
              >
                GitHub <ArrowUpRight size={10} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted hover:text-fg transition-colors flex items-center gap-1.5 min-h-[44px]"
              >
                Live Demo <ArrowUpRight size={10} />
              </a>
            )}
            <a
              href={`/projects/${project.slug}`}
              className="font-mono text-[0.625rem] tracking-widest uppercase text-fg flex items-center gap-1.5 border-b border-[rgba(244,241,234,0.2)] pb-0.5 hover:border-[rgba(244,241,234,0.5)] transition-all min-h-[44px]"
            >
              View Case Study <ArrowUpRight size={10} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div
          className={`${
            reverse ? 'col-start-1 col-span-6 row-start-1' : 'col-start-7 col-span-6'
          } aspect-project overflow-hidden bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]`}
        >
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectVisual project={project} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  // Abstract visual based on project index
  const colors: [string, string][] = [
    ['rgba(91,184,212,0.3)', 'rgba(74,127,165,0.15)'],
    ['rgba(232,113,74,0.3)', 'rgba(201,97,42,0.15)'],
    ['rgba(91,184,212,0.2)', 'rgba(232,113,74,0.2)'],
    ['rgba(74,127,165,0.3)', 'rgba(91,184,212,0.15)'],
  ]
  const idx = parseInt(project.id) - 1
  const [c1, c2] = colors[idx % colors.length] ?? colors[0]

  return (
    <div
      className="w-full h-full relative flex items-center justify-center"
      style={{
        background: `radial-gradient(ellipse 80% 80% at 40% 40%, ${c1} 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 70% 70%, ${c2} 0%, transparent 50%), rgba(10,20,26,0.8)`,
      }}
    >
      {/* Abstract grid */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 600 375" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 52 + 2}
              y={row * 48 + 2}
              width="48"
              height="44"
              fill="none"
              stroke="rgba(244,241,234,0.3)"
              strokeWidth="0.5"
            />
          ))
        )}
        <circle cx="300" cy="187" r="60" fill="none" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
        <circle cx="300" cy="187" r="30" fill="none" stroke="rgba(244,241,234,0.15)" strokeWidth="0.5" />
        <line x1="240" y1="187" x2="360" y2="187" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
        <line x1="300" y1="127" x2="300" y2="247" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
      </svg>

      {/* Project label overlay */}
      <div className="relative z-10 text-center">
        <p className="font-serif font-light text-fg-subtle" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
          {project.title}
        </p>
        <p className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase mt-1">
          {project.category}
        </p>
      </div>
    </div>
  )
}
