import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  it('renders a checkbox with a label', () => {
    render(<Checkbox>Acepto</Checkbox>)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText('Acepto')).toBeInTheDocument()
  })

  it('toggles when clicked', async () => {
    render(<Checkbox>Acepto</Checkbox>)
    const box = screen.getByRole('checkbox')
    await userEvent.click(box)
    expect(box).toBeChecked()
  })

  it('fires onChange', async () => {
    const onChange = vi.fn()
    render(<Checkbox onChange={onChange}>Acepto</Checkbox>)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('applies color and variant classes', () => {
    render(
      <Checkbox color="danger" variant="rounded">
        Acepto
      </Checkbox>
    )
    const box = screen.getByRole('checkbox')
    expect(box.className).toContain('text-danger')
    expect(box.className).toContain('rounded-full')
  })

  it('forwards className to the label', () => {
    const { container } = render(<Checkbox className="custom-check">Acepto</Checkbox>)
    expect(container.querySelector('label')).toHaveClass('custom-check')
  })
})
