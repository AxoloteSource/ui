import { render } from '@testing-library/react'
import { Home } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { Icon } from '../icon'

describe('Icon', () => {
  it('renders the provided icon node with default sizing', () => {
    const { container } = render(<Icon iconNode={Home} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('class')).toContain('h-4')
    expect(svg?.getAttribute('class')).toContain('w-4')
  })

  it('merges a custom className and forwards props', () => {
    const { container } = render(<Icon iconNode={Home} className="text-primary" data-testid="my-icon" />)
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('class')).toContain('text-primary')
    expect(svg).toHaveAttribute('data-testid', 'my-icon')
  })
})
