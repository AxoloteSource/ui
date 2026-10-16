import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tooltip } from '../Tooltip'

describe('Tooltip', () => {
  it('renders its trigger children', () => {
    render(
      <Tooltip content="ayuda">
        <button>hover</button>
      </Tooltip>
    )
    expect(screen.getByRole('button', { name: 'hover' })).toBeInTheDocument()
  })

  it('reveals the content on hover', async () => {
    render(
      <Tooltip content="ayuda">
        <button>hover</button>
      </Tooltip>
    )
    await userEvent.hover(screen.getByRole('button', { name: 'hover' }))
    expect(await screen.findByText('ayuda')).toBeInTheDocument()
  })
})
