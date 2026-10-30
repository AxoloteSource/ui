import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem'

export interface FlattenedMenuItem {
  id: string
  parentId: string | null
  depth: number
  item: IMenuItem
}

export const flattenTree = (items: IMenuItem[], parentId: string | null = null, depth = 0): FlattenedMenuItem[] =>
  items.flatMap((item) => [{ id: item.id, parentId, depth, item }, ...flattenTree(item.children ?? [], item.id, depth + 1)])

export const buildTree = (items: FlattenedMenuItem[]): IMenuItem[] => {
  const nodes = new Map<string, IMenuItem>()

  items.forEach(({ item }) => {
    nodes.set(item.id, { ...item, parent_id: null, children: [] })
  })

  const roots: IMenuItem[] = []

  items.forEach(({ id, parentId }) => {
    const node = nodes.get(id)

    if (!node) {
      return
    }

    const parent = parentId ? nodes.get(parentId) : undefined

    if (parent) {
      node.parent_id = parent.id
      parent.children.push(node)
      return
    }

    node.parent_id = null
    roots.push(node)
  })

  return roots
}

export const removeChildrenOf = (items: FlattenedMenuItem[], ids: string[]): FlattenedMenuItem[] => {
  const excludedParents = new Set(ids)

  return items.filter((item) => {
    if (item.parentId && excludedParents.has(item.parentId)) {
      if (item.item.children?.length) {
        excludedParents.add(item.id)
      }

      return false
    }

    return true
  })
}

const getDragDepth = (offset: number, indentationWidth: number): number => Math.round(offset / indentationWidth)

const getMaxDepth = (previousItem?: FlattenedMenuItem): number => {
  if (!previousItem) {
    return 0
  }

  // A link cannot become a parent: dropping at its depth keeps the item as a sibling.
  if (previousItem.item.type === 'link') {
    return previousItem.depth
  }

  return previousItem.depth + 1
}

const getMinDepth = (nextItem?: FlattenedMenuItem): number => nextItem?.depth ?? 0

interface IProjection {
  depth: number
  maxDepth: number
  minDepth: number
  parentId: string | null
}

export const getProjection = (
  items: FlattenedMenuItem[],
  activeId: string,
  overId: string,
  dragOffset: number,
  indentationWidth: number
): IProjection => {
  const overItemIndex = items.findIndex(({ id }) => id === overId)
  const activeItemIndex = items.findIndex(({ id }) => id === activeId)
  const activeItem = items[activeItemIndex]
  const newItems = arrayMove(items, activeItemIndex, overItemIndex)
  const previousItem = newItems[overItemIndex - 1]
  const nextItem = newItems[overItemIndex + 1]

  const projectedDepth = activeItem.depth + getDragDepth(dragOffset, indentationWidth)
  const maxDepth = getMaxDepth(previousItem)
  const minDepth = getMinDepth(nextItem)

  let depth = projectedDepth

  if (projectedDepth >= maxDepth) {
    depth = maxDepth
  } else if (projectedDepth < minDepth) {
    depth = minDepth
  }

  const getParentId = (): string | null => {
    if (depth === 0 || !previousItem) {
      return null
    }

    if (depth === previousItem.depth) {
      return previousItem.parentId
    }

    if (depth > previousItem.depth) {
      return previousItem.id
    }

    return (
      newItems
        .slice(0, overItemIndex)
        .reverse()
        .find((item) => item.depth === depth)?.parentId ?? null
    )
  }

  return { depth, maxDepth, minDepth, parentId: getParentId() }
}

export const moveItem = (
  items: FlattenedMenuItem[],
  activeId: string,
  overId: string,
  parentId: string | null,
  depth: number
): FlattenedMenuItem[] => {
  const subtreeIds = new Set<string>([activeId])

  let changed = true

  while (changed) {
    changed = false

    items.forEach((item) => {
      if (item.parentId && subtreeIds.has(item.parentId) && !subtreeIds.has(item.id)) {
        subtreeIds.add(item.id)
        changed = true
      }
    })
  }

  const activeEntry = items.find(({ id }) => id === activeId)

  if (!activeEntry) {
    return items
  }

  const activeIndex = items.findIndex(({ id }) => id === activeId)
  const overIndex = items.findIndex(({ id }) => id === overId)

  if (overIndex === -1) {
    return items
  }

  const remaining = items.filter(({ id }) => !subtreeIds.has(id))
  const remainingOverIndex = remaining.findIndex(({ id }) => id === overId)
  const insertionIndex = remainingOverIndex + (activeIndex < overIndex ? 1 : 0)
  const subtree = items.filter(({ id }) => subtreeIds.has(id) && id !== activeId)
  const movedActive: FlattenedMenuItem = { ...activeEntry, parentId, depth }

  return [...remaining.slice(0, insertionIndex), movedActive, ...subtree, ...remaining.slice(insertionIndex)]
}

// Kept local to avoid a hard dependency on the sortable package from the pure helpers.
const arrayMove = <T>(array: T[], from: number, to: number): T[] => {
  const startIndex = from < 0 ? array.length + from : from
  const endIndex = to < 0 ? array.length + to : to
  const copy = [...array]
  const [item] = copy.splice(startIndex, 1)

  if (!item) {
    return copy
  }

  copy.splice(endIndex, 0, item)

  return copy
}
