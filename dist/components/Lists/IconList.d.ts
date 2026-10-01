import { default as React, ReactNode } from 'react';
interface IconListItemTextProps {
    text: string;
}
interface IconListProps {
    children?: ReactNode;
    items?: IconListItemTextProps[];
    className?: string;
}
export declare const IconList: React.FC<IconListProps>;
export default IconList;
