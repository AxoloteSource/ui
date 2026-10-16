import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Home } from 'lucide-react'
import { describe, expect, it, vi } from 'vitest'
import { Alert, AlertDescription, AlertTitle } from '../alert'
import { Badge } from '../badge'
import { Button } from '../button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card'
import { Icon } from '../icon'
import { Input } from '../input'
import { Label } from '../label'
import { PlaceholderPattern } from '../placeholder-pattern'
import { Separator } from '../separator'
import { Skeleton } from '../skeleton'
import { Spinner } from '../spinner'

describe('ui basics', () => {
  it('Skeleton renders an animated placeholder', () => {
    const { container } = render(<Skeleton />)
    expect(container.querySelector('[data-slot="skeleton"]')).toHaveClass('animate-pulse')
  })

  it('Spinner exposes an accessible status role', () => {
    render(<Spinner />)
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument()
  })

  it('Separator renders with the given orientation', () => {
    const { container } = render(<Separator orientation="vertical" />)
    expect(container.querySelector('[data-slot="separator-root"]')).toBeInTheDocument()
  })

  it('Label renders and associates with its control', () => {
    render(<Label htmlFor="email">Correo</Label>)
    expect(screen.getByText('Correo')).toHaveAttribute('for', 'email')
  })

  it('Badge renders text and destructive variant classes', () => {
    const { container } = render(<Badge variant="destructive">Nuevo</Badge>)
    expect(screen.getByText('Nuevo')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('bg-destructive')
  })

  it('Alert renders title and description', () => {
    render(
      <Alert>
        <AlertTitle>Atención</AlertTitle>
        <AlertDescription>Detalle</AlertDescription>
      </Alert>
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Atención')).toBeInTheDocument()
    expect(screen.getByText('Detalle')).toBeInTheDocument()
  })

  it('Input forwards props', () => {
    render(<Input placeholder="Escribe" type="email" />)
    const input = screen.getByPlaceholderText('Escribe')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('Card composes its sections', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
          <CardDescription>Descripción</CardDescription>
        </CardHeader>
        <CardContent>Cuerpo</CardContent>
        <CardFooter>Pie</CardFooter>
      </Card>
    )
    expect(screen.getByText('Título')).toBeInTheDocument()
    expect(screen.getByText('Descripción')).toBeInTheDocument()
    expect(screen.getByText('Cuerpo')).toBeInTheDocument()
    expect(screen.getByText('Pie')).toBeInTheDocument()
  })

  it('Button renders, applies variants and fires onClick', async () => {
    const onClick = vi.fn()
    const { container } = render(
      <Button variant="outline" onClick={onClick}>
        Guardar
      </Button>
    )
    expect(container.firstChild).toHaveClass('border')
    await userEvent.click(screen.getByRole('button', { name: 'Guardar' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('Button asChild renders the child element', () => {
    render(
      <Button asChild>
        <a href="/x">Ir</a>
      </Button>
    )
    expect(screen.getByRole('link', { name: 'Ir' })).toHaveAttribute('href', '/x')
  })

  it('PlaceholderPattern renders an svg with a rect', () => {
    const { container } = render(<PlaceholderPattern className="fill-x" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
    expect(container.querySelector('rect')).toBeInTheDocument()
  })

  it('Icon renders nothing without an iconNode', () => {
    const { container } = render(<Icon />)
    expect(container.firstChild).toBeNull()
  })

  it('Icon renders the provided node', () => {
    const { container } = render(<Icon iconNode={Home} className="text-primary" />)
    expect(container.querySelector('svg')).toHaveClass('text-primary')
  })
})
