import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface IMenuV2HeaderProps {
    item: IMenuItem;
    editMode?: boolean;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const MenuV2Header: ({ item, editMode, onEdit, onDelete, onToggleRole }: IMenuV2HeaderProps) => import("react").JSX.Element;
export {};
