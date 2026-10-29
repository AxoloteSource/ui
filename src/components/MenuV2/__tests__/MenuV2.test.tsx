import { screen, waitFor } from '@testing-library/react'
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
