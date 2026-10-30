import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface IMenuV2SectionProps {
    item: IMenuItem;
    editMode?: boolean;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
/**
 * Section label without a dropdown. Its children are rendered as siblings by
 * `MenuV2Items`, so the group stays permanently visible under the label.
 */
export declare const MenuV2Section: ({ item, editMode, onEdit, onDelete, onToggleRole }: IMenuV2SectionProps) => import("react").JSX.Element;
export {};
