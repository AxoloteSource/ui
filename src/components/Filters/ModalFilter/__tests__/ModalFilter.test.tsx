import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../../test/utils'
import { ModalFilter } from '../ModalFilter'

describe('ModalFilter', () => {
  it('renders its title and children when open', () => {
    renderWithProviders(
      <ModalFilter isOpen title="Filtros" close={() => {}} onSubmit={() => {}} filters={[]} initialValues={{ q: '' }}>
        <div>campos del filtro</div>
      </ModalFilter>
    )
    expect(screen.getByText('Filtros')).toBeInTheDocument()
    expect(screen.getByText('campos del filtro')).toBeInTheDocument()
  })
})
