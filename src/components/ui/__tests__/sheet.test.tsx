import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '../sheet'

describe('ui Sheet', () => {
  it('renders its content when open', () => {
    render(
      <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Panel</SheetTitle>
            <SheetDescription>Descripción</SheetDescription>
          </SheetHeader>
          <SheetFooter>Pie</SheetFooter>
        </SheetContent>
      </Sheet>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Panel')).toBeInTheDocument()
    expect(screen.getByText('Descripción')).toBeInTheDocument()
    expect(screen.getByText('Pie')).toBeInTheDocument()
  })

  it('renders nothing when closed', () => {
    render(
      <Sheet>
        <SheetContent>
          <SheetTitle>Oculto</SheetTitle>
        </SheetContent>
      </Sheet>
    )
    expect(screen.queryByText('Oculto')).not.toBeInTheDocument()
  })
})
