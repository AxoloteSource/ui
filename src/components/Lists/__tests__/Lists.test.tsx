import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import IconList from '../IconList'
import IconListItem from '../IconListItem'

describe('Lists', () => {
  it('renders items from the items prop', () => {
    render(<IconList items={[{ text: 'One' }, { text: 'Two' }]} />)
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })

  it('renders children as list items', () => {
    render(
      <IconList>
        <IconListItem>Child item</IconListItem>
      </IconList>
    )
    expect(screen.getByText('Child item')).toBeInTheDocument()
  })

  it('renders nothing when empty', () => {
    const { container } = render(<IconList />)
    expect(container.firstChild).toBeNull()
  })

  it('fires onClick on an item', async () => {
    const onClick = vi.fn()
    render(<IconListItem onClick={onClick}>Clickable</IconListItem>)
    await userEvent.click(screen.getByText('Clickable'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
