import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Modal from '../Modal'

describe('Modal', () => {
  it('renders title and children when open', () => {
    render(
      <Modal isOpen title="Detalle" close={vi.fn()}>
        <p>contenido</p>
      </Modal>
    )
    expect(screen.getByText('Detalle')).toBeInTheDocument()
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })

  it('renders nothing when closed', () => {
    render(
      <Modal isOpen={false} title="Detalle" close={vi.fn()}>
        <p>contenido</p>
      </Modal>
    )
    expect(screen.queryByText('contenido')).not.toBeInTheDocument()
  })
})
