import { Role } from '../../../enums/Role';
import { JSX } from 'react';
import { default as ISubItem } from './subItem.interface';
export default interface ISidebarLink {
    name: string;
    to: string;
    icon: JSX.Element;
    subItems?: ISubItem[];
    roles?: Role[];
}
