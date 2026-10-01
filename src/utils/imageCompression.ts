import imageCompression from 'browser-image-compression'

interface ImageCompressionOptions {
  maxSizeMB?: number
  maxWidthOrHeight?: number
  useWebWorker?: boolean
}

const DEFAULT_OPTIONS: ImageCompressionOptions = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: true
}

const IMAGE_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

export const compressImage = async (file: File, options: ImageCompressionOptions = {}): Promise<File> => {
  if (!IMAGE_MIME_TYPES.includes(file.type)) {
    return file
  }

  try {
    return await imageCompression(file, { ...DEFAULT_OPTIONS, ...options })
  } catch {
    return file
  }
}

export const compressImages = async (files: File[], options?: ImageCompressionOptions): Promise<File[]> => {
  return Promise.all(files.map((file) => compressImage(file, options)))
}
