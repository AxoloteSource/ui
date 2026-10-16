import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import CodeHighlight from '../Highlight'

describe('Highlight (CodeHighlight)', () => {
  it('renders its children inside the highlight container', () => {
    const { container } = render(
      <CodeHighlight>
        <pre>
          <code>const a = 1</code>
        </pre>
      </CodeHighlight>
    )
    const el = container.querySelector('.highlight-el')
    expect(el).toBeInTheDocument()
    expect(el).toHaveTextContent('const a = 1')
  })
})
