import { IMenuShow } from '../../interfaces/models/Menu/IMenuShow'
import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { useAxoloteUI } from '../../contexts/AxoloteUIProvider'
import { MenuV2Items } from './MenuV2Items'
import { SortableMenuV2 } from './sortable/SortableMenuV2'

interface MenuV2Props {
  menu?: IMenuShow
  editMode?: boolean
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
  sortable?: boolean
  onReorder?: (items: IMenuItem[]) => void
  reorderLabel?: string
}

export const MenuV2 = ({
  menu: menuProp,
  editMode = false,
  onEdit,
  onDelete,
  onToggleRole,
  sortable = false,
  onReorder,
  reorderLabel = 'Reorder menu item'
}: MenuV2Props) => {
  const { menu: contextMenu } = useAxoloteUI()
  const menu = menuProp ?? contextMenu

  if (!menu?.items?.length) {
    return null
  }

  const size = menu.size ?? 'md'

  if (sortable && editMode && onReorder) {
    return (
      <SortableMenuV2
        items={menu.items}
        editMode={editMode}
        size={size}
        reorderLabel={reorderLabel}
        onReorder={onReorder}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleRole={onToggleRole}
      />
    )
  }

  return (
    <ul data-menu-size={size}>
      <MenuV2Items items={menu.items} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
    </ul>
  )
}

export default MenuV2
