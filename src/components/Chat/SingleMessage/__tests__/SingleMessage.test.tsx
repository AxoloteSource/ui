import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SingleMessage } from '../SingleMessage'

describe('SingleMessage', () => {
  it('renders the message body and timestamp', () => {
    render(<SingleMessage message="Hola mundo" timeAgo="hace 1m" />)
    expect(screen.getByText('Hola mundo')).toBeInTheDocument()
    expect(screen.getByText('hace 1m')).toBeInTheDocument()
  })
})
