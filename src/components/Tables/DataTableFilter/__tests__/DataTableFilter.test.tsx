import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../../test/utils'
import { DataTableFilter } from '../DataTableFilter'

const service = () => ({ data: undefined, isLoading: false, refetch: () => {} })

describe('DataTableFilter', () => {
  it('renders the search input and the new button', () => {
    renderWithProviders(<DataTableFilter filters={[]} onClickNew={() => {}} service={service} />)
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'new' })).toBeInTheDocument()
  })
})
