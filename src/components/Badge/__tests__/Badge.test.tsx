import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders its children', () => {
    render(<Badge>Nuevo</Badge>)
    expect(screen.getByText('Nuevo')).toBeInTheDocument()
  })

  it('applies an extra className', () => {
    render(<Badge className="mi-clase">x</Badge>)
    expect(screen.getByText('x')).toHaveClass('mi-clase')
  })
})
