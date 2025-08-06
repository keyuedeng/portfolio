import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save } from "lucide-react"
import { ProfilePhotoUpload } from "@/components/profile-photo-upload"

export default function ProfileSetupPage() {
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
            <Button>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Profile Setup</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalize your portfolio with a professional profile photo and additional details.
          </p>
        </div>
      </section>

      {/* Profile Photo Upload */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ProfilePhotoUpload />

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips for a Great Profile Photo</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Professional Appearance</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dress professionally or business casual</li>
                  <li>• Maintain good posture and confident expression</li>
                  <li>• Ensure your face is clearly visible</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Quality</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use good lighting (natural light works best)</li>
                  <li>• Choose a clean, uncluttered background</li>
                  <li>• Ensure the image is sharp and high-resolution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
