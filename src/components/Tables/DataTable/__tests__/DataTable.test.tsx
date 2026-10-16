import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../../test/utils'
import { DataTable } from '../DataTable'

describe('DataTable', () => {
  it('renders the table wrapper (empty state in jsdom)', () => {
    const { container } = renderWithProviders(
      <DataTable
        datatablePros={{
          records: [{ id: 1, nombre: 'Ana' }],
          columns: [{ accessor: 'nombre', title: 'Nombre' }]
        }}
      />
    )
    expect(container.querySelector('.datatables')).toBeInTheDocument()
  })

  it('renders a loading state', () => {
    const { container } = renderWithProviders(<DataTable isLoading datatablePros={{ records: [], columns: [] }} />)
    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })
})
