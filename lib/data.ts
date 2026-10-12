// TO ADD NEW PROJECT: Copy this template and add it to the projects array below
// {
//   id: unique_number,
//   title: "Project Title",
//   tagline: "One line: what it does and why it matters",
//   description: "Brief description for project cards",
//   longDescription: "Detailed description explaining the project purpose and what it solves",
//   tools: ["Technology1", "Technology2", "Technology3"],
//   status: "shipped" | "in progress" | "archived",
//   kind: "ai" | "web" | "tools",
//   date: "Mar 2026",
//   duration: "X months",
//   teamSize: "Solo project" or "Team of X",
//   image: "/project-image.png",
//   githubLink: "https://github.com/username/project-name",
//   liveLink: "https://project-demo.com" or null,
//   keyTakeaways: [
//     "What you learned 1",
//     "What you learned 2",
//     "What you learned 3",
//   ],
//   challenges: [
//     "Challenge you overcame 1",
//     "Challenge you overcame 2", 
//     "Challenge you overcame 3",
//   ],
// },

export type ProjectStatus = "shipped" | "in progress" | "archived"
export type ProjectKind = "ai" | "web" | "tools"

export const projectKinds: { id: ProjectKind; label: string }[] = [
  { id: "ai", label: "ai / nlp" },
  { id: "web", label: "web" },
  { id: "tools", label: "tools" },
]

export type Project = {
  id: number
  title: string
  tagline: string
  description: string
  longDescription: string
  tools: string[]
  status: ProjectStatus
  kind: ProjectKind
  date: string
  duration: string
  teamSize: string
  image: string
  images?: string[]
  githubLink: string | null
  liveLink: string | null
  devpostLink?: string | null
  award?: string
  // Optional grouped stack shown on the project page; `tools` still drives the card summary
  stackGroups?: { label: string; items: string }[]
  keyTakeaways: string[]
  challenges: string[]
  futureFeatures?: string[]
}

