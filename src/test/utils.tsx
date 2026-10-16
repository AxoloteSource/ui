import { MantineProvider } from '@mantine/core'
import { render, type RenderOptions } from '@testing-library/react'
import { type ReactElement, type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { AxoloteUIProvider, type AxoloteUIValue } from '../contexts/AxoloteUIProvider'
import { ThemeProvider } from '../contexts/ThemeProvider'

export const defaultUIValue: AxoloteUIValue = {
  themeConfig: {
    theme: 'light',
    menu: 'vertical',
    layout: 'full',
    rtlClass: 'ltr',
    animation: '',
    navbar: 'navbar-sticky',
    semidark: false,
    sidebar: false
  },
  setThemeConfig: () => undefined,
  toggleSidebar: () => undefined
}

interface ProvidersOptions extends RenderOptions {
  routerInitialEntries?: string[]
  uiValue?: Partial<AxoloteUIValue>
}

/** Render inside the providers the library components expect: Theme + AxoloteUI + MemoryRouter. */
export function renderWithProviders(ui: ReactElement, { routerInitialEntries = ['/'], uiValue, ...renderOptions }: ProvidersOptions = {}) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <MantineProvider>
        <ThemeProvider>
          <AxoloteUIProvider value={{ ...defaultUIValue, ...uiValue }}>
            <MemoryRouter initialEntries={routerInitialEntries}>{children}</MemoryRouter>
          </AxoloteUIProvider>
        </ThemeProvider>
      </MantineProvider>
    )
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

/** Render with only a MemoryRouter (for components that don't need AxoloteUIProvider). */
export function renderWithRouter(ui: ReactElement, routerInitialEntries: string[] = ['/']) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <MemoryRouter initialEntries={routerInitialEntries}>{children}</MemoryRouter>
  }

  return render(ui, { wrapper: Wrapper })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
