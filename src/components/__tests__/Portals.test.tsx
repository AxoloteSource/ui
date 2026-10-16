import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Portals from '../Portals'

describe('Portals', () => {
  it('renders the popper and modal portal containers', () => {
    const { container } = render(<Portals />)
    expect(container.querySelector('#popper-portal')).toBeInTheDocument()
    expect(container.querySelector('#modal-portal')).toBeInTheDocument()
  })
})
