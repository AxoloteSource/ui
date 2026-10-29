import { render, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { normalizeIconName, resolveIcon } from '../resolveIcon'

const renderIcon = (node: ReactNode) => render(<div>{node}</div>)

describe('normalizeIconName', () => {
  it('converts PascalCase names to kebab-case', () => {
    expect(normalizeIconName('House')).toBe('house')
    expect(normalizeIconName('MessageSquareWarning')).toBe('message-square-warning')
    expect(normalizeIconName('BarChart3')).toBe('bar-chart-3')
  })

  it('keeps kebab-case names untouched', () => {
    expect(normalizeIconName('message-square-warning')).toBe('message-square-warning')
  })

  it('returns an empty string for empty values', () => {
    expect(normalizeIconName()).toBe('')
    expect(normalizeIconName(null)).toBe('')
    expect(normalizeIconName('  ')).toBe('')
  })
})

describe('resolveIcon', () => {
  it('renders an icon from the static registry', () => {
    const { container } = renderIcon(resolveIcon('Home'))
    expect(container.querySelector('svg.lucide-house')).toBeTruthy()
  })

  it('resolves static icons from kebab-case too', () => {
    const { container } = renderIcon(resolveIcon('home'))
    expect(container.querySelector('svg.lucide-house')).toBeTruthy()
  })

  it('loads an icon outside the static registry from Lucide', async () => {
    const { container } = renderIcon(resolveIcon('MessageSquareWarning'))
    await waitFor(() => expect(container.querySelector('svg.lucide-message-square-warning')).toBeTruthy())
  })

  it('loads legacy aliases such as House', async () => {
    const { container } = renderIcon(resolveIcon('House'))
    await waitFor(() => expect(container.querySelector('svg.lucide-house')).toBeTruthy())
  })

  it('renders a visible fallback for unknown icons', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const { container } = renderIcon(resolveIcon('DefinitelyNotAnIcon'))
    expect(container.querySelector('svg.lucide-circle-help')).toBeTruthy()
    warn.mockRestore()
  })

  it('renders a neutral placeholder when there is no icon', () => {
    const { container } = renderIcon(resolveIcon(null))
    expect(container.querySelector('svg.lucide-circle')).toBeTruthy()
  })
})
