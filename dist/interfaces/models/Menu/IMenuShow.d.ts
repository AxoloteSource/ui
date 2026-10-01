import { IMenuItem } from '../MenuItem/IMenuItem';
import { IMenu } from './IMenu';
export interface IMenuShow extends IMenu {
    items: IMenuItem[];
}
