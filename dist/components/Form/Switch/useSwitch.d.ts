import { FormikProps } from 'formik';
interface UseSwitchProps<T> {
    formik: FormikProps<T>;
    name: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const useSwitch: <T extends object>({ formik, name, className, size }: UseSwitchProps<T>) => {
    isChecked: boolean;
    fieldError: unknown;
    fieldTouched: unknown;
    hasError: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    switchClassName: string;
    sizeClasses: {
        sm: string;
        md: string;
        lg: string;
    };
    combinedClassName: string | undefined;
};
export default useSwitch;
