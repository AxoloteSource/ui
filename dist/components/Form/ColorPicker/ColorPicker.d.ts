interface IColorPickerProps<T> {
    name: keyof T & string;
    label?: string;
    formik: {
        values: T;
        setFieldValue: (field: keyof T & string, value: string) => void;
        errors?: Record<string, string | undefined>;
        submitCount?: number;
        touched?: Record<string, boolean | undefined>;
    };
    className?: string;
}
declare const ColorPicker: <T extends object>({ name, label, formik, className }: IColorPickerProps<T>) => import("react").JSX.Element;
export default ColorPicker;
