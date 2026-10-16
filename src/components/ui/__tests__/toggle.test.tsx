import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Toggle } from '../toggle'
import { ToggleGroup, ToggleGroupItem } from '../toggle-group'

describe('ui Toggle', () => {
  it('toggles its pressed state and reports changes', async () => {
    const onPressedChange = vi.fn()
    render(
      <Toggle aria-label="negrita" onPressedChange={onPressedChange}>
        B
      </Toggle>
    )
    const btn = screen.getByRole('button', { name: 'negrita' })
    await userEvent.click(btn)
    expect(onPressedChange).toHaveBeenCalledWith(true)
    expect(btn).toHaveAttribute('data-state', 'on')
  })
})

describe('ui ToggleGroup', () => {
  it('renders items and reflects the selected value', async () => {
    render(
      <ToggleGroup type="single" aria-label="alineación">
        <ToggleGroupItem value="left" aria-label="izquierda">
          L
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="derecha">
          R
        </ToggleGroupItem>
      </ToggleGroup>
    )
    const left = screen.getByRole('radio', { name: 'izquierda' })
    await userEvent.click(left)
    expect(left).toHaveAttribute('data-state', 'on')
  })
})
