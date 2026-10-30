import { IMenuItem } from '../../../interfaces/models/MenuItem/IMenuItem';
interface ISortableMenuV2Props {
    items: IMenuItem[];
    editMode: boolean;
    size?: string;
    reorderLabel: string;
    onReorder: (items: IMenuItem[]) => void;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const SortableMenuV2: ({ items, editMode, size, reorderLabel, onReorder, onEdit, onDelete, onToggleRole }: ISortableMenuV2Props) => import("react").JSX.Element;
export default SortableMenuV2;
