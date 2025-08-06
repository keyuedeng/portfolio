"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params and find the post by ID
  const unwrappedParams = React.use(params)
  const post = blogPosts.find(post => post.id === parseInt(unwrappedParams.id))
  
  // If post not found, show 404
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/blog" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    // Fallback: copy URL to clipboard
                    navigator.clipboard.writeText(window.location.href);
                    // You could add a toast notification here
                  }
                }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="default">{post.category}</Badge>
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center space-x-4 pb-8 border-b">
            {/* Replace the gradient circle in the author section with: */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                                <img src="/pfp.png" alt="Karen Deng" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Karen Deng</p>
                              <p className="text-sm text-gray-500">Software Developer</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{children}</h3>,
              p: ({children}) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
              code: ({children, className}) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">{children}</code>
                ) : (
                  <code className={className}>{children}</code>
                );
              },
              pre: ({children}) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
              strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
              a: ({children, href}) => <a href={href} className="text-blue-600 hover:text-blue-800 underline">{children}</a>,
              ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
              li: ({children}) => <li className="text-gray-700">{children}</li>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-end">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                  });
                } else {
                  // Fallback: copy URL to clipboard
                  navigator.clipboard.writeText(window.location.href);
                  // You could add a toast notification here
                }
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </footer>
      </article>
    </div>
  )
}
