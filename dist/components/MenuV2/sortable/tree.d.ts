import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem';
export interface FlattenedMenuItem {
    id: string;
    parentId: string | null;
    depth: number;
    item: IMenuItem;
}
export declare const flattenTree: (items: IMenuItem[], parentId?: string | null, depth?: number) => FlattenedMenuItem[];
export declare const buildTree: (items: FlattenedMenuItem[]) => IMenuItem[];
export declare const removeChildrenOf: (items: FlattenedMenuItem[], ids: string[]) => FlattenedMenuItem[];
interface IProjection {
    depth: number;
    maxDepth: number;
    minDepth: number;
    parentId: string | null;
}
export declare const getProjection: (items: FlattenedMenuItem[], activeId: string, overId: string, dragOffset: number, indentationWidth: number) => IProjection;
export declare const moveItem: (items: FlattenedMenuItem[], activeId: string, overId: string, parentId: string | null, depth: number) => FlattenedMenuItem[];
export {};
