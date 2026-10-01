import { FormikProps } from 'formik';
import { DateRange } from 'react-day-picker';
import { IRangeValues } from './IRangeValues';
export declare const useDatepickerWithRange: <T extends object>({ name, formik, allowEmpty, initialValues }: {
    name: Extract<keyof T, string>;
    formik: FormikProps<T>;
    allowEmpty?: boolean;
    initialValues?: IRangeValues;
}) => {
    date: DateRange | undefined;
    handleSelect: (newDate: DateRange | undefined) => void;
};
