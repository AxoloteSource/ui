import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import Setting from '../Setting'

describe('Setting', () => {
  it('renders the template customizer drawer (closed by default)', () => {
    renderWithProviders(<Setting />)
    expect(screen.getByText('TEMPLATE CUSTOMIZER')).toBeInTheDocument()
  })
})
