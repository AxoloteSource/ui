import { ReactNode } from 'react';
interface DropdownOldProps {
    placement?: string;
    offset?: number[];
    btnClassName?: string;
    button: ReactNode;
    children: ReactNode;
}
declare const _default: import('react').ForwardRefExoticComponent<DropdownOldProps & import('react').RefAttributes<{
    close: () => void;
}>>;
export default _default;
