'use client';

import { type RefObject, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePortfolioMotion } from '@/hooks/use-portfolio-motion';
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
  Pause,
  Play,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Linkara',
    description:
      'A zero-to-one digital placement platform I conceived, designed, engineered, launched, and now grow—already home to 120 registered users.',
    role: 'Founder · Product · Full Stack Engineering',
    href: 'https://linkara.id',
    tone: 'paper',
  },
  {
    number: '02',
    title: 'BCA Life E-Recruitment',
    description:
      'A modular hiring platform delivered solo from planning to go-live in two months—turning a complex recruitment flow into a clear, dependable journey.',
    role: 'Solo Developer · Laravel · Livewire',
    href: 'https://salesrecruitment.bcalife.co.id/',
    tone: 'violet',
  },
  {
    number: '03',
    title: 'JOMOO Indonesia',
    description:
      'A large-catalogue website delivered in 30 working days—half the original timeline—with an AI-assisted workflow that cut estimated project cost by 60–70%.',
    role: 'Website · AI-assisted delivery · Maintenance',
    href: 'https://www.jomoo.co.id/id',
    tone: 'ink',
  },
];

const experience = [
  {
    period: 'JUN 2026 — NOW',
    role: 'Founder & Software Engineer',
    company: 'Linkara.id',
    copy: 'Taking a digital placement product from first idea to 120 registered users—owning product, design, architecture, code, deployment, and early growth.',
    stack: 'TanStack Start · Prisma · Redis · MySQL · Midtrans · S3',
  },
  {
    period: 'APR — JUN 2026',
    role: 'Full Stack Developer',
    company: 'Dgra Komunika',
    copy: 'Built asix.id with Next.js and Strapi, then tuned caching, assets, and deployment for a faster, leaner production experience.',
    stack: 'Next.js · Strapi · MySQL · Docker · Linux · Ansible',
  },
  {
    period: 'OCT 2022 — MAR 2026',
    role: 'Full Stack Developer',
    company: 'PT Optify Intermedia Pratama',
    copy: 'Shipped client platforms from brief to go-live, solved production issues at the root, and used AI-assisted workflows to move faster without lowering the bar.',
    stack: 'Laravel · Python · React · Next.js · Linux',
  },
  {
    period: '2024',
    role: 'Freelance Web Developer',
    company: 'PT Alsad Indo Bisnis Jaya',
    copy: 'Created a practical business website for a growing micro F&B brand.',
    stack: 'Independent delivery · Small-business web',
  },
  {
    period: 'MAY — JUL 2022',
    role: 'Full Stack & Backend Intern',
    company: 'Investree',
    copy: 'Built the early backend and full-stack foundations that turned classroom knowledge into working systems.',
    stack: 'Spring Boot · Laravel · PostgreSQL',
  },
];

const learning = [
  {
    icon: Database,
    number: '01',
    title: 'Build the data spine',
    copy: 'Practising Python, pandas, NumPy, SQL, and data pipelines—the quiet infrastructure behind useful intelligence.',
  },
  {
    icon: Workflow,
    number: '02',
    title: 'Ground the intelligence',
    copy: 'Exploring embeddings, semantic search, RAG, model evaluation, Pinecone, and FAISS so answers have something solid beneath them.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Ship it like software',
    copy: 'Bringing APIs, agents, observability, security, and cost awareness together with FastAPI, LangGraph, Docker, and Cloud Run.',
  },
];

const stack = [
  ['Languages', 'PHP · JavaScript · Python · SQL · HTML · CSS'],
  ['Product layer', 'Laravel · React · Next.js · TanStack Start · Livewire'],
  [
    'Backend & data',
    'Node.js · MySQL · PostgreSQL · Prisma · Redis · REST APIs',
  ],
  ['Integrations', 'S3 object storage · Midtrans · iPaymu · Gemini API'],
  [
    'Delivery',
    'GitHub Actions · Docker · Nginx · Ansible · Linux · Cloudflare',
  ],
  ['Next frontier', 'Machine learning · RAG · Agentic AI · Model evaluation'],
];

