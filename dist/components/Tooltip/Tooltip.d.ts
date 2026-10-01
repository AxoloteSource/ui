import { Placement } from '@floating-ui/react';
import { ReactNode } from 'react';
interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    placement?: Placement;
    offset?: number;
    className?: string;
}
export declare const Tooltip: ({ children, content, placement, offset, className }: TooltipProps) => import("react").JSX.Element;
export {};
