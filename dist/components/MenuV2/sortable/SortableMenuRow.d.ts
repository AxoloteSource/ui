import { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core';
import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem';
export declare const MENU_INDENTATION_WIDTH = 18;
interface IMenuRowContentProps {
    item: IMenuItem;
    depth: number;
    editMode: boolean;
    reorderLabel: string;
    isDragging?: boolean;
    isOverlay?: boolean;
    activatorRef?: (element: HTMLElement | null) => void;
    dragHandleProps?: DraggableAttributes & {
        listeners?: DraggableSyntheticListeners;
    };
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const MenuRowContent: ({ item, depth, editMode, reorderLabel, isDragging, isOverlay, activatorRef, dragHandleProps, onEdit, onDelete, onToggleRole }: IMenuRowContentProps) => import("react").JSX.Element;
interface ISortableMenuRowProps {
    item: IMenuItem;
    depth: number;
    editMode: boolean;
    reorderLabel: string;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const SortableMenuRow: ({ item, depth, editMode, reorderLabel, onEdit, onDelete, onToggleRole }: ISortableMenuRowProps) => import("react").JSX.Element;
export {};
