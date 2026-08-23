// TO ADD NEW PROJECT: Copy this template and add it to the projects array below
// {
//   id: unique_number,
//   title: "Project Title",
//   description: "Brief description for project cards",
//   longDescription: "Detailed description explaining the project purpose and what it solves",
//   tools: ["Technology1", "Technology2", "Technology3"],
//   status: "Completed" or "In Progress",
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

export type Project = {
  id: number
  title: string
  description: string
  longDescription: string
  tools: string[]
  status: string
  duration: string
  teamSize: string
  image: string
  images?: string[]
  githubLink: string
  liveLink: string | null
  keyTakeaways: string[]
  challenges: string[]
  futureFeatures?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Moire",
    description: "A personal reflection system that transforms journal entries into a living semantic map of thoughts, emotions, and identity using NLP and graph-based representations.",
    longDescription: "**Live at https://moire-xi.vercel.app/**\n\nMoire is a **personal reflection system** that transforms unstructured journal entries into a living **semantic map** of thoughts, emotions, habits, and identity. Instead of encouraging users to reread old entries, the system surfaces patterns over time — what themes recur, how ideas connect, and how the user's inner landscape evolves.\n\nJournal entries are processed through a **multi-stage NLP pipeline** that segments text into coherent **thematic chunks**, extracts high-level topics and sentiment, **canonicalises** those topics into persistent **conceptual nodes**, and builds **weighted connections** between them across time. The result is a **dynamic graph** where **nodes** represent meaningful concepts in the user's life and **edges** represent how those concepts **co-occur** and evolve together.\n\nThe project is driven by a core question: How can reflection support growth without forcing people to manually look backward? Rather than presenting raw logs, Moire acts as a **reflective mirror** — revealing identity, motivation, struggles, and growth as **emergent structure** rather than explicit memory recall.",
    tools: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Clerk", "OpenAI API", "ESLint"],
    status: "Completed",
    duration: "2 months",
    teamSize: "Solo project",
    image: "/moiremappage.png",
    images: ["/moirejournalpage.png", "/moiremappage.png"],
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
    ],
    futureFeatures: [
      "Weekly and monthly goals/to-dos, surfaced from recurring themes in entries",
      "Automatic resurfacing of past reminders and intentions at the right moment",
      "A gentle check-in asking whether a recurring theme should become a goal",
      "A short takeaway or nudge after each entry, something small in return for reflecting",
    ],
  },
  {
    id: 2,
    title: "MedCase",
    description: "An interactive medical training platform that simulates patient diagnosis scenarios using AI-powered clinical interviews with voice synthesis and real-time feedback.",
    longDescription: "MedCase is a **medical training platform** designed to bridge the gap between textbook knowledge and real-world **clinical decision-making**. The system simulates patient diagnosis scenarios through **AI-powered clinical interviews**, enabling medical students to practice **diagnostic workflows** in a low-stakes, interactive environment.\n\nThe platform integrates **OpenAI's LLM** to generate realistic patient responses and **Deepgram's text-to-speech API** via a **FastAPI microservice** to provide voice output, creating an immersive clinical training experience. The system features two distinct modes: **learning mode**, which allows retry attempts with feedback, and **testing mode**, which enforces single-attempt diagnosis. Both modes implement **adaptive difficulty levels** (easy, medium, hard) with corresponding time limits (5, 7, and 10 minutes respectively), determined by the average number of follow-up questions required for correct diagnosis.\n\nThe architecture includes an **in-memory session management system** to handle concurrent user simulations, tracking **conversation history**, **diagnostic attempts**, and **scenario progression state**. Users can toggle between listening and reading comprehension modes, with the system providing **real-time feedback** on question efficiency and diagnostic accuracy.",
    tools: ["React", "TypeScript", "Node.js", "Express", "FastAPI", "OpenAI API", "Deepgram API", "HTML", "CSS", "JavaScript"],
    status: "Completed",
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
    description: "Trackly is a minimalist study tracker app designed for students to log sessions, visualize progress, and build consistent study habits.",
    longDescription: "Trackly was built to tackle the challenge of staying consistent with studying. Instead of manually logging sessions, the app features a **timer system** where users choose a study length and then start, pause, resume, or stop the timer. This makes tracking effortless and closer to how study time actually happens.\n\nThe **dashboard** provides an at-a-glance summary: **total study hours**, **streaks**, and how time is split across subjects. Data is presented visually with a **GitHub-style heatmap calendar**, a **line chart** of daily hours, and a **donut chart** for subject distribution. The goal was to keep the design clean and motivating, avoiding clutter while still providing insights into habits.\n\nBuilt with **Next.js**, **Tailwind**, and **Recharts**, Trackly focused on **responsive layouts**, **smooth interactions**, and **modular component architecture**. The project highlighted skills in both front-end design and **data visualization**, resulting in a tool that supports productivity through clear, simple tracking.",
    tools: ["Next.js", "JavaScript", "Tailwind CSS", "Recharts", "React", "shadcn/ui", "PostgreSQL"],
    status: "Completed",
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
    description: "A modular command-line assistant powered by OpenAI's GPT-4o-mini, featuring secure function calling, tool execution, and an interactive terminal interface.",
    longDescription: "Designed to streamline and experiment with **LLM-based workflows**, this project integrates **GPT-4o-mini** with an extensible **Python-based tool system**. It uses modern practices like **async programming**, **environment-based config management**, **type hinting**, and **modular architecture** to demonstrate scalable, real-world **AI integration** in the CLI.",
    tools: ["Python", "OpenAI API", "uv", "dotenv", "Rich", "Pydantic", "Asyncio"],
    status: "Completed",
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
    description: "A desktop todo widget built with Electron featuring pixel art design, always-on-top functionality, and local data persistence.",
    longDescription: "A desktop todo widget built with **Electron** that provides a clean, **always-on-top interface** for managing daily tasks. The widget features a beautiful **pixel art design** with a **transparent background** and **blur effect**, making it blend seamlessly with your desktop while staying accessible.\n\nUsers can add, complete, and delete tasks with **real-time progress tracking** through a visual **progress bar**. The widget automatically positions itself on the right side of the screen and minimizes to the **system tray** when closed, ensuring it's always available without cluttering the desktop.\n\nAll data is persisted locally using **localStorage**, providing a private and fast task management experience.",
    tools: ["Electron", "Node.js", "HTML", "CSS", "JavaScript", "localStorage"],
    status: "Completed",
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