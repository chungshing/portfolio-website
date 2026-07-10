import { useEffect, useRef, useState } from 'react';
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
            'Started as a way to combine my interest in Formula 1 with learning full-stack development. It now ingests race data, processes it, and surfaces strategy insights through an interactive dashboard.',
        note: '✦ Running live with automated race data updates.',
        stack: ['Spring Boot', 'Next.js', 'PostgreSQL', 'REST API'],
        links: [
            {
                type: 'demo',
                label: 'Live Demo',
                url: 'https://f1-race-intelligence-dashboard.vercel.app',
            },
            {
                type: 'github',
                label: 'GitHub',
                url: 'https://github.com/chungshing/f1-race-intelligence-dashboard',
            },
        ],
    },
    {
        title: 'Golf Swing AI Analysis',
        description:
            'What if a golf swing could be broken down frame by frame and explained like a coach would? This project explores that idea using computer vision and machine learning to turn swing videos into actionable feedback.',
        note: '✦ Built alongside an industry partner through SIT. Code private due to NDA.',
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
        links: [
            {
                type: 'video',
                label: 'Watch Video',
                url: 'https://chungshing.github.io/portfolio-assets/video/golf.mp4',
            },
        ],
    },
    {
        title: 'Hospitality Booking Platform',
        description:
            'Behind every hotel booking is a series of moving parts — availability checks, user authentication, reservation logic. Building it meant connecting those moving parts into one cohesive full-stack system.',
        note: '✦ Exploring SQL and NoSQL in one booking platform.',
        stack: ['Node.js', 'EJS', 'MySQL', 'MongoDB'],
        links: [
            {
                type: 'screenshots',
                label: 'View Screenshots',
                images: [
                    {
                        url: 'https://chungshing.github.io/portfolio-assets/image/archDiagram.png',
                        alt: 'System architecture diagram for the Hospitality Booking Platform',
                    },
                    {
                        url: 'https://chungshing.github.io/portfolio-assets/image/webpage1.png',
                        alt: 'Hostel landing page screenshot',
                    },
                    {
                        url: 'https://chungshing.github.io/portfolio-assets/image/webpage2.png',
                        alt: 'Hostel listing page screenshot',
                    },
                    {
                        url: 'https://chungshing.github.io/portfolio-assets/image/webpage3.png',
                        alt: 'Hostel detail page screenshot',
                    },
                    {
                        url: 'https://chungshing.github.io/portfolio-assets/image/webpage4.png',
                        alt: 'Hostel detail page screenshot, scrolled down',
                    },
                    {
                        url: 'https://chungshing.github.io/portfolio-assets/image/webpage5.png',
                        alt: 'Hostel detail page screenshot, scrolled down further',
                    },
                ],
            },
        ],
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
        role: 'MES Software Engineer',
        company: 'STMicroelectronics',
        type: 'Internship',
        location: 'Singapore',
        mode: 'Hybrid',
        period: 'May 2025 — Apr 2026',
        description:
            'I built full-stack MES applications for semiconductor manufacturing, turning manual processes into workflows that actually made sense.',
        highlights: [
            'Developed production-ready full-stack MES applications using Java and JavaScript.',
            'Automated multiple manufacturing workflows, cutting manual tracking effort by around 80%.',
            'Designed validation and approval workflows that improved data integrity and operational visibility.',
        ],
    },
    {
        role: 'Software Developer / Tester',
        company: 'NCS Pte Ltd',
        type: 'Internship',
        location: 'Singapore',
        mode: 'On-site',
        period: 'Aug 2019 — Feb 2020',
        description:
            'My first real experience shipping code — backend APIs, testing, deployment, and everything in between.',
        highlights: [
            'Developed backend APIs and CRUD functionality using Java.',
            'Built responsive web interfaces with HTML, CSS, and JavaScript.',
            'Performed functional and regression testing to support stable production releases.',
        ],
    },
];

const EDUCATION = [
    {
        role: 'Bachelor of Engineering with Honours in ICT (Software Engineering)',
        org: 'Singapore Institute of Technology • Singapore',
        period: '2022 — 2026',
        description:
            'Four years turning lecture-hall theory into internships, projects, and one unexpected research paper on vishing attacks.',
        link: {
            label: 'Read →',
            title: '✦ Published at IEEE SOLI 2023 • Detecting Vishing Attacks...',
            href: 'https://ieeexplore.ieee.org/document/10425272',
        },
    },
    {
        role: 'Diploma in Multimedia & Infocomm Technology',
        org: 'Nanyang Polytechnic • Singapore',
        period: '2019 — 2022',
        description:
            'I built a strong foundation in programming, web development, databases, and software engineering — the starting point for everything that followed.',
    },
];

