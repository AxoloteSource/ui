import { FormikProps } from 'formik';
export declare const useDatepicker: <T extends object>({ name, formik, allowEmpty, initialValue }: {
    name: Extract<keyof T, string>;
    formik: FormikProps<T>;
    allowEmpty?: boolean;
    initialValue?: Date;
}) => {
    date: Date | undefined;
    handleSelect: (newDate: Date | undefined) => void;
};
