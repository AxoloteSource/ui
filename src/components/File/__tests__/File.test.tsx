import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import File from '../File'

const mockFetchOnce = (blob: Blob) => {
  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve({ blob: () => Promise.resolve(blob) })))
}

describe('File', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows a loading state first', () => {
    mockFetchOnce(new Blob(['x'], { type: 'image/png' }))
    render(<File url="/some/image.png" />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders an <img> for image blobs', async () => {
    mockFetchOnce(new Blob(['x'], { type: 'image/png' }))
    render(<File url="/some/image.png" />)
    expect(await screen.findByAltText('File')).toBeInTheDocument()
  })

  it('renders a <embed> for pdf blobs', async () => {
    mockFetchOnce(new Blob(['x'], { type: 'application/pdf' }))
    const { container } = render(<File url="/some/doc.pdf" />)
    await screen.findByText('Loading...').catch(() => undefined)
    await vi.waitFor(() => expect(container.querySelector('embed')).toBeInTheDocument())
  })

  it('renders nothing when the blob has no supported type', async () => {
    mockFetchOnce(new Blob(['x'], { type: 'text/plain' }))
    const { container } = render(<File url="/some/file.txt" />)
    await vi.waitFor(() => expect(container.querySelector('embed, img')).toBeNull())
  })
})
