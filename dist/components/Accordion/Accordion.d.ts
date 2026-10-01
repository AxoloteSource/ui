import { default as React } from 'react';
export interface IAccordionItem {
    id: string;
    header: React.ReactNode;
    content: React.ReactNode;
    leftIcon?: React.ReactNode;
}
export interface IAccordionProps {
    items: IAccordionItem[];
    className?: string;
    itemClassName?: string;
    headerClassName?: string;
    contentClassName?: string;
    allowMultiple?: boolean;
    defaultActiveId?: string | null;
    defaultActiveIds?: string[];
    activeId?: string | null;
    activeIds?: string[];
    onChange?: (nextOpen: string[] | null) => void;
    showChevron?: boolean;
}
export declare const Accordion: React.FC<IAccordionProps>;
export default Accordion;
