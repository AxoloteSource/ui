import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../dialog'

describe('ui Dialog', () => {
  it('renders its header, title, description and footer when open', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar</DialogTitle>
            <DialogDescription>¿Seguro?</DialogDescription>
          </DialogHeader>
          <DialogFooter>Pie</DialogFooter>
        </DialogContent>
      </Dialog>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Confirmar')).toBeInTheDocument()
    expect(screen.getByText('¿Seguro?')).toBeInTheDocument()
    expect(screen.getByText('Pie')).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
  })

  it('renders nothing when closed', () => {
    render(
      <Dialog>
        <DialogContent>
          <DialogTitle>Oculto</DialogTitle>
        </DialogContent>
      </Dialog>
    )
    expect(screen.queryByText('Oculto')).not.toBeInTheDocument()
  })
})
