import { FormikProps } from 'formik';
import { default as React } from 'react';
import { IRangeValues } from './IRangeValues';
export interface IDatePickerWithRangeProps<T extends object> extends React.HTMLAttributes<HTMLDivElement> {
    name: Extract<keyof T, string>;
    formik: FormikProps<T>;
    label?: string;
    allowEmpty?: boolean;
    initialValues?: IRangeValues;
}
