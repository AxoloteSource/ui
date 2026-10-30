import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { useTranslation } from 'react-i18next'
import { MenuV2Actions } from './MenuV2Actions'

interface IMenuV2SectionProps {
  item: IMenuItem
  editMode?: boolean
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

/**
 * Section label without a dropdown. Its children are rendered as siblings by
 * `MenuV2Items`, so the group stays permanently visible under the label.
 */
export const MenuV2Section = ({ item, editMode = false, onEdit, onDelete, onToggleRole }: IMenuV2SectionProps) => {
  const { t } = useTranslation()
  const isMissing = editMode && item.has_role === false
  const isDisabled = item.active === false

  const handleToggleRole = () => {
    if (editMode) {
      onToggleRole?.(item)
    }
  }

  return (
    <li className="nav-item relative">
      <h2
        className={`bg-background -mx-4 mb-1 flex items-center px-7 py-3 font-extrabold uppercase menu-section${editMode ? ' cursor-pointer ltr:pr-20 rtl:pl-20' : ''}${
          isMissing ? ' bg-gray-500!' : ''
        }`}
        style={{ opacity: 0.5 }}
        title={t(item.name)}
        role={editMode ? 'button' : undefined}
        tabIndex={editMode ? 0 : undefined}
        onClick={handleToggleRole}
        onKeyDown={(e) => {
          if (editMode && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault()
            handleToggleRole()
          }
        }}
      >
        <svg
          className="hidden h-5 w-4 flex-none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span className={`truncate ${isMissing ? 'text-white' : isDisabled ? 'text-gray-400' : ''}`}>{t(item.name)}</span>
        {editMode && (
          <span className="absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2">
            <MenuV2Actions item={item} onEdit={onEdit} onDelete={onDelete} />
          </span>
        )}
      </h2>
    </li>
  )
}
