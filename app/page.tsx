'use client';

import { type CSSProperties, type RefObject, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  Gauge,
  Mail,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'BCA Life E-Recruitment',
    description:
      'A focused recruitment platform shaped for clarity, reliable submissions, and maintainable delivery.',
    role: 'Web application · Development',
    href: 'https://salesrecruitment.bcalife.co.id/',
    tone: 'violet',
  },
  {
    number: '02',
    title: 'JOMOO Indonesia',
    description:
      'A polished product-led website maintained for a large catalogue and a growing Indonesian audience.',
    role: 'Website · Development · Maintenance',
    href: 'https://www.jomoo.co.id/id',
    tone: 'ink',
  },
  {
    number: '03',
    title: 'SOSIAGO',
    description:
      'Product engineering for an influencer marketing platform used by brands, creators, and operations teams.',
    role: 'Product engineering · React · Laravel',
    href: 'https://www.sosiago.id/login',
    tone: 'paper',
  },
];

const experience = [
  {
    period: '2026 — NOW',
    role: 'Fullstack Developer',
    company: 'Dgra Komunika',
    copy: 'Building reliable websites and applications with a close eye on performance and server efficiency.',
    stack: 'Next.js · React · Node.js · MySQL · Ansible',
  },
  {
    period: '2022 — 2026',
    role: 'Fullstack Developer',
    company: 'Optify',
    copy: 'Shipping client features, improving landing pages, and tracing recurring issues back to their source.',
    stack: 'Laravel · Python · React · Next.js · Linux',
  },
  {
    period: '2023 — 2024',
    role: 'Product Engineer',
    company: 'SOSIAGO',
    copy: 'Planning product improvements with design, engineering, and the people operating the product every day.',
    stack: 'Laravel · React · MySQL · Product design',
  },
  {
    period: '2022',
    role: 'Developer Intern',
    company: 'Investree VIX',
    copy: 'Completed focused backend and fullstack projects across two virtual internship tracks.',
    stack: 'Spring Boot · Laravel · PostgreSQL',
  },
];

const learning = [
  {
    icon: Database,
    number: '01',
    title: 'Trust the data',
    copy: 'Python, Pandas, SQL, cleaning, transformation, and reproducible ETL workflows.',
  },
  {
    icon: Workflow,
    number: '02',
    title: 'Frame the problem',
    copy: 'Business hypotheses, useful features, time-aware validation, and careful leakage checks.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Ship useful AI',
    copy: 'Turning a strong web engineering foundation into reliable, human-friendly AI products.',
  },
];

const stack = [
  ['Languages', 'PHP · JavaScript · Python · C# · SQL'],
  ['Frameworks', 'React · Next.js · Laravel · ASP.NET'],
  ['Data', 'MySQL · PostgreSQL · Pandas · ETL'],
  ['Infrastructure', 'Docker · Nginx · Ansible · Cloudflare'],
  ['Practice', 'REST APIs · Accessibility · SEO · Performance'],
  ['Direction', 'Applied ML · AI Engineering · Product thinking'],
];

function Mark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`brand-mark ${inverted ? 'brand-mark-inverted' : ''}`} aria-hidden="true">
      AP
    </span>
  );
}

