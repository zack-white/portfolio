export const PERSONAL = {
  name: "Zachary White",
  tagline: "Full-Stack + Backend Engineer focused on performance, data systems, and real-world impact.",
  email: "zack@zwhite.dev",
  phone: "860-942-9116",
  linkedin: "https://www.linkedin.com/in/zachary-white-455b37274/",
  github: "https://github.com/zack-white",
  resumePdf: "/zacharyWhiteJan25-2.pdf",
} as const;

export const HERO_INTRO =
  "Full-stack and backend engineer with strengths in TypeScript, Postgres, Python, and performance-minded systems work. I've led teams shipping production software and built ML/data pipelines from prototype to evaluation.";

export const CTA_COPY =
  "Open to new grad software engineering opportunities starting Summer 2026 (Backend, Full-Stack, ML/Data, Infrastructure/Performance).";

export type ProjectCategory = "fullstack" | "ml" | "systems" | "backend";

export const PROJECTS = [
  {
    id: "somerville-museum",
    title: "Somerville Museum Inventory System",
    logo: "/somervillemuseum/SM_LOGO.svg",
    logoText: "/somervillemuseum/sm-logo.svg",
    category: "fullstack" as ProjectCategory,
    categoryLabel: "Full-Stack / Backend / Infrastructure",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Serverless", "Vercel"],
    oneLiner:
      "Architected and shipped a production inventory management platform for the Somerville Museum.",
    contributions: [
      "Led 12 engineers through sprint cycles and code review standards",
      "Designed architecture and relational schema",
      "Built backend routes/serverless handlers",
      "Introduced caching and query bundling for performance",
      "Modernized hosting/database infrastructure",
    ],
    impact: [
      { metric: "44%", label: "reduction in load times" },
      { metric: "95%", label: "reduction in annual operating costs" },
      { metric: "60%", label: "reduction in staff onboarding time" },
    ],
    href: "https://github.com/JumboCode/somerville-museum",
    demo: "https://somervillemuseum.vercel.app",
    screenshots: [
      "/somervillemuseum/project_screenshot_somervillemuseum_01.png",
      "/somervillemuseum/project_screenshot_somervillemuseum_02.png",
      "/somervillemuseum/project_screenshot_somervillemuseum_03.png",
      "/somervillemuseum/project_screenshot_somervillemuseum_04.png",
    ],
  },
  {
    id: "pingpoint",
    title: "PingPoint",
    logo: "/pingpoint/Logo.svg",
    logoText: "/pingpoint/text.svg",
    category: "fullstack" as ProjectCategory,
    categoryLabel: "Full-Stack / Cybersecurity / JumboHack 2026",
    stack: ["Next.js", "FastAPI", "Raspberry Pi", "Nmap"],
    oneLiner:
      "Real-time Wi-Fi security dashboard built at JumboHack 2026 that turns packet captures and port scans into plain-language risk insights for non-technical users.",
    description:
      "PingPoint is a location-aware coordination platform for moments when clarity and speed matter. It lets teams send targeted alerts, get status confirmations in seconds, and turn scattered updates into a single, live view that everyone can trust—replacing long message chains with one source of truth.",
    problem:
      "Teams often rely on broad, noisy channels (group chats, email, mass notifications) when they need fast, reliable coordination. That leads to unclear ownership and delayed decisions; status is spread across tools with no shared operational view, and when timing is critical, slow or messy communication undermines confidence and response time.",
    solution:
      "PingPoint focuses on the path from signal to response: targeted communication by team, role, or location; real-time visibility into who has responded and where follow-up is needed; structured check-ins for clear, actionable responses; and one live view so leadership, coordinators, and frontline teams stay aligned. The outcome is faster acknowledgments, better situational awareness, and more confident decisions without adding complexity for people in the field.",
    technicalOverview:
      "PingPoint is built to support low-latency, location-aware coordination: ping creation and routing by team, role, or geography; real-time tracking of acknowledgments and responses so the dashboard reflects current status; structured response storage so the system can highlight priorities, gaps, and next actions; and a single source of truth so coordinators and leaders see one live operational picture instead of reconciling multiple channels.",
    contributions: [
      "Built dashboard interaction flows and scan-state UX (initial scan + re-scan behavior)",
      "Implemented Next.js API proxy routes to Pi endpoints for scan, Nmap, and LLM workflows",
      "Wired streaming scan + analysis data into frontend state and device detail views",
      "Configured Scapy scans and returns via FastAPI on Raspberry Pi 5",
    ],
    impact: [
      { metric: "1st place", label: "JumboHack 2026 (Cybersecurity track)" },
    ],
    href: "https://github.com/zack-white/pingpoint",
    demo: "https://www.youtube.com/watch?v=PXDc3J2S0Ts",
    screenshots: [],
  },
  {
    id: "commonwealth-kitchen",
    title: "Commonwealth Kitchen Job Board",
    logo: "",
    logoText: "",
    category: "fullstack" as ProjectCategory,
    categoryLabel: "Full-Stack / Backend",
    stack: ["Next.js", "TypeScript", "Clerk Auth", "Postgres (Neon)", "Vercel"],
    oneLiner:
      "Built a production full-stack job board with role-based experiences for member vs business users.",
    contributions: [
      "Full-stack application architecture and implementation",
      "Clerk auth integration and role-based flows",
      "Postgres schema design and deployment pipeline",
    ],
    impact: [
      { metric: "80%", label: "increase in member engagement" },
      { metric: "50%", label: "decrease in admin overhead" },
    ],
    href: "https://github.com/JumboCode/commonwealth-kitchen",
    demo: "https://commonwealth-kitchen.vercel.app",
    screenshots: ["/CWK.png"],
  },
  {
    id: "jumbomap",
    title: "JumboMap",
    logo: "/jumbomap/logo-footer-dark.svg",
    logoText: "/jumbomap/logo-dark.svg",
    category: "fullstack" as ProjectCategory,
    categoryLabel: "Full-Stack Product Engineering",
    stack: ["React", "TypeScript", "Tailwind", "MySQL", "Next.js API"],
    oneLiner:
      "Interactive event/tabling mapping platform for campus operations.",
    contributions: [
      "Built map interaction + user workflows",
      "Implemented REST APIs for auth, verification, and DB access",
    ],
    impact: [
      { metric: "~150", label: "concurrent users at Tufts Community Day" },
      { metric: "Adopted", label: "by Tufts OCL" },
    ],
    href: "https://github.com/zack-white/jumbomap",
    demo: "https://tufts-jumbomap.vercel.app",
    screenshots: [
      "/jumbomap/project_screenshot_jumbomap_01.png",
      "/jumbomap/project_screenshot_jumbomap_02.png",
      "/jumbomap/project_screenshot_jumbomap_03.png",
      "/jumbomap/project_screenshot_jumbomap_04.png",
      "/jumbomap/project_screenshot_jumbomap_05.png",
      "/jumbomap/project_screenshot_jumbomap_06.png",
    ],
  },
  {
    id: "reddit-dashboard",
    title: "Reddit Politics Sentiment Dashboard",
    logo: "/reddit/reddit-1.svg",
    logoText: "/reddit/reddit-4.svg",
    category: "ml" as ProjectCategory,
    categoryLabel: "ML + Data + Full-Stack",
    stack: ["MongoDB", "GPT-4 API", "Python", "JavaScript"],
    oneLiner:
      "Built a dashboard that scrapes political forums and classifies sentiment + political leaning.",
    contributions: [
      "Multi-source data scraping pipeline",
      "MongoDB schema + data flow design",
      "GPT-4 integration + custom classification model",
      "Frontend dashboard for model outputs",
    ],
    impact: [
      { metric: "84.3%", label: "leaning classification accuracy" },
      { metric: "92.3%", label: "sentiment accuracy" },
    ],
    href: "https://github.com/zack-white/jumbohack24-political_dashboard",
    demo: "https://jumbohack24-political-dashboard.vercel.app",
    screenshots: [
      "/politicaldashboard/project_screenshot_politicaldashboard_01.png",
      "/politicaldashboard/project_screenshot_politicaldashboard_02.png",
    ],
  },
  {
    id: "twitch-classifier",
    title: "Twitch Language Detection",
    logo: "/twitch/twitch-icon.svg",
    logoText: "/twitch/twitch-horizontal.svg",
    category: "ml" as ProjectCategory,
    categoryLabel: "Graph ML / Data Engineering",
    stack: ["Python", "Node2Vec", "XGBoost", "NetworkX"],
    oneLiner:
      "Predicted language communities from graph structure using embeddings + supervised learning.",
    contributions: [
      "Generated Node2Vec embeddings",
      "Trained and tuned XGBoost classifier",
      "Built evaluation and visualization pipeline",
    ],
    impact: [
      { metric: "90.1%", label: "accuracy on 168k-node Twitch SNAP graph" },
      { metric: "0.88", label: "macro F1 across six language families" },
    ],
    href: "https://github.com/zack-white/twitch-classifier",
    demo: null,
    screenshots: [],
  },
  {
    id: "chess-engine",
    title: "Chess Engine Optimization",
    logo: "",
    logoText: "",
    category: "systems" as ProjectCategory,
    categoryLabel: "Performance / Systems",
    stack: ["C++"],
    oneLiner:
      "Alpha-beta pruning, move ordering, and board representation optimization.",
    contributions: [
      "Implemented alpha-beta pruning + move ordering",
      "Improved board representation and benchmarking",
    ],
    impact: [{ metric: "70%", label: "win rate vs initial implementation" }],
    href: null,
    demo: null,
    screenshots: [],
  },
  {
    id: "image-compressor",
    title: "Image Compressor/Decompressor",
    logo: "",
    logoText: "",
    category: "systems" as ProjectCategory,
    categoryLabel: "Performance / Systems",
    stack: ["C"],
    oneLiner:
      "Custom binary encoding/decoding pipeline with optimized memory handling.",
    contributions: [
      "Built custom binary encoding/decoding pipeline",
      "Optimized memory handling",
    ],
    impact: [
      { metric: "", label: "Compressed to 33% of original size" },
      { metric: "~3%", label: "quality loss with meaningful compression" },
    ],
    href: null,
    demo: null,
    screenshots: [],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Technical Lead",
    org: "JumboCode at Tufts",
    logo: "/jumbocode.png",
    period: "Jun 2024 – Present",
    highlights: [
      "Led team of 12 engineers delivering production web systems for nonprofit clients",
      "Ran sprint planning and code reviews; made architecture and rollout decisions",
      "Architected systems using Next.js + Postgres + serverless infrastructure",
      "44% faster load times, 95% lower annual costs, 60% faster onboarding",
    ],
  },
  {
    role: "Human-Computer Interaction Researcher",
    org: "Tufts University",
    logo: "/seal.png",
    period: "Feb 2024 – Jun 2025",
    highlights: [
      "Designed and ran studies on perceived vs actual cognitive workload when using LLMs",
      "Analyzed data from 80 participants using Python and visualization tooling",
    ],
  },
  {
    role: "Emergency Medical Technician (EMT)",
    org: "Cataldo Ambulance Service",
    logo: "/cataldo.png",
    period: "May 2023 – Present",
    highlights: [
      "High-pressure decision making, communication, accountability, and operational discipline",
    ],
  },
  {
    role: "Designer/Developer Summer Fellow",
    org: "Striide: Site",
    logo: "/seal.png",
    period: "May 2024 – Aug 2024",
    highlights: [
      "Built women's-safety-focused navigation application",
      "Implemented frontend and signup flows for 200-user beta",
    ],
  },
] as const;

