import { default as React } from 'react';
export interface IDropdownItemProps {
    children: React.ReactNode;
    onClick?: () => unknown;
    disabled?: boolean;
}
