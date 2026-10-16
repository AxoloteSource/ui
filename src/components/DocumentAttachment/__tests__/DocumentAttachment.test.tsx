import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import DocumentAttachment from '../DocumentAttachment'

describe('DocumentAttachment', () => {
  it('renders the file name', () => {
    render(<DocumentAttachment name="factura.pdf" />)
    expect(screen.getByText('factura.pdf')).toBeInTheDocument()
  })

  it('calls onClick when the name area is clicked', async () => {
    const onClick = vi.fn()
    render(<DocumentAttachment name="factura.pdf" onClick={onClick} />)
    await userEvent.click(screen.getByText('factura.pdf'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders a delete button and fires onDelete', async () => {
    const onDelete = vi.fn()
    render(<DocumentAttachment name="factura.pdf" onDelete={onDelete} />)
    await userEvent.click(screen.getByRole('button', { name: /eliminar/i }))
    expect(onDelete).toHaveBeenCalledTimes(1)
  })

  it('disables the delete button while loading', () => {
    render(<DocumentAttachment name="factura.pdf" onDelete={() => {}} loading />)
    expect(screen.getByRole('button', { name: /eliminar/i })).toBeDisabled()
  })

  it('does not render a delete button when onDelete is absent', () => {
    render(<DocumentAttachment name="factura.pdf" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
