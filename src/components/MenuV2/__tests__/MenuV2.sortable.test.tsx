import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { renderWithProviders } from '../../../test/utils'
import type { IMenuShow } from '../../../interfaces/models/Menu/IMenuShow'
import type { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem'
import MenuV2 from '../MenuV2'

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

const menu = {
  items: [
    item({
      id: 'g1',
      type: 'header',
      name: 'Mensajes',
      path: null,
      children: [item({ id: 'c1', name: 'WhatsApp', path: '/messages/whatsapp' })]
    }),
    item({ id: 'l1', name: 'Inicio', path: '/inicio' })
  ]
} as IMenuShow

describe('MenuV2 sortable', () => {
  it('renders a drag handle for every item in sortable edit mode', () => {
    const onReorder = vi.fn()

    renderWithProviders(<MenuV2 menu={menu} editMode sortable onReorder={onReorder} reorderLabel="Reordenar" />, {
      routerInitialEntries: ['/inicio']
    })

    expect(screen.getAllByRole('button', { name: 'Reordenar' })).toHaveLength(3)
    expect(screen.getByText('Mensajes')).toBeInTheDocument()
    expect(screen.getByText('Inicio')).toBeInTheDocument()
  })

  it('marks sortable row icons with menu-icon so they follow the menu size', () => {
    const iconMenu = {
      size: 'sm',
      items: [
        item({
          id: 'h1',
          type: 'header',
          name: 'Ajustes',
          icon: 'Shield',
          children: [item({ id: 'c1', name: 'Perfil', path: '/perfil', icon: 'User' })]
        }),
        item({ id: 'l1', name: 'Inicio', path: '/inicio', icon: 'House' })
      ]
    } as IMenuShow

    const { container } = renderWithProviders(<MenuV2 menu={iconMenu} editMode sortable onReorder={vi.fn()} />)

    expect(container.querySelectorAll('svg.menu-icon')).toHaveLength(3)
  })

  it('does not render drag handles when sortable is disabled', () => {
    renderWithProviders(<MenuV2 menu={menu} editMode />, {
      routerInitialEntries: ['/inicio']
    })

    expect(screen.queryByRole('button', { name: 'Reorder menu item' })).toBeNull()
  })
})
