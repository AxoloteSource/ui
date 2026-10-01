import { ReactNode } from 'react';
import { IMenuShow } from '../interfaces/models/Menu/IMenuShow';
export interface AxoloteThemeConfig {
    theme: string;
    menu: string;
    layout: string;
    rtlClass: string;
    animation: string;
    navbar: string;
    semidark: boolean | string;
    sidebar: boolean;
}
export interface AxoloteUser {
    name?: string;
    email?: string;
    role?: {
        key?: string;
    } | null;
}
export interface AxoloteFooterLink {
    label: string;
    to: string;
}
export interface AxoloteUIValue {
    themeConfig: AxoloteThemeConfig;
    setThemeConfig: (patch: Partial<AxoloteThemeConfig>) => void;
    toggleSidebar: () => void;
    theme?: string;
    setTheme?: (theme: string) => void;
    user?: AxoloteUser | null;
    logout?: () => void;
    logo?: string;
    logoDark?: string;
    brandName?: string;
    userAvatar?: string;
    menu?: IMenuShow;
    footerLinks?: AxoloteFooterLink[];
}
interface AxoloteUIProviderProps {
    children: ReactNode;
    value: AxoloteUIValue;
}
export declare function AxoloteUIProvider({ children, value }: AxoloteUIProviderProps): import("react").JSX.Element;
export declare function useAxoloteUI(): AxoloteUIValue;
export {};
