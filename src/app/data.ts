export type Skill = {
  path: string;
  label: string;
  category: ("Languages" | "Frontend" | "Backend" | "Frameworks" | "Cloud")[];
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
  { path: "/JS.png", label: "JavaScript", category: ["Languages", "Frontend"] },
  { path: "/ts.png", label: "TypeScript", category: ["Languages", "Frontend"] },
  { path: "/React.png", label: "React", category: ["Frontend", "Frameworks"] },
  { path: "/next.png", label: "Next.js", category: ["Frontend", "Frameworks"] },
  { path: "/tailwind.png", label: "Tailwind", category: ["Frontend", "Frameworks"] },
  { path: "/node.png", label: "Node.js", category: ["Backend", "Frameworks"] },
  { path: "/express.png", label: "Express", category: ["Backend", "Frameworks"] },
  { path: "/ruby.png", label: "Ruby", category: ["Languages", "Backend"] },
  { path: "/rails.png", label: "Rails", category: ["Backend", "Frameworks"] },
  { path: "/py.png", label: "Python", category: ["Languages", "Backend"] },
  { path: "/dj.png", label: "Django", category: ["Backend", "Frameworks"] },
  { path: "/postgres.png", label: "PostgreSQL", category: ["Backend"] },
  { path: "/mongo.png", label: "MongoDB", category: ["Backend"] },
  { path: "/aws.png", label: "AWS", category: ["Cloud"] },
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
      "Core frontend engineer on Gemini's consumer credit card platform, shipping 146 PRs across React web and React Native (Expo) mobile applications, contributing ~30K lines of TypeScript/JavaScript across 1,095 files supporting onboarding, approval, activation, rewards, and card management.",
      "Built and optimized the credit card onboarding and application funnel used during peak ~587K monthly transacting users and 17% YoY platform growth, delivering pre-qualification, identity verification, approval flows, referrals, rewards selection, and post-approval activation.",
      "Developed multi-step financial onboarding workflows using React, React Native (Expo), TypeScript, and REST/OpenAPI APIs, enabling launches of retail and business credit card products and the Predictions market application across web and mobile platforms.",
      "Implemented growth and experimentation features including referral systems, promotional entry points, A/B testing, and Mixpanel analytics instrumentation to measure conversion, user engagement, and funnel drop-off.",
      "Built resilient fintech onboarding systems integrating Onfido identity verification (KYC), regulatory compliance requirements, eligibility gating, and defensive error handling across regulated financial workflows.",
      "Improved engineering reliability and delivery speed through unit testing (Jest, React Testing Library) and Playwright E2E + smoke tests, optimizing CI/CD pipelines to reduce build runtime ~25% and increase development velocity ~20–25% via AI-assisted workflows (Claude Code, MCP tooling) and migration from Jira to Linear.",
      "Improved frontend performance through bundle analysis, code splitting, dynamic imports, and image optimization, contributing to faster Time-to-Interactive on critical onboarding and application surfaces.",
      "Authored design documents and contributed to architecture reviews for credit card and onboarding initiatives, partnering with senior engineers and product to align on scope, component boundaries, and rollout strategy.",
      "Mentored junior engineers and interns through pair programming, code review, and design review, while implementing accessible (WCAG 2.1 AA, ARIA) responsive interfaces from Figma against a shared design system and component library.",
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
      "AI lending platform partnering with banks and credit unions to provide consumer loans using non-traditional variables.",
    bullets: [
      "Led engineering initiative enabling customizable loan features, resulting in an 8% increase in customer conversion within 3 months of launch.",
      "Migrated high-traffic product pages to Next.js server-side rendering, reducing load times by 40% and improving Google Lighthouse performance scores to 90%+ across key application flows.",
      "Built scalable React and TypeScript components powering applications used by 3M+ users, integrated with Ruby on Rails backend services and OpenAPI-driven REST APIs.",
      "Strengthened reliability and quality by achieving 90%+ automated test coverage (Jest, React Testing Library, RSpec, Playwright) and ensuring full WCAG 2.1 AA accessibility compliance across interactive financial workflows.",
      "Maintained production health by holding incident rate below 8% through proactive monitoring (Datadog, SumoLogic, Bugsnag) and disciplined triage during on-call rotations, while supporting newer engineers through pair programming and code review.",
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
      "Led the front-end development team of 3 engineers, conducting daily stand-ups, establishing React conventions, and shaping UI/UX strategy for the application.",
      "Developed and optimized front-end modules for the web (React) and mobile platforms (Swift, React Native), focused on delivering a clean and intuitive user experience for nightlife venue and event discovery.",
      "Designed and implemented RESTful API endpoints using Node.js and Express.js, facilitating seamless data exchange between the MongoDB database and front-end modules.",
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
