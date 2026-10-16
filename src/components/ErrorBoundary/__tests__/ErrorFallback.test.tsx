import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ErrorFallback } from '../ErrorFallback'

describe('ErrorFallback', () => {
  it('renders the fallback UI with the error message', () => {
    render(<ErrorFallback error={new Error('boom')} resetErrorBoundary={vi.fn()} />)
    expect(screen.getByRole('heading', { name: '¡Ups! Algo salió mal' })).toBeInTheDocument()
    expect(screen.getByText('boom')).toBeInTheDocument()
    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})
