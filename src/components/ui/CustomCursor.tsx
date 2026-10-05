import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function CustomCursor() {
  const isPointerFine = useMediaQuery('(pointer: fine) and (hover: hover)')
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHoveringProject, setIsHoveringProject] = useState(false)
  const [isHoveringLink, setIsHoveringLink] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    if (!isPointerFine) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const loop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="project"]')) setIsHoveringProject(true)
      if (target.closest('a, button, [role="button"]')) setIsHoveringLink(true)
    }
    const handleLeave = () => {
      setIsHoveringProject(false)
      setIsHoveringLink(false)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleEnter)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleEnter)
      window.removeEventListener('mouseout', handleLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [isPointerFine])

  if (!isPointerFine) return null

  const size = isHoveringProject ? 72 : isHoveringLink ? 20 : 10
  const showText = isHoveringProject

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `1px solid rgba(244,241,234,${isHoveringProject ? 0.8 : 0.5})`,
          background: isHoveringProject
            ? 'rgba(244,241,234,0.1)'
            : 'rgba(244,241,234,0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
        }}
      >
        {showText && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--fg)',
            }}
          >
            VIEW
          </span>
        )}
      </div>
    </div>
  )
}
