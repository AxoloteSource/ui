import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { BreadCrumbles } from '../BreadCrumbles'
import BreadCrumblesItems from '../BreadCrumblesItems/BreadCrumblesItem'

describe('BreadCrumbles', () => {
  it('renders children separated by slashes', () => {
    const { container } = render(
      <BreadCrumbles>
        <li>Uno</li>
        <li>Dos</li>
      </BreadCrumbles>
    )
    expect(screen.getByText('Uno')).toBeInTheDocument()
    expect(screen.getByText('Dos')).toBeInTheDocument()
    expect(container.querySelector('ul')?.textContent).toContain('/')
  })

  it('renders a link when `to` is provided and capitalizes the text', () => {
    render(
      <MemoryRouter>
        <BreadCrumblesItems to="/home">home</BreadCrumblesItems>
      </MemoryRouter>
    )
    const link = screen.getByRole('link', { name: 'Home' })
    expect(link).toHaveAttribute('href', '/home')
  })

  it('renders plain text when `to` is omitted', () => {
    render(<BreadCrumblesItems>actual</BreadCrumblesItems>)
    expect(screen.getByText('Actual')).toBeInTheDocument()
  })
})
