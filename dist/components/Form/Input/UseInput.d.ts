import { FormikProps } from 'formik';
interface UseInputProps<T> {
    formik: FormikProps<T>;
    name: Extract<keyof T, string>;
    className?: string;
}
declare const useInput: <T extends object>({ formik, name, className }: UseInputProps<T>) => {
    showPassword: boolean;
    togglePasswordVisibility: () => void;
    combinedClassName: string;
};
export default useInput;
