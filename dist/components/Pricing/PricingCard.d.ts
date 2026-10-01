export interface PricingFeature {
    text: string;
}
export interface PricingCardProps {
    variant?: 'basic' | 'toggle' | 'animated';
    title: string;
    description: string;
    price: number;
    period: string;
    features: string[];
    popular?: boolean;
    popularLabel?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    className?: string;
}
export declare const PricingCard: ({ variant, ...props }: PricingCardProps) => import("react").JSX.Element;
export default PricingCard;
