import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import Sidebar from '../Sidebar/Sidebar'

describe('Sidebar', () => {
  it('renders the brand name when no logo is configured', () => {
    renderWithProviders(<Sidebar />)
    expect(screen.getByText('brand_name')).toBeInTheDocument()
  })

  it('renders the provided brandName', () => {
    renderWithProviders(<Sidebar />, { uiValue: { brandName: 'Salamandr' } })
    expect(screen.getByText('Salamandr')).toBeInTheDocument()
  })
})