export const projects: Project[] = [
  {
    id: 6,
    title: "Motif",
    tagline: "Reverse-engineers what makes short-form video work in an industry, and turns it into an evidence-backed production brief.",
    description: "Structural intelligence for short-form video. 2nd place and Track 2 winner at Forward: AI in Business.",
    longDescription: "Marketing teams can see which short videos perform, but not why. Motif breaks top-performing videos in an industry down into their **structure**: when the **hook** lands, the **pacing**, the order in which information is revealed and where the **call to action (CTA)** sits. It then turns those patterns into a **scene-by-scene production brief** covering shots, lighting, on-screen text and the exact CTA line. Each brief **shows its evidence**: how many real videos backed it, how closely they matched, and links to the reference videos.\n\nI built it with a team of four in **48 hours**. I owned the **data pipeline** and the **backend**: ingestion, niche classification, **retrieval-augmented generation (RAG)** and the API. The app is live, uses real login, and runs on a library of **44 analysed videos** with **46.1M combined views**.",
    tools: ["Python", "FastAPI", "pgvector", "GPT-4o", "React", "Supabase"],
    stackGroups: [
      { label: "frontend", items: "React, Vite, Clerk auth (deployed on Vercel)" },
      { label: "backend", items: "Python, FastAPI, Pydantic, psycopg with connection pooling, per-user rate limiting (deployed on Railway)" },
      { label: "data", items: "Supabase Postgres with pgvector" },
      { label: "ai", items: "GPT-4o for frame-plus-transcript structural extraction and brief generation; GPT-4o-mini for niche disambiguation; text-embedding-3-small for embeddings" },
      { label: "ingestion", items: "YouTube Data API, youtube-transcript-api, yt-dlp, ffmpeg" },
    ],
    status: "shipped",
    kind: "ai",
    date: "Sep 2026",
    duration: "48 hours (Hackathon)",
    teamSize: "Team of 4",
    award: "2nd place · Track 2 winner, Forward: AI in Business",
    image: "/motif_landingpage.jpg",
    images: ["/motif_landingpage.jpg", "/motif_brief_page.jpg"],
    githubLink: null,
    liveLink: "https://motif-flax.vercel.app/",
    devpostLink: "https://devpost.com/software/motif-ybgken",
    keyTakeaways: [
      "**Measure in code, interpret with the LLM.** Hook timing, words per minute and CTA position come straight from transcript timestamps. GPT-4o is only used for what needs judgment, and only on videos that pass classification. This made results more reliable and cheaper.",
      "**Use the right-sized model for each job.** GPT-4o handles extraction and generation, where quality matters most. GPT-4o-mini handles classification, which is the highest-volume and lowest-stakes step.",
      "**\"Not sure\" should be a real answer.** The niche classifier compares each video against the average embedding of human-checked examples for each niche. A high score is accepted, a borderline score goes to an LLM check, and a low score is rejected. Nothing gets forced into the closest category.",
      "**Make the evidence traceable.** When there isn't enough evidence, retrieval widens in a fixed order: niche + content type, then content type only, then niche + platform, then niche only, then fully open. The brief reports which step its evidence came from, which is what lets it \"show its work\".",
      "**The data model mattered more than the prompts.** The biggest quality gain came from adding content type (demo, testimonial, culture piece) as a second axis alongside niche. Two culture videos from different industries have more structure in common than a demo and a culture video from the same industry.",
      "**Setting the team up to work in parallel.** I defined the API schemas and test fixtures on day one so the frontend and backend could be built at the same time. I also handled the PR merges and deployment.",
    ],
    challenges: [
      "**Silent correctness bugs.** A CTA position of 0.0 (the CTA is at the very start) was treated the same as \"unknown\", which quietly skewed the industry benchmarks. Nothing crashed, so I only found it by running the full pipeline on real data.",
      "**Bad labels led to bad insights.** At first, videos were sorted by who posted them: a tech company's basketball interview landed in \"tech\" and produced meaningless benchmarks. Moving to topic-based classification fixed it, and is the reason the classifier exists.",
      "**Small niches.** A niche with one or two examples has a very narrow average embedding, so a correct match scored only 0.43 and was rejected. Lowering the thresholds for niches with few examples let them grow.",
      "**Labels drifting apart.** The LLM kept inventing near-duplicate labels such as \"product demo\" and \"product_demonstration\". I fixed this with lookup tables and by matching new labels to existing ones by embedding similarity instead of exact text.",
      "**Cost against coverage in 48 hours.** Each video takes a download, several GPT-4o calls and embeddings. I chose a hand-picked URL list fed through a reliable classifier over automatic discovery, and designed it so a scheduled discovery job can plug into the same classifier later.",
    ],
  },
  {
    id: 1,
    title: "Moire",
    tagline: "A journal that remembers the promises you make to yourself.",
    description: "A journal that remembers. Write freely, and Moire picks out the open loops (the tasks, goals and wishes buried in your entries) and brings them back when they matter.",
    longDescription: "**Live at https://moire-xi.vercel.app/**\n\nMoire is **a journal that remembers**. Journals fill up with half-made promises to yourself: call grandma, learn to surf properly, sort out sleep. Brain-dumping feels good for a moment, then the tasks sink into old entries and are forgotten. Moire is built so that writing something down is the **start of acting on it**, not the end.\n\nYou **write freely**, with no tags, templates or organising. After each entry, Moire suggests **open loops** worth keeping, and you decide which to hold onto, in your own words; nothing is added without you. Kept items are sorted into **This week**, **Ongoing** and **Someday**, then **come back** when they're due, when you write about them again, or in a **weekly look back**: a short summary of your week, a line you wrote, and a moment to sort what's still open. You can tick a loop off or let it go, and both count.\n\nUnderneath, an **LLM pipeline** reads each entry for open loops and **recurring themes**. Themes are **canonicalised** into persistent **Fragments** (growth, friendship, uni, running) and connected over time, and when something keeps coming up, Moire gently asks whether it should become a **goal**. Check-ins are deliberately rare, back off when ignored, and can be snoozed or dismissed in a tap. There are **no stats or streaks**, by design.",
    tools: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Clerk", "OpenAI API", "ESLint"],
    status: "shipped",
    kind: "ai",
    date: "Dec 2025 – now",
    duration: "Ongoing",
    teamSize: "Solo project",
    image: "/moire_landing_page.jpg",
    images: ["/moire_landing_page.jpg", "/moire_journal_page.jpg", "/moire_openloops_page.jpg", "/moiremappage.png"],
    githubLink: "https://github.com/keyuedeng/moirejournal",
    liveLink: "https://moire-xi.vercel.app/",
    keyTakeaways: [
      "Designed and implemented an end-to-end semantic processing pipeline using LLMs, embeddings, and graph-based representations",
      "Built a canonicalisation system that maps noisy, LLM-generated topics into stable conceptual nodes using embedding similarity, centroid updates, and LLM fallback checks",
      "Implemented semantic chunking to preserve context while enabling fine-grained insight extraction without over-fragmentation",
      "Used vector embeddings and cosine similarity to manage concept identity, merging, and drift over time",
      "Architected a clean separation between API orchestration and core domain logic, improving extensibility and testability",
    ],
    challenges: [
      "Preventing topic explosion and semantic drift from LLM outputs by introducing TopicAlias mapping and node centroids",
      "Balancing automation vs interpretability, deciding when to trust embedding similarity and when to defer to LLM reasoning",
      "Preserving contextual meaning while chunking entries, especially when themes reappear non-linearly",
      "Designing a graph system that evolves incrementally without regenerating or invalidating existing structure",
      "Avoiding 'therapy-bot' failure modes by constraining tone, scope, and assumptions in reflective summaries",
      "Making resurfacing feel helpful rather than naggy: rare check-ins that back off when ignored, and letting go of a loop counts as closing it",
    ],
  },
  {
    id: 2,
    title: "MedCase",
    tagline: "AI patients that let med students practise diagnosis out loud.",
    description: "An interactive medical training platform that simulates patient diagnosis scenarios using AI-powered clinical interviews with voice synthesis and real-time feedback.",
    longDescription: "MedCase is a **medical training platform** designed to bridge the gap between textbook knowledge and real-world **clinical decision-making**. The system simulates patient diagnosis scenarios through **AI-powered clinical interviews**, enabling medical students to practice **diagnostic workflows** in a low-stakes, interactive environment.\n\nThe platform integrates **OpenAI's LLM** to generate realistic patient responses and **Deepgram's text-to-speech API** via a **FastAPI microservice** to provide voice output, creating an immersive clinical training experience. The system features two distinct modes: **learning mode**, which allows retry attempts with feedback, and **testing mode**, which enforces single-attempt diagnosis. Both modes implement **adaptive difficulty levels** (easy, medium, hard) with corresponding time limits (5, 7, and 10 minutes respectively), determined by the average number of follow-up questions required for correct diagnosis.\n\nThe architecture includes an **in-memory session management system** to handle concurrent user simulations, tracking **conversation history**, **diagnostic attempts**, and **scenario progression state**. Users can toggle between listening and reading comprehension modes, with the system providing **real-time feedback** on question efficiency and diagnostic accuracy.",
    tools: ["React", "TypeScript", "Node.js", "Express", "FastAPI", "OpenAI API", "Deepgram API", "HTML", "CSS", "JavaScript"],
    status: "archived",
    kind: "ai",
    date: "2025",
    duration: "24 hours (Hackathon)",
    teamSize: "Team project",
    image: "/medcase.png",
    githubLink: "https://github.com/keyuedeng/medcase",
    liveLink: "https://devpost.com/software/medcase",
    keyTakeaways: [
      "Architected a full-stack application with React frontend, Express.js backend, and FastAPI microservice for AI integration",
      "Integrated OpenAI's LLM and Deepgram text-to-speech API to create realistic patient simulation with voice output",
      "Engineered in-memory session management system to handle concurrent user simulations and track conversation state",
      "Implemented adaptive difficulty system with time-based constraints and feedback mechanisms for learning optimization",
      "Gained experience with rapid prototyping, API integration, and full-stack development under time constraints",
    ],
    challenges: [
      "Integrating Deepgram's text-to-speech API with proper error handling and managing voice synthesis latency issues",
      "Designing an in-memory session management system that efficiently tracks conversation history and diagnostic state",
      "Balancing feature scope with time constraints during a 24-hour hackathon while maintaining code quality",
      "Coordinating frontend-backend communication for real-time voice interactions and state synchronization",
      "Implementing adaptive difficulty algorithms that accurately reflect question complexity based on diagnostic efficiency",
    ],
  },
  {
    id: 3,
    title: "Study Tracker",
    tagline: "A minimalist study timer with heatmaps and streaks.",
    description: "Trackly is a minimalist study tracker app designed for students to log sessions, visualize progress, and build consistent study habits.",
    longDescription: "Trackly was built to tackle the challenge of staying consistent with studying. Instead of manually logging sessions, the app features a **timer system** where users choose a study length and then start, pause, resume, or stop the timer. This makes tracking effortless and closer to how study time actually happens.\n\nThe **dashboard** provides an at-a-glance summary: **total study hours**, **streaks**, and how time is split across subjects. Data is presented visually with a **GitHub-style heatmap calendar**, a **line chart** of daily hours, and a **donut chart** for subject distribution. The goal was to keep the design clean and motivating, avoiding clutter while still providing insights into habits.\n\nBuilt with **Next.js**, **Tailwind**, and **Recharts**, Trackly focused on **responsive layouts**, **smooth interactions**, and **modular component architecture**. The project highlighted skills in both front-end design and **data visualization**, resulting in a tool that supports productivity through clear, simple tracking.",
    tools: ["Next.js", "JavaScript", "Tailwind CSS", "Recharts", "React", "shadcn/ui", "PostgreSQL"],
    status: "archived",
    kind: "web",
    date: "2025",
    duration: "1 month",
    teamSize: "Solo project",
    image: "/trackly.png",
    githubLink: "https://github.com/keyuedeng/Trackly",
    liveLink: null,
    keyTakeaways: [
      "Architected a full-stack web application with Next.js 15 and PostgreSQL, integrating App Router with custom API routes to handle session data securely and efficiently",
      "Leveraged the Recharts library to implement diverse data visualizations, including time-series line charts, contribution-style heatmaps, and donut charts, ensuring interactive and performant rendering.",
      "Applied React state management and custom hooks to enable dynamic filtering, real-time updates, and seamless synchronization between the client UI and backend APIs.",
      "Designed and normalized a PostgreSQL schema with relational integrity and constraints, optimizing queries for scalability and accurate session tracking.",
      "Built responsive, accessible UI components using Tailwind CSS and shadcn/ui, balancing modern styling with consistent cross-device usability.",
    ],
    challenges: [
      "Debugged chart re-render issues in Recharts and optimized performance for frequent state updates.",
      "Balanced clean UI design with responsive layouts for data-heavy components like heatmaps and charts.",
      "Implemented dynamic filtering logic that updated charts instantly without triggering full reloads.",
      "Tuned SQL queries to balance accuracy of streaks and summaries with database performance.",
    ],
  },
  {
    id: 4,
    title: "Tool-Calling CLI Assistant",
    tagline: "A terminal assistant that calls Python tools via GPT-4o-mini.",
    description: "A modular command-line assistant powered by OpenAI's GPT-4o-mini, featuring secure function calling, tool execution, and an interactive terminal interface.",
    longDescription: "Designed to streamline and experiment with **LLM-based workflows**, this project integrates **GPT-4o-mini** with an extensible **Python-based tool system**. It uses modern practices like **async programming**, **environment-based config management**, **type hinting**, and **modular architecture** to demonstrate scalable, real-world **AI integration** in the CLI.",
    tools: ["Python", "OpenAI API", "uv", "dotenv", "Rich", "Pydantic", "Asyncio"],
    status: "archived",
    kind: "tools",
    date: "2025",
    duration: "2 weeks",
    teamSize: "Solo project",
    image: "/cli_example.png",
    githubLink: "https://github.com/keyuedeng/AI-CLI-Assistant",
    liveLink: null,
    keyTakeaways: [
      "Built an extensible architecture using abstract base classes and the registry pattern",
      "Implemented OpenAI's function-calling API with robust async support",
      "Used Rich to create an interactive, user-friendly CLI experience",
      "Learned how to structure and manage a real project end-to-end — my first large-scale personal build",
    ],
    challenges: [
      "Designing a tool system that scales cleanly with additional functionality",
      "Handling asynchronous function calls and error states effectively",
      "Ensuring safe and secure configuration through environment variables",
    ],
  },
  {
    id: 5,
    title: "Todo Widget",
    tagline: "A pixel-art, always-on-top todo list for the desktop.",
    description: "A desktop todo widget built with Electron featuring pixel art design, always-on-top functionality, and local data persistence.",
    longDescription: "A desktop todo widget built with **Electron** that provides a clean, **always-on-top interface** for managing daily tasks. The widget features a beautiful **pixel art design** with a **transparent background** and **blur effect**, making it blend seamlessly with your desktop while staying accessible.\n\nUsers can add, complete, and delete tasks with **real-time progress tracking** through a visual **progress bar**. The widget automatically positions itself on the right side of the screen and minimizes to the **system tray** when closed, ensuring it's always available without cluttering the desktop.\n\nAll data is persisted locally using **localStorage**, providing a private and fast task management experience.",
    tools: ["Electron", "Node.js", "HTML", "CSS", "JavaScript", "localStorage"],
    status: "shipped",
    kind: "tools",
    date: "2025",
    duration: "3 days",
    teamSize: "Solo project",
    image: "/todo.png",
    githubLink: "https://github.com/keyuedeng/ToDoWidget",
    liveLink: null,
    keyTakeaways: [
      "Learned to build desktop applications using Electron framework",
      "Implemented always-on-top functionality and system tray integration",
      "Created a frameless window with transparent background and blur effects",
      "Built a complete desktop widget with data persistence using localStorage",
      "Gained experience with Electron's main and renderer process architecture",
    ],
    challenges: [
      "Implementing always-on-top functionality while maintaining good UX",
      "Creating a frameless window that still allows user interaction and positioning",
      "Managing data persistence across application restarts using localStorage",
      "Designing a widget that integrates seamlessly with the desktop environment",
    ],
  },
] 