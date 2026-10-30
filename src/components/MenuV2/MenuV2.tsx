import { IMenuShow } from '../../interfaces/models/Menu/IMenuShow'
import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { useAxoloteUI } from '../../contexts/AxoloteUIProvider'
import { MenuV2Items } from './MenuV2Items'

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

  if (!menu?.items?.length) {
    return null
  }

  return (
    <ul>
      <MenuV2Items items={menu.items} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
    </ul>
  )
}

export default MenuV2