function CarouselControls({
  target,
  label,
}: {
  target: RefObject<HTMLDivElement | null>;
  label: string;
}) {
  const move = (direction: number) => {
    target.current?.scrollBy({
      left: direction * Math.min(target.current.clientWidth * 0.82, 560),
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel-controls" aria-label={`${label} carousel controls`}>
      <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`}>
        <ArrowLeft aria-hidden="true" />
      </button>
      <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`}>
        <ArrowRight aria-hidden="true" />
      </button>
    </div>
  );
}

function ProjectVisual({ tone, title }: { tone: string; title: string }) {
  if (tone === 'ink') {
    return (
      <div className="project-visual project-visual-ink" aria-hidden="true">
        <span className="visual-kicker">CATALOGUE / EXPERIENCE</span>
        <span className="visual-word">JOMOO</span>
        <span className="visual-disc visual-disc-one" />
        <span className="visual-disc visual-disc-two" />
      </div>
    );
  }

  if (tone === 'paper') {
    return (
      <div className="project-visual project-visual-paper" aria-hidden="true">
        <span className="visual-kicker">PRODUCT / PLATFORM</span>
        <div className="network-word">SOSIAGO</div>
        <div className="network-row">
          <span>BRANDS</span><i /><span>CREATORS</span><i /><span>OPS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual-violet" aria-label={`${title} abstract preview`}>
      <span className="visual-kicker">RECRUITMENT / FLOW</span>
      <div className="portal-shell">
        <span>Candidate</span>
        <strong>READY</strong>
        <div className="portal-meter"><i /></div>
      </div>
    </div>
  );
}

export default function Home() {
  const workCarousel = useRef<HTMLDivElement>(null);
  const experienceCarousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      const pageProgress = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
      root.style.setProperty('--hero-progress', heroProgress.toFixed(3));
      root.style.setProperty('--page-progress', pageProgress.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Andhika Pramana, back to top">
          <Mark />
          <span>andhika.</span>
        </a>

        <nav className="nav-capsule" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#ai-journey">AI journey</a>
          <a href="#stack">Toolkit</a>
        </nav>

        <a className="header-cta" href="/CV-Andhika-Pramana.pdf" target="_blank" rel="noreferrer">
          <span>View CV</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section id="top" className="hero-wrap">
        <div className="hero-film">
          <video className="hero-media" autoPlay muted loop playsInline poster="/hero-art.jpg" aria-hidden="true">
            <source src="/hero-loop.webm" type="video/webm" />
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="hero-eyebrow intro-rise">Fullstack developer · learning AI engineering</p>
            <h1 className="intro-rise intro-delay-1">
              Thoughtful web products,
              <br />
              built to move.
            </h1>
            <p className="hero-copy intro-rise intro-delay-2">
              I&apos;m Andhika Pramana. I turn product ideas into dependable web experiences—and
              approach AI with the same curiosity and care.
            </p>
            <a href="#work" className="hero-cta intro-rise intro-delay-3">
              Explore selected work
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-status intro-rise intro-delay-3">
            <span><i />Available for selected collaborations</span>
            <span>Jombang, Indonesia · GMT+7</span>
          </div>
        </div>
      </section>

      <section id="about" className="statement-chapter">
        <div className="statement-sticky">
          <p className="section-kicker" data-reveal>HOW I WORK</p>
          <h2 className="statement-title" data-reveal>
            Engineering products
            <br />
            for <span className="inline-mark"><Mark inverted /></span> humans.
          </h2>
          <p className="statement-copy" data-reveal>
            Clear systems. Useful details. Less theatre in the code, more care in the experience.
          </p>
          <a href="#experience" className="soft-button" data-reveal>
            More about me <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="scroll-cue" aria-hidden="true">SCROLL TO EXPLORE <span>↓</span></div>
        </div>
      </section>

      <section id="work" className="work-chapter">
        <div className="chapter-head">
          <div>
            <p className="section-kicker section-kicker-light" data-reveal>SELECTED WORK</p>
            <h2 data-reveal>Products that solve something real.</h2>
          </div>
          <a href="mailto:andhikapramana807@gmail.com?subject=Project%20conversation" className="soft-button soft-button-light" data-reveal>
            Start a project <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="carousel-bar">
          <span><Code2 aria-hidden="true" /> 03 selected projects</span>
          <CarouselControls target={workCarousel} label="projects" />
        </div>

        <div className="card-carousel" ref={workCarousel}>
          {projects.map((project, index) => (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.title}
              data-reveal
              style={{ '--delay': `${index * 90}ms` } as CSSProperties}
            >
              <ProjectVisual tone={project.tone} title={project.title} />
              <div className="project-card-copy">
                <div className="project-card-topline">
                  <span>{project.number} / 03</span>
                  <ArrowUpRight aria-hidden="true" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-role">{project.role}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-chapter">
        <div className="chapter-head chapter-head-dark">
          <div>
            <p className="section-kicker section-kicker-dark" data-reveal>EXPERIENCE</p>
            <h2 data-reveal>From shipping features to finding what breaks.</h2>
          </div>
          <p className="chapter-side-copy" data-reveal>
            Four chapters across client delivery, product engineering, and a new direction in AI.
          </p>
        </div>

        <div className="carousel-bar carousel-bar-dark">
          <span><Braces aria-hidden="true" /> Professional timeline</span>
          <CarouselControls target={experienceCarousel} label="experience" />
        </div>

        <div className="experience-carousel" ref={experienceCarousel}>
          {experience.map((item, index) => (
            <article
              className="experience-card"
              key={`${item.company}-${item.period}`}
              data-reveal
              style={{ '--delay': `${index * 90}ms` } as CSSProperties}
            >
              <div className="experience-card-head">
                <span>{item.period}</span>
                <span>0{index + 1}</span>
              </div>
              <div>
                <p className="experience-company">{item.company}</p>
                <h3>{item.role}</h3>
                <p>{item.copy}</p>
              </div>
              <span className="experience-stack">{item.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <div className="ticker" aria-label="Design and engineering principles">
        <div>
          <span>RELIABLE BY DEFAULT</span><i />
          <span>CURIOUS BY NATURE</span><i />
          <span>BUILT FOR PEOPLE</span><i />
          <span>RELIABLE BY DEFAULT</span><i />
          <span>CURIOUS BY NATURE</span><i />
          <span>BUILT FOR PEOPLE</span><i />
        </div>
      </div>

      <section id="ai-journey" className="learning-chapter">
        <div className="learning-intro">
          <p className="section-kicker" data-reveal>NEXT CHAPTER</p>
          <h2 data-reveal>
            Strong web roots.
            <br />
            Beginner&apos;s mind in AI.
          </h2>
          <p data-reveal>
            I&apos;m building the fundamentals carefully: evidence before claims, validation before confidence,
            and useful products before impressive demos.
          </p>
        </div>

        <div className="learning-grid">
          {learning.map(({ icon: Icon, number, title, copy }, index) => (
            <article
              className="learning-card"
              key={title}
              data-reveal
              style={{ '--delay': `${index * 100}ms` } as CSSProperties}
            >
              <div className="learning-card-head">
                <span>{number}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="learning-rail"><i /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="stack-chapter">
        <div className="stack-title" data-reveal>
          <p className="section-kicker section-kicker-light">TOOLKIT</p>
          <h2>Tools change. The habit of learning stays.</h2>
        </div>

        <div className="stack-grid">
          {stack.map(([label, items], index) => {
            const Icon = [Code2, Braces, Database, Cloud, Gauge, Terminal][index];
            return (
              <article
                className="stack-card"
                key={label}
                data-reveal
                style={{ '--delay': `${index * 60}ms` } as CSSProperties}
              >
                <div><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
                <h3>{label}</h3>
                <p>{items}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-chapter">
        <div className="contact-sticky">
          <p className="section-kicker" data-reveal>THE NEXT USEFUL THING</p>
          <h2 data-reveal>
            Let&apos;s build it
            <br />
            <span>together.</span>
          </h2>
          <a href="mailto:andhikapramana807@gmail.com?subject=Hello%20Andhika" className="contact-button" data-reveal>
            Start a conversation <Mail aria-hidden="true" />
          </a>
          <Mark />
        </div>
      </section>

      <footer className="footer-wrap">
        <div className="footer-panel">
          <div className="footer-brand">
            <Mark />
            <h2>Open to thoughtful collaborations.</h2>
            <p>Fullstack development, product engineering, performance, and the growing space between software and AI.</p>
          </div>

          <div className="footer-links">
            <div>
              <span>Navigate</span>
              <a href="#about">About</a>
              <a href="#work">Selected work</a>
              <a href="#experience">Experience</a>
            </div>
            <div>
              <span>Continue</span>
              <a href="#ai-journey">AI journey</a>
              <a href="#stack">Toolkit</a>
              <a href="/CV-Andhika-Pramana.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </div>
            <div>
              <span>Elsewhere</span>
              <a href="mailto:andhikapramana807@gmail.com">Email</a>
              <a href="https://github.com/vbuxx" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/andhika-pramana" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Andhika Pramana</span>
          <span>Jombang, Indonesia · GMT+7</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
