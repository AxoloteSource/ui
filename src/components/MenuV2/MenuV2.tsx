import { IMenuShow } from '../../interfaces/models/Menu/IMenuShow'
import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { useAxoloteUI } from '../../contexts/AxoloteUIProvider'
import { MenuV2Header } from './MenuV2Header'
import { MenuV2Item } from './MenuV2Item'

interface MenuV2Props {
  menu?: IMenuShow
  editMode?: boolean
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

export const MenuV2 = ({ menu: menuProp, editMode = false, onEdit, onDelete, onToggleRole }: MenuV2Props) => {
  const { menu: contextMenu } = useAxoloteUI()
  const menu = menuProp ?? contextMenu

  const getItemComponent = (item: IMenuItem) =>
    item.type === 'header' || (item.children?.length ?? 0) > 0 ? (
      <MenuV2Header key={item.id} item={item} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
    ) : (
      <MenuV2Item key={item.id} item={item} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
    )

  if (!menu?.items?.length) {
    return null
  }

  return <ul>{menu.items.map(getItemComponent)}</ul>
}

export default MenuV2