export const EDUCATION = {
  school: "Tufts University",
  logo: "/seal.png",
  degree: "B.S. in Computer Science, Minor in Philosophy",
  expected: "May 2026",
  gpa: "3.59",
  highlights: [
    "Dean's List: Spring 2023, Fall 2023, Spring 2024, Fall 2024, Spring 2025",
    "Publication: Visualization and Workload with Implicit fNIRS-based BCI (Co-Author)",
  ],
  coursework: [
    "Data Structures",
    "Algorithms",
    "Machine Structure & Assembly",
    "Human-Computer Interaction",
    "Cryptography",
    "Computation Theory",
    "Programming Languages",
    "Intro ML and Data Mining",
    "Network Science",
    "Database Systems",
    "Visual Analytics",
    "Computational Biology",
    "Sports Analytics",
  ],
} as const;

export const SKILLS = {
  languages: [
    "TypeScript/JavaScript",
    "Python",
    "C/C++",
    "SQL (Postgres)",
    "HTML/CSS",
    "R",
  ],
  frameworks: [
    "React",
    "Node.js",
    "Next.js",
    "Express",
    "Tailwind",
    "Angular",
    "Flask",
  ],
  dataMl: [
    "pandas",
    "NumPy",
    "Matplotlib",
    "scikit-learn",
    "PyTorch",
    "Node2Vec",
    "XGBoost",
  ],
  tools: ["Git", "Docker", "AWS", "GCP", "Vercel", "Neon", "Clerk"],
  systems: [
    "Profiling",
    "Query optimization",
    "Algorithmic tuning",
    "Benchmarking",
  ],
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
] as const;
