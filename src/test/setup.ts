import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import React from 'react'
import { afterEach, vi } from 'vitest'

const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = String(value)
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    key: (index: number) => Object.keys(store)[index] ?? null,
    get length() {
      return Object.keys(store).length
    }
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true, configurable: true })
Object.defineProperty(globalThis, 'localStorage', { value: localStorageMock, writable: true, configurable: true })

afterEach(() => {
  cleanup()
  localStorageMock.clear()
})

// --- matchMedia (theme/responsive hooks) ---
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  })
})

// --- IntersectionObserver (InfiniteScroll) ---
class MockIntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ''
  readonly thresholds: ReadonlyArray<number> = []
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
}
Object.defineProperty(window, 'IntersectionObserver', { writable: true, configurable: true, value: MockIntersectionObserver })
Object.defineProperty(globalThis, 'IntersectionObserver', { writable: true, configurable: true, value: MockIntersectionObserver })

// --- ResizeObserver (Accordion, react-perfect-scrollbar, mantine) ---
class MockResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
Object.defineProperty(window, 'ResizeObserver', { writable: true, configurable: true, value: MockResizeObserver })
Object.defineProperty(globalThis, 'ResizeObserver', { writable: true, configurable: true, value: MockResizeObserver })

// --- jsdom gaps ---
Element.prototype.scrollIntoView = vi.fn()
Element.prototype.scrollTo = vi.fn()
window.scrollTo = vi.fn()
Element.prototype.getBoundingClientRect = vi.fn(
  () =>
    ({
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      toJSON: () => ({})
    }) as DOMRect
)
if (typeof window.requestAnimationFrame !== 'function') {
  window.requestAnimationFrame = ((cb: FrameRequestCallback) => setTimeout(() => cb(performance.now()), 0)) as typeof window.requestAnimationFrame
  window.cancelAnimationFrame = ((id: number) => clearTimeout(id)) as typeof window.cancelAnimationFrame
}
URL.createObjectURL = vi.fn(() => 'mock-url')
URL.revokeObjectURL = vi.fn()

// --- i18next passthrough: t(key) === key ---
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'es', changeLanguage: vi.fn() }
  }),
  Trans: ({ children }: { children?: React.ReactNode }) => children ?? null,
  withTranslation: () => (Component: React.ComponentType) => Component,
  initReactI18next: { type: '3rdParty', init: () => {} },
  I18nextProvider: ({ children }: { children?: React.ReactNode }) => children ?? null
}))
