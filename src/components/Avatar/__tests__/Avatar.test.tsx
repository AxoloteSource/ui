import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from '../Avatar'

describe('Avatar', () => {
  it('renders the provided image', () => {
    const { container } = render(<Avatar imagePath="/me.png" />)
    expect(container.querySelector('img')).toHaveAttribute('src', '/me.png')
  })

  it('falls back to an icon when no imagePath is given', () => {
    const { container } = render(<Avatar />)
    expect(container.querySelector('img')).toBeNull()
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('shows a status dot when status is provided', () => {
    const { container } = render(<Avatar status="available" />)
    expect(container.querySelectorAll('div').length).toBeGreaterThan(1)
  })
})
