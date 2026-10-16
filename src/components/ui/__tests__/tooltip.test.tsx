import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'

describe('ui Tooltip', () => {
  it('renders the content when open', () => {
    render(
      <Tooltip open>
        <TooltipTrigger>Pasa el cursor</TooltipTrigger>
        <TooltipContent>Ayuda</TooltipContent>
      </Tooltip>
    )
    expect(screen.getByText('Ayuda')).toBeInTheDocument()
  })
})
