import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface IMenuV2SubMenuProps {
    items: IMenuItem[];
    editMode?: boolean;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const MenuV2SubMenu: ({ items, editMode, onEdit, onDelete, onToggleRole }: IMenuV2SubMenuProps) => import("react").JSX.Element | null;
export {};
