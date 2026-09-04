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

const experience = [
  {
    period: 'Feb 2026 — Present',
    role: 'Fullstack Developer',
    company: 'Dgra Komunika',
    description:
      'Building reliable, maintainable websites and web applications for clients, with a focus on performance and efficient server resources.',
    stack: 'Next.js · React · Node.js · Tailwind CSS · MySQL · Ansible',
  },
  {
    period: 'Oct 2022 — Mar 2026',
    role: 'Fullstack Developer',
    company: 'PT. Optify Intermedia Pratama',
    description:
      'Delivered and maintained client websites and web apps, shipped new features and landing pages, and solved recurring issues through root-cause analysis.',
    stack: 'PHP · Laravel · Python · React · Next.js · MySQL · Linux',
  },
  {
    period: 'Jan 2023 — Sep 2024',
    role: 'Product Engineer',
    company: 'PT. Sosiago Raharja',
    description:
      'Helped plan SOSIAGO v2, investigated recurring product issues, collaborated with Product Design, and supported the operations team on technical tickets.',
    stack: 'Laravel · React · MySQL',
  },
  {
    period: 'May — Jul 2022',
    role: 'Backend & Fullstack Developer',
    company: 'Investree Virtual Internship Experience',
    description:
      'Completed focused backend and fullstack learning projects across two virtual internship tracks.',
    stack: 'Java Spring Boot · Laravel · PostgreSQL',
  },
];

const projects = [
  {
    number: '01',
    title: 'BCA Life E-Recruitment',
    description:
      'Web application development for BCA Life’s sales recruitment platform.',
    tags: ['Web application', 'Development'],
    accentClass: 'bg-buttercream',
    detail: 'BCA Life',
    href: 'https://salesrecruitment.bcalife.co.id/',
  },
  {
    number: '02',
    title: 'JOMOO Indonesia',
    description:
      'Website development and ongoing maintenance for JOMOO Indonesia’s digital presence.',
    tags: ['Website', 'Development', 'Maintenance'],
    accentClass: 'bg-ghost-lavender',
    detail: 'JOMOO Indonesia',
    href: 'https://www.jomoo.co.id/id',
  },
  {
    number: '03',
    title: 'SOSIAGO',
    description:
      'Product engineering and web application maintenance for an influencer marketing platform.',
    tags: ['Product engineering', 'React', 'Laravel'],
    accentClass: 'bg-blush',
    detail: 'SOSIAGO',
    href: 'https://www.sosiago.id/login',
  },
];

const additionalProjects = [
  { label: 'Linkara', href: 'https://linkara.id' },
  { label: 'ASIX', href: 'https://asix.id' },
  { label: 'BCA Life', href: 'https://www.bcalife.co.id/' },
  { label: 'Traktor Nusantara', href: 'https://www.traknus.co.id/' },
  { label: 'Swadaya Harapan Nusantara', href: 'https://shn.co.id/' },
];

const learningPillars = [
  {
    icon: Database,
    eyebrow: '01 / DATA FOUNDATIONS',
    title: 'Learning to trust the data',
    copy: 'Practising Python, Pandas, SQL, cleaning, transformation, and reproducible ETL workflows.',
  },
  {
    icon: BrainCircuit,
    eyebrow: '02 / ML REASONING',
    title: 'Learning before claiming',
    copy: 'Studying how to frame business problems, choose useful features, validate over time, and avoid leakage.',
  },
  {
    icon: Workflow,
    eyebrow: '03 / LONG-TERM DIRECTION',
    title: 'Bringing AI into products',
    copy: 'Exploring how a strong web engineering foundation can turn AI capabilities into reliable, human-friendly software.',
  },
];

