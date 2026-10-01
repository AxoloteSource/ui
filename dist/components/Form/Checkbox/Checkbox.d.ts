interface ICheckboxProps<T> {
    name: Extract<keyof T, string>;
    formik: import('formik').FormikProps<T>;
    label?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const Checkbox: <T extends object>(props: ICheckboxProps<T>) => import("react").JSX.Element;
export default Checkbox;
