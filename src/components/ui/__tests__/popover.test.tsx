import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'

describe('ui Popover', () => {
  it('opens content on trigger click', async () => {
    render(
      <Popover>
        <PopoverTrigger>Abrir</PopoverTrigger>
        <PopoverContent>Contenido emergente</PopoverContent>
      </Popover>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Abrir' }))
    expect(await screen.findByText('Contenido emergente')).toBeInTheDocument()
  })
})