export default function App() {
    const contentRef = useRef(null);
    const [journeyTab, setJourneyTab] = useState('experience');
    const [videoModal, setVideoModal] = useState(null);
    const [imageGallery, setImageGallery] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (!imageGallery) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setImageGallery(null);
            if (e.key === 'ArrowLeft') setCurrentImage((i) => Math.max(0, i - 1));
            if (e.key === 'ArrowRight')
                setCurrentImage((i) => Math.min(imageGallery.length - 1, i + 1));
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [imageGallery]);

    useEffect(() => {
        if (!videoModal) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') setVideoModal(null);
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [videoModal]);

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
                            <div className='card'>
                                <p style={{ marginTop: 0 }}>
                                    I enjoy understanding how software works beneath the UI. Most of
                                    what I build leans toward backend systems, full-stack
                                    applications, and automation—building solutions that solve real
                                    problems while teaching me something new.
                                </p>
                                <p style={{ marginBottom: 0 }}>
                                    Most projects begin with a question—an API I want to explore, a
                                    workflow I think could be smoother, or a dataset that deserves a
                                    better way to be visualized. I'd rather ship something small and
                                    working than plan something perfect and stalled.
                                </p>
                            </div>
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
                                    <div
                                        className='card journey-card'
                                        key={e.role + (e.company || e.org)}
                                    >
                                        {journeyTab === 'experience' ? (
                                            <>
                                                <h3>{e.company}</h3>
                                                <p className='journey-role'>{e.role}</p>
                                                <p className='journey-meta mono'>
                                                    {e.type} • {e.location} • {e.mode}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <h3>{e.role}</h3>
                                                <p className='journey-org'>{e.org}</p>
                                            </>
                                        )}
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
                                                <span className='journey-link-title'>
                                                    {e.link.title}
                                                </span>
                                                <a
                                                    href={e.link.href}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='project-btn project-btn-primary'
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
                                            {p.links.map((link, i) => {
                                                if (link.type === 'screenshots') {
                                                    return (
                                                        <button
                                                            key={i}
                                                            className='project-btn project-btn-primary'
                                                            onClick={() => {
                                                                setImageGallery(link.images);
                                                                setCurrentImage(0);
                                                            }}
                                                        >
                                                            {link.label} →
                                                        </button>
                                                    );
                                                }

                                                if (link.type === 'video') {
                                                    return (
                                                        <button
                                                            key={i}
                                                            className='project-btn project-btn-primary'
                                                            onClick={() => setVideoModal(link.url)}
                                                        >
                                                            {link.label} →
                                                        </button>
                                                    );
                                                }

                                                return (
                                                    <a
                                                        key={i}
                                                        className='project-btn project-btn-primary'
                                                        href={link.url}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                    >
                                                        {link.label} →
                                                    </a>
                                                );
                                            })}
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
                                    <div className='card stack-group' key={group}>
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
                            <p className='subtitle'>Coffee's on me. Let's build something.</p>
                            <div className='card'>
                                <p style={{ marginTop: 0 }}>
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
                            </div>
                        </section>
                    </main>

                    <LofiBar />
                </div>

                <aside className='nav-col'>
                    <Navbar scrollRef={contentRef} />
                </aside>
            </div>

            <footer className='site-footer mono'>
                <p className='footer-thanks'>Thanks for reading a page from my notebook.</p>
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
                        <video src={videoModal} controls autoPlay muted />
                    </div>
                </div>
            )}
            {imageGallery && (
                <div className='video-modal-backdrop' onClick={() => setImageGallery(null)}>
                    <div className='image-viewer' onClick={(e) => e.stopPropagation()}>
                        <button
                            className='image-viewer-close'
                            onClick={() => setImageGallery(null)}
                            aria-label='Close'
                        >
                            ×
                        </button>

                        <h3 className='image-title'>Hospitality Booking Platform</h3>

                        <img
                            src={imageGallery[currentImage].url}
                            alt={imageGallery[currentImage].alt}
                            className='viewer-image'
                            loading='lazy'
                        />

                        <div className='viewer-controls'>
                            <button
                                className='project-btn'
                                disabled={currentImage === 0}
                                onClick={() => setCurrentImage(currentImage - 1)}
                            >
                                ← Previous
                            </button>

                            <span className='mono'>
                                {currentImage + 1} / {imageGallery.length}
                            </span>

                            <button
                                className='project-btn'
                                disabled={currentImage === imageGallery.length - 1}
                                onClick={() => setCurrentImage(currentImage + 1)}
                            >
                                Next →
                            </button>
                        </div>

                        <div className='viewer-dots'>
                            {imageGallery.map((_, i) => (
                                <button
                                    key={i}
                                    className={
                                        i === currentImage ? 'viewer-dot active' : 'viewer-dot'
                                    }
                                    onClick={() => setCurrentImage(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
