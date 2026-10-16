import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from '../Card'

describe('Card', () => {
  it('renders its children inside a panel', () => {
    const { container } = render(<Card className="p-2">hola</Card>)
    expect(screen.getByText('hola')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('panel')
  })
})
