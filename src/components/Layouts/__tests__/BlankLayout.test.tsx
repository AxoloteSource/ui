import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BlankLayout from '../BlankLayout'

describe('BlankLayout', () => {
  it('renders its children', () => {
    render(
      <BlankLayout>
        <span>contenido auth</span>
      </BlankLayout>
    )
    expect(screen.getByText('contenido auth')).toBeInTheDocument()
  })
})
