import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const posts = blogPosts

  const categories = [
    "All",
    "Development",
    "API Design",
    "DevOps",
    "Best Practices",
    "Accessibility",
    "React",
    "Performance",
    "Open Source",
  ]
  const featuredPosts = posts.filter((post) => post.featured)
  const regularPosts = posts.filter((post) => !post.featured)

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
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
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
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Learning Journal</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Documenting my development journey, sharing lessons learned, and reflecting on the challenges and
            breakthroughs that have shaped my growth as a developer.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="text-sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{post.title}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      Read More <ArrowRight className="ml-2 w-3 h-3 inline" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Posts</h2>
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-blue-600 font-medium">
                      Read Full Post <ArrowRight className="ml-2 w-4 h-4 inline" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
