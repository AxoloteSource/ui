import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import LineWithArrows from '../LineWithArrows'
import LineWithTicks from '../LineWithTicks'

describe('Lines', () => {
  it('LineWithArrows renders its label', () => {
    render(<LineWithArrows left="left-0" right="right-0" fillColor="bg-primary" borderColor="border-primary" label="Línea" />)
    expect(screen.getByText('Línea')).toBeInTheDocument()
  })

  it('LineWithTicks renders one tick per value', () => {
    const { container } = render(<LineWithTicks ticks={[10, 50, 90]} />)
    expect(container.querySelectorAll('[style*="left"]').length).toBe(3)
  })
})
