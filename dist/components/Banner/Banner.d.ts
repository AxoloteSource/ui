import { default as React } from 'react';
type BannerVariant = 'success' | 'warning';
interface IBannerProps {
    variant?: BannerVariant;
    label?: string;
    children: React.ReactNode;
    className?: string;
}
declare const Banner: ({ variant, label, children, className }: IBannerProps) => React.JSX.Element;
export default Banner;
