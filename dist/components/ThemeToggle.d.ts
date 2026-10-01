interface ThemeToggleProps {
    className?: string;
    size?: number;
    variant?: 'default' | 'outline' | 'ghost';
    showLabel?: boolean;
    onThemeChange?: (theme: string) => void;
}
declare const ThemeToggle: ({ className, size, variant, showLabel, onThemeChange }: ThemeToggleProps) => import("react").JSX.Element;
export default ThemeToggle;
