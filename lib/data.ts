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

export const projects = [
  {
    id: 1,
    title: "Tool-Calling CLI Assistant",
    description: "A modular command-line assistant powered by OpenAI’s GPT-4o-mini, featuring secure function calling, tool execution, and an interactive terminal interface.",
    longDescription: "Designed to streamline and experiment with LLM-based workflows, this project integrates GPT-4o-mini with an extensible Python-based tool system. It uses modern practices like async programming, environment-based config management, type hinting, and modular architecture to demonstrate scalable, real-world AI integration in the CLI.",
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
    id: 2,
    title: "Todo Widget",
    description: "A desktop todo widget built with Electron featuring pixel art design, always-on-top functionality, and local data persistence.",
    longDescription: "A desktop todo widget built with Electron that provides a clean, always-on-top interface for managing daily tasks. The widget features a beautiful pixel art design with a transparent background and blur effect, making it blend seamlessly with your desktop while staying accessible. Users can add, complete, and delete tasks with real-time progress tracking through a visual progress bar. The widget automatically positions itself on the right side of the screen and minimizes to the system tray when closed, ensuring it's always available without cluttering the desktop. All data is persisted locally using localStorage, providing a private and fast task management experience.",
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
  {
    id: 3,
    title: "Study Tracker",
    description: "Trackly is a minimalist study tracker app designed for students to log sessions, visualize progress, and build consistent study habits.",
    longDescription: `Trackly was built to tackle the challenge of staying consistent with studying. Instead of manually logging sessions, the app features 
                  a timer system where users choose a study length and then start, pause, resume, or stop the timer. This makes tracking effortless and closer 
                  to how study time actually happens. The dashboard provides an at-a-glance summary: total study hours, streaks, and how time is split across subjects. 
                  Data is presented visually with a GitHub-style heatmap calendar, a line chart of daily hours, and a donut chart for subject distribution. The goal 
                  was to keep the design clean and motivating, avoiding clutter while still providing insights into habits. Built with Next.js, Tailwind, and Recharts, 
                  Trackly focused on responsive layouts, smooth interactions, and modular component architecture. The project highlighted skills in both front-end design
                   and data visualization, resulting in a tool that supports productivity through clear, simple tracking.`,
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
] 