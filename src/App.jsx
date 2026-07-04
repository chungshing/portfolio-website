import { useRef } from 'react'
import HeroCard from './HeroCard.jsx'
import CoderCard from './CoderCard.jsx'
import Navbar from './Navbar.jsx'
import LofiBar from './LofiBar.jsx'
import ContactForm from './ContactForm.jsx'
import './App.css'

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
  const contentRef = useRef(null)

  return (
    <div className="page">
      <div className="rain" aria-hidden="true" />

      <div className="layout">
        <aside className="hero-col">
          <HeroCard />
          <CoderCard />
        </aside>

        <div className="content-wrap">
          <main className="content-col" ref={contentRef}>
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

            <section id="skills">
              <p className="eyebrow">on the desk</p>
              <h2>Tools &amp; tech</h2>
              <div className="stack-grid">
                {STACK.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </section>

            <section id="contact">
              <p className="eyebrow">leave a note</p>
              <h2>Get in touch</h2>
              <p style={{ marginTop: 18 }}>
                Reach out on{' '}
                <a className="link-underline" href="https://github.com/chungshing" target="_blank" rel="noreferrer">GitHub</a>
                {' '}or drop a note below.
              </p>
              <ContactForm />
            </section>
          </main>

          <LofiBar />
        </div>

        <aside className="nav-col">
          <Navbar scrollRef={contentRef} />
        </aside>
      </div>

      <footer className="site-footer mono">build · break · learn · repeat</footer>
    </div>
  )
}
