import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { MenuV2Items } from './MenuV2Items'

interface IMenuV2SubMenuProps {
  items: IMenuItem[]
  editMode?: boolean
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

export const MenuV2SubMenu = ({ items, editMode = false, onEdit, onDelete, onToggleRole }: IMenuV2SubMenuProps) => {
  if (items.length === 0) {
    return null
  }

  return (
    <ul className="sub-menu text-gray-500">
      <MenuV2Items items={items} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
    </ul>
  )
}
