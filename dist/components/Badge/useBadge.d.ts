import { BadgeShape, BadgeType, BadgeVariant } from './IBadgeProps';
interface UseBadgeParams {
    variant?: BadgeVariant;
    type?: BadgeType;
    shape?: BadgeShape;
    className?: string;
}
export declare const useBadge: ({ variant, type, shape, className }: UseBadgeParams) => {
    getBadgeClasses: () => string;
};
export {};
