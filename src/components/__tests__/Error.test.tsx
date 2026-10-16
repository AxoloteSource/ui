import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Error from '../Error'

describe('Error', () => {
  it('renders the error heading', () => {
    render(<Error />)
    expect(screen.getByRole('heading', { name: 'Error' })).toBeInTheDocument()
  })
})
