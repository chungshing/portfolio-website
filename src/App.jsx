import { useRef, useState } from 'react';
import './App.css';
import CoderCard from './CoderCard.jsx';
import ContactForm from './ContactForm.jsx';
import HeroCard from './HeroCard.jsx';
import LofiBar from './LofiBar.jsx';
import Navbar from './Navbar.jsx';

const PROJECTS = [
    {
        title: 'F1 Race Intelligence Dashboard',
        description:
            'Started as a way to combine my interest in Formula 1 with learning full-stack development. It now pulls in race data, processes it, and surfaces strategy insights through an interactive dashboard.',
        note: '✦ Running live with automated race data updates.',
        stack: ['Spring Boot', 'Next.js', 'PostgreSQL', 'REST API'],
        github: 'https://github.com/chungshing/f1-race-intelligence-dashboard',
        demo: 'https://f1-race-intelligence-dashboard.vercel.app',
    },
    {
        title: 'Golf Swing AI Analysis',
        description:
            'What if a golf swing could be broken down frame by frame and explained like a coach would? This project explores that idea using computer vision and machine learning to turn swing videos into actionable feedback.',
        note: '✦ Built alongside an industry partner through SIT.',
        stack: [
            'Python',
            'Computer Vision',
            'TensorFlow',
            'MediaPipe',
            'OpenCV',
            'Flask',
            'MongoDB',
            'Google Cloud',
        ],
        github: null,
        video: 'https://chungshing.github.io/portfolio-assets/video/golf.mp4',
    },
    {
        title: 'Hospitality Booking Platform',
        description:
            'Behind every hotel booking is a series of moving parts — availability checks, user authentication, reservation logic. Building this platform meant designing and connecting those pieces into one cohesive full-stack system.',
        note: '✦ Exploring SQL and NoSQL in one booking platform.',
        stack: ['Node.js', 'EJS', 'MySQL', 'MongoDB'],
        github: 'https://github.com/chungshing/hospitality-booking-platform',
        demo: null,
    },
];

const STACK = {
    Frontend: [
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
    Backend: [
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'Spring', icon: 'devicon-spring-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'PHP', icon: 'devicon-php-plain colored' },
    ],
    Data: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MySQL', icon: 'devicon-mysql-original colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    ],
    Workflow: [
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'SVN', icon: 'devicon-subversion-original colored' },
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Postman', icon: 'devicon-postman-plain colored' },
    ],
};

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
    const [videoModal, setVideoModal] = useState(null);

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
                            <p className='subtitle'>Projects that taught me something.</p>
                            <div className='project-list'>
                                {PROJECTS.map((p) => (
                                    <div className='card project-card' key={p.title}>
                                        <h3>{p.title}</h3>
                                        <p>{p.description}</p>
                                        {p.note && <p className='project-note mono'>{p.note}</p>}
                                        <div className='project-tags'>
                                            {p.stack.map((s) => (
                                                <span className='tag' key={s}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                        <div className='project-actions'>
                                            {p.demo && (
                                                <a
                                                    className='project-btn project-btn-primary'
                                                    href={p.demo}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    Live Demo →
                                                </a>
                                            )}
                                            {p.video && (
                                                <button
                                                    className='project-btn project-btn-primary'
                                                    onClick={() => setVideoModal(p.video)}
                                                >
                                                    Live Demo →
                                                </button>
                                            )}
                                            {p.github && (
                                                <a
                                                    className='project-btn'
                                                    href={p.github}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                >
                                                    GitHub →
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <hr className='section-divider' />

                        <section id='skills'>
                            <p className='eyebrow'>on the desk</p>
                            <h2>Toolbox</h2>
                            <p className='subtitle'>Tools I reach for.</p>
                            <div className='stack-columns'>
                                {Object.entries(STACK).map(([group, tools]) => (
                                    <div className='stack-group' key={group}>
                                        <p className='stack-group-label mono'>{group}</p>
                                        <div className='stack-grid'>
                                            {tools.map((t) => (
                                                <span className='tag' key={t.name}>
                                                    <i className={t.icon}></i> {t.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className='margin-note'>
                                ✎ The stack changes, but the goal stays the same: build something
                                useful.
                            </p>
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

            <footer className='site-footer mono'>
                <p className='footer-thanks'>Thanks for reading a few pages from my notebook.</p>
                <p className='footer-quote'>build · break · learn · repeat</p>
                <p className='footer-copyright'>© {new Date().getFullYear()} Chung Shing</p>
            </footer>

            {videoModal && (
                <div className='video-modal-backdrop' onClick={() => setVideoModal(null)}>
                    <div className='video-modal' onClick={(e) => e.stopPropagation()}>
                        <button
                            className='video-modal-close'
                            onClick={() => setVideoModal(null)}
                            aria-label='Close video'
                        >
                            ✕
                        </button>
                        <video src={videoModal} controls autoPlay />
                    </div>
                </div>
            )}
        </div>
    );
}
