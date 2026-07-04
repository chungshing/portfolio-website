import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import LofiBar from './LofiBar.jsx'
import './App.css'

const PHRASES = ['coffee brewing...', 'code compiling...', 'ideas loading...']

function useTypewriter(phrases, speed = 55, pause = 1400) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[i % phrases.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((n) => n + 1)
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, i, phrases, speed, pause])

  return text
}

// TODO: replace with your real projects
const PROJECTS = [
  {
    title: 'F1 Race Intelligence Dashboard',
    description: 'Real-time race insights — Spring Boot ingestion layer, in-memory processing engine, Next.js frontend.',
    stack: ['Spring Boot', 'Next.js', 'PostgreSQL'],
    href: 'https://github.com/chungshing/f1-race-intelligence-dashboard',
  },
  {
    title: 'Project two',
    description: 'One or two sentences on what it does and the problem it solves.',
    stack: ['Python', 'Tkinter'],
    href: '#',
  },
  {
    title: 'Project three',
    description: 'One or two sentences on what it does and the problem it solves.',
    stack: ['React', 'Node.js'],
    href: '#',
  },
]

// TODO: adjust to your real stack
const STACK = ['Java', 'Spring', 'Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Git']

// TODO: fill in your real roles
const EXPERIENCE = [
  {
    role: 'Software Engineer Intern',
    org: 'STMicroelectronics',
    period: '2025 — 2026',
    description: 'One or two sentences on scope and impact.',
  },
]

export default function App() {
  const typed = useTypewriter(PHRASES)

  return (
    <>
      <div className="rain" aria-hidden="true" />

      <Navbar />

      <header className="hero" id="hero">
        <p className="eyebrow">available for opportunities</p>
        <h1>Chung Shing</h1>
        <p className="hero-role mono">Software Engineer, based in Singapore</p>
        <p className="hero-status mono">{typed}<span className="cursor">|</span></p>
        <p className="hero-desc">
          I build backend systems and full-stack tools, mostly with a cup of coffee
          nearby. This is where I keep the things I've made and the things I'm still learning.
        </p>
        <div className="hero-links">
          <a className="link-underline" href="https://www.linkedin.com/in/chungshinglai/" target="_blank" rel="noreferrer">linkedin</a>
          <a className="link-underline" href="https://github.com/chungshing" target="_blank" rel="noreferrer">github</a>
          <a className="link-underline" href="mailto:chungshingg@gmail.com">email</a>
        </div>
      </header>

      <section id="about">
        <p className="eyebrow">about</p>
        <h2>What I'm about</h2>
        <p style={{ marginTop: 18 }}>
          {/* TODO: replace with your own 2–4 sentence bio */}
          I enjoy turning ideas into working software and understanding how systems
          work under the hood. Most of my time goes into backend architecture and
          data-heavy tools, with the occasional detour into whatever's interesting
          that week.
        </p>
      </section>

      <section id="experience">
        <p className="eyebrow">the grind</p>
        <h2>Experience</h2>
        <div className="project-list">
          {EXPERIENCE.map((e) => (
            <div className="card" key={e.role + e.org}>
              <h3>{e.role} · {e.org}</h3>
              <p className="mono hero-status" style={{ height: 'auto', marginBottom: 10 }}>{e.period}</p>
              <p style={{ marginBottom: 0 }}>{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <p className="eyebrow">on the desk</p>
        <h2>Tools &amp; tech</h2>
        <div className="stack-grid">
          {STACK.map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section id="projects">
        <p className="eyebrow">notebook</p>
        <h2>Things I've built</h2>
        <div className="project-list">
          {PROJECTS.map((p) => (
            <a className="card project-card" href={p.href} target="_blank" rel="noreferrer" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact">
        <p className="eyebrow">leave a note</p>
        <h2>Get in touch</h2>
        <p style={{ marginTop: 18 }}>
          Reach out at{' '}
          <a className="link-underline" href="mailto:chungshingg@gmail.com">chungshingg@gmail.com</a>{' '}
          or find me on{' '}
          <a className="link-underline" href="https://www.linkedin.com/in/chungshinglai/" target="_blank" rel="noreferrer">LinkedIn</a>.
        </p>
      </section>

      <footer className="footer mono">build · break · learn · repeat</footer>

      <LofiBar />
    </>
  )
}
