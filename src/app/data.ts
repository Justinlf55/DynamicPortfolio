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
      "Building onboarding and activation across web and mobile in a high-growth, pre-IPO environment supporting credit card and new financial product launches.",
    bullets: [
      "Delivered onboarding and Credit Card application features during peak 2025 usage (~587K MTUs), contributing during a 17% YoY growth period across retail and institutional clients.",
      "Led cross-platform development of multi-step onboarding flows (React, React Native) for crypto-edition releases, Business Credit Card launch, and Predictions market applications, integrating OpenAPI-driven backend services.",
      "Translated Figma designs into responsive, accessible implementations using a shared design system; analyzed funnels and A/B tests in Mixpanel and monitored production health via DataDog.",
      "Strengthened release reliability with comprehensive unit tests and Playwright smoke audits, cutting CI runtime by ~25% and accelerating deployment feedback cycles.",
      "Increased team velocity ~20–25% through AI-assisted workflows (Claude Code, MCP tooling) and contributed to the Jira → Linear migration.",
    ],
    tags: ["React", "React Native", "TypeScript", "Design Systems", "A/B Testing"],
  },
  {
    company: "Upstart",
    logo: "/upstart_logo.jpeg",
    role: "Software Engineer",
    date: "May 2021 — Mar 2023",
    location: "San Mateo, CA",
    blurb:
      "Full-stack engineer on the personal loan experience — applications, rate selection, and product surfaces used by over a million customers.",
    bullets: [
      "Built complex, full-stack interfaces in agile cycles from product designs, used by 1M+ users.",
      "Led an initiative for customizable loans alongside product, driving a 10% increase in customer conversion.",
      "Monitored and triaged production via DataDog, SumoLogic, and Bugsnag, holding production incidents below 8%.",
      "Shipped backend (Rails) and frontend (React, TypeScript) integrations to bring new products to production.",
      "Wrote rigorous tests (RSpec, Jest, Selenium, Playwright) maintaining ~100% coverage on owned code.",
      "Migrated portions of the app to Next.js server rendering, lifting page performance scores above 90.",
    ],
    tags: ["React", "TypeScript", "Rails", "Next.js", "Testing"],
  },
  {
    company: "Tonight",
    logo: "/tonight_logo.jpg",
    role: "Fullstack Software Engineer",
    date: "Jul 2020 — Feb 2021",
    location: "San Francisco, CA",
    blurb:
      "Application designed to keep nights out fresh by connecting users with local places and events.",
    bullets: [
      "Built RESTful Node.js APIs serving frontend modules from MongoDB based on user-driven requests.",
      "Developed frontend modules for web (React) and mobile (Swift) focused on a clean, low-friction UX.",
      "Led the frontend team — facilitated stand-ups and shaped UI/UX conventions for the application.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Swift"],
  },
];

export const education = [
  {
    school: "App Academy",
    location: "San Francisco, CA",
    degree: "Immersive software development — full-stack web",
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
