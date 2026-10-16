import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Accordion } from '../Accordion'

const items = [
  { id: 'a', header: 'Sección A', content: <span>Contenido A</span> },
  { id: 'b', header: 'Sección B', content: <span>Contenido B</span> }
]

describe('Accordion', () => {
  it('renders every header and content', () => {
    render(<Accordion items={items} />)
    expect(screen.getByText('Sección A')).toBeInTheDocument()
    expect(screen.getByText('Sección B')).toBeInTheDocument()
    expect(screen.getByText('Contenido A')).toBeInTheDocument()
    expect(screen.getByText('Contenido B')).toBeInTheDocument()
  })

  it('opens a panel on click and reports via onChange', async () => {
    const onChange = vi.fn()
    render(<Accordion items={items} onChange={onChange} />)
    await userEvent.click(screen.getByText('Sección A'))
    expect(onChange).toHaveBeenCalledWith(['a'])
  })

  it('closes the panel when its header is clicked again', async () => {
    const onChange = vi.fn()
    render(<Accordion items={items} onChange={onChange} />)
    await userEvent.click(screen.getByText('Sección A'))
    await userEvent.click(screen.getByText('Sección A'))
    expect(onChange).toHaveBeenLastCalledWith(null)
  })

  it('respects defaultActiveId', () => {
    render(<Accordion items={items} defaultActiveId="b" />)
    const openHeader = screen.getByText('Sección B').closest('button') as HTMLButtonElement
    expect(openHeader.className).toContain('!text-primary')
  })

  it('allows multiple open panels when allowMultiple is set', async () => {
    const onChange = vi.fn()
    render(<Accordion items={items} allowMultiple onChange={onChange} />)
    await userEvent.click(screen.getByText('Sección A'))
    await userEvent.click(screen.getByText('Sección B'))
    expect(onChange).toHaveBeenLastCalledWith(['a', 'b'])
  })
})
