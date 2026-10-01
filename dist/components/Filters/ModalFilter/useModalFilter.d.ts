import { IModalFilterProps } from './types';
import { FormikProps } from 'formik';
export declare const useModalFilter: <Values extends Record<string, unknown>>(props: IModalFilterProps<Values>) => {
    t: import('i18next').TFunction<"translation", undefined>;
    isOpen: boolean;
    filters: import('./types').IFilters<Values>[];
    validationSchema: import('yup').ObjectSchema<Record<string, unknown>, import('yup').AnyObject, any, ""> | (() => import('yup').ObjectSchema<Record<string, unknown>>) | undefined;
    title: string;
    children: import('react').ReactNode | ((formik: FormikProps<Values>) => import('react').ReactNode);
    initialValues: Values;
    close: () => void;
    handleSubmit: (values: Values) => void;
    onClear: (formik: FormikProps<Values>) => void;
};
