import { DropdownVariantEnum } from './DropdownVariantEnum';
import { Ref } from 'react';
interface IUseDropdownProps {
    variant: DropdownVariantEnum;
    color?: string;
    forwardedRef: Ref<{
        close: () => void;
    }>;
}
export declare const classes: Record<DropdownVariantEnum, string>;
export declare const useDropdown: (props: IUseDropdownProps) => {
    referenceRef: {
        current: HTMLElement | null;
    };
    setVisibility: import('react').Dispatch<import('react').SetStateAction<boolean>>;
    visibility: boolean;
    popperRef: {
        current: HTMLElement | null;
    };
    setReferenceElement: import('react').Dispatch<import('react').SetStateAction<HTMLElement | null>>;
    setPopperElement: import('react').Dispatch<import('react').SetStateAction<HTMLElement | null>>;
    styles: {
        [key: string]: import('react').CSSProperties;
    };
    attributes: {
        [key: string]: {
            [key: string]: string;
        } | undefined;
    };
    customClass: string;
};
export {};
