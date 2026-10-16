import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Alert from '../Alert'

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Mensaje de alerta</Alert>)
    expect(screen.getByText('Mensaje de alerta')).toBeInTheDocument()
  })

  it('renders the title when provided', () => {
    render(<Alert title="Importante">contenido</Alert>)
    expect(screen.getByText('Importante')).toBeInTheDocument()
  })

  it('defaults to the info type', () => {
    const { container } = render(<Alert>test</Alert>)
    expect(container.firstChild).toHaveClass('border-blue-500')
  })

  it('applies the success type colors', () => {
    const { container } = render(<Alert type="success">test</Alert>)
    expect(container.firstChild).toHaveClass('border-green-500')
  })
})
