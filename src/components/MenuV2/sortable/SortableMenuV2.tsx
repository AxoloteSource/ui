import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  MeasuringStrategy,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useMemo, useState } from 'react'
import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem'
import { MenuRowContent, MENU_INDENTATION_WIDTH, SortableMenuRow } from './SortableMenuRow'
import { buildTree, FlattenedMenuItem, flattenTree, getProjection, moveItem, removeChildrenOf } from './tree'

interface ISortableMenuV2Props {
  items: IMenuItem[]
  editMode: boolean
  size?: string
  reorderLabel: string
  onReorder: (items: IMenuItem[]) => void
  onEdit?: (item: IMenuItem) => void
  onDelete?: (id: string) => void
  onToggleRole?: (item: IMenuItem) => void
}

export const SortableMenuV2 = ({ items, editMode, size = 'md', reorderLabel, onReorder, onEdit, onDelete, onToggleRole }: ISortableMenuV2Props) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [overId, setOverId] = useState<string | null>(null)
  const [offsetLeft, setOffsetLeft] = useState(0)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const flattenedItems = useMemo(() => flattenTree(items), [items])
  const renderedItems = useMemo(() => (activeId ? removeChildrenOf(flattenedItems, [activeId]) : flattenedItems), [activeId, flattenedItems])
  const activeItem = useMemo(() => flattenedItems.find(({ id }) => id === activeId), [activeId, flattenedItems])
  const projected = activeId && overId ? getProjection(renderedItems, activeId, overId, offsetLeft, MENU_INDENTATION_WIDTH) : null

  const resetDragState = () => {
    setActiveId(null)
    setOverId(null)
    setOffsetLeft(0)
  }

  const handleDragStart = ({ active }: DragStartEvent) => {
    const id = String(active.id)

    setActiveId(id)
    setOverId(id)
    setOffsetLeft(0)
  }

  const handleDragOver = ({ over }: DragOverEvent) => {
    setOverId(over ? String(over.id) : null)
  }

  const handleDragMove = ({ delta }: DragMoveEvent) => {
    setOffsetLeft(delta.x)
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const activeKey = String(active.id)
    const overKey = over ? String(over.id) : null

    if (!overKey || activeKey === overKey) {
      resetDragState()
      return
    }

    const projection = getProjection(renderedItems, activeKey, overKey, offsetLeft, MENU_INDENTATION_WIDTH)
    const nextItems = moveItem(flattenedItems, activeKey, overKey, projection.parentId, projection.depth)

    resetDragState()
    onReorder(buildTree(nextItems))
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragMove={handleDragMove}
      onDragCancel={resetDragState}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={renderedItems.map(({ id }) => id)} strategy={verticalListSortingStrategy}>
        <ul data-menu-size={size} className="relative space-y-0.5 p-4 py-0 font-semibold">
          {renderedItems.map((flattenedItem) => (
            <SortableMenuRow
              key={flattenedItem.id}
              item={flattenedItem.item}
              depth={flattenedItem.id === activeId && projected ? projected.depth : flattenedItem.depth}
              editMode={editMode}
              reorderLabel={reorderLabel}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleRole={onToggleRole}
            />
          ))}
        </ul>
      </SortableContext>

      <DragOverlayPortal item={activeItem} depth={projected?.depth ?? 0} reorderLabel={reorderLabel} />
    </DndContext>
  )
}

interface IDragOverlayPortalProps {
  item?: FlattenedMenuItem
  depth: number
  reorderLabel: string
}

const DragOverlayPortal = ({ item, depth, reorderLabel }: IDragOverlayPortalProps) => {
  if (!item) {
    return null
  }

  return (
    <DragOverlay>
      <MenuRowContent item={item.item} depth={depth} editMode reorderLabel={reorderLabel} isOverlay />
    </DragOverlay>
  )
}

export default SortableMenuV2
