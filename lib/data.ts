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
] 