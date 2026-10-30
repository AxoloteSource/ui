import { fireEvent, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import MenuV2 from '../MenuV2'
import type { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem'
import type { IMenuShow } from '../../../interfaces/models/Menu/IMenuShow'

const item = (partial: Partial<IMenuItem>): IMenuItem => ({
  id: 'x',
  menu_id: 'm',
  parent_id: null,
  type: 'link',
  name: 'Item',
  slug: 'item',
  route: null,
  path: '/item',
  icon: null,
  sort_order: 1,
  active: true,
  children: [],
  created_at: '2026-01-01',
  ...partial
})

const menu: IMenuShow = {
  items: [
    item({
      id: 'g1',
      type: 'header',
      name: 'Mensajes',
      children: [item({ id: 'c1', name: 'WhatsApp', path: '/messages/whatsapp' })]
    }),
    item({ id: 'l1', name: 'Inicio', path: '/inicio' })
  ]
} as IMenuShow

describe('MenuV2', () => {
  it('renders header groups and leaf links', () => {
    renderWithProviders(<MenuV2 menu={menu} />, { routerInitialEntries: ['/inicio'] })
    expect(screen.getByText('Mensajes')).toBeInTheDocument()
    expect(screen.getByText('Inicio')).toBeInTheDocument()
  })

  it('renders nothing without items', () => {
    const { container } = renderWithProviders(<MenuV2 menu={{ items: [] } as unknown as IMenuShow} />)
    expect(container.querySelector('ul')).toBeNull()
  })

  it('renders section labels with their children as visible siblings', () => {
    const sectionMenu = {
      items: [
        item({
          id: 's1',
          type: 'section',
          name: 'Salamandr IA',
          path: null,
          children: [item({ id: 's1c1', name: 'Drivers', path: '/ia/drivers' })]
        })
      ]
    } as IMenuShow

    const { container } = renderWithProviders(<MenuV2 menu={sectionMenu} />)

    const label = screen.getByText('Salamandr IA')
    expect(label.tagName).toBe('SPAN')
    expect(screen.getByText('Drivers')).toBeInTheDocument()
    expect(container.querySelector('h2')).toContainElement(label)
    expect(container.querySelector('ul.sub-menu')).toBeNull()
    expect(container.querySelectorAll('ul > li')).toHaveLength(2)
  })

  it('renders nested sections inside a header submenu', () => {
    const nestedMenu = {
      items: [
        item({
          id: 'h1',
          type: 'header',
          name: 'IA',
          children: [
            item({
              id: 's1',
              type: 'section',
              name: 'Configuración',
              path: null,
              children: [item({ id: 's1c1', name: 'Drivers', path: '/ia/drivers' })]
            })
          ]
        })
      ]
    } as IMenuShow

    const { container } = renderWithProviders(<MenuV2 menu={nestedMenu} />)

    expect(screen.getByText('Configuración')).toBeInTheDocument()
    expect(screen.getByText('Drivers')).toBeInTheDocument()
    expect(container.querySelectorAll('ul.sub-menu')).toHaveLength(1)
  })

  it('toggles the role and shows actions for sections in edit mode', () => {
    const onToggleRole = vi.fn()
    const sectionMenu = {
      items: [item({ id: 's1', type: 'section', name: 'Salamandr IA', path: null })]
    } as IMenuShow

    const { container } = renderWithProviders(<MenuV2 menu={sectionMenu} editMode onToggleRole={onToggleRole} />)

    fireEvent.click(screen.getByText('Salamandr IA'))

    expect(onToggleRole).toHaveBeenCalledWith(expect.objectContaining({ id: 's1' }))
    expect(container.querySelectorAll('button')).toHaveLength(2)
  })

  it('resolves icons outside the static registry and shows a visible fallback for unknown ones', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const iconMenu = {
      items: [
        item({ id: 'dynamic', name: 'Inicio', icon: 'House', path: '/' }),
        item({ id: 'unknown', name: 'Roto', icon: 'DefinitelyNotAnIcon', path: '/roto' })
      ]
    } as IMenuShow

    const { container } = renderWithProviders(<MenuV2 menu={iconMenu} />)

    await waitFor(() => expect(container.querySelector('svg.lucide-house')).toBeTruthy())
    expect(container.querySelector('svg.lucide-circle-help')).toBeTruthy()
    warn.mockRestore()
  })
})
