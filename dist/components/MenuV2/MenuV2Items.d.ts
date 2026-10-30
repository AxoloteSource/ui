import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface IMenuV2ItemsProps {
    items: IMenuItem[];
    editMode?: boolean;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
/**
 * Shared renderer for a menu level. Sections render their label and then their
 * children as siblings, so the group is always visible instead of collapsed.
 */
export declare const MenuV2Items: ({ items, editMode, onEdit, onDelete, onToggleRole }: IMenuV2ItemsProps) => import("react").JSX.Element;
export default MenuV2Items;
