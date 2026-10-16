import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'

describe('ui Select', () => {
  it('renders the trigger with its placeholder', () => {
    const { container } = render(
      <Select>
        <SelectTrigger aria-label="ciudad">
          <SelectValue placeholder="Elige" />
        </SelectTrigger>
      </Select>
    )
    expect(container.querySelector('[data-slot="select-trigger"]')).toBeInTheDocument()
    expect(screen.getByText('Elige')).toBeInTheDocument()
  })

  it('renders its content when open', () => {
    render(
      <Select open>
        <SelectTrigger aria-label="ciudad">
          <SelectValue placeholder="Elige" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Opción A</SelectItem>
        </SelectContent>
      </Select>
    )
    expect(document.querySelector('[data-slot="select-content"]')).toBeInTheDocument()
  })
})
