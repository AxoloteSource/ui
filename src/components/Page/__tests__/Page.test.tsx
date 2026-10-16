import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import { Page } from '../Page'

describe('Page', () => {
  it('renders the title and children', () => {
    renderWithProviders(
      <Page title="Usuarios">
        <span>contenido</span>
      </Page>
    )
    expect(screen.getByText('Usuarios')).toBeInTheDocument()
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })

  it('renders the help description and header action', () => {
    renderWithProviders(
      <Page title="X" helpDescription="ayuda" headerAction={<button>Nuevo</button>}>
        <span>c</span>
      </Page>
    )
    expect(screen.getByText('ayuda')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Nuevo' })).toBeInTheDocument()
  })
})
