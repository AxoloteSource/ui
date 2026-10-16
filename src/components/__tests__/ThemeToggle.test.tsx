import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithProviders } from '../../test/utils'
import ThemeToggle from '../ThemeToggle'

describe('ThemeToggle', () => {
  it('cycles light -> dark and notifies the change', async () => {
    const onThemeChange = vi.fn()
    renderWithProviders(<ThemeToggle onThemeChange={onThemeChange} />, { uiValue: { theme: 'light', setTheme: vi.fn() } })
    await userEvent.click(screen.getByRole('button'))
    expect(onThemeChange).toHaveBeenCalledWith('dark')
  })

  it('shows the current theme label when showLabel is set', () => {
    renderWithProviders(<ThemeToggle showLabel />, { uiValue: { theme: 'dark', setTheme: vi.fn() } })
    expect(screen.getByText('Oscuro')).toBeInTheDocument()
  })
})
