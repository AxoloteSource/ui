import { IModalProps } from './IModalProps';
export declare const useModal: (props: IModalProps) => {
    title: import('react').ReactNode;
    children: import('react').ReactNode;
    isOpen: boolean;
    className: string;
    icon: string | number | bigint | boolean | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<import('react').ReactNode> | Promise<string | number | bigint | boolean | import('react').ReactPortal | import('react').ReactElement<unknown, string | import('react').JSXElementConstructor<any>> | Iterable<import('react').ReactNode> | null | undefined> | null;
    closeOnOverlayClick: boolean;
    close: () => void;
    preventCloseOutside: () => void;
};
