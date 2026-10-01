import { IMenuShow } from '../../interfaces/models/Menu/IMenuShow';
import { IMenuItem } from '../../interfaces/models/MenuItem/IMenuItem';
interface MenuV2Props {
    menu?: IMenuShow;
    editMode?: boolean;
    onEdit?: (item: IMenuItem) => void;
    onDelete?: (id: string) => void;
    onToggleRole?: (item: IMenuItem) => void;
}
export declare const MenuV2: ({ menu: menuProp, editMode, onEdit, onDelete, onToggleRole }: MenuV2Props) => import("react").JSX.Element | null;
export default MenuV2;
