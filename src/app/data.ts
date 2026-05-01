export type Skill = {
  path: string;
  label: string;
  category: ("Languages" | "Frontend" | "Backend" | "Frameworks" | "Cloud")[];
  /** Years of professional experience, approximate */
  years?: string;
  /** Honest, defensible 1-3 sentence experience blurb */
  experience: string;
};

export type Project = {
  id: number;
  name: string;
  tagline: string;
  gifPath: string;
  tnPath: string;
  overview: string;
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
};

export type Role = {
  company: string;
  logo: string;
  role: string;
  date: string;
  location: string;
  blurb: string;
  bullets: string[];
  tags?: string[];
};

export const skillsData: Skill[] = [
  {
    path: "/JS.png",
    label: "JavaScript",
    category: ["Languages", "Frontend"],
    years: "4+ yrs",
    experience:
      "My primary language since App Academy in 2019. Daily driver across every role: React components, Node.js services, and the build tooling around them. Comfortable with ES6+, async patterns, and the standard library.",
  },
  {
    path: "/ts.png",
    label: "TypeScript",
    category: ["Languages", "Frontend"],
    years: "3+ yrs",
    experience:
      "Daily driver at Gemini and Upstart on React and React Native applications. Strict mode enabled, comfortable with generics and conditional types, and have hooked up OpenAPI codegen so the API client stays typed end-to-end.",
  },
  {
    path: "/React.png",
    label: "React",
    category: ["Frontend", "Frameworks"],
    years: "4+ yrs",
    experience:
      "Primary frontend framework across every role. Built consumer surfaces serving 587K MTUs at Gemini and 3M+ customers at Upstart. Comfortable with hooks, Suspense, the React 18 concurrent features, and Server Components in Next.js App Router.",
  },
  {
    path: "/next.png",
    label: "Next.js",
    category: ["Frontend", "Frameworks"],
    years: "3+ yrs",
    experience:
      "Migrated Upstart's loan-application surfaces from CSR to SSR (Pages Router era), cutting load times ~40% and lifting Lighthouse scores above 90. Built my portfolio v2 on Next 14 App Router with RSC, Streaming SSR, and Server Actions.",
  },
  {
    path: "/tailwind.png",
    label: "Tailwind",
    category: ["Frontend", "Frameworks"],
    years: "2+ yrs",
    experience:
      "Used heavily on my portfolio v2 with a custom design-token setup, dark theme, and arbitrary-value escape hatches. Comfortable with the utility-first mental model and how to extend the theme cleanly.",
  },
  {
    path: "/node.png",
    label: "Node.js",
    category: ["Backend", "Frameworks"],
    years: "4+ yrs",
    experience:
      "Designed RESTful APIs at Tonight backed by MongoDB. Run Node-based build, lint, and test pipelines on every project (Next.js, Vite, Webpack, Playwright). Comfortable with the runtime, npm/yarn, and async patterns.",
  },
  {
    path: "/express.png",
    label: "Express",
    category: ["Backend", "Frameworks"],
    years: "1+ yr",
    experience:
      "Backend framework at Tonight. Designed RESTful endpoints serving the React web client and the Swift / React Native mobile app, with MongoDB as the data layer. Also used on Monster Mayhem (real-time multiplayer side project).",
  },
  {
    path: "/ruby.png",
    label: "Ruby",
    category: ["Languages", "Backend"],
    years: "2 yrs",
    experience:
      "Used at Upstart for ~2 years on the Rails-backed loan-application stack. Comfortable reading and modifying production Ruby and writing RSpec tests. Not my primary language, but I can be productive in it.",
  },
  {
    path: "/rails.png",
    label: "Rails",
    category: ["Backend", "Frameworks"],
    years: "2 yrs",
    experience:
      "Owned full-stack work on the loan-application surfaces at Upstart for ~2 years. Built and maintained RESTful endpoints integrated with the React frontend, and wrote RSpec coverage as part of the team's 90%+ test SLA.",
  },
  {
    path: "/py.png",
    label: "Python",
    category: ["Languages", "Backend"],
    years: "Familiar",
    experience:
      "Used during App Academy's bootcamp curriculum and for occasional scripts and prototyping. Less production experience than my JavaScript/TypeScript work; comfortable but not my primary language.",
  },
  {
    path: "/dj.png",
    label: "Django",
    category: ["Backend", "Frameworks"],
    years: "Familiar",
    experience:
      "App Academy bootcamp project work. Comfortable with the basics: models, views, the ORM, and templating. Not my production stack since.",
  },
  {
    path: "/postgres.png",
    label: "PostgreSQL",
    category: ["Backend"],
    years: "3+ yrs",
    experience:
      "Backing database at Upstart and on side projects (Newflix). Comfortable writing SQL by hand, designing schemas with the right normalization tradeoffs, and reasoning about index and query performance.",
  },
  {
    path: "/mongo.png",
    label: "MongoDB",
    category: ["Backend"],
    years: "1+ yr",
    experience:
      "Production document store at Tonight, plus Monster Mayhem (real-time multiplayer side project). Comfortable modeling around access patterns and using the aggregation pipeline.",
  },
  {
    path: "/aws.png",
    label: "AWS",
    category: ["Cloud"],
    years: "Working knowledge",
    experience:
      "Used S3 for Newflix's media storage and for build-artifact storage on side projects. Tangential exposure to broader AWS surfaces (IAM, CloudFront) at work; not deep cloud-architecture experience.",
  },
];

