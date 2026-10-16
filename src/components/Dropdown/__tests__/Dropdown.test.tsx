import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Dropdown from '../Dropdown'

describe('Dropdown', () => {
  it('opens the menu on click', async () => {
    render(
      <Dropdown title="Menú">
        <li>Opción 1</li>
      </Dropdown>
    )
    expect(screen.queryByText('Opción 1')).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /Menú/ }))
    expect(screen.getByText('Opción 1')).toBeInTheDocument()
  })
})
