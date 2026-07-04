import { useEffect, useState } from 'react'

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

export default function HeroCard() {
  const typed = useTypewriter(PHRASES)

  return (
    <div className="hero-card-wrap">
      <div className="notebook-spine" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
      </div>
      <div className="hero-card">
        <p className="eyebrow">available for opportunities</p>
      <h1 className="mono">Chung Shing</h1>
      <p className="hero-role mono">Software Engineer, Singapore</p>
      <p className="hero-status mono">{typed}<span className="cursor">|</span></p>
      <p className="hero-desc">
        I build backend systems and full-stack tools, mostly with a cup of coffee
        nearby.
      </p>
      <div className="hero-links">
        <a className="link-underline" href="https://www.linkedin.com/in/chungshinglai/" target="_blank" rel="noreferrer">linkedin</a>
        <a className="link-underline" href="https://github.com/chungshing" target="_blank" rel="noreferrer">github</a>
        <a className="link-underline" href="mailto:chungshingg@gmail.com">email</a>
      </div>
      <a className="resume-btn mono" href="/resume.pdf" download>
        download resume ↓
      </a>
      </div>
    </div>
  )
}
