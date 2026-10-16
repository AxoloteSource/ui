import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { MenuV2Actions } from './MenuV2Actions'
import { MenuV2SubMenu } from './MenuV2SubMenu'
import { resolveIcon } from './resolveIcon'

const pathIsActive = (path: string | null | undefined, current: string): boolean => {
  if (!path || path === '#') {
    return false
  }
  const base = path.endsWith('/') ? path.slice(0, -1) : path
  return base === current || (base.length > 1 && current.startsWith(`${base}/`))
}

const hasActiveDescendant = (items: IMenuItem[], current: string): boolean =>
  items.some((child) => pathIsActive(child.path || child.route, current) || hasActiveDescendant(child.children ?? [], current))

interface IMenuV2HeaderProps {
  item: IMenuItem
  editMode?: boolean
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

export const MenuV2Header = ({ item, editMode = false, onEdit, onDelete, onToggleRole }: IMenuV2HeaderProps) => {
  const { t } = useTranslation()
  const location = useLocation()
  const children = item.children ?? []
  const containsActiveRoute = hasActiveDescendant(children, location.pathname)
  const [open, setOpen] = useState(containsActiveRoute)
  const icon = resolveIcon(item.icon, 'group-hover:!text-primary shrink-0 ltr:mr-2')
  const isMissing = editMode && item.has_role === false
  const isDisabled = item.active === false
  const isOpen = editMode ? true : open

  useEffect(() => {
    if (containsActiveRoute) {
      setOpen(true)
    }
  }, [containsActiveRoute])

  return (
    <li className="menu nav-item relative">
      <button
        tabIndex={0}
        onClick={() => {
          if (editMode) {
            onToggleRole?.(item)
          } else {
            setOpen((prev) => !prev)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            if (editMode) {
              onToggleRole?.(item)
            } else {
              setOpen((prev) => !prev)
            }
          }
        }}
        className={`group relative w-full cursor-pointer${editMode ? 'ltr:pr-20 rtl:pl-20' : ''}${isMissing ? 'bg-gray-500!' : ''}`}
      >
        <span className="flex w-full min-w-0 items-center justify-between">
          <span className="flex min-w-0 items-center">
            {icon}
            <span className={`truncate ${isMissing ? 'text-white' : isDisabled ? 'text-gray-400' : ''}`} title={t(item.name)}>
              {t(item.name)}
            </span>
          </span>
          <span className={`shrink-0 ${isOpen ? '!rotate-90' : 'rtl:rotate-180'}`}>
            <ChevronRight />
          </span>
        </span>
        {editMode && (
          <span className="absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2">
            <MenuV2Actions item={item} onEdit={onEdit} onDelete={onDelete} />
          </span>
        )}
      </button>

      <AnimateHeight duration={300} height={isOpen ? 'auto' : 0}>
        <MenuV2SubMenu items={children} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
      </AnimateHeight>
    </li>
  )
}
