import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Ghost,
  Mail,
  Sparkles,
  Workflow,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Automobile data pipeline',
    description:
      'A reproducible ETL workflow that turns a messy automobile dataset into a clean, validated, model-ready table.',
    tags: ['Python', 'Pandas', 'Data quality'],
    accentClass: 'bg-buttercream',
    detail: '205 raw rows → 198 trusted rows',
  },
  {
    number: '02',
    title: 'Operational ML blueprint',
    description:
      'A practical framework for moving from a business hypothesis to time-aware validation and a safe human-in-the-loop pilot.',
    tags: ['Machine learning', 'System design', 'MLOps'],
    accentClass: 'bg-ghost-lavender',
    detail: 'Hypothesis → validation → pilot',
  },
  {
    number: '03',
    title: 'OSINT method review',
    description:
      'Evidence-first research that separates visible signals, tool inference, automation, and the conclusions data can actually support.',
    tags: ['OSINT', 'NLP', 'Research'],
    accentClass: 'bg-blush',
    detail: 'Signals → evidence → limits',
  },
];

const capabilities = [
  {
    icon: Database,
    eyebrow: '01 / DATA',
    title: 'Reliable foundations',
    copy: 'Cleaning, validation, transformation, and pipelines built to be inspected—not just run.',
  },
  {
    icon: BrainCircuit,
    eyebrow: '02 / INTELLIGENCE',
    title: 'Useful machine learning',
    copy: 'Business-led feature thinking, honest evaluation, and models designed around real decisions.',
  },
  {
    icon: Workflow,
    eyebrow: '03 / SYSTEMS',
    title: 'Human-aware delivery',
    copy: 'Simple interfaces and operational flows that leave room for context, judgment, and iteration.',
  },
];

const stack = [
  'Python',
  'Pandas',
  'SQL',
  'Scikit-learn',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Git',
];

function GhostMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={`inline-flex size-10 items-center justify-center rounded-full sm:size-11 ${
        inverted
          ? 'bg-paper-white text-aubergine'
          : 'bg-aubergine text-paper-white'
      }`}
      aria-hidden="true"
    >
      <Ghost className="size-5 sm:size-[22px]" strokeWidth={1.7} />
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper-white text-obsidian">
      <header className="relative z-50 mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine"
          aria-label="Andhika Pramana, back to top"
        >
          <GhostMark />
          <span className="text-[17px] tracking-[-0.025em] text-aubergine">
            Andhika Pramana
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-ash bg-paper-white p-1.5 md:flex"
          aria-label="Main navigation"
        >
          {[
            ['About', '#about'],
            ['Work', '#work'],
            ['Approach', '#approach'],
            ['Stack', '#stack'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2.5 text-[15px] text-aubergine transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-aubergine"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:andhikapramana101@gmail.com?subject=Let%27s%20work%20together"
          className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-ghost-lavender px-4 text-[15px] text-aubergine shadow-lavender transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine sm:px-5"
        >
          <span className="hidden sm:inline">Let&apos;s talk</span>
          <Mail className="size-4" strokeWidth={1.8} />
        </a>
      </header>

      <section id="top" className="px-3 sm:px-5 lg:px-8">
        <div className="relative mx-auto min-h-[calc(100svh-108px)] max-w-[1390px] overflow-hidden rounded-[32px] bg-aubergine text-paper-white sm:rounded-[40px]">
          <div className="mx-auto flex min-h-[calc(100svh-108px)] max-w-[1220px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4 fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-paper-white/20 px-4 py-2 text-[13px] text-paper-white/80">
                <span className="size-2 rounded-full bg-mint-signal" />
                Available for thoughtful collaborations
              </div>
              <span className="text-[13px] text-paper-white/60">
                Jakarta, Indonesia · GMT+7
              </span>
            </div>

            <div className="py-16 sm:py-20 lg:py-24">
              <p className="mb-7 text-[15px] text-paper-white/65 fade-up animation-delay-1">
                AI &amp; DATA ENGINEER IN THE MAKING
              </p>
              <h1 className="max-w-[1120px] text-[clamp(3.3rem,8.4vw,7.5rem)] leading-[0.92] tracking-[-0.055em] fade-up animation-delay-2">
                Data with a pulse.
                <br />
                Pr
                <span className="mx-[0.04em] inline-flex align-[-0.03em] text-periwinkle">
                  <Ghost
                    className="size-[0.76em]"
                    strokeWidth={1.25}
                    aria-label="o"
                  />
                </span>
                ducts with purpose.
              </h1>
              <p className="mt-9 max-w-[560px] text-[17px] leading-[1.4] text-paper-white/70 fade-up animation-delay-3 sm:text-[19px]">
                I&apos;m Andhika. I explore the space where clean data, useful AI,
                and human decisions become one understandable system.
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-paper-white/15 pt-7 fade-up animation-delay-4 sm:flex-row sm:items-end sm:justify-between">
              <a
                href="#work"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-ghost-lavender px-6 py-3.5 text-[16px] text-aubergine shadow-lavender transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper-white"
              >
                Explore selected work
                <ArrowDownRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  strokeWidth={1.8}
                />
              </a>
              <div className="flex items-center gap-3 text-[13px] text-paper-white/55">
                <Sparkles className="size-4 text-periwinkle" strokeWidth={1.7} />
                Learning in public, building with care
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <span className="inline-flex rounded-full bg-bone px-4 py-2 text-[13px] text-aubergine">
              01 / ABOUT
            </span>
          </div>
          <div>
            <h2 className="max-w-[850px] text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.05em] text-aubergine">
              I like turning complex things into clear next steps.
            </h2>
            <div className="mt-10 grid gap-6 border-t border-ash pt-8 sm:grid-cols-2 sm:gap-12">
              <p className="text-[16px] leading-[1.4] text-obsidian/80">
                My work starts before the model: understanding the question,
                inspecting the data, and deciding what a useful outcome really
                looks like.
              </p>
              <p className="text-[16px] leading-[1.4] text-obsidian/80">
                I care about reproducibility, evidence, and interfaces that help
                people act with confidence—not just impressive technical output.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 bg-bone px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-col gap-7 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-paper-white px-4 py-2 text-[13px] text-aubergine">
                02 / SELECTED WORK
              </span>
              <h2 className="mt-7 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em] text-aubergine">
                Curious work,
                <br />
                carefully made.
              </h2>
            </div>
            <p className="max-w-[360px] text-[15px] leading-[1.4] text-fog">
              A small selection of practical explorations across data engineering,
              operational ML, and evidence-led research.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex min-h-[520px] flex-col justify-between rounded-[28px] border border-ash bg-paper-white p-7 transition-colors hover:border-periwinkle sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-fog">{project.number} / 03</span>
                    <span
                      className={`flex size-12 items-center justify-center rounded-full ${project.accentClass}`}
                    >
                      <ArrowUpRight
                        className="size-5 text-aubergine transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-16 text-[clamp(2rem,3vw,2.9rem)] leading-[1.02] tracking-[-0.045em] text-aubergine">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-[15px] leading-[1.4] text-fog">
                    {project.description}
                  </p>
                </div>
                <div>
                  <p className="mb-5 border-b border-ash pb-5 text-[14px] text-aubergine">
                    {project.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ash px-3 py-2 text-[12px] text-fog"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-20 px-3 py-3 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-[1390px] rounded-[32px] bg-aubergine px-6 py-24 text-paper-white sm:rounded-[40px] sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="inline-flex rounded-full border border-paper-white/20 px-4 py-2 text-[13px] text-paper-white/75">
                  03 / APPROACH
                </span>
                <h2 className="mt-8 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em]">
                  Less magic.
                  <br />
                  More clarity.
                </h2>
              </div>

              <div className="divide-y divide-paper-white/15 border-y border-paper-white/15">
                {capabilities.map(({ icon: Icon, eyebrow, title, copy }) => (
                  <article
                    key={title}
                    className="grid gap-5 py-8 sm:grid-cols-[56px_1fr] sm:py-10"
                  >
                    <span className="flex size-12 items-center justify-center rounded-full bg-paper-white/10 text-periwinkle">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-[12px] text-paper-white/45">{eyebrow}</p>
                      <h3 className="mt-3 text-[25px] leading-[1.2] tracking-[-0.035em]">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-[520px] text-[15px] leading-[1.4] text-paper-white/65">
                        {copy}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="inline-flex rounded-full bg-bone px-4 py-2 text-[13px] text-aubergine">
                04 / TOOLKIT
              </span>
              <h2 className="mt-8 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em] text-aubergine">
                Tools are the medium, not the point.
              </h2>
            </div>
            <div className="flex content-start flex-wrap gap-3 lg:pt-16">
              {stack.map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full px-5 py-3 text-[15px] text-aubergine ${
                    index % 4 === 0
                      ? 'bg-ghost-lavender'
                      : index % 4 === 1
                        ? 'bg-buttercream'
                        : index % 4 === 2
                          ? 'bg-blush'
                          : 'bg-bone'
                  }`}
                >
                  {item}
                </span>
              ))}
              <div className="mt-8 w-full rounded-[28px] border border-ash p-7 sm:p-9">
                <Code2 className="size-6 text-periwinkle" strokeWidth={1.6} />
                <p className="mt-8 max-w-[560px] text-[24px] leading-[1.25] tracking-[-0.035em] text-aubergine sm:text-[30px]">
                  The stack changes. The habit stays: understand the problem,
                  test the assumptions, and make the result easy to trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-5 sm:pb-5 lg:px-8 lg:pb-8">
        <div className="mx-auto max-w-[1390px] rounded-[32px] bg-ghost-lavender px-6 py-24 text-aubergine sm:rounded-[40px] sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-start justify-between gap-6">
              <span className="inline-flex rounded-full border border-aubergine/15 px-4 py-2 text-[13px]">
                05 / CONTACT
              </span>
              <GhostMark />
            </div>
            <h2 className="mt-14 max-w-[1000px] text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.92] tracking-[-0.055em]">
              Have a problem worth untangling?
            </h2>
            <div className="mt-12 flex flex-col gap-6 border-t border-aubergine/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[460px] text-[15px] leading-[1.4] text-aubergine/70">
                I&apos;m always happy to talk about data, AI systems, research,
                or a thoughtful collaboration.
              </p>
              <a
                href="mailto:andhikapramana101@gmail.com?subject=Hello%20Andhika"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-aubergine px-6 py-3.5 text-[16px] text-paper-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine"
              >
                Start a conversation
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-10 text-[13px] text-fog sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© 2026 Andhika Pramana. Made with curiosity.</p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/andhikapramana"
            target="_blank"
            rel="noreferrer"
            className="flex size-10 items-center justify-center rounded-full border border-ash text-aubergine transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-aubergine"
            aria-label="GitHub"
          >
            <span className="text-[11px] tracking-[-0.02em]">GH</span>
          </a>
          <a
            href="mailto:andhikapramana101@gmail.com"
            className="flex size-10 items-center justify-center rounded-full border border-ash text-aubergine transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-aubergine"
            aria-label="Email"
          >
            <Mail className="size-4" strokeWidth={1.7} />
          </a>
        </div>
      </footer>
    </main>
  );
}
