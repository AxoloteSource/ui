import { DropdownVariantEnum } from './DropdownVariantEnum';
import { default as React } from 'react';
export interface IDropdownProps {
    className?: string;
    variant?: DropdownVariantEnum;
    color?: string;
    children: React.ReactNode;
    title: string;
}
