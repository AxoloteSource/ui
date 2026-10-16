import { ReactNode } from 'react';
interface AlertProps {
    type?: 'info' | 'success' | 'warning' | 'error';
    title?: string;
    children: ReactNode;
    className?: string;
}
declare const Alert: ({ type, title, children, className }: AlertProps) => import("react").JSX.Element;
export default Alert;
