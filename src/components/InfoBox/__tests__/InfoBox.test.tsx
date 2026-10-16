import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InfoBox from '../InfoBox'
import InfoBoxTitle from '../InfoBoxTitle'
import InfoBoxFooter from '../InfoBoxFooter'

describe('InfoBox', () => {
  it('renders children and merges className', () => {
    const { container } = render(<InfoBox className="custom-box">Contenido</InfoBox>)
    expect(screen.getByText('Contenido')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('infobox', 'custom-box')
  })

  it('InfoBoxTitle renders its children', () => {
    render(<InfoBoxTitle>Iniciar sesión</InfoBoxTitle>)
    expect(screen.getByRole('heading', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })

  it('InfoBoxTitle renders the optional subtitle', () => {
    render(<InfoBoxTitle subtitle="o continúa">Título</InfoBoxTitle>)
    expect(screen.getByText('o continúa')).toBeInTheDocument()
  })

  it('InfoBoxFooter renders its children', () => {
    render(<InfoBoxFooter>pie</InfoBoxFooter>)
    expect(screen.getByText('pie')).toBeInTheDocument()
  })
})
