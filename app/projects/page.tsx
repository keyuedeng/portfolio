import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Clock, Users } from "lucide-react"
import { projects } from "@/lib/data"

export default function ProjectsPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
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

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Project Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my development projects, including the challenges faced, solutions implemented,
            and valuable lessons learned along the way.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-contain bg-gray-50"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
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

                      <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
                      <p className="text-gray-600 mb-6">{project.description}</p>

                      <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.slice(0, 6).map((tool) => (
                            <Badge key={tool} variant="outline" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                          {project.tools.length > 6 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.tools.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="text-sm text-blue-600 font-medium">
                        Click to view full details →
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
