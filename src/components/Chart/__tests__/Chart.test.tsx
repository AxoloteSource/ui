import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

vi.mock('react-apexcharts', () => ({
  default: (props: { type?: string; height?: number }) => (
    <div data-testid="apex" data-type={props.type} data-height={String(props.height)} />
  )
}))

import Chart from '../Chart'

describe('Chart', () => {
  it('renders the apex chart with the given type/height inside its container', () => {
    const { container } = render(<Chart title="Ventas" series={[{ name: 's', data: [1, 2] }]} options={{}} type="line" height={250} className="my-chart" />)
    expect(container.firstChild).toHaveClass('my-chart')
    expect(screen.getByTestId('apex')).toHaveAttribute('data-type', 'line')
    expect(screen.getByTestId('apex')).toHaveAttribute('data-height', '250')
  })

  it('defaults to a bar chart', () => {
    render(<Chart title="Ventas" series={[{ name: 's', data: [1] }]} options={{}} />)
    expect(screen.getByTestId('apex')).toHaveAttribute('data-type', 'bar')
  })
})
