import { default as React } from 'react';
export type CheckboxVariant = 'default' | 'rounded' | 'outline' | 'outlineRounded';
export type CheckboxColor = 'primary' | 'success' | 'secondary' | 'danger' | 'warning' | 'info' | 'dark';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /**
     * Etiqueta que se mostrará junto al checkbox
     */
    children?: React.ReactNode | string;
    /**
     * Color del checkbox
     * @default 'primary'
     */
    color?: CheckboxColor;
    /**
     * Variante de estilo del checkbox
     * @default 'default'
     */
    variant?: CheckboxVariant;
    /**
     * Clase adicional para el contenedor
     */
    className?: string;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
