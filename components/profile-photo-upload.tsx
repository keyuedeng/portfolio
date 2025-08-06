"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Camera, User } from "lucide-react"

interface ProfilePhotoUploadProps {
  currentPhoto?: string
  onPhotoChange?: (photo: string) => void
}

export function ProfilePhotoUpload({ currentPhoto, onPhotoChange }: ProfilePhotoUploadProps) {
  const [photo, setPhoto] = useState(currentPhoto || "/pfp.png")
  const [isUploading, setIsUploading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      // In a real app, you'd upload to a service like Vercel Blob or AWS S3
      const reader = new FileReader()
      reader.onload = (e) => {
        const newPhoto = e.target?.result as string
        setPhoto(newPhoto)
        onPhotoChange?.(newPhoto)
        setIsUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Camera className="w-5 h-5" />
          Profile Photo
        </CardTitle>
        <CardDescription>Upload a professional headshot to personalize your portfolio</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-100">
              {photo ? (
                <img src={photo || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>
            {isUploading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <input type="file" id="photo-upload" accept="image/*" onChange={handleFileChange} className="hidden" />
          <Button asChild className="w-full" disabled={isUploading}>
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              {isUploading ? "Uploading..." : "Upload New Photo"}
            </label>
          </Button>
        </div>

        <div className="text-sm text-gray-500 space-y-1">
          <p>• Recommended size: 400x400px or larger</p>
          <p>• Supported formats: JPG, PNG, WebP</p>
          <p>• Maximum file size: 5MB</p>
        </div>
      </CardContent>
    </Card>
  )
}
