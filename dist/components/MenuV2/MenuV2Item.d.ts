import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface IMenuV2ItemProps {
    item: IMenuItem;
    editMode?: boolean;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const MenuV2Item: ({ item, editMode, onEdit, onDelete, onToggleRole }: IMenuV2ItemProps) => import("react").JSX.Element;
export {};