const stackGroups = [
  {
    label: 'Languages & runtime',
    items: ['PHP', 'JavaScript', 'Node.js', 'C#', 'Python', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Laravel', 'ASP.NET', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Data & infrastructure',
    items: ['MySQL', 'PostgreSQL', 'Docker', 'Nginx', 'Ansible', 'Cloudflare'],
  },
  {
    label: 'Engineering practice',
    items: ['REST API', 'Web Performance', 'Accessibility', 'SEO', 'k6', 'GitHub Actions'],
  },
];

function GhostMark() {
  return (
    <span
      className="inline-flex size-10 items-center justify-center rounded-full bg-aubergine text-paper-white sm:size-11"
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
          className="hidden items-center gap-1 rounded-full border border-ash bg-paper-white p-1.5 lg:flex"
          aria-label="Main navigation"
        >
          {[
            ['About', '#about'],
            ['Experience', '#experience'],
            ['Work', '#work'],
            ['AI Journey', '#ai-journey'],
            ['Stack', '#stack'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-3.5 py-2.5 text-[14px] text-aubergine transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-aubergine"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/CV-Andhika-Pramana.pdf"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-ghost-lavender px-4 text-[15px] text-aubergine shadow-lavender transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine sm:px-5"
        >
          <span className="hidden sm:inline">View CV</span>
          <ArrowDownRight className="size-4" strokeWidth={1.8} />
        </a>
      </header>

      <section id="top" className="px-3 sm:px-5 lg:px-8">
        <div className="relative mx-auto min-h-[calc(100svh-108px)] max-w-[1390px] overflow-hidden rounded-[32px] bg-aubergine text-paper-white sm:rounded-[40px]">
          <div className="mx-auto flex min-h-[calc(100svh-108px)] max-w-[1220px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14">
            <div className="flex flex-wrap items-center justify-between gap-4 fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-paper-white/20 px-4 py-2 text-[13px] text-paper-white/80">
                <span className="size-2 rounded-full bg-mint-signal" />
                Available for fullstack collaborations
              </div>
              <span className="text-[13px] text-paper-white/60">
                Jombang, East Java · GMT+7
              </span>
            </div>

            <div className="py-16 sm:py-20 lg:py-24">
              <p className="mb-7 text-[15px] text-paper-white/65 fade-up animation-delay-1">
                FULLSTACK DEVELOPER · LEARNING AI ENGINEERING
              </p>
              <h1 className="max-w-[1120px] text-[clamp(3.3rem,8.4vw,7.5rem)] leading-[0.92] tracking-[-0.055em] fade-up animation-delay-2">
                Web pr
                <span className="mx-[0.04em] inline-flex align-[-0.03em] text-periwinkle">
                  <Ghost
                    className="size-[0.76em]"
                    strokeWidth={1.25}
                    aria-label="o"
                  />
                </span>
                ducts with purpose.
                <br />
                AI with curiosity.
              </h1>
              <p className="mt-9 max-w-[640px] text-[17px] leading-[1.4] text-paper-white/70 fade-up animation-delay-3 sm:text-[19px]">
                I&apos;m Andhika, a Fullstack Developer building and maintaining
                client web applications since 2022. Now I&apos;m taking my first
                deliberate steps into AI Engineering.
              </p>
            </div>

            <div className="flex flex-col gap-6 border-t border-paper-white/15 pt-7 fade-up animation-delay-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-ghost-lavender px-6 py-3.5 text-[16px] text-aubergine shadow-lavender transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper-white"
                >
                  Explore web work
                  <ArrowDownRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </a>
                <a
                  href="/CV-Andhika-Pramana.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-paper-white/20 px-6 py-3.5 text-[16px] text-paper-white transition-colors hover:bg-paper-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper-white"
                >
                  Open CV
                  <ArrowUpRight className="size-4" strokeWidth={1.8} />
                </a>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-paper-white/55">
                <Sparkles className="size-4 text-periwinkle" strokeWidth={1.7} />
                Web engineering roots, beginner&apos;s mind in AI
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
            <h2 className="max-w-[880px] text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.05em] text-aubergine">
              A fullstack foundation, with a deliberate move into AI.
            </h2>
            <div className="mt-10 grid gap-6 border-t border-ash pt-8 sm:grid-cols-2 sm:gap-12">
              <p className="text-[16px] leading-[1.4] text-obsidian/80">
                My professional background is in software engineering: building,
                maintaining, debugging, and improving websites and web apps for
                client and product teams.
              </p>
              <p className="text-[16px] leading-[1.4] text-obsidian/80">
                AI Engineering is a new learning path for me. I&apos;m building the
                fundamentals carefully—starting with data, machine learning
                reasoning, and the same reliable engineering habits I use on the web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-20 bg-bone px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <span className="h-fit w-fit rounded-full bg-paper-white px-4 py-2 text-[13px] text-aubergine">
              02 / EXPERIENCE
            </span>
            <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em] text-aubergine">
              From shipping features to solving what breaks.
            </h2>
          </div>

          <div className="divide-y divide-ash border-y border-ash">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className="grid gap-5 py-8 sm:py-10 lg:grid-cols-[72px_0.65fr_1.35fr] lg:gap-10"
              >
                <span className="text-[13px] text-fog">0{index + 1}</span>
                <div>
                  <p className="text-[13px] text-fog">{item.period}</p>
                  <h3 className="mt-2 text-[24px] leading-[1.2] tracking-[-0.035em] text-aubergine">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-[15px] text-aubergine/70">{item.company}</p>
                </div>
                <div>
                  <p className="max-w-[620px] text-[16px] leading-[1.4] text-obsidian/80">
                    {item.description}
                  </p>
                  <p className="mt-5 text-[13px] leading-[1.4] text-fog">{item.stack}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14 flex flex-col gap-7 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-bone px-4 py-2 text-[13px] text-aubergine">
                03 / SELECTED WEB WORK
              </span>
              <h2 className="mt-7 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em] text-aubergine">
                Real products,
                <br />
                real responsibility.
              </h2>
            </div>
            <p className="max-w-[360px] text-[15px] leading-[1.4] text-fog">
              A selection of web applications and websites I have helped develop,
              maintain, or improve.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.number}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[500px] flex-col justify-between rounded-[28px] border border-ash bg-paper-white p-7 transition-colors hover:border-periwinkle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aubergine sm:p-9"
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
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-2 text-[13px] text-fog">Also worked on</span>
            {additionalProjects.map((project) => (
              <a
                key={project.label}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-bone px-4 py-2.5 text-[13px] text-aubergine transition-colors hover:bg-ghost-lavender focus-visible:outline-2 focus-visible:outline-aubergine"
              >
                {project.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-journey" className="scroll-mt-20 px-3 py-3 sm:px-5 lg:px-8">
        <div className="mx-auto max-w-[1390px] rounded-[32px] bg-aubergine px-6 py-24 text-paper-white sm:rounded-[40px] sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <span className="inline-flex rounded-full border border-paper-white/20 px-4 py-2 text-[13px] text-paper-white/75">
                  04 / AI LEARNING JOURNEY
                </span>
                <h2 className="mt-8 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em]">
                  Strong web roots.
                  <br />
                  Beginner&apos;s mind.
                </h2>
                <p className="mt-7 max-w-[430px] text-[15px] leading-[1.4] text-paper-white/60">
                  I&apos;m early in this chapter, so the focus is on fundamentals,
                  honest experiments, and steady progress—not inflated titles.
                </p>
              </div>

              <div className="divide-y divide-paper-white/15 border-y border-paper-white/15">
                {learningPillars.map(({ icon: Icon, eyebrow, title, copy }) => (
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
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <span className="inline-flex rounded-full bg-bone px-4 py-2 text-[13px] text-aubergine">
                05 / TOOLKIT
              </span>
              <h2 className="mt-8 text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.96] tracking-[-0.05em] text-aubergine">
                Built for the full web stack.
              </h2>
              <p className="mt-7 max-w-[420px] text-[15px] leading-[1.4] text-fog">
                Tools I&apos;ve used across development, maintenance, performance,
                deployment, and my current AI learning track.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:pt-16">
              {stackGroups.map((group, groupIndex) => (
                <article
                  key={group.label}
                  className="rounded-[28px] border border-ash bg-paper-white p-7"
                >
                  <p className="text-[13px] text-fog">{group.label}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => (
                      <span
                        key={item}
                        className={`rounded-full px-3.5 py-2 text-[13px] text-aubergine ${
                          (groupIndex + itemIndex) % 4 === 0
                            ? 'bg-ghost-lavender'
                            : (groupIndex + itemIndex) % 4 === 1
                              ? 'bg-buttercream'
                              : (groupIndex + itemIndex) % 4 === 2
                                ? 'bg-blush'
                                : 'bg-bone'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}

              <article className="rounded-[28px] border border-ash p-7 sm:col-span-2 sm:p-9">
                <Code2 className="size-6 text-periwinkle" strokeWidth={1.6} />
                <div className="mt-8 grid gap-7 sm:grid-cols-2 sm:gap-12">
                  <div>
                    <p className="text-[13px] text-fog">Education</p>
                    <p className="mt-3 text-[20px] leading-[1.3] text-aubergine">
                      B.Eng. in Electrical Engineering
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.4] text-fog">
                      Universitas Brawijaya · GPA 3.68/4.00 · 2017–2021
                    </p>
                  </div>
                  <div>
                    <p className="text-[13px] text-fog">Training</p>
                    <p className="mt-3 text-[20px] leading-[1.3] text-aubergine">
                      Fullstack Developer Bootcamp
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.4] text-fog">
                      Metrodata Academy × KOMINFO · 2022
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-5 sm:pb-5 lg:px-8 lg:pb-8">
        <div className="mx-auto max-w-[1390px] rounded-[32px] bg-ghost-lavender px-6 py-24 text-aubergine sm:rounded-[40px] sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-start justify-between gap-6">
              <span className="inline-flex rounded-full border border-aubergine/15 px-4 py-2 text-[13px]">
                06 / CONTACT
              </span>
              <GhostMark />
            </div>
            <h2 className="mt-14 max-w-[1050px] text-[clamp(3.2rem,8vw,7.2rem)] leading-[0.92] tracking-[-0.055em]">
              Need a dependable web product built?
            </h2>
            <div className="mt-12 flex flex-col gap-6 border-t border-aubergine/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[500px] text-[15px] leading-[1.4] text-aubergine/70">
                I&apos;m open to conversations about fullstack development,
                product engineering, web performance, and learning opportunities
                at the intersection of software and AI.
              </p>
              <a
                href="mailto:andhikapramana807@gmail.com?subject=Hello%20Andhika"
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
        <p>© 2026 Andhika Pramana. Fullstack roots, curious future.</p>
        <div className="flex items-center gap-2">
          <a
            href="/CV-Andhika-Pramana.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 items-center justify-center rounded-full border border-ash px-4 text-aubergine transition-colors hover:bg-bone focus-visible:outline-2 focus-visible:outline-aubergine"
            aria-label="Open CV"
          >
            CV
          </a>
          <a
            href="mailto:andhikapramana807@gmail.com"
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
