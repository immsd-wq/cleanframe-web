'use client'

export default function EditorPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">CleanFrame Editor</h1>
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-4">Upload an image to get started</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-blue-600 hover:text-blue-700">
                <p className="text-lg">Click to upload image</p>
                <p className="text-sm mt-2">or drag and drop</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </main>
  )
}
