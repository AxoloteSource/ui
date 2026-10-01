import { createContext, useContext, type ReactNode } from 'react'
import { IMenuShow } from '../interfaces/models/Menu/IMenuShow'

export interface AxoloteThemeConfig {
  theme: string
  menu: string
  layout: string
  rtlClass: string
  animation: string
  navbar: string
  semidark: boolean | string
  sidebar: boolean
}

export interface AxoloteUser {
  name?: string
  email?: string
  role?: { key?: string } | null
}

export interface AxoloteFooterLink {
  label: string
  to: string
}

export interface AxoloteUIValue {
  themeConfig: AxoloteThemeConfig
  setThemeConfig: (patch: Partial<AxoloteThemeConfig>) => void
  toggleSidebar: () => void
  theme?: string
  setTheme?: (theme: string) => void
  user?: AxoloteUser | null
  logout?: () => void
  logo?: string
  logoDark?: string
  brandName?: string
  userAvatar?: string
  menu?: IMenuShow
  footerLinks?: AxoloteFooterLink[]
}

const defaultThemeConfig: AxoloteThemeConfig = {
  theme: 'light',
  menu: 'vertical',
  layout: 'full',
  rtlClass: 'ltr',
  animation: '',
  navbar: 'navbar-sticky',
  semidark: false,
  sidebar: false
}

const defaultValue: AxoloteUIValue = {
  themeConfig: defaultThemeConfig,
  setThemeConfig: () => undefined,
  toggleSidebar: () => undefined
}

const AxoloteUIContext = createContext<AxoloteUIValue>(defaultValue)

interface AxoloteUIProviderProps {
  children: ReactNode
  value: AxoloteUIValue
}

export function AxoloteUIProvider({ children, value }: AxoloteUIProviderProps) {
  return <AxoloteUIContext.Provider value={{ ...defaultValue, ...value }}>{children}</AxoloteUIContext.Provider>
}

export function useAxoloteUI(): AxoloteUIValue {
  return useContext(AxoloteUIContext)
}
