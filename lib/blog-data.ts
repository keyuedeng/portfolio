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
] 