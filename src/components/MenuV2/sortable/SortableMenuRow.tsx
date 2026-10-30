import type { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem'
import { MenuV2Actions } from '../MenuV2Actions'
import { resolveIcon } from '../resolveIcon'

export const MENU_INDENTATION_WIDTH = 18

interface IMenuRowContentProps {
  item: IMenuItem
  depth: number
  editMode: boolean
  reorderLabel: string
  isDragging?: boolean
  isOverlay?: boolean
  activatorRef?: (element: HTMLElement | null) => void
  dragHandleProps?: DraggableAttributes & {
    listeners?: DraggableSyntheticListeners
  }
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

const sectionClasses = 'font-extrabold uppercase tracking-wide'

export const MenuRowContent = ({
  item,
  depth,
  editMode,
  reorderLabel,
  isDragging = false,
  isOverlay = false,
  activatorRef,
  dragHandleProps,
  onEdit,
  onDelete,
  onToggleRole
}: IMenuRowContentProps) => {
  const { t } = useTranslation()
  const icon = resolveIcon(item.icon, 'menu-icon shrink-0')
  const isMissing = editMode && item.has_role === false
  const isDisabled = item.active === false
  const { listeners, ...attributes } = dragHandleProps ?? {}

  return (
    <div
      className={`group flex items-center gap-1 rounded-md py-1 pr-2 transition-colors${isMissing ? ' bg-gray-500!' : ''}${
        isOverlay ? ' border border-[var(--border)] bg-[var(--card)] shadow-lg' : ''
      }${isDragging ? ' opacity-40' : ''}`}
      style={{ marginLeft: depth * MENU_INDENTATION_WIDTH }}
    >
      <button
        ref={activatorRef}
        type="button"
        className="cursor-grab touch-none rounded p-1 text-[var(--text-muted)] hover:bg-[var(--muted)] hover:text-[var(--primary)] active:cursor-grabbing"
        aria-label={reorderLabel}
        onClick={(event) => event.stopPropagation()}
        {...attributes}
        {...listeners}
      >
        <GripVertical size={16} />
      </button>

      <button type="button" className="flex min-w-0 flex-1 items-center gap-2 py-1 text-left" onClick={() => onToggleRole?.(item)}>
        {icon}
        <span
          className={`truncate ${item.type === 'section' ? sectionClasses : ''}${isMissing ? ' text-white' : isDisabled ? ' text-gray-400' : ''}`}
          title={t(item.name)}
        >
          {t(item.name)}
        </span>
      </button>

      <MenuV2Actions item={item} onEdit={onEdit} onDelete={onDelete} />
    </div>
  )
}

interface ISortableMenuRowProps {
  item: IMenuItem
  depth: number
  editMode: boolean
  reorderLabel: string
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

export const SortableMenuRow = ({ item, depth, editMode, reorderLabel, onEdit, onDelete, onToggleRole }: ISortableMenuRowProps) => {
  const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({ id: item.id })

  return (
    <li
      ref={setNodeRef}
      className="menu nav-item list-none"
      data-menu-item-id={item.id}
      style={{
        transform: CSS.Translate.toString(transform),
        transition
      }}
    >
      <MenuRowContent
        item={item}
        depth={depth}
        editMode={editMode}
        reorderLabel={reorderLabel}
        isDragging={isDragging}
        activatorRef={setActivatorNodeRef}
        dragHandleProps={{ ...attributes, listeners }}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleRole={onToggleRole}
      />
    </li>
  )
}
