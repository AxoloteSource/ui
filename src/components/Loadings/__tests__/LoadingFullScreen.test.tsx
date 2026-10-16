import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import LoadingFullScreen from '../LoadingFullScreen/LoadingFullScreen'

describe('LoadingFullScreen', () => {
  it('renders nothing when isLoading is false', () => {
    const { container } = render(<LoadingFullScreen isLoading={false} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders the provided message when loading', () => {
    render(<LoadingFullScreen isLoading message="Cargando datos" />)
    expect(screen.getByText('Cargando datos')).toBeInTheDocument()
  })

  it('falls back to the translated default message', () => {
    render(<LoadingFullScreen isLoading />)
    expect(screen.getByText('loading')).toBeInTheDocument()
  })
})