export const skillCategories = ["All", "Languages", "Frontend", "Backend", "Frameworks", "Cloud"] as const;

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Newflix",
    tagline: "Streaming clone for full-stack practice",
    gifPath: "/newflix.gif",
    tnPath: "/newflix.png",
    overview:
      "A Netflix-inspired streaming experience with auth, browse, and trailer playback. Built end-to-end as a self-directed full-stack project to deepen experience with relational data, async media, and S3-backed asset delivery.",
    stack: ["React", "Redux", "Rails", "PostgreSQL", "AWS S3"],
    highlights: [
      "Auth-gated browse and watch flows",
      "S3-backed video and image delivery",
      "Redux store for cross-component state",
      "Server-rendered metadata for SEO",
    ],
  },
  {
    id: 2,
    name: "Monster Mayhem",
    tagline: "Real-time multiplayer arena",
    gifPath: "/mayhem.gif",
    tnPath: "/mayhem.png",
    overview:
      "A horror-themed multiplayer arena built with three engineers. Frontend lead — designed the React/Redux client and integrated WebSockets for low-latency two-player combat with ephemeral match servers.",
    stack: ["React", "Redux", "Express", "MongoDB", "WebSockets"],
    highlights: [
      "Sub-100ms round-trip latency over WebSockets",
      "Ephemeral match servers spun up per game",
      "Redux-managed game state and replay log",
      "Express + Mongo for auth and persistence",
    ],
  },
  {
    id: 3,
    name: "Interdimensional Sniper",
    tagline: "Browser arcade game",
    gifPath: "/interdimensional.gif",
    tnPath: "/interdimensional.png",
    overview:
      "A canvas-based arcade shooter exploring game loops, sprite animation, and collision detection in vanilla JavaScript. Built to study the fundamentals before reaching for engines or frameworks.",
    stack: ["JavaScript", "HTML Canvas", "CSS"],
    highlights: [
      "Hand-rolled game loop and physics",
      "Sprite-sheet animation system",
      "Collision detection without a library",
      "Zero runtime dependencies",
    ],
  },
  {
    id: 4,
    name: "Dynamic Portfolio",
    tagline: "This site",
    gifPath: "/portfolio.gif",
    tnPath: "/portfolio.png",
    overview:
      "The site you are looking at — a Next.js + Tailwind portfolio designed around restraint, hierarchy, and motion. Custom design system, scroll-driven reveals, and a monochrome palette punctuated by a single accent.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    highlights: [
      "Custom design tokens and type scale",
      "Scroll-snapped sections with reveal animations",
      "Respects prefers-reduced-motion",
      "Edge-optimized via Next.js App Router",
    ],
  },
];

