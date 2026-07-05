import { useRef } from 'react';
import './App.css';
import CoderCard from './CoderCard.jsx';
import ContactForm from './ContactForm.jsx';
import HeroCard from './HeroCard.jsx';
import LofiBar from './LofiBar.jsx';
import Navbar from './Navbar.jsx';

// TODO: replace with your real projects
const PROJECTS = [
    {
        title: 'F1 Race Intelligence Dashboard',
        description:
            'Real-time race insights — Spring Boot ingestion layer, in-memory processing engine, Next.js frontend.',
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
];

// TODO: adjust to your real stack
const STACK = [
    'Java',
    'Spring',
    'Python',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Git',
];

// TODO: fill in your real roles
const EXPERIENCE = [
    {
        role: 'Software Engineer Intern',
        org: 'STMicroelectronics',
        period: '2025 — 2026',
        description: 'One or two sentences on scope and impact.',
    },
];

export default function App() {
    const contentRef = useRef(null);

    return (
        <div className='page'>
            <div className='layout'>
                <aside className='hero-col'>
                    <HeroCard />
                    <CoderCard />
                </aside>

                <div className='content-wrap'>
                    <main className='content-col' ref={contentRef}>
                        <section id='about'>
                            <p className='eyebrow'>behind the keyboard</p>
                            <h2>About Me</h2>
                            <p className='subtitle'>Slow builds, steady progress.</p>
                            <p style={{ marginTop: 18 }}>
                                I like pulling ideas apart to understand how they work, then
                                rebuilding them into something practical. Most of what I enjoy
                                building are backend-heavy applications, full-stack projects, and
                                tools that solve real problems while helping me better understand
                                the systems behind them.
                            </p>
                            <p>
                                Most projects begin with a question—an API I want to explore, a
                                workflow I think could be smoother, or a dataset that deserves a
                                better way to be visualized. I'd rather ship something small and
                                working than plan something perfect and stalled.
                            </p>
                            <p className='margin-note'>✎ curiosity is where my projects begin</p>
                        </section>

                        <section id='experience'>
                            <p className='eyebrow'>learning by building</p>
                            <h2>Journey</h2>
                            <p className='subtitle'>From the classroom to real-world software.</p>
                            <div className='project-list'>
                                {EXPERIENCE.map((e) => (
                                    <div className='card' key={e.role + e.org}>
                                        <h3>
                                            {e.role} · {e.org}
                                        </h3>
                                        <p
                                            className='mono hero-status'
                                            style={{ height: 'auto', marginBottom: 10 }}
                                        >
                                            {e.period}
                                        </p>
                                        <p style={{ marginBottom: 0 }}>{e.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id='projects'>
                            <p className='eyebrow'>pages from the notebook</p>
                            <h2>Featured Work</h2>
                            <p className='subtitle'>Small ideas, quietly shipped.</p>
                            <div className='project-list'>
                                {PROJECTS.map((p) => (
                                    <a
                                        className='card project-card'
                                        href={p.href}
                                        target='_blank'
                                        rel='noreferrer'
                                        key={p.title}
                                    >
                                        <h3>{p.title}</h3>
                                        <p>{p.description}</p>
                                        <div className='project-tags'>
                                            {p.stack.map((s) => (
                                                <span className='tag' key={s}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>

                        <section id='skills'>
                            <p className='eyebrow'>on the desk</p>
                            <h2>Toolbox</h2>
                            <p className='subtitle'>Tools I reach for.</p>
                            <div className='stack-grid'>
                                {STACK.map((s) => (
                                    <span className='tag' key={s}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section id='contact'>
                            <p className='eyebrow'>leave a note</p>
                            <h2>Let's Connect</h2>
                            <p className='subtitle'>Coffee's on, let's talk.</p>
                            <p style={{ marginTop: 18 }}>
                                Reach out on{' '}
                                <a
                                    className='link-underline'
                                    href='https://github.com/chungshing'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    GitHub
                                </a>{' '}
                                or drop a note below.
                            </p>
                            <ContactForm />
                        </section>
                    </main>

                    <LofiBar />
                </div>

                <aside className='nav-col'>
                    <Navbar scrollRef={contentRef} />
                </aside>
            </div>

            <footer className='site-footer mono'>build · break · learn · repeat</footer>
        </div>
    );
}
