// TO ADD NEW BLOG POST: Copy this template and add it to the blogPosts array below
// {
//   id: unique_number,
//   title: "Blog Post Title",
//   excerpt: "Brief description of the post for previews",
//   content: `
// # Your Blog Post Title
// 
// Your full blog post content goes here in markdown format.
// You can use:
// - Headers with # ## ###
// - **Bold text**
// - *Italic text*
// - [Links](https://example.com)
// - Code blocks with backticks
// - Lists like this one
// 
// ## Subheading
// 
// More content...
//   `,
//   date: "YYYY-MM-DD",
//   readTime: "X min read",
//   category: "Category Name",
//   tags: ["Tag1", "Tag2", "Tag3"],
//   featured: true or false,
// },

export const blogPosts = [
  {
    id: 1,
    title: "Welcome to My Blog!",
    excerpt: "Hi there! Nothing here yet, but I'm working on some exciting content. Stay tuned for insights about my development journey, lessons learned, and project deep-dives.",
    content: `
# Welcome to My Blog!

Hi there! 👋

Thanks for stopping by my blog section. I'm currently working on creating some valuable content to share with you.

## What to Expect

I'll be writing about:

- **Development insights** from my projects
- **Lessons learned** during my coding journey  
- **Technical deep-dives** into interesting problems and solutions
- **Tools and technologies** I'm exploring

## Coming Soon

I have several blog posts in the works covering:

- My experience building full-stack applications
- Debugging techniques that have saved me hours
- Tips for new developers starting their journey
- Project retrospectives and key takeaways

## Stay Connected

While I'm working on the content, feel free to check out my [projects](/projects) or [get in touch](/contact) if you'd like to connect!

Thanks for your patience, and I look forward to sharing my thoughts and experiences with you soon.

**- Karen**
    `,
    date: "2025-08-06",
    readTime: "1 min read",
    category: "Updates",
    tags: ["Welcome", "Coming Soon"],
    featured: true,
  },
  {
    id: 2,
    title: "Building MedCase: My First Hackathon Experience",
    excerpt: "A reflection on building a full-stack medical training platform in 24 hours at SB Hacks, covering technical architecture, team collaboration, and lessons learned.",
    content: `
# Building MedCase: My First Hackathon Experience

Last month, I participated in my first hackathon at SB Hacks at UC Santa Barbara. For my entire team, this was our first hackathon experience, and for most of us, it was also our first time building a full-stack application from scratch. In 24 hours, we built **MedCase** — an interactive medical simulation platform that helps students bridge the gap between textbook knowledge and real-world patient care.

## The Problem We Set Out to Solve

Medicine isn't just about getting the right answer. It's about being accurate, safe, and human in real patient interactions where cases are often messy and rarely follow textbook patterns. Medical students face a significant challenge: how do you practice the nuanced skills of patient interaction, diagnostic reasoning, and clinical decision-making before you're actually in a hospital?

Traditional learning tools rely heavily on multiple-choice questions and scripted scenarios, which don't capture the dynamic, conversational nature of real clinical encounters. We wanted to create something that felt more authentic.

## What We Built

MedCase is an interactive medical simulation platform where students engage in realistic, free-text conversations with an AI-powered patient. Instead of scripted multiple-choice flows, the patient adapts to questions, decisions, and emotional cues, allowing scenarios to evolve naturally based on the student's approach.

The platform features two distinct modes:

- **Learning Mode**: Provides hints and guidance to help students think through diagnostic processes
- **Testing Mode**: Simulates real clinical exams without guidance, enforcing single-attempt diagnosis

Both modes implement adaptive difficulty levels (easy, medium, hard) with corresponding time limits, determined by the average number of follow-up questions typically required for correct diagnosis.

## Technical Architecture

Our stack consisted of a **React** and **TypeScript** frontend, an **Express.js** backend running on **Node.js**, and a **FastAPI** microservice for AI integration. We integrated **OpenAI's LLM** to generate realistic patient responses and **Deepgram's text-to-speech API** to provide voice output, creating an immersive clinical training experience.

### Backend Implementation

I worked primarily on the backend, focusing on several core systems:

**Session Management**: We implemented an in-memory session management system to handle concurrent user simulations. Each session tracks conversation history, diagnostic attempts, and scenario progression state. This required careful state management to ensure data consistency across multiple API calls.

**Patient Behavior Logic**: The patient's responses needed to feel natural while maintaining medical accuracy. We designed a system where the AI patient could adapt to different questioning styles, provide contextual responses based on previous interactions, and maintain character consistency throughout the conversation.

**Mode Differentiation**: One of the most interesting technical challenges was implementing the different guidance mechanisms between learning and testing modes. In learning mode, the system provides contextual hints and nudges to guide thinking, while exam mode strictly enforces no guidance. This required careful separation of concerns in our API design to ensure the frontend couldn't accidentally access hints in exam mode.

**API Integration**: Integrating Deepgram's text-to-speech API presented some interesting challenges. We had to handle latency issues, manage audio streaming, and ensure proper error handling when voice synthesis failed. The FastAPI microservice architecture helped isolate these concerns and made it easier to debug issues.

### Frontend Development

My teammates handled the frontend, building an intuitive interface that supported both listening and reading comprehension modes. The UI needed to feel responsive and provide real-time feedback on question efficiency and diagnostic accuracy.

## Technical Challenges and Solutions

**Real-time Voice Synthesis**: Managing the latency between user input and voice output was tricky. We implemented a queuing system and added loading states to provide better user feedback during voice generation.

**State Synchronization**: Coordinating state between the frontend, Express backend, and FastAPI microservice required careful API design. We used a RESTful approach with clear separation of concerns, ensuring each service had a well-defined responsibility.

**Scope Management**: With only 24 hours, we had to make tough decisions about feature prioritization. We focused on core functionality first — getting the conversation flow working — before adding polish. This taught me valuable lessons about rapid prototyping and making smart tradeoffs.

## Lessons Learned

Beyond the technical implementation, the biggest lessons came from working with an incredible team under intense time pressure. Here's what I took away:

**Effective Collaboration**: Learning to communicate clearly across different skill sets and experience levels was crucial. We established clear ownership of different components early on, which helped us work in parallel without stepping on each other's code.

**Rapid Problem-Solving**: When we hit issues with unfamiliar APIs (like Deepgram), we had to debug and adapt quickly. This taught me the importance of reading documentation thoroughly and having fallback plans.

**Prioritization Under Constraints**: Not every feature made it into the final product. Learning to say "no" to good ideas in favor of shipping something complete was a valuable skill.

**Iteration and Tradeoffs**: We made several architectural decisions that we might have done differently with more time, but they worked for our constraints. Understanding when "good enough" is actually good enough is an important skill.

## Reflection

We didn't win the hackathon, but that was never really the point. I learned an incredible amount about full-stack development, API integration, and working effectively in a team under pressure. The experience gave me confidence in my ability to build something meaningful from scratch, even with tight constraints.

Most importantly, I had a lot of fun. Between intense coding sessions, debugging marathons, and much-needed breaks with the therapy dog, the experience reminded me why I love building things. There's something uniquely satisfying about taking an idea and making it real, even if it's not perfect.

If you're interested in checking out the project, you can find it on [Devpost](https://devpost.com/software/medcase). I'd definitely do another hackathon — the energy, the learning, and the collaboration make it an experience I'd recommend to any developer.

**- Karen**
    `,
    date: "2025-01-15",
    readTime: "6 min read",
    category: "Projects",
    tags: ["Hackathon", "Full-Stack", "AI", "Team Work"],
    featured: true,
  },
] 