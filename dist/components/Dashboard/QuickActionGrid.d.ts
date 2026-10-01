import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
export interface QuickAction {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
}
interface QuickActionGridProps {
    actions: QuickAction[];
    renderModals?: ReactNode;
}
declare const QuickActionGrid: ({ actions, renderModals }: QuickActionGridProps) => import("react").JSX.Element;
export default QuickActionGrid;
