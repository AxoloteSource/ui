import { default as React } from 'react';
import { CheckboxProps } from './Checkbox';
export interface CheckboxOption {
    id: string | number;
    label: string;
    value: string;
}
export interface CheckboxGroupProps {
    /**
     * Opciones para los checkboxes
     */
    options?: CheckboxOption[];
    /**
     * Valores iniciales seleccionados
     */
    initialValues?: string[];
    /**
     * Valores seleccionados controlados
     */
    value?: string[];
    /**
     * Función llamada cuando cambia el valor
     */
    onChange?: (values: string[]) => void;
    /**
     * Variante de los checkboxes
     * @default 'default'
     */
    variant?: CheckboxProps['variant'];
    /**
     * Color de los checkboxes
     * @default 'primary'
     */
    color?: CheckboxProps['color'];
    /**
     * Clase adicional para el contenedor
     */
    className?: string;
    /**
     * Dirección de los checkboxes
     * @default 'vertical'
     */
    direction?: 'vertical' | 'horizontal';
}
declare const CheckboxGroup: React.FC<CheckboxGroupProps>;
export default CheckboxGroup;
