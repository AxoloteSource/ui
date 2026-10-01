import { IFileProps } from './IFileProps'
import { useEffect, useState } from 'react'

const File = ({ className = '', url }: IFileProps) => {
  const [blob, setBlob] = useState<Blob | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let active = true
    setIsLoading(true)

    fetch(url)
      .then((response) => response.blob())
      .then((data) => {
        if (active) {
          setBlob(data)
          setIsLoading(false)
        }
      })
      .catch(() => {
        if (active) {
          setIsLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [url])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!blob) {
    return null
  }

  const objectUrl = URL.createObjectURL(blob)

  return (
    <div className={className}>
      {blob.type.startsWith('image/') && <img src={objectUrl} alt="File" />}
      {blob.type === 'application/pdf' && <embed src={objectUrl} type="application/pdf" width="100%" height="600px" />}
    </div>
  )
}

export default File
