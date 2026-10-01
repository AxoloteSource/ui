export interface PricingToggleProps {
    value: boolean;
    onChange: (value: boolean) => void;
    monthlyLabel?: string;
    yearlyLabel?: string;
    yearlyBadge?: string;
    className?: string;
}
export declare const PricingToggle: ({ value, onChange, monthlyLabel, yearlyLabel, yearlyBadge, className }: PricingToggleProps) => import("react").JSX.Element;
export default PricingToggle;
