import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Calendar } from '../calendar'

describe('ui Calendar', () => {
  it('renders a day grid for the given month', () => {
    const { container } = render(<Calendar mode="single" defaultMonth={new Date(2026, 0, 15)} />)
    expect(container.querySelector('table')).toBeInTheDocument()
    expect(screen.getByRole('grid')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('renders navigation controls', () => {
    const { container } = render(<Calendar mode="single" defaultMonth={new Date(2026, 0, 15)} />)
    expect(container.querySelectorAll('button').length).toBeGreaterThan(1)
  })
})
