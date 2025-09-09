'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth/AuthContext'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { LoadingSpinner } from '@/components/ui/loading-states'
import { 
  Settings, 
  FileText, 
  Image, 
  Save, 
  Plus, 
  Edit, 
  Trash2, 
  Upload,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle
} from 'lucide-react'
import { formatFileSize, formatDate } from '@/lib/cms-utils'

interface ContentSection {
  id: string
  section_name: string
  title: string
  description: string
  content: any
  images: string[]
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
}

interface MediaFile {
  id: string
  filename: string
  file_path: string
  file_type: string
  file_size: number
  alt_text?: string
  caption?: string
  created_at: string
}

interface SiteSetting {
  id: string
  setting_key: string
  setting_value: any
  description?: string
  updated_at: string
}

export default function AdminDashboard() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [contentSections, setContentSections] = useState<ContentSection[]>([])
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])
  const [siteSettings, setSiteSettings] = useState<SiteSetting[]>([])
  const [selectedSection, setSelectedSection] = useState<ContentSection | null>(null)
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isLoading, router])

  useEffect(() => {
    if (isAuthenticated) {
      fetchContentSections()
      fetchMediaFiles()
      fetchSiteSettings()
    }
  }, [isAuthenticated])

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <LoadingSpinner size="lg" className="mx-auto mb-4" />
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null
  }

  const fetchContentSections = async () => {
    try {
      const response = await fetch('/api/cms/content')
      const result = await response.json()
      if (result.data) {
        setContentSections(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch content sections:', error)
    }
  }

  const fetchMediaFiles = async () => {
    try {
      const response = await fetch('/api/cms/media')
      const result = await response.json()
      if (result.data) {
        setMediaFiles(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch media files:', error)
    }
  }

  const fetchSiteSettings = async () => {
    try {
      const response = await fetch('/api/cms/settings')
      const result = await response.json()
      if (result.data) {
        setSiteSettings(result.data)
      }
    } catch (error) {
      console.error('Failed to fetch site settings:', error)
    }
  }

  const handleSaveSection = async (section: Partial<ContentSection>) => {
    setIsLoadingData(true)
    try {
      const url = section.id ? `/api/cms/content/${section.id}` : '/api/cms/content'
      const method = section.id ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(section)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        setMessage({ type: 'success', text: 'Content saved successfully!' })
        fetchContentSections()
        setSelectedSection(null)
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save content' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' })
    }
    setIsLoadingData(false)
  }

  const handleUploadMedia = async (file: File, altText?: string, caption?: string) => {
    setIsLoadingData(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      if (altText) formData.append('altText', altText)
      if (caption) formData.append('caption', caption)

      const response = await fetch('/api/cms/media', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      
      if (response.ok) {
        setMessage({ type: 'success', text: 'File uploaded successfully!' })
        fetchMediaFiles()
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to upload file' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Upload failed' })
    }
    setIsLoadingData(false)
  }

  const handleSaveSetting = async (key: string, value: any) => {
    setIsLoadingData(true)
    try {
      const response = await fetch('/api/cms/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ setting_key: key, setting_value: value })
      })

      const result = await response.json()
      
      if (response.ok) {
        setMessage({ type: 'success', text: 'Setting saved successfully!' })
        fetchSiteSettings()
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to save setting' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error occurred' })
    }
    setIsLoadingData(false)
  }

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {message && (
        <Alert className={`mb-6 ${message.type === 'error' ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'}`}>
          <AlertDescription className={message.type === 'error' ? 'text-red-700' : 'text-green-700'}>
            {message.text}
          </AlertDescription>
        </Alert>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Management System</h1>
        <p className="mt-2 text-gray-600">Manage content, media, and settings for SIKOMJARU website</p>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Content Sections
          </TabsTrigger>
          <TabsTrigger value="media" className="flex items-center gap-2">
            <Image className="w-4 h-4" />
            Media Library
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Site Settings
          </TabsTrigger>
        </TabsList>

        {/* Content Management Tab */}
        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Content List */}
            <Card>
              <CardHeader>
                <CardTitle>Content Sections</CardTitle>
                <CardDescription>Manage website content sections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contentSections.map((section) => (
                  <div key={section.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold">{section.section_name}</h3>
                      <p className="text-sm text-gray-600 truncate">{section.title}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant={section.is_active ? "default" : "secondary"}>
                          {section.is_active ? "Active" : "Inactive"}
                        </Badge>
                        <span className="text-xs text-gray-500">Order: {section.order_index}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSection(section)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedSection ? `Edit: ${selectedSection.section_name}` : 'Select a section to edit'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedSection ? (
                  <ContentEditor 
                    section={selectedSection} 
                    onSave={handleSaveSection}
                    isLoading={isLoadingData}
                  />
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    Select a content section from the list to start editing
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Media Management Tab */}
        <TabsContent value="media" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Media Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Media</CardTitle>
                <CardDescription>Upload images and files</CardDescription>
              </CardHeader>
              <CardContent>
                <MediaUploader onUpload={handleUploadMedia} isLoading={isLoadingData} />
              </CardContent>
            </Card>

            {/* Media Library */}
            <Card>
              <CardHeader>
                <CardTitle>Media Library</CardTitle>
                <CardDescription>Manage uploaded files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {mediaFiles.map((file) => (
                    <div key={file.id} className="border rounded-lg p-2">
                      {file.file_type.startsWith('image/') ? (
                        <img 
                          src={file.file_path} 
                          alt={file.alt_text || file.filename}
                          className="w-full h-20 object-cover rounded mb-2"
                        />
                      ) : (
                        <div className="w-full h-20 bg-gray-200 rounded mb-2 flex items-center justify-center">
                          <FileText className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                      <p className="text-xs font-medium truncate">{file.filename}</p>
                      <p className="text-xs text-gray-500">{(file.file_size / 1024).toFixed(1)} KB</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Site Settings</CardTitle>
              <CardDescription>Configure website settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {siteSettings.map((setting) => (
                  <SettingEditor 
                    key={setting.id}
                    setting={setting}
                    onSave={handleSaveSetting}
                    isLoading={isLoadingData}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </ProtectedRoute>
  )
}

// Content Editor Component
function ContentEditor({ 
  section, 
  onSave, 
  isLoading 
}: { 
  section: ContentSection
  onSave: (section: Partial<ContentSection>) => void
  isLoading: boolean
}) {
  const [editedSection, setEditedSection] = useState(section)

  useEffect(() => {
    setEditedSection(section)
  }, [section])

  const handleSave = () => {
    onSave(editedSection)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={editedSection.title}
          onChange={(e) => setEditedSection({ ...editedSection, title: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={editedSection.description}
          onChange={(e) => setEditedSection({ ...editedSection, description: e.target.value })}
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="order">Order</Label>
        <Input
          id="order"
          type="number"
          value={editedSection.order_index}
          onChange={(e) => setEditedSection({ ...editedSection, order_index: parseInt(e.target.value) })}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="active"
          checked={editedSection.is_active}
          onCheckedChange={(checked) => setEditedSection({ ...editedSection, is_active: checked })}
        />
        <Label htmlFor="active">Active</Label>
      </div>

      <Button onClick={handleSave} disabled={isLoading} className="w-full">
        <Save className="w-4 h-4 mr-2" />
        {isLoading ? 'Saving...' : 'Save Changes'}
      </Button>
    </div>
  )
}

// Media Uploader Component
function MediaUploader({ 
  onUpload, 
  isLoading 
}: { 
  onUpload: (file: File, altText?: string, caption?: string) => void
  isLoading: boolean
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [altText, setAltText] = useState('')
  const [caption, setCaption] = useState('')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile, altText, caption)
      setSelectedFile(null)
      setAltText('')
      setCaption('')
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="file">Select File</Label>
        <Input
          id="file"
          type="file"
          onChange={handleFileSelect}
          accept="image/*"
        />
      </div>

      {selectedFile && (
        <>
          <div>
            <Label htmlFor="altText">Alt Text</Label>
            <Input
              id="altText"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image..."
            />
          </div>

          <div>
            <Label htmlFor="caption">Caption</Label>
            <Input
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Image caption..."
            />
          </div>

          <Button onClick={handleUpload} disabled={isLoading} className="w-full">
            <Upload className="w-4 h-4 mr-2" />
            {isLoading ? 'Uploading...' : 'Upload File'}
          </Button>
        </>
      )}
    </div>
  )
}

// Setting Editor Component
function SettingEditor({ 
  setting, 
  onSave, 
  isLoading 
}: { 
  setting: SiteSetting
  onSave: (key: string, value: any) => void
  isLoading: boolean
}) {
  const [value, setValue] = useState(setting.setting_value)

  const handleSave = () => {
    onSave(setting.setting_key, value)
  }

  return (
    <div className="space-y-2">
      <Label>{setting.setting_key.replace(/_/g, ' ').toUpperCase()}</Label>
      <div className="flex gap-2">
        <Input
          value={typeof value === 'string' ? value.replace(/"/g, '') : value}
          onChange={(e) => setValue(`"${e.target.value}"`)}
          className="flex-1"
        />
        <Button 
          onClick={handleSave} 
          disabled={isLoading}
          size="sm"
        >
          <Save className="w-4 h-4" />
        </Button>
      </div>
      {setting.description && (
        <p className="text-xs text-gray-500">{setting.description}</p>
      )}
    </div>
  )
}
