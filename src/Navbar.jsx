import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ scrollRef }) {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const root = scrollRef?.current
    if (!root) return
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return

    const THRESHOLD = 100 // px from top of scroll box counted as "current"

    const onScroll = () => {
      const rootScrolls = root.scrollHeight > root.clientHeight + 4
      const atBottom = rootScrolls
        ? root.scrollHeight - root.scrollTop - root.clientHeight < 4
        : window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActive(sections[sections.length - 1].id)
        return
      }
      const rootTop = root.getBoundingClientRect().top
      let current = sections[0].id
      for (const sec of sections) {
        const rel = sec.getBoundingClientRect().top - rootTop
        if (rel <= THRESHOLD) current = sec.id
      }
      setActive(current)
    }

    onScroll()
    root.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      root.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [scrollRef])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="navbar">
      {LINKS.map((l) => (
        <button
          key={l.id}
          type="button"
          onClick={() => goTo(l.id)}
          className={`mono navbar-link ${active === l.id ? 'is-active' : ''}`}
        >
          {l.label}
        </button>
      ))}
    </nav>
  )
}
