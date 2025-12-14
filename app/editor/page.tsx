'use client'
import { useState, ChangeEvent } from 'react'
import Image from 'next/image'

export default function EditorPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageName, setImageName] = useState<string>('')

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setImageName('')
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">CleanFrame Editor</h1>
          {selectedImage && (
            <button 
              onClick={handleReset}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Upload New Image
            </button>
          )}
        </div>

        {!selectedImage ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-center text-lg">Upload an image to get started</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-16 hover:border-blue-400 transition-colors">
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                id="file-upload"
                onChange={handleImageUpload}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-center">
                  <div className="text-blue-600 hover:text-blue-700">
                    <svg className="mx-auto h-16 w-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-xl font-semibold">Click to upload image</p>
                    <p className="text-sm mt-2 text-gray-500">or drag and drop</p>
                    <p className="text-xs mt-2 text-gray-400">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Preview: {imageName}</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Remove Watermark
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Download
                  </button>
                </div>
              </div>
              <div className="relative w-full" style={{minHeight: '400px'}}>
                <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center" style={{minHeight: '400px'}}>
                  <img 
                    src={selectedImage} 
                    alt="Uploaded preview" 
                    className="max-w-full max-h-[600px] object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Click on the image to mark areas for watermark removal. Use the tools above to process your image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
