import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Wizard } from '..'

const steps = [{ label: 'Datos' }, { label: 'Pago' }, { label: 'Confirmación' }]

describe('Wizard', () => {
  it('renders nothing when there are no steps', () => {
    const { container } = render(<Wizard steps={[]} activeStep={0} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders every step label', () => {
    render(<Wizard steps={steps} activeStep={1} />)
    expect(screen.getByText('Datos')).toBeInTheDocument()
    expect(screen.getByText('Pago')).toBeInTheDocument()
    expect(screen.getByText('Confirmación')).toBeInTheDocument()
  })

  it('marks the active and completed steps via aria-label', () => {
    render(<Wizard steps={steps} activeStep={1} />)
    expect(screen.getByRole('button', { name: /Datos \(completed\)/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Pago \(active\)/ })).toBeInTheDocument()
  })

  it('calls onChange with the step index when a reachable step is clicked', async () => {
    const onChange = vi.fn()
    render(<Wizard steps={steps} activeStep={1} onChange={onChange} />)
    await userEvent.click(screen.getByRole('button', { name: /Datos/ }))
    expect(onChange).toHaveBeenCalledWith(0)
  })

  it('disables future steps', () => {
    render(<Wizard steps={steps} activeStep={1} />)
    expect(screen.getByRole('button', { name: /Confirmación/ })).toBeDisabled()
  })
})
