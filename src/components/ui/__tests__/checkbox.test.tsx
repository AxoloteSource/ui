import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Checkbox } from '../checkbox'

describe('ui Checkbox', () => {
  it('renders unchecked by default', () => {
    render(<Checkbox aria-label="acepto" />)
    expect(screen.getByRole('checkbox', { name: 'acepto' })).toHaveAttribute('data-state', 'unchecked')
  })

  it('toggles to checked on click', async () => {
    render(<Checkbox aria-label="acepto" />)
    const box = screen.getByRole('checkbox', { name: 'acepto' })
    await userEvent.click(box)
    expect(box).toHaveAttribute('data-state', 'checked')
  })
})
