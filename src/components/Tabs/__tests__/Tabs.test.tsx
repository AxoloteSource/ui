import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tabs } from '../Tabs'

const items = [
  { id: 'a', label: 'Uno', content: <div>Panel A</div> },
  { id: 'b', label: 'Dos', content: <div>Panel B</div> }
]

describe('Tabs', () => {
  it('shows the first panel by default', () => {
    render(<Tabs items={items} />)
    expect(screen.getByText('Panel A')).toBeInTheDocument()
  })

  it('switches panels when another tab is clicked', async () => {
    render(<Tabs items={items} />)
    await userEvent.click(screen.getByRole('tab', { name: 'Dos' }))
    expect(screen.getByText('Panel B')).toBeInTheDocument()
  })
})
