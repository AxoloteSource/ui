import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Banner from '../Banner'

describe('Banner', () => {
  it('renders its children', () => {
    render(<Banner>Guardado correctamente</Banner>)
    expect(screen.getByText('Guardado correctamente')).toBeInTheDocument()
  })

  it('renders the optional label', () => {
    render(<Banner label="NOTA">Contenido</Banner>)
    expect(screen.getByText('NOTA')).toBeInTheDocument()
    expect(screen.getByText('Contenido')).toBeInTheDocument()
  })

  it('does not render a label when omitted', () => {
    const { container } = render(<Banner>Sin etiqueta</Banner>)
    expect(container.querySelector('p')).toHaveTextContent('Sin etiqueta')
  })

  it('defaults to the success variant and supports warning', () => {
    const { container, rerender } = render(<Banner>Msg</Banner>)
    expect(container.firstChild).toHaveClass('bg-green-50')

    rerender(<Banner variant="warning">Msg</Banner>)
    expect(container.firstChild).toHaveClass('bg-yellow-50')
  })

  it('merges a custom className', () => {
    const { container } = render(<Banner className="custom-banner">Msg</Banner>)
    expect(container.firstChild).toHaveClass('custom-banner')
  })
})
