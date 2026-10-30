import { describe, expect, it } from 'vitest'
import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem'
import { buildTree, flattenTree, getProjection, moveItem, removeChildrenOf } from '../sortable/tree'

const item = (id: string, children: IMenuItem[] = [], type: IMenuItem['type'] = 'link'): IMenuItem => ({
  id,
  menu_id: 'menu',
  parent_id: null,
  type,
  name: id,
  slug: id,
  route: null,
  path: `/${id}`,
  icon: null,
  sort_order: 0,
  active: true,
  children,
  created_at: '2026-01-01'
})

const tree = (): IMenuItem[] => [item('a', [item('a-1'), item('a-2')], 'header'), item('b'), item('c')]

describe('menu sortable tree helpers', () => {
  it('flattens the tree with parents and depths', () => {
    const flattened = flattenTree(tree())

    expect(flattened.map(({ id }) => id)).toEqual(['a', 'a-1', 'a-2', 'b', 'c'])
    expect(flattened.map(({ depth }) => depth)).toEqual([0, 1, 1, 0, 0])
    expect(flattened.find(({ id }) => id === 'a-1')?.parentId).toBe('a')
  })

  it('rebuilds the tree and rewrites parent_id', () => {
    const flattened = flattenTree(tree())
    const moved = moveItem(flattened, 'c', 'a-1', 'a', 1)
    const rebuilt = buildTree(moved)

    expect(rebuilt.map(({ id }) => id)).toEqual(['a', 'b'])
    expect(rebuilt[0].children.map(({ id }) => id)).toEqual(['c', 'a-1', 'a-2'])
    expect(rebuilt[0].children.find(({ id }) => id === 'c')?.parent_id).toBe('a')
  })

  it('keeps the subtree of the dragged item', () => {
    const flattened = flattenTree(tree())
    const moved = moveItem(flattened, 'a', 'c', null, 0)
    const rebuilt = buildTree(moved)

    expect(rebuilt.map(({ id }) => id)).toEqual(['b', 'c', 'a'])
    expect(rebuilt[2].children.map(({ id }) => id)).toEqual(['a-1', 'a-2'])
    expect(rebuilt[2].children[0].parent_id).toBe('a')
  })

  it('removes the children of the active item from droppable targets', () => {
    const flattened = flattenTree(tree())

    expect(removeChildrenOf(flattened, ['a']).map(({ id }) => id)).toEqual(['a', 'b', 'c'])
  })

  it('projects a nested parent when dragging to the right', () => {
    const flattened = flattenTree([item('a', [], 'header'), item('b'), item('c')])
    const projection = getProjection(flattened, 'c', 'b', 18, 18)

    expect(projection.depth).toBe(1)
    expect(projection.parentId).toBe('a')
  })

  it('never projects a link as a parent', () => {
    const flattened = flattenTree([item('a'), item('b'), item('c')])

    expect(getProjection(flattened, 'c', 'b', 36, 18).maxDepth).toBe(0)
  })
})