function Mark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={`brand-mark ${inverted ? 'brand-mark-inverted' : ''}`}
      aria-hidden="true"
    >
      <Image
        className="brand-mark-image"
        src="/logo-ap.png"
        alt=""
        width={1254}
        height={1254}
      />
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
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    });
  };

  return (
    <div
      className="carousel-controls"
      aria-label={`${label} carousel controls`}
    >
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label={`Previous ${label}`}
      >
        <ArrowLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label={`Next ${label}`}
      >
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
        <span className="visual-kicker">ZERO TO ONE / PLATFORM</span>
        <div className="network-word">LINKARA</div>
        <div className="network-row">
          <span>PEOPLE</span>
          <i />
          <span>PLACEMENTS</span>
          <i />
          <span>GROWTH</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-visual project-visual-violet"
      aria-label={`${title} abstract preview`}
    >
      <span className="visual-kicker">RECRUITMENT / FLOW</span>
      <div className="portal-shell">
        <span>Candidate</span>
        <strong>READY</strong>
        <div className="portal-meter">
          <i />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const site = useRef<HTMLElement>(null);
  const [motionPaused, setMotionPaused] = useState(false);
  const workCarousel = useRef<HTMLDivElement>(null);
  const experienceCarousel = useRef<HTMLDivElement>(null);
  usePortfolioMotion(site, motionPaused);

  useLayoutEffect(() => {
    if (experienceCarousel.current) {
      experienceCarousel.current.scrollLeft = 0;
    }
  }, []);

  return (
    <main className="site-shell" ref={site} data-motion-paused={motionPaused}>
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <div className="site-header-inner">
          <a
            href="#top"
            className="brand"
            aria-label="Andhika Pramana, back to top"
          >
            <Mark />
            <span>andhika.</span>
          </a>

          <nav className="nav-capsule" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#ai-journey">AI chapter</a>
            <a href="#stack">Toolkit</a>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="motion-toggle"
              aria-label={
                motionPaused ? 'Resume animations' : 'Pause animations'
              }
              aria-pressed={motionPaused}
              title={motionPaused ? 'Resume animations' : 'Pause animations'}
              onClick={() => setMotionPaused((value) => !value)}
            >
              {motionPaused ? (
                <Play aria-hidden="true" />
              ) : (
                <Pause aria-hidden="true" />
              )}
            </button>
            <a
              className="header-cta"
              href="/CV-Andhika-Pramana.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>View CV</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="hero-wrap">
        <div className="hero-film">
          <video
            className="hero-media"
            muted
            loop
            playsInline
            poster="/hero-art.jpg"
            aria-hidden="true"
          >
            <source src="/hero-loop.webm" type="video/webm" />
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="hero-eyebrow">
              Full Stack Developer · Founder · AI Engineer in training
            </p>
            <h1 aria-label="Web products with a pulse.">
              <span className="line-mask" aria-hidden="true">
                <span className="hero-line">Web products</span>
              </span>
              <span className="line-mask" aria-hidden="true">
                <span className="hero-line">with a pulse.</span>
              </span>
            </h1>
            <p className="hero-copy">
              I&apos;m Andhika Pramana. For nearly four years, I&apos;ve turned
              ambiguous briefs into launch-ready systems. Now I&apos;m taking
              that product instinct into AI.
            </p>
            <a href="#work" className="hero-cta">
              Explore selected work
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-status">
            <span>
              <i />
              Available immediately · Open to relocation
            </span>
            <span>Jombang, Indonesia · GMT+7</span>
          </div>
        </div>
      </section>

      <section id="about" className="statement-chapter">
        <div className="statement-sticky">
          <p className="section-kicker" data-reveal>
            WHAT I BRING
          </p>
          <h2 className="statement-title">
            <span className="statement-word">I</span>{' '}
            <span className="statement-word">make</span>{' '}
            <span className="statement-word">complex</span>
            <br />
            <span className="statement-word">feel</span>{' '}
            <span className="inline-mark">
              <Mark inverted />
            </span>{' '}
            <span className="statement-word">inevitable.</span>
          </h2>
          <p className="statement-copy" data-reveal>
            From first sketch to go-live, I connect product decisions, code,
            infrastructure, and the awkward edge cases between them—so the
            experience stays calm even when the work is not.
          </p>
          <a href="#experience" className="soft-button" data-reveal>
            More about me <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="scroll-cue" aria-hidden="true">
            SCROLL TO EXPLORE <span>↓</span>
          </div>
        </div>
      </section>

      <section id="work" className="work-chapter">
        <div className="chapter-head">
          <div>
            <p className="section-kicker section-kicker-light" data-reveal>
              SELECTED WORK
            </p>
            <h2 data-reveal>Proof lives in what ships.</h2>
          </div>
          <a
            href="mailto:andhikapramana807@gmail.com?subject=Project%20conversation"
            className="soft-button soft-button-light"
            data-reveal
          >
            Start a project <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="carousel-bar">
          <span>
            <Code2 aria-hidden="true" /> 03 selected projects
          </span>
          <CarouselControls target={workCarousel} label="projects" />
        </div>

        <div className="card-carousel" ref={workCarousel}>
          {projects.map((project) => (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.title}
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
            <p className="section-kicker section-kicker-dark" data-reveal>
              EXPERIENCE
            </p>
            <h2 data-reveal>Nearly four years, one continuous build.</h2>
          </div>
          <p className="chapter-side-copy" data-reveal>
            From client delivery to building my own product—and now widening the
            system with AI.
          </p>
        </div>

        <div className="carousel-bar carousel-bar-dark">
          <span>
            <Braces aria-hidden="true" /> Professional timeline
          </span>
          <CarouselControls target={experienceCarousel} label="experience" />
        </div>

        <div className="experience-carousel" ref={experienceCarousel}>
          <div className="experience-track">
            {experience.map((item, index) => (
              <article
                className="experience-card"
                key={`${item.company}-${item.period}`}
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
        </div>
      </section>

      <div className="ticker" aria-label="Design and engineering principles">
        <div className="ticker-track" aria-hidden="true">
          <div className="ticker-group">
            <span>RELIABLE BY DEFAULT</span>
            <i />
            <span>CURIOUS BY NATURE</span>
            <i />
            <span>BUILT FOR PEOPLE</span>
            <i />
          </div>
          <div className="ticker-group">
            <span>RELIABLE BY DEFAULT</span>
            <i />
            <span>CURIOUS BY NATURE</span>
            <i />
            <span>BUILT FOR PEOPLE</span>
            <i />
          </div>
        </div>
      </div>

      <section id="ai-journey" className="learning-chapter">
        <div className="learning-intro">
          <p className="section-kicker" data-reveal>
            IN PROGRESS · REWORK ACADEMY
          </p>
          <h2 data-reveal>
            AI is the new chapter.
            <br />
            Engineering is the through-line.
          </h2>
          <p data-reveal>
            I&apos;m currently training across data pipelines, machine learning,
            transformers, RAG, agentic systems, cloud deployment, and production
            AI design—learning the system around the model, not just the demo.
          </p>
        </div>

        <div className="learning-grid">
          {learning.map(({ icon: Icon, number, title, copy }) => (
            <article className="learning-card" key={title}>
              <div className="learning-card-head">
                <span>{number}</span>
                <Icon aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="learning-rail">
                <i />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="stack-chapter">
        <div className="stack-title" data-reveal>
          <p className="section-kicker section-kicker-light">TOOLKIT</p>
          <h2>A toolkit built for the whole journey.</h2>
        </div>

        <div className="stack-grid">
          {stack.map(([label, items], index) => {
            const Icon = [Code2, Braces, Database, Cloud, Gauge, Terminal][
              index
            ];
            return (
              <article className="stack-card" key={label}>
                <div>
                  <Icon aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{label}</h3>
                <p>{items}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-chapter">
        <div className="contact-sticky">
          <div className="contact-orbit" aria-hidden="true" />
          <p className="section-kicker" data-reveal>
            THE NEXT USEFUL THING
          </p>
          <h2 aria-label="Bring the brief. I'll bring the build.">
            <span className="line-mask" aria-hidden="true">
              <span className="contact-line">Bring the brief.</span>
            </span>
            <span className="line-mask contact-accent" aria-hidden="true">
              <span className="contact-line">I&apos;ll bring the build.</span>
            </span>
          </h2>
          <a
            href="mailto:andhikapramana807@gmail.com?subject=Hello%20Andhika"
            className="contact-button"
            data-reveal
          >
            Start a conversation <Mail aria-hidden="true" />
          </a>
          <Mark />
        </div>
      </section>

      <footer className="footer-wrap">
        <div className="footer-panel">
          <div className="footer-brand">
            <Mark />
            <h2>Open to the right problem.</h2>
            <p>
              Full Stack development, backend engineering, product ownership,
              performance, and the growing space between software and AI.
            </p>
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
              <a href="#ai-journey">AI chapter</a>
              <a href="#stack">Toolkit</a>
              <a
                href="/CV-Andhika-Pramana.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
            <div>
              <span>Elsewhere</span>
              <a href="mailto:andhikapramana807@gmail.com">Email</a>
              <a
                href="https://github.com/vbuxx"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/andhika-pramana"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.credly.com/users/andhika-pramana-putra"
                target="_blank"
                rel="noreferrer"
              >
                Credly
              </a>
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
