import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { PricingCard, PricingToggle } from '..'

const cardProps = {
  title: 'Plan Pro',
  description: 'Todo lo que necesitas',
  price: 199,
  period: 'mes',
  features: ['Feature A', 'Feature B'],
  buttonText: 'Elegir',
  onButtonClick: vi.fn()
}

describe('PricingCard', () => {
  it('renders the basic variant with price, period, features and button', () => {
    const { container } = render(<PricingCard {...cardProps} />)
    expect(screen.getByText('Plan Pro')).toBeInTheDocument()
    expect(container.textContent).toContain('199')
    expect(container.textContent).toContain('mes')
    expect(screen.getByText('Feature A')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Elegir' })).toBeInTheDocument()
  })

  it('fires the button handler', async () => {
    const onButtonClick = vi.fn()
    render(<PricingCard {...cardProps} onButtonClick={onButtonClick} />)
    await userEvent.click(screen.getByRole('button', { name: 'Elegir' }))
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  it('renders the toggle variant with the popular label', () => {
    render(<PricingCard {...cardProps} variant="toggle" popular popularLabel="Más popular" />)
    expect(screen.getByText('Más popular')).toBeInTheDocument()
  })

  it('renders the animated variant', () => {
    render(<PricingCard {...cardProps} variant="animated" />)
    expect(screen.getByText('Plan Pro')).toBeInTheDocument()
    expect(screen.getByText('Feature B')).toBeInTheDocument()
  })
})

describe('PricingToggle', () => {
  it('renders labels and reflects the checked state', () => {
    render(<PricingToggle value={false} onChange={vi.fn()} />)
    expect(screen.getByText('Monthly')).toBeInTheDocument()
    expect(screen.getByText('Yearly')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('calls onChange with the toggled value', async () => {
    const onChange = vi.fn()
    render(<PricingToggle value={false} onChange={onChange} />)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('renders the yearly badge when provided', () => {
    render(<PricingToggle value onChange={vi.fn()} yearlyBadge="-20%" />)
    expect(screen.getByText('-20%')).toBeInTheDocument()
  })
})