export const timelineData: Role[] = [
  {
    company: "Gemini",
    logo: "/gemini_logo.jpeg",
    role: "Frontend Software Engineer (Web & Mobile)",
    date: "Dec 2024 — Feb 2026",
    location: "San Francisco, CA",
    blurb:
      "Cryptocurrency exchange and financial platform serving retail and institutional clients across trading, credit card, and digital asset products.",
    bullets: [
      "Core frontend engineer on Gemini's consumer credit card platform across React (web) and React Native (Expo). Authored 146 PRs totaling ~30K lines of TypeScript and JavaScript across 1,095 files, spanning onboarding, identity verification, approval, activation, rewards selection, and card management surfaces.",
      "Built and optimized the multi-step credit card application funnel (pre-qualification, identity verification, approval, activation, rewards selection) supporting ~587K monthly transacting users during a 17% YoY platform growth period.",
      "Developed cross-platform onboarding workflows in React, React Native (Expo), and TypeScript over OpenAPI-driven REST services, enabling launches of retail and business credit card products and the Predictions market application.",
      "Implemented referral, promotional, and experimentation surfaces instrumented with Mixpanel to track funnel conversion, drop-off, and engagement across A/B test cohorts via a typed event-tracking wrapper.",
      "Integrated Onfido identity verification (KYC) with eligibility gating, retry logic, and defensive error handling across regulated financial workflows, supporting state-by-state compliance requirements.",
      "Reduced CI/CD build runtime ~25% via test pipeline parallelization and selective Jest and React Testing Library coverage. Expanded Playwright E2E and smoke audits to harden release confidence.",
      "Drove ~20–25% team velocity gains by adopting AI-assisted development workflows (Claude Code, MCP tooling). Led the team's migration from Jira to Linear, including peer onboarding and process documentation.",
      "Improved Time-to-Interactive on critical onboarding surfaces through bundle analysis (@next/bundle-analyzer), code splitting via dynamic imports, and next/image-driven asset optimization.",
      "Authored design documents and participated in weekly architecture reviews for credit card and onboarding initiatives, aligning component boundaries, API contracts, and feature-flagged rollout strategy with senior engineers and product partners.",
      "Mentored junior engineers and interns through pair programming, code review, and design review, while shipping accessible (WCAG 2.1 AA, ARIA, semantic HTML) responsive interfaces from Figma against the team's shared design system.",
    ],
    tags: ["React", "React Native", "TypeScript", "Design Systems", "A/B Testing", "Performance", "Mentorship"],
  },
  {
    company: "Upstart",
    logo: "/upstart_logo.jpeg",
    role: "Software Engineer",
    date: "May 2021 — Mar 2023",
    location: "San Mateo, CA",
    blurb:
      "AI lending platform partnering with banks and credit unions to provide consumer loans using non-traditional underwriting variables.",
    bullets: [
      "Led engineering on the customizable-loan-features initiative end-to-end with product and design, driving an 8% lift in customer conversion within 3 months of launch (measured via in-production A/B test against control).",
      "Migrated high-traffic loan-application surfaces from CSR to Next.js server-side rendering, reducing load times by ~40% and lifting Google Lighthouse performance scores above 90 across key application flows.",
      "Built React and TypeScript component primitives shared across loan-application surfaces serving 3M+ customers, integrated with Ruby on Rails services over OpenAPI-driven REST.",
      "Maintained 90%+ automated test coverage (Jest, React Testing Library, RSpec, Playwright) and full WCAG 2.1 AA accessibility compliance across interactive financial workflows.",
      "Held production incident rate below 8% through Datadog, SumoLogic, and Bugsnag monitoring and disciplined on-call triage, while pair programming and providing detailed code review for newer engineers ramping onto loan-application surfaces.",
    ],
    tags: ["React", "TypeScript", "Rails", "Next.js", "Accessibility", "Testing"],
  },
  {
    company: "Tonight",
    logo: "/tonight_logo.jpg",
    role: "Software Engineer",
    date: "Jul 2020 — Feb 2021",
    location: "San Francisco, CA",
    blurb:
      "Mobile and web app surfacing local nightlife venues and events.",
    bullets: [
      "Led the front-end development team of 3 engineers, running daily stand-ups, establishing React conventions, and shaping UI/UX direction for the application.",
      "Developed front-end modules for web (React) and mobile (Swift, React Native), focused on low-friction discovery flows for nightlife venue and event surfacing.",
      "Designed and implemented RESTful Node.js and Express API endpoints backed by MongoDB, powering the data layer between the database and front-end modules.",
    ],
    tags: ["React", "React Native", "Swift", "Node.js", "Express", "MongoDB"],
  },
];

export const education = [
  {
    school: "App Academy",
    location: "San Francisco, CA",
    degree: "Immersive Full-Stack Software Engineering",
    date: "Oct 2019 — Mar 2020",
    logo: "/aA.png",
  },
  {
    school: "University of California, Irvine",
    location: "Irvine, CA",
    degree: "B.S. Biology",
    date: "Sep 2013 — Jun 2017",
    logo: "/uci.png",
  },
];
