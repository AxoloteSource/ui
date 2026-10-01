import { default as React } from 'react';
interface IInputWithIconProps<T> {
    name: Extract<keyof T, string>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    inputClassName?: string;
    value?: string;
    wrapperClassName?: string;
    IconComponent?: React.ComponentType;
    inputCallback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputKeyUpCallback?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export declare const InputWithIcon: <T extends object>(props: IInputWithIconProps<T>) => React.JSX.Element;
export {};
