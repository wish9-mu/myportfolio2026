import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="font-mono text-fg-muted text-sm">Project not found.</p>
        <Link to="/" className="mt-6 font-mono text-[0.625rem] tracking-widest uppercase text-fg border border-[rgba(255,255,255,0.2)] px-5 py-3 hover:border-[rgba(255,255,255,0.4)] transition-all">
          ← Back Home
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-28 pb-24" style={{ paddingTop: 'max(7rem, calc(env(safe-area-inset-top) + 5rem))' }}>
      <div className="container-grid">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted hover:text-fg transition-colors min-h-[44px]"
          >
            <ArrowLeft size={12} /> Back
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-wrap items-baseline gap-4 mb-4">
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle">
              [ {project.id} ]
            </span>
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle uppercase">
              {project.category}
            </span>
            <span className="font-mono text-[0.5625rem] tracking-widest text-fg-subtle">
              {project.year}
            </span>
          </div>
          <h1
            className="font-serif font-light text-fg leading-none text-safe"
            style={{ fontSize: 'var(--text-hero-sm)' }}
          >
            {project.title}
          </h1>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="aspect-project mb-12 md:mb-16 overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]"
        >
          <CaseStudyVisual project={project} />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Main */}
          <div className="md:col-span-8 space-y-12">
            {project.overview && (
              <Section title="Overview">
                <p className="text-fg-muted leading-relaxed">{project.overview}</p>
              </Section>
            )}
            {project.problem && (
              <Section title="Problem">
                <p className="text-fg-muted leading-relaxed">{project.problem}</p>
              </Section>
            )}
            {project.solution && (
              <Section title="Solution">
                <p className="text-fg-muted leading-relaxed">{project.solution}</p>
              </Section>
            )}
            {project.results && project.results.length > 0 && (
              <Section title="Results">
                <ul className="space-y-3">
                  {project.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-[0.5rem] text-fg-subtle mt-1.5">—</span>
                      <span className="text-fg-muted text-sm leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
              <p className="text-label mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="border-t border-[rgba(255,255,255,0.08)] pt-8 space-y-3">
              <p className="text-label mb-4">Links</p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted hover:text-fg transition-colors min-h-[44px]"
                >
                  <Github size={12} /> GitHub <ArrowUpRight size={10} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted hover:text-fg transition-colors min-h-[44px]"
                >
                  <ExternalLink size={12} /> Live Demo <ArrowUpRight size={10} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation to other projects */}
        <div className="mt-20 border-t border-[rgba(255,255,255,0.08)] pt-8">
          <p className="text-label mb-6">More Projects</p>
          <div className="flex flex-wrap gap-4">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted border border-[rgba(255,255,255,0.12)] px-4 py-3 hover:text-fg hover:border-[rgba(255,255,255,0.3)] transition-all min-h-[44px] flex items-center"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-[rgba(255,255,255,0.08)] pt-8">
      <h2 className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-subtle mb-4">
        {title}
      </h2>
      {children}
    </div>
  )
}

function CaseStudyVisual({ project }: { project: { id: string; title: string; category: string } }) {
  const colors: [string, string][] = [
    ['rgba(91,184,212,0.25)', 'rgba(74,127,165,0.12)'],
    ['rgba(232,113,74,0.25)', 'rgba(201,97,42,0.12)'],
    ['rgba(91,184,212,0.18)', 'rgba(232,113,74,0.18)'],
    ['rgba(74,127,165,0.25)', 'rgba(91,184,212,0.12)'],
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
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 62} y={row * 52} width="60" height="50" fill="none" stroke="rgba(244,241,234,0.3)" strokeWidth="0.5" />
          ))
        )}
        <circle cx="600" cy="250" r="100" fill="none" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
        <circle cx="600" cy="250" r="50" fill="none" stroke="rgba(244,241,234,0.15)" strokeWidth="0.5" />
        <line x1="500" y1="250" x2="700" y2="250" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
        <line x1="600" y1="150" x2="600" y2="350" stroke="rgba(244,241,234,0.2)" strokeWidth="0.5" />
      </svg>
      <div className="relative z-10 text-center">
        <p className="font-serif font-light text-fg-subtle" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
          {project.title}
        </p>
        <p className="font-mono text-[0.5rem] tracking-widest text-fg-subtle uppercase mt-2">
          {project.category}
        </p>
      </div>
    </div>
  )
}
