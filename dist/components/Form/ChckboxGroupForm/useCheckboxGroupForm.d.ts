import { FormikProps } from 'formik';
export declare const useCheckboxGroupForm: <T>({ formik, name }: {
    formik: FormikProps<T>;
    name: Extract<keyof T, string>;
}) => {
    fieldValue: string[];
    showError: boolean;
    handleChange: (values: string[]) => Promise<void>;
};
