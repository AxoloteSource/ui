import { FormikProps } from 'formik';
import { default as React } from 'react';
interface WrapInputProps<T extends object> {
    name: Extract<keyof T, string>;
    formik: FormikProps<T>;
    label?: string;
    children: React.ReactNode;
    parentWrapper?: boolean;
    parentClassName?: string;
    className?: string;
}
export declare const WrapInput: <T extends object>(props: WrapInputProps<T>) => React.JSX.Element;
export {};
