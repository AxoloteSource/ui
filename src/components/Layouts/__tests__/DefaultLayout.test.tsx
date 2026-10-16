import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import DefaultLayout from '../DefaultLayout'

describe('DefaultLayout', () => {
  it('renders its children inside the app shell', () => {
    renderWithProviders(
      <DefaultLayout>
        <span>página</span>
      </DefaultLayout>
    )
    expect(screen.getByText('página')).toBeInTheDocument()
  })

  it('does not render the theme customizer by default', () => {
    renderWithProviders(
      <DefaultLayout>
        <span>página</span>
      </DefaultLayout>
    )
    expect(screen.queryByText('TEMPLATE CUSTOMIZER')).not.toBeInTheDocument()
  })

  it('renders the customizer when showCustomizer is set', () => {
    renderWithProviders(
      <DefaultLayout showCustomizer>
        <span>página</span>
      </DefaultLayout>
    )
    expect(screen.getByText('TEMPLATE CUSTOMIZER')).toBeInTheDocument()
  })
})
