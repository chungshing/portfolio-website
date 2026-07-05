import { useRef, useState } from 'react';
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

const EXPERIENCE = [
    {
        role: 'MES Software Engineer Intern',
        org: 'STMicroelectronics • Singapore',
        period: 'May 2025 — Apr 2026',
        description:
            'Spent a year building and maintaining production-critical Manufacturing Execution System (MES) applications used in semiconductor manufacturing. Working closely with process engineers, I translated manufacturing requirements into full-stack solutions that improved workflows, reliability, and day-to-day operations.',
        highlights: [
            'Built production-ready full-stack workflows using Java and JavaScript.',
            'Automated manufacturing processes, reducing manual tracking effort by around 80%.',
            'Designed validation and approval flows that improved data integrity and real-time visibility.',
        ],
    },
    {
        role: 'Software Developer / Tester Intern',
        org: 'NCS Pte Ltd • Singapore',
        period: 'Mar 2023 — Aug 2023',
        description:
            'My first experience working within a professional software team, contributing to both development and quality assurance. It gave me a better understanding of how features move from implementation to testing before reaching production.',
        highlights: [
            'Developed backend APIs and CRUD functionality using Java.',
            'Built responsive web pages with HTML and JavaScript.',
            'Performed QA testing and helped ensure stable production releases.',
        ],
    },
];

const EDUCATION = [
    {
        role: 'Bachelor of Engineering with Honours in ICT (Software Engineering)',
        org: 'Singapore Institute of Technology • Singapore',
        period: '2022 — 2026',
        description:
            'This was where I built the foundations of software engineering through coursework, internships, and plenty of late-night debugging sessions. It also gave me opportunities to work on research and larger team projects outside the classroom.',
        link: {
            label: 'Read →',
            title: 'Co-authored "An Effective Approach to Detecting Vishing Attacks..."',
            href: 'https://ieeexplore.ieee.org/document/10425272',
        },
    },
    {
        role: 'Diploma in Multimedia & Infocomm Technology',
        org: 'Nanyang Polytechnic • Singapore',
        period: '2019 — 2022',
        description:
            'Built my foundations in programming, web development, databases, and software design while discovering a passion for creating practical applications.',
    },
];

export default function App() {
    const contentRef = useRef(null);
    const [journeyTab, setJourneyTab] = useState('experience');

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

                        <hr className='section-divider' />

                        <section id='experience'>
                            <p className='eyebrow'>learning by building</p>
                            <h2>Journey</h2>
                            <p className='subtitle'>From the classroom to real-world software.</p>

                            <div className='notebook-tabs mono'>
                                <button
                                    className={`notebook-tab ${journeyTab === 'experience' ? 'active' : ''}`}
                                    onClick={() => setJourneyTab('experience')}
                                >
                                    work
                                </button>
                                <button
                                    className={`notebook-tab ${journeyTab === 'education' ? 'active' : ''}`}
                                    onClick={() => setJourneyTab('education')}
                                >
                                    studies
                                </button>
                            </div>

                            <div className='project-list'>
                                {(journeyTab === 'experience' ? EXPERIENCE : EDUCATION).map((e) => (
                                    <div className='card journey-card' key={e.role + e.org}>
                                        <h3>{e.role}</h3>
                                        <p className='journey-org'>{e.org}</p>
                                        <p
                                            className='mono hero-status'
                                            style={{ height: 'auto', marginBottom: 6 }}
                                        >
                                            {e.period}
                                        </p>
                                        <p style={{ marginBottom: 0 }}>{e.description}</p>
                                        {e.highlights && (
                                            <ul className='journey-highlights'>
                                                {e.highlights.map((h, i) => (
                                                    <li key={i}>{h}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {e.link && (
                                            <p className='journey-link mono'>
                                                ✦ {e.link.title} —{' '}
                                                <a
                                                    href={e.link.href}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='link-underline'
                                                >
                                                    {e.link.label}
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className='section-divider' />

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

                        <hr className='section-divider' />

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

                        <hr className='section-divider' />

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
