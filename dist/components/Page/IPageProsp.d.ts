import { IBreadCrumblesItemsProps } from '../BreadCrumbles/BreadCrumblesItems/IBreadCrumblesItemsProps';
import { ReactNode } from 'react';
export interface IPageProps {
    children?: ReactNode;
    title?: ReactNode;
    titleTranslation?: string;
    helpDescription?: ReactNode;
    headerAction?: ReactNode;
    breadCrumblesItems?: IBreadCrumblesItemsProps[];
    className?: string;
}
