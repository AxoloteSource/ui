import { useAxoloteUI } from '../../contexts/AxoloteUIProvider'
import { LogOut } from 'lucide-react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { DropdownOld } from '../Dropdown'
import ThemeToggle from '../ThemeToggle'

const Header = () => {
  const { user, logout, logo, logoDark, userAvatar, brandName, themeConfig, toggleSidebar } = useAxoloteUI()
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]')
    if (selector) {
      selector.classList.add('active')
      const all = document.querySelectorAll('ul.horizontal-menu .nav-link.active')
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove('active')
      }
      const ul = selector.closest('ul.sub-menu')
      if (ul) {
        const navLinks = ul.closest('li.menu')?.querySelectorAll('.nav-link')
        if (navLinks && navLinks.length) {
          const firstLink = navLinks[0] as HTMLElement
          setTimeout(() => {
            firstLink.classList.add('active')
          }, 0)
        }
      }
    }
  }, [location])

  const onClickLogout = () => {
    logout?.()
  }

  const isRtl = themeConfig.rtlClass === 'rtl'
  const brand = brandName ?? t('brand_name')

  return (
    <header className={`z-40 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
      <div className="shadow-sm">
        <div className="bg-navbar-background relative flex w-full items-center px-5 py-2.5">
          <div className="horizontal-logo flex items-center justify-between lg:hidden ltr:mr-2 rtl:ml-2">
            <Link to="/" className="main-logo flex shrink-0 items-center">
              {logo && <img src={logo} alt={brand} className="mr-2 h-8 w-auto dark:hidden" />}
              {logoDark && <img src={logoDark} alt={brand} className="mr-2 hidden h-8 w-auto dark:block" />}
            </Link>
            <button
              type="button"
              className="collapse-icon hover:text-primary dark:hover:text-primary bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60 relative z-50 flex flex-none rounded-full p-2 lg:hidden ltr:ml-2 rtl:mr-2 dark:text-[#d0d2d6]"
              onClick={toggleSidebar}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {themeConfig.sidebar && (
            <button
              type="button"
              className="collapse-icon hover:text-primary dark:hover:text-primary bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60 relative z-50 hidden flex-none rounded-full p-2 lg:flex ltr:mr-2 rtl:ml-2 dark:text-[#d0d2d6]"
              onClick={toggleSidebar}
              title="Mostrar navegación"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}

          <div className="flex items-center space-x-1.5 sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0 dark:text-[#d0d2d6]">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
            <div>
              <ThemeToggle />
            </div>
            <div className="dropdown flex shrink-0">
              <DropdownOld
                offset={[0, 8]}
                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                btnClassName="relative group block"
                button={
                  userAvatar ? (
                    <img className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src={userAvatar} alt="userProfile" />
                  ) : (
                    <span className="bg-primary/20 text-primary flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold">
                      {user?.name?.charAt(0)?.toUpperCase() ?? '?'}
                    </span>
                  )
                }
              >
                <ul className="text-dark dark:text-white-light/90 w-[230px] !py-0 font-semibold">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      {userAvatar && <img className="h-10 w-10 rounded-md object-cover" src={userAvatar} alt="userProfile" />}
                      <div className="truncate ltr:pl-4 rtl:pr-4">
                        <h4 className="text-base">
                          <span className={`bg-success-light text-success rounded px-1 text-xs`}>{t('admin')}</span>
                          <br />
                          {user?.name}
                        </h4>
                        <button type="button" className="hover:text-primary text-black/60 dark:text-white dark:hover:text-white">
                          {user?.email}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="border-white-light dark:border-white-light/10 border-t">
                    <a onClick={onClickLogout} className="text-danger cursor-pointer py-3">
                      <LogOut className="ltr:mr-2" />
                      {t('logout')}
                    </a>
                  </li>
                </ul>
              </DropdownOld>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
