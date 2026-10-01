import { FormikProps } from 'formik';
import { default as React } from 'react';
interface WrapInputProps<T> {
    name: Extract<keyof T, string>;
    formik: FormikProps<Record<string, unknown>>;
    label?: string;
    children: React.ReactNode;
    parentWrapper?: boolean;
    parentClassName?: string;
    className?: string;
}
export declare const WrapInput: <T extends object>(props: WrapInputProps<T>) => React.JSX.Element;
export {};
