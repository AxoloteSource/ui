import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface MenuV2ActionsProps {
    item: IMenuItem;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
}
export declare const MenuV2Actions: ({ item, onEdit, onDelete }: MenuV2ActionsProps) => import("react").JSX.Element;
export {};
