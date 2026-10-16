import { render, screen } from '@testing-library/react'
import { Home } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { TimeLine } from '../TimeLine'
import { TimeLineItem } from '../TimeLineItem/TimeLineItem'
import TimeLineDetail from '../TimeLineDetail/TimeLineDetail'

describe('TimeLine', () => {
  it('renders the title and children', () => {
    render(
      <TimeLine title="Historial">
        <span>contenido</span>
      </TimeLine>
    )
    expect(screen.getByRole('heading', { name: 'Historial' })).toBeInTheDocument()
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })

  it('TimeLineItem renders title, subtitle, icon and children', () => {
    render(
      <TimeLineItem title="Evento" subTitle="hace 1h" icon={Home}>
        <span>detalle</span>
      </TimeLineItem>
    )
    expect(screen.getByRole('heading', { name: 'Evento' })).toBeInTheDocument()
    expect(screen.getByText('hace 1h')).toBeInTheDocument()
    expect(screen.getByText('detalle')).toBeInTheDocument()
  })

  it('TimeLineDetail renders title, description and icon', () => {
    render(<TimeLineDetail title="Paso" description="descripción" icon={Home} />)
    expect(screen.getByRole('heading', { name: 'Paso' })).toBeInTheDocument()
    expect(screen.getByText('descripción')).toBeInTheDocument()
  })
})
