import { default as React, ReactNode } from 'react';
interface IconListItemProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}
export declare const ArrowIcon: React.FC<{
    className?: string;
}>;
export declare const IconListItem: React.FC<IconListItemProps>;
export default IconListItem;
