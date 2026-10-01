import { KeyboardEvent } from 'react';
import { ITabItem } from './ITabsProps';
interface UseTabsParams {
    items: ITabItem[];
    defaultActive?: number;
    activeIndex?: number;
    onChange?: (index: number) => void;
}
export declare const useTabs: ({ items, defaultActive, activeIndex: controlledIndex, onChange }: UseTabsParams) => {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    handleKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
};
export {};
