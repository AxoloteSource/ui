import { default as React } from 'react';
interface ITextAreaChatProps<T> {
    name: Extract<keyof T, string>;
    placeholder?: string;
    disabled?: boolean;
    inputClassName?: string;
    value?: string;
    wrapperClassName?: string;
    IconComponent?: React.ComponentType;
    inputCallback?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    inputKeyUpCallback?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    error?: string[];
}
export declare const TextAreaSendMessage: <T extends object>(props: ITextAreaChatProps<T>) => React.JSX.Element;
export {};
