import { FormikProps } from 'formik';
import { MultiValue, SingleValue } from 'react-select';
import { IOptions } from './interfaces/IOptions';
export declare const useInputSelect: <T extends object>({ name, formik, options, isMulti, onChange }: {
    name: Extract<keyof T, string>;
    formik: FormikProps<T>;
    options: IOptions[];
    isMulti?: boolean;
    onChange?: (newValue: SingleValue<IOptions> | MultiValue<IOptions>) => void;
}) => {
    selectedValue: IOptions | IOptions[] | null;
    handleOnChange: (newValue: SingleValue<IOptions> | MultiValue<IOptions>) => Promise<void>;
};
