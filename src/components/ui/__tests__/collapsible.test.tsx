import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../collapsible'

describe('ui Collapsible', () => {
  it('reveals content when the trigger is activated', async () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Alternar</CollapsibleTrigger>
        <CollapsibleContent>Sorpresa</CollapsibleContent>
      </Collapsible>
    )
    const trigger = screen.getByRole('button', { name: 'Alternar' })
    expect(trigger).toHaveAttribute('data-state', 'closed')
    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('data-state', 'open')
    expect(screen.getByText('Sorpresa')).toBeInTheDocument()
  })
})
