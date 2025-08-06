import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Clock, Users } from "lucide-react"
import { projects } from "@/lib/data"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the project by ID
  const project = projects.find(project => project.id === parseInt(params.id))
  
  // If project not found, show 404
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/projects" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Projects</span>
            </Link>
            <div className="flex items-center space-x-8">
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

      {/* Project Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.teamSize}
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{project.longDescription}</p>
              
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href={project.githubLink} target="_blank">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Link>
                </Button>
                {project.liveLink && (
                  <Button variant="outline" size="lg" asChild>
                    <Link href={project.liveLink} target="_blank">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain bg-gray-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Tools & Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="text-sm py-2 px-3">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">Status:</span> {project.status}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Duration:</span> {project.duration}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Team Size:</span> {project.teamSize}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways & Challenges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Key Takeaways */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
              <ul className="space-y-3">
                {project.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1.5 text-lg">•</span>
                    <span className="text-gray-600">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges Overcome */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges Overcome</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1.5 text-lg">•</span>
                    <span className="text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in This Project?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Check out the code or see it in action!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={project.githubLink} target="_blank">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Link>
            </Button>
            {project.liveLink && (
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link href={project.liveLink} target="_blank">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 