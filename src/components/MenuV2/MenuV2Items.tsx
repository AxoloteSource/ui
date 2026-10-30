import { Fragment } from 'react'
import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem'
import { MenuV2Header } from './MenuV2Header'
import { MenuV2Item } from './MenuV2Item'
import { MenuV2Section } from './MenuV2Section'

interface IMenuV2ItemsProps {
  items: IMenuItem[]
  editMode?: boolean
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

/**
 * Shared renderer for a menu level. Sections render their label and then their
 * children as siblings, so the group is always visible instead of collapsed.
 */
export const MenuV2Items = ({ items, editMode = false, onEdit, onDelete, onToggleRole }: IMenuV2ItemsProps) => (
  <>
    {items.map((item) => {
      if (item.type === 'section') {
        return (
          <Fragment key={item.id}>
            <MenuV2Section
              item={item}
              editMode={editMode}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleRole={onToggleRole}
            />
            <MenuV2Items
              items={item.children ?? []}
              editMode={editMode}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleRole={onToggleRole}
            />
          </Fragment>
        )
      }

      if (item.type === 'header' || (item.children?.length ?? 0) > 0) {
        return <MenuV2Header key={item.id} item={item} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
      }

      return <MenuV2Item key={item.id} item={item} editMode={editMode} onEdit={onEdit} onDelete={onDelete} onToggleRole={onToggleRole} />
    })}
  </>
)

export default MenuV2Items
