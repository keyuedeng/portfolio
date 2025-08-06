import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, BookOpen, User, ExternalLink, Github, Linkedin } from "lucide-react"
import { projects } from "@/lib/data"
import { blogPosts } from "@/lib/blog-data"

export default function HomePage() {
  // Get first 3 projects for featured section
  const featuredProjects = projects.slice(0, 3)
  // Get first 3 blog posts for recent posts section
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Karen Deng</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 font-medium">
                Home
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Button asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Karen Deng
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Studying Computing and Software Systems at the University of Melbourne, 
              I'm driven by a passion for building practical, impactful software. 
              This portfolio showcases the projects, lessons, and ideas I've explored along the way.
            </p>
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/pfp.png"
                  alt="Karen Deng - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">
                  Read My Journey <BookOpen className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work, including the challenges faced, solutions implemented, and lessons learned.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                <Link href={`/projects/${project.id}`}>
                  <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg mt-4">{project.title}</CardTitle>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="mt-2">{project.status}</Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Link>
                <CardContent className="pt-0">
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href={project.githubLink} target="_blank">
                      <Github className="mr-2 w-3 h-3" />
                      Git
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Documenting my learning journey, sharing lessons learned, and reflecting on the development process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="text-sm text-blue-600 font-medium">
                      Read More <ArrowRight className="ml-2 w-3 h-3 inline" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-blue-100 mb-8 text-lg">
            I'm always excited to collaborate on new projects and share knowledge with fellow developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get In Touch <User className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="https://www.linkedin.com/in/karen-deng-795709322/" target="_blank">
                Connect on LinkedIn <Linkedin className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-600">
                  <img src="/pfp.png" alt="Karen Deng" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold">Karen Deng</span>
              </div>
              <p className="text-gray-400 mb-4">
                Software developer passionate about building real-world projects with purpose and impact.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com/keyuedeng" target="_blank" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/karen-deng-795709322/"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="mailto:keyuedeng6@gmail.com" className="hover:text-white">
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/karen-deng-795709322/" target="_blank" className="hover:text-white">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Karen Deng. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
