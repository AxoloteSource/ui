import { LucideProps } from 'lucide-react';
import { ComponentType } from 'react';
interface IconProps extends Omit<LucideProps, 'ref'> {
    iconNode: ComponentType<LucideProps>;
}
export declare function Icon({ iconNode: IconComponent, className, ...props }: IconProps): import("react").JSX.Element;
export {};
