import { ReactNode } from 'react';
export type Theme = 'dark' | 'light' | 'system';
interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}
interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare function ThemeProvider({ children, defaultTheme, storageKey }: ThemeProviderProps): import("react").JSX.Element;
export declare function useTheme(): ThemeProviderState;
export {};
