import { default as React } from 'react';
interface ITextAreaChatProps<T> {
    name: Extract<keyof T, string>;
    placeholder?: string;
    disabled?: boolean;
    inputClassName?: string;
    value?: string;
    wrapperClassName?: string;
    IconComponent?: React.ComponentType;
    startAdornment?: React.ReactNode;
    inputRef?: React.RefObject<HTMLTextAreaElement | null>;
    inputCallback?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    inputKeyUpCallback?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    inputKeyDownCallback?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    inputSelectCallback?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    error?: string[];
}
export declare const TextAreaSendMessage: <T extends object>(props: ITextAreaChatProps<T>) => React.JSX.Element;
export {};
