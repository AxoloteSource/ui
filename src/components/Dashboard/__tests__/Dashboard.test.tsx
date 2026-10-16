import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ShoppingBag } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import AlertStrip from '../AlertStrip'
import DateRangeTabs from '../DateRangeTabs'
import InsightCard from '../InsightCard'
import KpiCard from '../KpiCard'
import LoyaltyHealthCard from '../LoyaltyHealthCard'
import QuickActionGrid from '../QuickActionGrid'
import RecentActivity from '../RecentActivity'
import TopTable from '../TopTable'

describe('AlertStrip', () => {
  it('shows the all-good message when there are no alerts', () => {
    render(<AlertStrip alerts={[]} />)
    expect(screen.getByText('Todo funciona correctamente.')).toBeInTheDocument()
  })

  it('renders alerts and their detail link', () => {
    render(<AlertStrip alerts={[{ type: 'a', severity: 'warning', message: 'Revisa algo', link: '/x' }]} />)
    expect(screen.getByText('Revisa algo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ver detalle' })).toHaveAttribute('href', '/x')
  })
})

describe('InsightCard', () => {
  it('renders each insight text', () => {
    render(
      <InsightCard
        insights={[
          { id: '1', icon: 'all_good', text: 'Todo bien' },
          { id: '2', icon: 'purchases_up', text: 'Subieron las compras' }
        ]}
      />
    )
    expect(screen.getByText('Todo bien')).toBeInTheDocument()
    expect(screen.getByText('Subieron las compras')).toBeInTheDocument()
  })
})

describe('KpiCard', () => {
  it('renders the label, value and delta', () => {
    render(
      <KpiCard
        kpi={{
          key: 'sales',
          label: 'Ventas',
          icon: 'shopping_bag',
          value: 1234,
          previous: 1000,
          delta_pct: 23.4,
          trend: 'up',
          color: '#000'
        }}
      />
    )
    expect(screen.getByText('Ventas')).toBeInTheDocument()
    expect(screen.getByText('1,234')).toBeInTheDocument()
    expect(screen.getByText('23.4%')).toBeInTheDocument()
  })
})

describe('LoyaltyHealthCard', () => {
  it('shows the empty message with no items', () => {
    render(<LoyaltyHealthCard items={[]} colorByStatus={{ Excelente: '#0f0', Bueno: '#00f', Atención: '#ff0', Crítico: '#f00' }} />)
    expect(screen.getByText('Sin datos suficientes para este período.')).toBeInTheDocument()
  })

  it('renders each item with its label and status', () => {
    render(
      <LoyaltyHealthCard
        items={[{ key: 'k', label: 'Activos', value: 10, total: 20, pct: 50, status: 'Bueno' }]}
        colorByStatus={{ Excelente: '#0f0', Bueno: '#00f', Atención: '#ff0', Crítico: '#f00' }}
      />
    )
    expect(screen.getByText('Activos')).toBeInTheDocument()
    expect(screen.getByText('Bueno')).toBeInTheDocument()
  })
})

describe('QuickActionGrid', () => {
  it('renders actions and fires onClick', async () => {
    const onClick = vi.fn()
    render(<QuickActionGrid actions={[{ label: 'Nuevo', icon: ShoppingBag, onClick }]} />)
    await userEvent.click(screen.getByRole('button', { name: /Nuevo/ }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})

describe('RecentActivity', () => {
  it('shows the empty message', () => {
    render(<RecentActivity items={[]} />)
    expect(screen.getByText('no_activity')).toBeInTheDocument()
  })

  it('renders activity rows', () => {
    render(<RecentActivity items={[{ at: '2026-10-16T10:00:00Z', type: 'purchase', user: 'Ana', action: 'Compra registrada' }]} />)
    expect(screen.getByText('Compra registrada')).toBeInTheDocument()
    expect(screen.getByText(/Ana/)).toBeInTheDocument()
  })
})

describe('TopTable', () => {
  it('renders columns and rows', () => {
    render(<TopTable title="Top clientes" columns={['Nombre', 'Puntos']} rows={[{ id: 1, cells: ['Ana', 42] }]} />)
    expect(screen.getByText('Top clientes')).toBeInTheDocument()
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Ana')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('shows the empty message when there are no rows', () => {
    render(<TopTable title="Top" columns={['A']} rows={[]} />)
    expect(screen.getByText('Sin registros para mostrar')).toBeInTheDocument()
  })
})

describe('DateRangeTabs', () => {
  it('renders a button per range option and calls onChange', async () => {
    const onChange = vi.fn()
    render(<DateRangeTabs range="today" onChange={onChange} />)
    for (const key of ['today', '7d', '30d', 'this_month', 'custom']) {
      expect(screen.getByRole('button', { name: key })).toBeInTheDocument()
    }
    await userEvent.click(screen.getByRole('button', { name: '7d' }))
    expect(onChange).toHaveBeenCalledWith('7d')
  })

  it('shows the custom date inputs and applies a range', async () => {
    const onChange = vi.fn()
    render(<DateRangeTabs range="custom" onChange={onChange} />)
    const [from, to] = screen.getAllByDisplayValue('') as HTMLInputElement[]
    await userEvent.type(from, '2026-01-01')
    await userEvent.type(to, '2026-01-31')
    await userEvent.click(screen.getByRole('button', { name: 'apply' }))
    expect(onChange).toHaveBeenCalledWith('custom', '2026-01-01', '2026-01-31')
  })
})
