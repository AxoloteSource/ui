import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Divider } from '../Divider'

describe('Divider', () => {
  it('renders a full-width horizontal line', () => {
    const { container } = render(<Divider />)
    expect(container.firstChild).toHaveClass('h-px', 'w-full')
  })

  it('merges a custom className', () => {
    const { container } = render(<Divider className="my-4" />)
    expect(container.firstChild).toHaveClass('my-4')
  })
})
