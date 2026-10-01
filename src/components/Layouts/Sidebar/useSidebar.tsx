import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useAxoloteUI } from '../../../contexts/AxoloteUIProvider'

export const useSidebar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const { themeConfig, toggleSidebar } = useAxoloteUI()
  const location = useLocation()
  const { t } = useTranslation()
  const semidark = themeConfig.semidark

  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value
    })
  }

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]')
    if (selector) {
      selector.classList.add('active')
      const ul = selector.closest('ul.sub-menu')
      if (ul) {
        const navLinks = ul.closest('li.menu')?.querySelectorAll('.nav-link')
        if (navLinks && navLinks.length) {
          const firstLink = navLinks[0] as HTMLElement
          setTimeout(() => {
            firstLink.click()
          })
        }
      }
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      toggleSidebar()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return {
    semidark,
    toggleSidebar,
    t,
    currentMenu,
    toggleMenu
  }
}
