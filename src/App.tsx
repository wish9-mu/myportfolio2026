import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Philosophy from './components/sections/Philosophy'
import Contact from './components/sections/Contact'
import ProjectDetail from './pages/ProjectDetail'

function HomePage() {
  return (
    <>
      {/* Skip to content accessibility link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-fg focus:text-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

function ProjectPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-fg focus:text-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <ProjectDetail />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
              <span className="font-mono text-[0.625rem] tracking-widest text-fg-subtle uppercase">404</span>
              <h1 className="font-serif font-light text-fg text-4xl">Page not found.</h1>
              <a href="/" className="font-mono text-[0.625rem] tracking-widest uppercase text-fg-muted border border-[rgba(255,255,255,0.15)] px-4 py-3 hover:text-fg hover:border-[rgba(255,255,255,0.35)] transition-all">
                Back Home
              </a>
            </div>
          }
        />
      </Routes>
    </>
  )
}
