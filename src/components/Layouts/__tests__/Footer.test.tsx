import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the footer links from the provider', () => {
    renderWithProviders(<Footer />, { uiValue: { footerLinks: [{ label: 'Términos', to: '/terms' }] } })
    expect(screen.getByRole('link', { name: 'Términos' })).toHaveAttribute('href', '/terms')
  })

  it('renders without links', () => {
    renderWithProviders(<Footer />)
    expect(screen.getByText(/reserved_rights/)).toBeInTheDocument()
  })
})
