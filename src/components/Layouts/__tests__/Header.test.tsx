import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import Header from '../Header'

describe('Header', () => {
  it('renders a header with the theme toggle', () => {
    const { container } = renderWithProviders(<Header />)
    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('button')).toBeInTheDocument()
  })
})
